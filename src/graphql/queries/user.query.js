import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      _id
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

export const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      firstName
      lastName
      address
      phone
      registerNumber
      sisiId
      age
      gender
      role
    }
  }
`;
