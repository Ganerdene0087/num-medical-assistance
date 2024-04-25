import React from "react";
import { Divider } from "antd";
import BlogList from "../components/list/blogList";

const HomeBlog: React.FC = () => {
  return (
    <>
      <Divider>
        <p className="text-[24px]">Нийтлэл, зөвлөгөө</p>
      </Divider>
      <BlogList />
    </>
  );
};

export default HomeBlog;
