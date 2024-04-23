import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  visible: boolean;
  onCancel: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ visible, onCancel }) => {
  const navigate = useNavigate();
  const onLogin = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("routes");
    navigate("/order");
  };
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
          <Button type="primary" block onClick={onLogin}>
            Нэвтрэх
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
