export const typeDefs = `#graphql
  type Character {
    id: ID!
    name: String!
    dateOfBirth: String
    house: String
    patronus: String
    actor: String
    alive: Boolean
    image: String
  }

  type Query {
    characters: [Character!]!
    character(id: ID!): Character
  }
`;