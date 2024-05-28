import { gql } from "@apollo/client";

export const CREATE_BLOG = gql`
  mutation CreateBlog($input: CreateBlogInput) {
    createBlog(input: $input) {
      authorId
      title
      content
      thumb
    }
  }
`;

export const UPDATE_BLOG = gql`
  mutation UpdateBlog($input: UpdateBlogInput) {
    updateBlog(input: $input) {
      authorId
      title
      content
      thumb
    }
  }
`;
