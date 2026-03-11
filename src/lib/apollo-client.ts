import {ApolloClient, InMemoryCache, HttpLink} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEX_PUBLIC_GRAPHQL_URL ?? "http://localhost:3000/api/graphql",
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  // commit
});

