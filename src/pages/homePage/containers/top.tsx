import React from "react";
import { Col, Row } from "antd";
import LoginForm from "../components/form/loginForm";

const Top: React.FC = () => {
  return (
    <div
      className="min-h-[500px] w-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/9a/d8/c7/9ad8c7028839bbc9ae66bab3780dd4e0.jpg')",
      }}
    >
      <Row gutter={[16, 16]} align="middle" className="w-full m-4">
        <Col span={12}>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="text-white text-center text-6xl"
              style={{ textShadow: "0 0 8px #1890ff" }}
            >
              МУИС-ийн эмнэлгийн веб программ
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <LoginForm />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Top;
