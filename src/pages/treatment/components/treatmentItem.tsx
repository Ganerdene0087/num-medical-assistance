import React from "react";
import { Card, Typography, Switch, message } from "antd";
import { ITreatment } from "../../../interfaces/treatmentType";
import {
  GET_USER_BY_ID,
  GET_AUTHENTICATED_USER,
} from "../../../graphql/queries/user.query";
import {
  GET_TREATMENTS_COMPLETED,
  GET_TREATMENTS_NOT_COMPLETED,
} from "../../../graphql/queries/treatment.query";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_TREATMENT } from "../../../graphql/mutations/treatment.mutation";

const { Title } = Typography;

interface TreatmentItemProps {
  data: ITreatment;
}

const TreatmentItem: React.FC<TreatmentItemProps> = ({ data }) => {
  const { data: userData } = useQuery(GET_USER_BY_ID, {
    variables: { userId: data.clientId },
  });

  const { data: authUser } = useQuery(GET_AUTHENTICATED_USER);

  const [updateTreatment] = useMutation(UPDATE_TREATMENT, {
    refetchQueries: [
      { query: GET_TREATMENTS_COMPLETED },
      { query: GET_TREATMENTS_NOT_COMPLETED },
    ],
  });

  const handleToggleDone = async (checked: boolean) => {
    try {
      await updateTreatment({
        variables: {
          input: {
            _id: data._id,
            clientId: data.clientId,
            inspectionId: data.inspectionId,
            type: data.type,
            frequency: data.frequency,
            isDone: checked,
          },
        },
      });
      message.success("Treatment status updated successfully");
    } catch (error) {
      console.error("Error updating treatment status:", error);
      message.error("Failed to update treatment status");
    }
  };

  return (
    <Card hoverable className="shadow-md w-full my-[16px]">
      <div className="flex flex-col">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Өвчтөний мэдээлэл</h2>
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="font-bold">Нэр:</span>{" "}
              {userData?.user?.firstName}
            </div>
            <div className="mb-2">
              <span className="font-bold">Овог:</span>{" "}
              {userData?.user?.lastName}
            </div>
            <div className="mb-2">
              <span className="font-bold">Регистрийн дугаар:</span>{" "}
              {userData?.user?.registerNumber}
            </div>
            <div className="mb-2">
              <span className="font-bold">Нас:</span> {userData?.user?.age}
            </div>
            <div>
              <span className="font-bold">Утас:</span> {userData?.user?.phone}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col ml-4">
            <div>
              <Title level={5}>Эмчилгээний төрөл: {data.type}</Title>
            </div>
          </div>
          <div>
            <Switch
              checked={data.isDone}
              onChange={handleToggleDone}
              checkedChildren="Дууссан"
              unCheckedChildren="Дуусаагүй"
              disabled={authUser?.authUser?.role !== "nurse"}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TreatmentItem;
