import React from "react";
import { SmileOutlined, HeartOutlined, StarOutlined } from "@ant-design/icons";
import FeatureItem from "../listItem/featureItem";

const data = [
  {
    icon: <StarOutlined style={{ fontSize: 48 }} />,
    text: "Эмнэлгийн үйлчилгээ, мэдээлэл, эрүүл мэндийн зөвлөгөөг нэг дороос",
  },
  {
    icon: <SmileOutlined style={{ fontSize: 48 }} />,
    text: "Онлайнаар цаг захиалах үйлчилгээ",
  },
  {
    icon: <HeartOutlined style={{ fontSize: 48 }} />,
    text: "Үзлэг, эмчилгээний бүртгэлээ хялбар харах, хянах үйлчилгээ",
  },

  {
    icon: <SmileOutlined style={{ fontSize: 48 }} />,
    text: "Цахим акт авах үйлчилгээ",
  },
];

const FeatureList: React.FC = () => {
  return (
    <div className="w-full flex flex-row justify-evenly py-8">
      {data.map((item) => {
        return <FeatureItem text={item.text} icon={item.icon} />;
      })}
    </div>
  );
};

export default FeatureList;
