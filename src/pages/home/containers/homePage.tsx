import React, { useState } from "react";
import { Button } from "antd";
import LoginFormModal from "../components/modal/loginFormModal";
import HomeHeader from "../components/layout/header";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col overflow-y-scroll">
      <HomeHeader />

      <div className="flex flex-1  overflow-y-scroll h-full">home</div>
    </div>
  );
};

export default HomePage;
