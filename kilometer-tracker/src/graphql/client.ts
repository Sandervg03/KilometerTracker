export class GraphQLClient {
    private endpoint: string;
    private defaultHeaders: Record<string, string>;

    constructor(endpoint: string, defaultHeaders: Record<string, string> = {}) {
        this.endpoint = endpoint;
        this.defaultHeaders = defaultHeaders;
    }

    async request<TData, TVariables = Record<string, any>>(
        query: string,
        variables?: TVariables
    ): Promise<TData> {
        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.defaultHeaders,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        if (result.errors) {
            console.log(result.errors)
            const errorMessage = result.errors.map(e => e.message).join(', ');
            throw new Error(`GraphQL Error: ${errorMessage}`);
        }

        return result.data;
    }
}

export const adminClient = new GraphQLClient(
    process.env.HASURA_ENDPOINT,
    {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    }
);

export const publicClient = new GraphQLClient(
    process.env.HASURA_ENDPOINT,
    {
        'x-hasura-role': 'public'
    }
);

export const userClient = (token: string) => {
    return new GraphQLClient(
        process.env.HASURA_ENDPOINT,
        {
            'x-hasura-role': 'user',
            'Authorization': `Bearer ${token}`
        }
    );
};
