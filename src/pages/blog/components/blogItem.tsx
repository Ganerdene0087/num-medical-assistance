import React, { useState } from "react";
import { Card, Typography, Image, Button } from "antd";
import { IBlog } from "../../../interfaces/blogType";
import { CalendarOutlined, EditOutlined } from "@ant-design/icons";
import CreateBlogModal from "./createBlogModal";

const { Title, Paragraph } = Typography;

interface BlogItemProps {
  data: IBlog;
}

const BlogItem: React.FC<BlogItemProps> = ({ data }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const handleEdit = () => {
    setIsEditModalVisible(true);
  };
  return (
    <Card hoverable style={{ margin: "auto" }} className="shadow-md w-full">
      <Button
        type="text"
        icon={<EditOutlined />}
        size="small"
        style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
        onClick={handleEdit}
      />
      <div className="flex">
        <div className="flex flex-1">
          <Image
            alt={data.thumb}
            src={data.thumb}
            style={{ width: 150, height: 150, objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col justify-between ml-4 w-[80%]">
          <div>
            <Title level={5}>{data.title}</Title>
            <p>
              Нийтэлсэн: <span className="text-blue-700">{data.author}</span>
            </p>
          </div>
          <Paragraph
            ellipsis={{ rows: 2, expandable: true }}
            style={{ fontSize: "12px", marginBottom: "16px" }}
          >
            {data.content}
          </Paragraph>

          <div
            style={{
              fontSize: "14px",
              height: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarOutlined />
            <span style={{ paddingLeft: "3px" }}>{data.date}</span>
          </div>
        </div>
      </div>
      <CreateBlogModal
        visible={isEditModalVisible}
        type="Edit"
        onCancel={() => setIsEditModalVisible(false)}
        data={data}
      />
    </Card>
  );
};

export default BlogItem;
