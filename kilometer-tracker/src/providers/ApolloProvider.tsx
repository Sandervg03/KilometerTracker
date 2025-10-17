'use client';

import { ApolloProvider as ApolloClientProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ReactNode, useMemo } from 'react';

export function ApolloProvider({ children }: { children: ReactNode }) {
  const client = useMemo(() => {
    const httpLink = new HttpLink({
      uri: process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL_DEV
        : process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
      credentials: "include",
    });

    const authLink = setContext((_, { headers }) => {
      // Get the authentication token from localStorage
      const token = typeof window !== 'undefined' ? localStorage.getItem('auth-token') : null;

      return {
        headers: {
          ...headers,
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        }
      };
    });

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network",
        },
      },
    });
  }, []);

  return (
    <ApolloClientProvider client={client}>
      {children}
    </ApolloClientProvider>
  );
}
