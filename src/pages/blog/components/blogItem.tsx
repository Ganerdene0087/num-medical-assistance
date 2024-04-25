import React from "react";
import { Card, Typography, Image } from "antd";
import { IBlog } from "../../../interfaces/blogType";
import { CalendarOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface BlogItemProps {
  data: IBlog;
}

const BlogItem: React.FC<BlogItemProps> = ({ data }) => {
  return (
    <Card hoverable style={{ margin: "auto" }} className="shadow-md w-full">
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
    </Card>
  );
};

export default BlogItem;
