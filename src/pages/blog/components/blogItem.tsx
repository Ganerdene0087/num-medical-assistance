import React, { useState } from "react";
import { Card, Typography, Image, Button } from "antd";
import { IBlog } from "../../../interfaces/blogType";
import { CalendarOutlined, EditOutlined } from "@ant-design/icons";
import CreateBlogModal from "./createBlogModal";
import BlogDetailModal from "./blogDetailModal";
import { GET_USER_BY_ID } from "../../../graphql/queries/user.query";
import { useQuery } from "@apollo/client";

const { Title, Paragraph } = Typography;

interface BlogItemProps {
  data: IBlog;
}

const BlogItem: React.FC<BlogItemProps> = ({ data }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);

  const { data: userData } = useQuery(GET_USER_BY_ID, {
    variables: { userId: data?.authorId },
  });

  const handleEdit = () => {
    setIsEditModalVisible(true);
  };

  const formatDate = (timestamp?: string) => {
    if (!timestamp) return "Invalid date"; // Or handle as per your requirement
    return new Date(parseInt(timestamp, 10)).toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
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
        <div className="flex w-max items-center">
          <Image
            alt={data.thumb}
            src={data.thumb}
            style={{ width: 150, height: 150, objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col justify-between ml-4 w-[85%]">
          <div>
            <Title level={5}>{data?.title}</Title>
            <p>
              Нийтэлсэн:{" "}
              <span className="text-blue-700">
                {userData.user.lastName} {userData.user.firstName}
              </span>
            </p>
          </div>
          <Paragraph
            ellipsis={{ rows: 2, expandable: false }}
            style={{ fontSize: "12px", marginBottom: "16px" }}
          >
            {data.content}
          </Paragraph>
          <div className="flex justify-between">
            <div
              style={{
                fontSize: "14px",
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CalendarOutlined />
              <span style={{ paddingLeft: "3px" }}>
                {formatDate(data.createdAt)}
              </span>
            </div>
            <Button onClick={() => setIsDetailModalVisible(true)}>
              Дэлгэрэнгүй
            </Button>
          </div>
        </div>
      </div>
      <CreateBlogModal
        visible={isEditModalVisible}
        type="Edit"
        onCancel={() => setIsEditModalVisible(false)}
        data={data}
      />
      <BlogDetailModal
        visible={isDetailModalVisible}
        onCancel={() => setIsDetailModalVisible(false)}
        blog={data}
      />
    </Card>
  );
};

export default BlogItem;
