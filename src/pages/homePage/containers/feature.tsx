import React from "react";
import { Divider } from "antd";
import FeatureList from "../components/list/featureList";

const Feature: React.FC = () => {
  return (
    <>
      <Divider>
        <p className="text-[24px]">Бидний үйлчилгээ</p>
      </Divider>
      <FeatureList />
    </>
  );
};

export default Feature;
