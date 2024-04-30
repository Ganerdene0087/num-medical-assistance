import React from "react";
import { Card, Typography, Button } from "antd";
import { IAppointment } from "../../../interfaces/appointmentType";
import { CalendarOutlined, RightOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface InspectionItemProps {
  data: IAppointment;
}

const InspectionItem: React.FC<InspectionItemProps> = ({ data }) => {
  const handleEdit = () => {};
  return (
    <Card hoverable style={{ margin: "auto" }} className="shadow-md w-full">
      <Button
        type="text"
        icon={<RightOutlined />}
        size="large"
        style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
        onClick={handleEdit}
      />
      <div className="flex">
        <div className="flex flex-col justify-between ml-4 ">
          <div>
            <Title level={5}>Өвчтөн: {data.clientId}</Title>
          </div>
          <div
            style={{
              fontSize: "14px",
              height: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarOutlined />
            <span style={{ paddingLeft: "3px" }}>{data.date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InspectionItem;
