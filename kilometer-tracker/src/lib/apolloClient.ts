import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Use the Next.js API route as a proxy
// This keeps the admin secret secure on the server
const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL_DEV
      : process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
  credentials: "same-origin",
});

// Create a client factory function for SSR compatibility
function createApolloClient() {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
}

// Export singleton for server-side usage
export const apolloClient = createApolloClient();
