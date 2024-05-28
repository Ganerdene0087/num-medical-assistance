import React from "react";
import { Modal, Button } from "antd";
import { IBlog } from "../../../interfaces/blogType";
import { GET_USER_BY_ID } from "../../../graphql/queries/user.query";
import { useQuery } from "@apollo/client";

interface BlogDetailModalProps {
  blog: IBlog;
  visible: boolean;
  onCancel: () => void;
}

const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  visible,
  onCancel,
  blog,
}) => {
  const { data: userData } = useQuery(GET_USER_BY_ID, {
    variables: { userId: blog?.authorId },
  });

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Close
        </Button>,
      ]}
      width={800}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{blog?.title}</h2>
        {blog?.thumb && (
          <div className="mb-4">
            <img
              src={blog.thumb}
              alt="Thumbnail"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        )}
        <p>
          Нийтэлсэн:{" "}
          <span className="text-blue-700">
            {userData.user.lastName} {userData.user.firstName}
          </span>
        </p>
        <div className="prose prose-lg max-w-full">{blog?.content}</div>
      </div>
    </Modal>
  );
};

export default BlogDetailModal;
