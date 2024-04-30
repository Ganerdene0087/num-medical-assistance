import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Row, Col, message } from "antd";
import { IBlog } from "../../../interfaces/blogType";

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

      console.log("values", values);
    } catch (error) {
      console.error("Validation failed:", error);
      message.error(`${error}`);
    } finally {
      // onCancel();
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
          Нийтлэх
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
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateBlogModal;
