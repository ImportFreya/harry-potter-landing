import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

const httpLink = new HttpLink({
  uri: typeof window !== "undefined"
    ? `${window.location.origin}/api/graphql`
    : process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:3000/api/graphql",
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
