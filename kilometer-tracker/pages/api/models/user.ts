import {
    QueryPasswordByEmailQuery,
    RegisterUserWithPasswordMutation,
    RegisterUserWithPasswordMutationVariables
} from '../../../src/generated/graphql';
import { QUERY_PASSWORD_BY_EMAIL, REGISTER_USER_WITH_PASSWORD } from '../../../src/graphql/operations';
import { publicClient, createAuthenticatedClient } from '../../../src/graphql/client';

export class User {
    private _email: string;
    private _password: string;
    private _firstName: string;
    private _lastName: string;

    constructor(email: string, password: string, firstName: string, lastName: string) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (typeof value !== 'string') {
            throw new Error("Email must be a string");
        }
        if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new Error("Invalid email format");
        }
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (typeof value !== 'string') {
            throw new Error("Password must be a string");
        }
        if (value.length < 6) {
            throw new Error("Password must be at least 6 characters long");
        }
        this._password = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (typeof value !== 'string') {
            throw new Error("First name must be a string");
        }
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        if (typeof value !== 'string') {
            throw new Error("Last name must be a string");
        }
        this._lastName = value;
    }

    async save(): Promise<RegisterUserWithPasswordMutation> {
        const variables: RegisterUserWithPasswordMutationVariables = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            createdAt: new Date().toISOString().split('T')[0],
            password: this.password,
        };

        return await publicClient.request<RegisterUserWithPasswordMutation, RegisterUserWithPasswordMutationVariables>(
            REGISTER_USER_WITH_PASSWORD,
            variables
        );
    }

    static async getPasswordByEmail(email: string): Promise<QueryPasswordByEmailQuery> {
        const result: QueryPasswordByEmailQuery = await publicClient.request(QUERY_PASSWORD_BY_EMAIL, { email });

        if (result.password.length > 0) {
            return result;
        }

        throw new Error("User not found.");
    }
}