import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      id
      name
      dateOfBirth
      house
      patronus
      actor
      alive
      image
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      dateOfBirth
      house
      patronus
      actor
      alive
      image
    }
  }
`;


export const GET_HOUSES = gql`
  query GetHouses {
    houses {
      name
      memberCount
      members {
        id
        name
        image
        alive
      }
    }
  }
`

export const GET_HOUSE = gql`
  query GetHouse($name: String!) {
    house(name: $name) {
      name
      memberCount
      members {
        id
        name
        image
        alive
      }
    }
  }
`
