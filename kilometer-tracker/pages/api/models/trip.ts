import { InsertTripMutation, InsertTripMutationVariables, LastFilledTankTripQuery, LastFilledTankTripQueryVariables, LastTripByGroupQuery, LastTripByGroupQueryVariables, TripsFromMileageQuery, TripsFromMileageQueryVariables } from "../../../src/generated/graphql";
import { userClient } from "../../../src/graphql/client";
import { INSERT_TRIP, LAST_FILLED_TANK_TRIP, LAST_TRIP_BY_GROUP, TRIPS_FROM_MILEAGE } from "../../../src/graphql/operations";
import { Group } from "./group";

export class Trip {
    private _currentMileage: number;
    private _filledTank: boolean;
    private _email: string;
    private _group: string;
    private _cost?: number | null;

    constructor(currentMileage: number, email: string, group: string, filledTank: boolean = false, cost: number | null = null) {
        this.currentMileage = currentMileage;
        this.email = email;
        this.group = group;
        this.filledTank = filledTank;
        this.cost = cost;
    }

    get currentMileage(): number {
        return this._currentMileage;
    }

    set currentMileage(value: number) {
        if (!value || value < 1) {
            throw new Error("Incorrect currentMileage input");
        }
        this._currentMileage = value;
    }

    get filledTank(): boolean {
        return this._filledTank;
    }

    set filledTank(value: boolean) {
        if (typeof value !== "boolean") {
            throw new Error("Incorrect filledTank input");
        }
        this._filledTank = value;
    }

    get email(): string {
        return this._email
    }

    set email(value: string) {
        if (!value || typeof value !== "string") {
            throw new Error("Incorrect email input");
        }
        this._email = value;
    }

    get group(): string {
        return this._group
    }

    set group(value: string) {
        if (!value || typeof value !== "string") {
            throw new Error("Incorrect group input");
        }
        this._group = value;
    }


    get cost(): number | null {
        return this._cost;
    }

    set cost(value: number | null) {
        if (value !== null && typeof value === "string") {
            this._cost = parseFloat(value);
            return;
        }

        if (value !== null && typeof value === "number") {
            this._cost = value;
            return;
        }

        if (value === null) {
            this._cost = value;
            return;
        }

        throw new Error("Invalid cost");
    }


    async save(token: string): Promise<InsertTripMutation> {
        const group: Group = await Group.getById(this.group);
        const users: string[] = await group.getUsers();

        if (!this.filledTank && typeof this.cost === "number") {
            throw new Error("Cost can not exist without a tank refill.");
        }

        if (this.filledTank && typeof this.cost !== "number") {
            throw new Error("Tank refill can not exist without costs.");
        }

        if (this.cost < 0) {
            throw new Error("Cost can not be less than 0.");
        }

        if (!users.includes(this.email)) {
            throw new Error("User not in group.");
        }

        const lastTrip: Trip | void = await Trip.getLastTrip(this.group, token);

        if (lastTrip && lastTrip.currentMileage > this.currentMileage) {
            throw new Error("Mileage below previous mileage.");
        }

        const variables: InsertTripMutationVariables = {
            currentMileage: this.currentMileage,
            filledTank: this.filledTank,
            email: this.email,
            group: this.group,
            cost: this.cost
        };
        return await userClient(token).request<InsertTripMutation, InsertTripMutationVariables>(INSERT_TRIP, variables);
    }

    static async getLastFilledTankTrip(groupId: string, token: string): Promise<void | Trip> {
        const result: LastFilledTankTripQuery = await userClient(token).request<LastFilledTankTripQuery, LastFilledTankTripQueryVariables>(
            LAST_FILLED_TANK_TRIP, { group: groupId }
        );
        const trip = result.trips[0];
        if (!trip) {
            return;
        }
        return new Trip(trip.current_mileage, trip.email, trip.group, trip.filled_tank, trip.cost);
    }

    static async getLastTrip(groupId: string, token: string): Promise<void | Trip> {
        const result: LastTripByGroupQuery = await userClient(token).request<LastTripByGroupQuery, LastTripByGroupQueryVariables>(
            LAST_TRIP_BY_GROUP, { group: groupId }
        );
        const trip = result.trips[0];
        if (!trip) {
            return;
        }
        return new Trip(trip.current_mileage, trip.email, trip.group, trip.filled_tank, trip.cost);
    }

    static async getByGroupId(groupId: string, token: string): Promise<Trip[]> {
        const lastFilledTank: Trip | { currentMileage: number} = await this.getLastFilledTankTrip(groupId, token) || { currentMileage: -1 };
        const result = await userClient(token).request<TripsFromMileageQuery, TripsFromMileageQueryVariables>(
            TRIPS_FROM_MILEAGE, { group: groupId, mileage: lastFilledTank.currentMileage }
        )
        return result.trips.map(trip => new Trip(trip.current_mileage, trip.email, trip.group, trip.filled_tank, trip.cost));
    }

}