import { gql } from "@apollo/client";

export const CREATE_INSPECTION = gql`
  mutation CreateInspection($input: CreateInspectionInput) {
    createInspection(input: $input) {
      _id
      date
      clientId
    }
  }
`;

export const UPDATE_INSPECTION = gql`
  mutation UpdateInspection($input: UpdateInspectionInput) {
    updateInspection(input: $input) {
      _id
      clientId
      date
      diagnosis
      prescription
    }
  }
`;
