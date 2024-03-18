import React, { useState } from "react";
import { Button, Image } from "antd";
import LoginFormModal from "../modal/loginFormModal";
import CustomButton from "../../../../components/customButton";

const HomeHeader: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center p-2 border-b h-16">
      <div className="flex flex-row">
        <Image
          src="https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/bookCover_9u3os0mzy.png"
          preview={false}
          width={60}
          height={60}
        />
        <div className="my-auto mx-2 text-blue-900">МУИС-ийн эмнэлгийн вэб</div>
      </div>

      <div>
        <Button
          onClick={() => setIsLoginModalVisible(true)}
          className="bg-white text-blue-700 mx-2"
        >
          Нэвтрэх
        </Button>
        <CustomButton
          onClick={() => setIsLoginModalVisible(true)}
          text="Бүртгүүлэх"
        />

        <LoginFormModal
          visible={isLoginModalVisible}
          onClose={() => setIsLoginModalVisible(false)}
          onRegisterClick={() => setIsLoginModalVisible(true)}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
