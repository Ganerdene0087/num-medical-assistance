import React from "react";
import { Card, Typography, Button, Spin, Alert } from "antd";
import { IAppointment } from "../../../interfaces/appointmentType";
import { CalendarOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../../graphql/queries/user.query";

const { Title } = Typography;

interface InspectionItemProps {
  inspection: IAppointment;
}

const InspectionItem: React.FC<InspectionItemProps> = ({ inspection }) => {
  const navigate = useNavigate();
  const clientId = inspection.clientId;

  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { userId: clientId },
  });

  if (loading) {
    return <Spin />;
  }

  // Check for error state
  if (error) {
    return <Alert message="Error" description={error.message} type="error" />;
  }
  const handleEdit = () => {
    navigate(`/inspection/detail/${inspection._id}`);
  };

  const user = data.user;

  return (
    <Card hoverable className="shadow-md w-full my-8">
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
            <Title level={5}>
              Өвчтөн: {user?.firstName} {user?.lastName}
            </Title>
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
            <span style={{ paddingLeft: "3px" }}>
              {inspection.date} {inspection.start_time}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InspectionItem;
