import React from "react";
import { Form, Input, Button } from "antd";

const SignUpForm: React.FC = () => {
  return (
    <Form layout="vertical" style={{ width: "300px" }}>
      <Form.Item label="Нэр">
        <Input />
      </Form.Item>
      <Form.Item label="Цахим шуудан">
        <Input />
      </Form.Item>
      <Form.Item label="Дугаар">
        <Input />
      </Form.Item>
      <Form.Item label="Регистр">
        <Input />
      </Form.Item>
      <Form.Item label="Нэр">
        <Input />
      </Form.Item>
      <Form.Item label="Цахим шуудан">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" block>
          Бүртгүүлэх
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
