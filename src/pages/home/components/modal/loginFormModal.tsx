import React from "react";
import { Form, Input, Button, Modal, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

interface LoginFormModalProps {
  visible: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

const LoginFormModal: React.FC<LoginFormModalProps> = ({
  visible,
  onClose,
  onRegisterClick,
}) => {
  const onFinish = (values: { username: string; password: string }) => {
    console.log("Received values:", values);
    onClose();
  };

  return (
    <Modal title="Нэвтрэх" open={visible} footer={null} onCancel={onClose}>
      <Form
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Нэвтрэх нэрээ оруулна уу!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Нэвтрэх нэр" />
        </Form.Item>
        <Form.Item
          name="password"
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
        <Form.Item>
          <Button type="link" htmlType="button" block onClick={onClose}>
            Нууц үгээ мартсан уу?
          </Button>
        </Form.Item>
        <Divider />

        <Form.Item>
          <p className="text-center text-black mb-4">
            Шинэ хэрэглэгч бол та энд дарж бүртгүүлнэ үү!
          </p>
          <Button
            block
            onClick={onRegisterClick}
            className="bg-white text-blue-700 mx-2"
          >
            Бүртгүүлэх
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginFormModal;
