import { gql } from "@apollo/client";

export const GET_TREATMENTS = gql`
  query treatments {
    treatments {
      _id
      clientId
      inspectionId
      type
      frequency
      isDone
    }
  }
`;

export const GET_TREATMENT_BY_ID = gql`
  query GetTreatmentById($treatmentId: ID!) {
    treatment(treatmentId: $treatmentId) {
      _id
      clientId
      inspectionId
      type
      frequency
      isDone
    }
  }
`;

export const GET_TREATMENTS_BY_INSPECTION = gql`
  query GetTreatmentsByInspection($inspectionId: ID!) {
    treatmentsByInspection(inspectionId: $inspectionId) {
      _id
      clientId
      inspectionId
      type
      frequency
      isDone
    }
  }
`;

export const GET_TREATMENTS_COMPLETED = gql`
  query GetTreatmentsCompleted {
    treatmentsByIsDone(isDone: true) {
      _id
      clientId
      inspectionId
      type
      frequency
      isDone
    }
  }
`;

export const GET_TREATMENTS_NOT_COMPLETED = gql`
  query GetTreatmenstNotCompleted {
    treatmentsByIsDone(isDone: false) {
      _id
      clientId
      inspectionId
      type
      frequency
      isDone
    }
  }
`;
