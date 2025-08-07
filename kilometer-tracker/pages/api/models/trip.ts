import { InsertTripMutation, InsertTripMutationVariables, TripsByGroupQuery, TripsByGroupQueryVariables } from "../../../src/generated/graphql";
import { userClient } from "../../../src/graphql/client";
import { INSERT_TRIP, TRIPS_BY_GROUP } from "../../../src/graphql/operations";

export class Trip {
    private _currentMileage: number;
    private _filledTank: boolean;
    private _email: string;
    private _group: string;

    constructor(currentMileage: number, email: string, group: string, filledTank: boolean = false) {
        this.currentMileage = currentMileage;
        this.email = email;
        this.group = group;
        this.filledTank = filledTank;
    }
    
    get currentMileage(): number {
        return this._currentMileage;
    }
    
    set currentMileage(value: number) {
        this._currentMileage = value;
    }

    get filledTank(): boolean {
        return this._filledTank;
    }
    
    set filledTank(value: boolean) {
        this._filledTank = value;
    }
    
    get email(): string {
        return this._email
    }
    
    set email(value: string) {
        this._email = value;
    }
    
    get group(): string {
        return this._group
    }
    
    set group(value: string) {
        this._group = value;
    }
    
    async save(token: string): Promise<InsertTripMutation> {
        const variables: InsertTripMutationVariables = {
            currentMileage: this.currentMileage,
            filledTank: this.filledTank,
            email: this.email,
            group: this.group
        };
        return await userClient(token).request<InsertTripMutation, InsertTripMutationVariables>(INSERT_TRIP, variables);
    }

    static async getByGroupId(groupId: string, token: string): Promise<Trip[]> {
        const variables: TripsByGroupQueryVariables = {
            group: groupId
        };
        const result: TripsByGroupQuery = await userClient(token).request<TripsByGroupQuery, TripsByGroupQueryVariables>(TRIPS_BY_GROUP, variables);
        return result.trips.map(trip => new Trip(trip.current_mileage, trip.email, trip.group, trip.filled_tank));
    }

}