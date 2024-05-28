import { gql } from "@apollo/client";

export const CREATE_TREATMENT = gql`
  mutation CreateTreatment($input: CreateTreatmentInput) {
    createTreatment(input: $input) {
      inspectionId
      type
      frequency
    }
  }
`;

export const UPDATE_TREATMENT = gql`
  mutation UpdateTreatment($input: UpdateTreatmentInput) {
    updateTreatment(input: $input) {
      _id
      inspectionId
      clientId
      type
      frequency
      isDone
    }
  }
`;
