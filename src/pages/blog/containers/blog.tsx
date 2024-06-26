import React, { useState } from "react";
import BlogList from "../components/blogList";
import { Button } from "antd";
import CreateBlogModal from "../components/createBlogModal";

const Blog: React.FC = () => {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  return (
    <div className="flex flex-col">
      <div>
        <Button type="primary" onClick={() => setIsCreateModalVisible(true)}>
          Нийтлэл нэмэх
        </Button>
      </div>

      <BlogList />
      <CreateBlogModal
        visible={isCreateModalVisible}
        onCancel={() => setIsCreateModalVisible(false)}
        type="Create"
      />
    </div>
  );
};

export default Blog;
