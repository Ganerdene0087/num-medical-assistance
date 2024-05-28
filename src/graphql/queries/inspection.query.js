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
    inspection(inspectionId: $inspectionId) {
      _id
      clientId
      date
      diagnosis
      prescription
    }
  }
`;

export const GET_UPCOMING_INSPECTIONS = gql`
  query GetUpcomingInspections($date: String!) {
    upcomingInspections(date: $date) {
      _id
      clientId
      date
      diagnosis
      prescription
    }
  }
`;

export const GET_PAST_INSPECTIONS = gql`
  query GetUpcomingInspections($date: String!) {
    pastInspections(date: $date) {
      _id
      clientId
      date
      diagnosis
      prescription
    }
  }
`;
