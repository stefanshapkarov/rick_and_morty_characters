'use client';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError, protocolErrors }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (protocolErrors) {
    protocolErrors.forEach(({ message, extensions }) => {
      console.log(
        `[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(extensions)}`
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default function ApolloWrapper({ children }) {
  return (
    <ApolloProvider client={ client }>
      { children }
    </ApolloProvider>
  );
}