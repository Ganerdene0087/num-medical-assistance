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
