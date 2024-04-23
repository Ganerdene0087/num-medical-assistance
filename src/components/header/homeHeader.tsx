import React, { useState } from "react";
import { Layout, Button, Image } from "antd";
import LoginModal from "../../pages/homePage/components/modal/loginModal";

const { Header } = Layout;

const HomeHeader: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  return (
    <Header className="sticky top-0 z-10 bg-transparent">
      <div className="flex items-center justify-between w-full h-full">
        <div className="text-black text-xl">
          <Image
            preview={false}
            width={60}
            src="https://news.num.edu.mn/wp-content/uploads/2015/09/logo.png"
          />
        </div>
        <Button type="primary" onClick={() => setIsLoginModalVisible(true)}>
          Нэвтрэх
        </Button>
      </div>
      <LoginModal
        visible={isLoginModalVisible}
        onCancel={() => setIsLoginModalVisible(false)}
      />
    </Header>
  );
};

export default HomeHeader;
