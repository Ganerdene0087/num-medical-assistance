import React from "react";
import { Modal, Button } from "antd";
import { IBlog } from "../../../interfaces/blogType";

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
  return (
    <Modal
      open={visible}
      title="Blog Details"
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
        <p className="text-sm text-gray-500 mb-4">By {blog?.author}</p>
        <div className="prose prose-lg max-w-full">{blog?.content}</div>
      </div>
    </Modal>
  );
};

export default BlogDetailModal;
