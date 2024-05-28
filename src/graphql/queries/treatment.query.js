import { gql } from "@apollo/client";

export const GET_TREATMENTS = gql`
  query treatments {
    treatments {
      _id
      cliendId
      inspectionId
      type
      frequency
    }
  }
`;
