import React from "react";
import { Modal, Form, Input, Button, Row, Col, Radio, message } from "antd";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../../../graphql/mutations/user.mutation";

interface SignUpModalProps {
  visible: boolean;
  onCancel: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const [signUp, { loading }] = useMutation(SIGN_UP);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const finalValues = {
        ...values,
        age: parseInt(values.age),
        phone: parseInt(values.phone),
        role: "nurse",
      };

      await signUp({
        variables: { input: finalValues },
      });
    } catch (error) {
      console.error("Validation failed:", error);
      message.error(`${error}`);
    } finally {
      onCancel();
    }
  };

  return (
    <Modal
      open={visible}
      title="Бүртгүүлэх"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Болих
        </Button>,
        <Button key="ok" type="primary" loading={loading} onClick={handleOk}>
          Бүртгүүлэх
        </Button>,
      ]}
      width={800}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Нэвтрэх нэр"
              name="username"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Регистр"
              name="registerNumber"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Овог"
              name="firstName"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Нас"
                  name="age"
                  rules={[
                    { required: true, message: "Заавал бөглөх шаардлагатай." },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Хүйс"
                  name="gender"
                  rules={[
                    { required: true, message: "Заавал бөглөх шаардлагатай." },
                  ]}
                >
                  <Radio.Group className="flex flex-row">
                    <Radio value="male">Эрэгтэй</Radio>
                    <Radio value="female">Эмэгтэй</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Нууц үг"
              name="password"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Сиси"
              name="sisiId"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Нэр"
              name="lastName"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Утасны дугаар"
              name="phone"
              rules={[
                { required: true, message: "Заавал бөглөх шаардлагатай." },
              ]}
            >
              <Input maxLength={8} type="tel" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Гэрийн хаяг"
          name="address"
          rules={[{ required: true, message: "Заавал бөглөх шаардлагатай." }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpModal;
