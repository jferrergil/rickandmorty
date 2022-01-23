import { gql } from '@apollo/client';

export const GetSearchCharacters = gql`
  query Query($charactersFilter: FilterCharacter, $page: Int) {
    characters(filter: $charactersFilter, page: $page) {
      results {
        id
        name
        image
        status
        species
        __typename
        gender
        species
        status
        origin {
          created
          dimension
          id
          name
          __typename
          type
        }
        episode {
          air_date
          created
          episode
          id
          name
          __typename
        }
        location {
          name
          __typename
          created
          dimension
          id
          type
        }
      }
    }
  }
`;
