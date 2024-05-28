import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Row, Col, message } from "antd";
import { IBlog } from "../../../interfaces/blogType";
import { useMutation } from "@apollo/client";
import {
  CREATE_BLOG,
  UPDATE_BLOG,
} from "../../../graphql/mutations/blog.mutation";
import { GET_BLOG } from "../../../graphql/queries/blog.query";

interface CreateBlogModalProps {
  visible: boolean;
  onCancel: () => void;
  type: "Create" | "Edit";
  data?: IBlog | null;
}

const CreateBlogModal: React.FC<CreateBlogModalProps> = ({
  visible,
  onCancel,
  type,
  data,
}) => {
  const [form] = Form.useForm();

  const [createBlog] = useMutation(CREATE_BLOG, {
    refetchQueries: [
      {
        query: GET_BLOG,
      },
    ],
  });

  const [updateBlog] = useMutation(UPDATE_BLOG, {
    refetchQueries: [
      {
        query: GET_BLOG,
      },
    ],
  });

  useEffect(() => {
    if (type === "Edit" && data) {
      form.setFieldsValue({
        ...data,
      });
    }
  }, [type, data, form, visible]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (type === "Edit" && data) {
        await updateBlog({
          variables: {
            input: {
              _id: data?._id,
              content: values.content,
              title: values.title,
              thumb: values.thumb,
            },
          },
        });
      } else {
        await createBlog({
          variables: {
            input: values,
          },
        });
      }

      message.success(
        `${type === "Edit" ? "Нийтлэл засагдлаа" : "Нийтлэл бичигдлээ"}`
      );
    } catch (error) {
      console.error("Validation failed:", error);
      message.error(`${error}`);
    } finally {
      onCancel();
    }
  };

  return (
    <Modal
      title={type === "Edit" ? "Нийтлэл засах" : "Нийтлэл бичих"}
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Болих
        </Button>,
        <Button key="ok" type="primary" onClick={handleOk}>
          {type === "Edit" ? "Засах" : "Нийтлэх"}
        </Button>,
      ]}
      width={800}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Гарчиг"
              name="title"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Зураг"
              name="thumb"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input placeholder="www.example.com" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Агуулга"
          name="content"
          rules={[{ required: true, message: "Заавал бөглөх шаардлагатай." }]}
        >
          <Input.TextArea autoSize={{ minRows: 12, maxRows: 18 }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateBlogModal;
