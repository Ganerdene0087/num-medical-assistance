import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm: React.FC = () => {
  const onFinish = (values: { username: string; password: string }) => {
    console.log("Received values:", values);
  };

  return (
    <div className="flex justify-center w-full p-8 items-center h-full">
      <div className="w-full">
        <h2 className="text-3xl mb-4">Нэвтрэх</h2>
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="Нэвтрэх нэр"
            rules={[{ required: true, message: "Нэвтрэх нэрээ оруулна уу!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Нэвтрэх нэр" />
          </Form.Item>
          <Form.Item
            name="Нууц үг"
            rules={[{ required: true, message: "Нууц үгээ оруулна уу!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Нууц үг" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-500 hover:bg-blue-700 text-white"
            >
              Нэвтрэх
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
