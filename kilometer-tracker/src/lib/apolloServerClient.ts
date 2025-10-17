import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Server-side only Apollo client with admin secret
// DO NOT import this in client-side code
const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL_DEV
      : process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
  headers: {
    "x-hasura-admin-secret":
      process.env.NODE_ENV === "development"
        ? process.env.HASURA_GRAPHQL_ADMIN_SECRET_DEV || ""
        : process.env.HASURA_GRAPHQL_ADMIN_SECRET || "",
  },
});

export const apolloServerClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  ssrMode: true,
});
