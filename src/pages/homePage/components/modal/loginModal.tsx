import React from "react";
import { Modal, Form, Input, Button } from "antd";

interface LoginModalProps {
  visible: boolean;
  onCancel: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ visible, onCancel }) => {
  return (
    <Modal open={visible} onCancel={onCancel} footer={null}>
      <Form layout="vertical">
        <Form.Item label="Нэвтрэх нэр">
          <Input />
        </Form.Item>
        <Form.Item label="Нууц үг">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" block>
            Нэвтрэх
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
