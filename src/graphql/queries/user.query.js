import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      username
      firstName
      lastName
      phone
      registerNumber
      sisiId
      age
      gender
      role
    }
  }
`;
