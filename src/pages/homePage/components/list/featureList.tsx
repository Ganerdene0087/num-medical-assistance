import React from "react";
import { SmileOutlined, HeartOutlined, StarOutlined } from "@ant-design/icons";
import FeatureItem from "../listItem/featureItem";

const data = [
  {
    id: "1",
    icon: <StarOutlined style={{ fontSize: 48 }} />,
    text: "Эмнэлгийн үйлчилгээ, мэдээлэл, эрүүл мэндийн зөвлөгөөг нэг дороос",
  },
  {
    id: "2",
    icon: <SmileOutlined style={{ fontSize: 48 }} />,
    text: "Онлайнаар цаг захиалах үйлчилгээ",
  },
  {
    id: "3",
    icon: <HeartOutlined style={{ fontSize: 48 }} />,
    text: "Үзлэг, эмчилгээний бүртгэлээ хялбар харах, хянах үйлчилгээ",
  },

  {
    id: "4",
    icon: <SmileOutlined style={{ fontSize: 48 }} />,
    text: "Цахим акт авах үйлчилгээ",
  },
];

const FeatureList: React.FC = () => {
  return (
    <div className="w-full flex flex-row justify-evenly py-8">
      {data.map((item) => {
        return <FeatureItem key={item.id} text={item.text} icon={item.icon} />;
      })}
    </div>
  );
};

export default FeatureList;
