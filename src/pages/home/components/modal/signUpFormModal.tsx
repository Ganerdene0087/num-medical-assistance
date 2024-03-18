import React from "react";
import { Form, Input, Button, Modal, Divider } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";

interface SignUpFormModalProps {
  visible: boolean;
  onClose: () => void;
  onSignInClick: () => void;
}

const SignUpFormModal: React.FC<SignUpFormModalProps> = ({
  visible,
  onClose,
  onSignInClick,
}) => {
  const onFinish = (values: {
    mail: string;
    password: string;
    confirmPassword: string;
    registerNumber: string;
  }) => {
    console.log("Received values:", values);
    onClose();
  };

  const validateRegisterNumber = (
    _: any,
    value: string
  ): Promise<string | void> => {
    // Regular expression to match the register number format
    const registerNumberRegex = /^[А-Яа-я]{2}\d{8}$/;

    if (!value || registerNumberRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Регистерийн дугаар буруу байна!");
  };

  return (
    <Modal title="Бүртгүүлэх" open={visible} footer={null} onCancel={onClose}>
      <Form
        name="signupForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="mail"
          rules={[{ required: true, message: "И-Мэйлээ оруулна уу!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Нэвтрэх нэр" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Нууц үгээ оруулна уу!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Нууц үг" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Нууц үгээ давтан оруулна уу!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Нууц үгээ зөв давтан оруулна уу!");
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Нууц үг дахин оруулна уу"
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[{ required: true, message: "Утасны дугаар оруулна уу!" }]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="Утасны дугаар" />
        </Form.Item>
        <Form.Item
          name="registerNumber"
          rules={[
            { required: true, message: "Регистерийн дугаар оруулна уу!" },
            { validator: validateRegisterNumber },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Регистерийн дугаар" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="bg-blue-500 hover:bg-blue-700 text-white"
          >
            Бүртгүүлэх
          </Button>
        </Form.Item>

        <Divider />

        <Form.Item>
          <p className="text-center text-black mb-4">
            Өмнө нь бүртгүүлсэн бол бүртгэлээрээ нэвтрэх боломжтой.
          </p>
          <Button
            block
            onClick={onSignInClick}
            className="bg-white text-blue-700 mx-2"
          >
            Нэвтрэх
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpFormModal;
