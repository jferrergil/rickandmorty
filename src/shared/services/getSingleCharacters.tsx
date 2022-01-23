import { gql } from '@apollo/client';

export const GetCharacterById = gql`
  query Query($id: ID!) {
    character(id: $id) {
      name
      created
      episode {
        air_date
        created
        episode
        id
        name
      }
      gender
      id
      image
      location {
        created
        dimension
        id
        name
        type
      }
      origin {
        created
        dimension
        id
        name
        type
      }
      species
      status
      type
    }
  }
`;
