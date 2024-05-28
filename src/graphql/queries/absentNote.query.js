import { gql } from "@apollo/client";

export const GET_ABSENTNOTE = gql`
  query GetAbsentnote {
    absentNote {
      _id
      clientId
      inspectionId
      start_date
      end_date
      reason
    }
  }
`;

export const GET_ABSENTNOTE_BY_INSPECTION = gql`
  query GetAbsentnoteByInspection($inspectionId: ID!) {
    absentNoteByInspection(inspectionId: $inspectionId) {
      _id
      clientId
      inspectionId
      start_date
      end_date
      reason
    }
  }
`;

export const GET_ABSENTNOTE_BY_CLIENT = gql`
  query GetAbsentnoteByClient($clientId: ID!) {
    absentNoteByClient(clientId: $clientId) {
      _id
      clientId
      inspectionId
      start_date
      end_date
      reason
    }
  }
`;
