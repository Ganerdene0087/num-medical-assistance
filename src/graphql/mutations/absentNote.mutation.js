import { gql } from "@apollo/client";

export const CREATE_ABSENTNOTE = gql`
  mutation CreateAbsentnote($input: CreateAbsentNoteInput) {
    createAbsentNote(input: $input) {
      clientId
      inspectionId
      start_date
      end_date
      reason
    }
  }
`;
