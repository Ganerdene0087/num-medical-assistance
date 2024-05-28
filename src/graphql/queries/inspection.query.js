import { gql } from "@apollo/client";

export const GET_INSPECTIONS = gql`
  query inspections {
    inspections {
      _id
      clientId
      date
      diagnosis
      prescription
    }
  }
`;

export const GET_INSPECTION_BY_ID = gql`
  query GetInspectionById($inspectionId: ID!) {
    inspection(userId: $userId) {
      _id
      clientId
      date
      diagnosis
      prescription
    }
  }
`;
