import {
    QueryPasswordByEmailQuery,
    QueryUserByEmailQuery,
    RegisterUserWithPasswordMutation,
    RegisterUserWithPasswordMutationVariables
} from '../../../src/generated/graphql';
import { QUERY_PASSWORD_BY_EMAIL, QUERY_USER_BY_EMAIL, REGISTER_USER_WITH_PASSWORD } from '../../../src/graphql/operations';
import { publicClient, userClient, adminClient } from '../../../src/graphql/client';

export class User {
    private _email: string;
    private _password: string | null;
    private _firstName: string;
    private _lastName: string;

    constructor(email: string, password: string | null, firstName: string, lastName: string) {
        this.email = email;
        if (password === null) {
            this._password = null;
        } else {
            this.password = password;
        }
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
        if (!this._password || this._password.length === 0) {
            throw new Error("Missing required fields: Password is required for new user registration");
        }

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
        const result: QueryPasswordByEmailQuery = await adminClient.request(QUERY_PASSWORD_BY_EMAIL, { email });

        if (result.password.length > 0) {
            return result;
        }

        throw new Error("User not found.");
    }

    static async getByEmail(email: string): Promise<User> {
        const result: QueryUserByEmailQuery = await adminClient.request(QUERY_USER_BY_EMAIL, { email });

        if (result.user.length > 0) {
            const user = result.user[0];
            return new User(user.email, null, user.first_name, user.last_name);
        } else {
            throw new Error("User not found.");
        }
    }

    static async getByEmailAuthenticated(email: string, jwtToken: string): Promise<User> {
        const result: QueryUserByEmailQuery = await userClient(jwtToken).request(QUERY_USER_BY_EMAIL, { email });

        if (result.user.length > 0) {
            const user = result.user[0];
            return new User(user.email, null, user.first_name, user.last_name);
        } else {
            throw new Error("User not found.");
        }
    }
}