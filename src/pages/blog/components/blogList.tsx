import React from "react";
import { IBlog } from "../../../interfaces/blogType";
import BlogItem from "./blogItem";
import { BlogDummyData } from "../../../dummyData/blogDummy";

const BlogList: React.FC = () => {
  const dataList = BlogDummyData;
  return (
    <div className="w-full items-center flex flex-col h-full gap-y-16 my-8">
      {dataList.map((item: IBlog) => {
        return <BlogItem key={item._id} data={item} />;
      })}
    </div>
  );
};

export default BlogList;
