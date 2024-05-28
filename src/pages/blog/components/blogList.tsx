import React from "react";
import { IBlog } from "../../../interfaces/blogType";
import BlogItem from "./blogItem";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../../../graphql/queries/blog.query";
import { message, Spin } from "antd";

const BlogList: React.FC = () => {
  const { loading, data, error } = useQuery(GET_BLOG, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    message.error(`${error}`);
  }

  return (
    <div className="w-full items-center flex flex-col h-full gap-y-16 my-8">
      {data?.blogs?.length > 0 ? (
        data.blogs?.map((item: IBlog) => (
          <BlogItem key={item._id} data={item} />
        ))
      ) : (
        <>Нийтлэл байхгүй.</>
      )}
    </div>
  );
};

export default BlogList;
