import React from "react";
import { Card } from "antd";

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <Card hoverable style={{ width: 300 }}>
      <div className="flex justify-center items-center mb-2">{icon}</div>
      <Card.Meta description={<div className="text-center">{text}</div>} />
    </Card>
  );
};

export default FeatureItem;
