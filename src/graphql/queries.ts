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
