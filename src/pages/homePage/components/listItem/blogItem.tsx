import React, { useState } from "react";
import { Card, Typography, Image, Button } from "antd";
import { IBlog } from "../../../../interfaces/blogType";
import { CalendarOutlined, EditOutlined } from "@ant-design/icons";
import BlogDetailModal from "../../../blog/components/blogDetailModal";

const { Title, Paragraph } = Typography;

interface BlogItemProps {
  data: IBlog;
}

const BlogItem: React.FC<BlogItemProps> = ({ data }) => {
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);

  return (
    <Card hoverable style={{ margin: "auto" }} className="shadow-md w-[70%]">
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
            <Title level={5}>{data.title}</Title>
            <p>
              Нийтэлсэн: <span className="text-blue-700">{data.author}</span>
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
              <span style={{ paddingLeft: "3px" }}>{data.date}</span>
            </div>
            <Button onClick={() => setIsDetailModalVisible(true)}>
              Дэлгэрэнгүй
            </Button>
          </div>
        </div>
      </div>

      <BlogDetailModal
        visible={isDetailModalVisible}
        onCancel={() => setIsDetailModalVisible(false)}
        blog={data}
      />
    </Card>
  );
};

export default BlogItem;
