import { gql } from "@apollo/client";

export const GET_BLOG = gql`
  query Blogs {
    blogs {
      _id
      authorId
      title
      content
      thumb
      createdAt
    }
  }
`;
