import { Group_Mutation_Response, Group_Users_Mutation_Response, GroupByIdQuery, GroupByIdQueryVariables, GroupsByUserEmailQuery, GroupUsersByGroupIdQuery, GroupUsersByGroupIdQueryVariables, InsertGroupMutationVariables, InsertGroupUserMutationVariables, RenameGroupMutation, RenameGroupMutationVariables } from "../../../src/generated/graphql";
import { adminClient, userClient } from "../../../src/graphql/client";
import { GROUP_BY_ID, GROUP_USERS_BY_GROUP_ID, GROUPS_BY_USER_EMAIL, INSERT_GROUP, INSERT_GROUP_USER, RENAME_GROUP } from "../../../src/graphql/operations";
import { User } from "./user";

export class Group {
    private _id: string;
    private _owner: string;
    private _name: string;

    constructor(owner: string, id: string = crypto.randomUUID(), name: string = "Unnamed Group") {
        this.id = id;
        this.owner = owner;
        this.name = name;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        if (typeof value !== 'string') {
            throw new Error("ID must be a string");
        }
        this._id = value;
    }

    get owner(): string {
        return this._owner;
    }

    set owner(value: string) {
        if (typeof value !== 'string') {
            throw new Error("Owner must be a string");
        }
        this._owner = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (typeof value !== 'string') {
            throw new Error("Name must be a string");
        }
        this._name = value;
    }

    async save(): Promise<Group_Mutation_Response> {
        const variables: InsertGroupMutationVariables = {
            id: this.id,
            owner: this.owner
        }
        return await adminClient.request<Group_Mutation_Response, InsertGroupMutationVariables>(INSERT_GROUP, variables);
    }

    async rename(name: string, token: string): Promise<Group_Mutation_Response> {
        const variables: RenameGroupMutationVariables = {
            id: this.id,
            name: name
        }
        return await userClient(token).request<Group_Mutation_Response, RenameGroupMutationVariables>(RENAME_GROUP, variables);
    }

    async addUser(userEmail: string): Promise<Group_Users_Mutation_Response> {
        const variables = {
            groupId: this.id,
            userEmail: userEmail
        };
        return await adminClient.request<Group_Users_Mutation_Response, InsertGroupUserMutationVariables>(INSERT_GROUP_USER, variables);
    }

    async getUsers() {
        const result: GroupUsersByGroupIdQuery = await adminClient.request<GroupUsersByGroupIdQuery, GroupUsersByGroupIdQueryVariables>(GROUP_USERS_BY_GROUP_ID, { groupId: this.id });
        if (result.group_users.length > 0) {
            return await Promise.all(result.group_users.map(async user => await User.getByEmail(user.email)));
        } else {
            throw new Error("No user found.");
        }
    }

    static async getById(id: string): Promise<Group> {
        const result: GroupByIdQuery = await adminClient.request<GroupByIdQuery, GroupByIdQueryVariables>(GROUP_BY_ID, { id });
        if (result.group.length > 0) {
            const group = result.group[0];
            return new Group(group.owner, group.id, group.name);
        } else {
            throw new Error("No group found.");
        }
    }

    static async getAllByUserToken(token: string, email: string): Promise<Group[]> {
        const result: GroupsByUserEmailQuery = await userClient(token).request<GroupsByUserEmailQuery>(GROUPS_BY_USER_EMAIL, { email });
        if (result.group_users.length > 0) {
            const groupIds: string[] = result.group_users.map(groupUser => groupUser.group);
            return await Promise.all(groupIds.map(async id => await Group.getById(id)));
        }
        throw new Error("No group found.");
    }

    static async getAllByEmail(email: string): Promise<string[]> {
        const result: GroupsByUserEmailQuery = await adminClient.request<GroupsByUserEmailQuery>(GROUPS_BY_USER_EMAIL, { email });
        if (result.group_users.length > 0) {
            return result.group_users.map(groupUser => groupUser.group);
        }
        throw new Error("No group found.");
    }
}