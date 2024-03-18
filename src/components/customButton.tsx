import React from "react";
import { Button } from "antd";

interface CustomButtonProps {
  onClick: () => void;
  text: string;
  htmlType?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  text,
  htmlType,
}) => {
  return (
    <Button
      type="primary"
      onClick={onClick}
      className="bg-blue-900 hover:bg-blue-800 text-white mx-2"
      htmlType={htmlType ? "submit" : undefined}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
