import React, { useState } from "react";
import { Form, Input, Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import SignUpModal from "../modal/signUpModal";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onLogin = () => {
    navigate("/order");
  };
  return (
    <>
      <Form layout="vertical" style={{ width: "300px" }} form={form}>
        <Form.Item
          label="Нэвтрэх нэр"
          name="username"
          rules={[{ required: true, message: "Нэвтрэх нэрээ оруулна уу" }]}
        >
          <Input onChange={handleUsernameChange} />
        </Form.Item>
        <Form.Item
          label="Нууц үг"
          name="password"
          rules={[{ required: true, message: "Нууц үгээ оруулна уу" }]}
        >
          <Input.Password onChange={handlePasswordChange} />
        </Form.Item>
        <Button
          type="primary"
          block
          onClick={onLogin}
          disabled={!username || !password}
        >
          Нэвтрэх
        </Button>
      </Form>

      <Divider />

      <div className="w-full align-items-center my-8 text-blue-600">
        Та бүртгэлгүй бол бүртгэлээ үүсгэнэ үү!
      </div>

      <Button onClick={() => setIsLoginModalVisible(true)} className="w-full">
        Бүртгүүлэх
      </Button>
      <SignUpModal
        visible={isLoginModalVisible}
        onCancel={() => setIsLoginModalVisible(false)}
      />
    </>
  );
};

export default LoginForm;
