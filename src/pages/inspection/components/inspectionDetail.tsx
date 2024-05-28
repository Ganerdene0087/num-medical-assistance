import React, { useState } from "react";
import { Divider, Form, Input, Button, Select, message } from "antd";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../../../graphql/queries/user.query";
import { useMutation } from "@apollo/client";
import { CREATE_TREATMENT } from "../../../graphql/mutations/treatment.mutation";
import { GET_INSPECTION_BY_ID } from "../../../graphql/queries/inspection.query";
import { useParams } from "react-router-dom";

const { Option } = Select;

const InspectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("id", id);
  const [createTreatment] = useMutation(CREATE_TREATMENT);

  const { data: authUser } = useQuery(GET_AUTHENTICATED_USER);

  console.log("user", authUser);
  interface Treatment {
    type: string;
    frequency: string;
  }

  const userData = {
    firstName: "Ган-Эрдэнэ",
    lastName: "Отгонболд",
    registerNumber: "УЗ00280732",
    age: 23,
    phone: "95465069",
  };

  const inspectionData = {
    date: "2024-05-22",
    diagnosis: " ",
    prescriptions: " ",
  };

  const [treatments, setTreatments] = useState<Treatment[]>([]);

  const handleAddTreatment = () => {
    setTreatments([...treatments, { type: "", frequency: "" }]);
  };

  const handleTreatmentChange = (
    index: number,
    key: keyof Treatment,
    value: string
  ) => {
    const updatedTreatments = [...treatments];
    updatedTreatments[index][key] = value;
    setTreatments(updatedTreatments);
  };

  const handleSaveTreatment = async (index: number) => {
    console.log("Saving treatment:", treatments[index]);
    try {
      await createTreatment({
        variables: {
          input: {
            inspectionId: id,
            type: treatments[index].type,
            frequency: Number(treatments[index].frequency),
          },
        },
      });
    } catch (error) {
      console.error("Validation failed:", error);
      message.error(`${error}`);
    }
  };

  return (
    <div className="w-full items-center flex flex-col h-full p-4">
      <div className="w-full mb-6">
        <h2 className="text-lg font-semibold mb-2">Өвчтөний мэдээлэл</h2>
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="font-bold">Нэр:</span> {userData.firstName}
          </div>
          <div className="mb-2">
            <span className="font-bold">Овог:</span> {userData.lastName}
          </div>
          <div className="mb-2">
            <span className="font-bold">Регистрийн дугаар:</span>{" "}
            {userData.registerNumber}
          </div>
          <div className="mb-2">
            <span className="font-bold">Нас:</span> {userData.age}
          </div>
          <div>
            <span className="font-bold">Утас:</span> {userData.phone}
          </div>
        </div>
      </div>

      <Divider />

      <div className="mb-6 w-full">
        <h2 className="text-lg font-semibold mb-2">Үзлэгийн дэлгэрэнгүй</h2>
        <Form layout="vertical">
          <Form.Item label="Огноо">
            <Input defaultValue={inspectionData.date} disabled />
          </Form.Item>
          <Form.Item label="Онош" name="diagnosis">
            <Input.TextArea disabled={authUser.authUser?.role !== "doctor"} />
          </Form.Item>
          <Form.Item label="Эмийн жор" name="prescriptions">
            <Input.TextArea disabled={authUser.authUser?.role !== "doctor"} />
          </Form.Item>
          {authUser.authUser?.role === "doctor" && (
            <Button type="primary" htmlType="submit">
              Хадгалах
            </Button>
          )}
        </Form>
      </div>

      <Divider />

      <div className="mb-6 w-full">
        <h2 className="text-lg font-semibold mb-2">Эмчилгээ</h2>
        <div>
          {treatments.map((treatment, index) => (
            <div key={index} className="flex mb-2">
              <div className="flex-1 mr-2">
                <label htmlFor={`type-${index}`} className="block mb-1">
                  Төрөл
                </label>
                <Select
                  id={`type-${index}`}
                  placeholder="Select Type"
                  value={treatment.type}
                  onChange={(value) =>
                    handleTreatmentChange(index, "type", value)
                  }
                  className="w-full"
                >
                  <Option value="sudas">Судас</Option>
                  <Option value="bulchin">Булчин</Option>
                  <Option value="boolt">Боолт</Option>
                  <Option value="UVCH">УВЧ</Option>
                  <Option value="Solux">Solux</Option>
                  <Option value="Bumba">Бумба</Option>
                </Select>
              </div>
              <div className="flex-1 mr-2">
                <label htmlFor={`frequency-${index}`} className="block mb-1">
                  Давтамж
                </label>
                <Input
                  id={`frequency-${index}`}
                  placeholder="Frequency"
                  value={treatment.frequency}
                  onChange={(e) =>
                    handleTreatmentChange(index, "frequency", e.target.value)
                  }
                />
              </div>
              <div>
                <label
                  htmlFor={`frequency-${index}`}
                  className="block mb-1 text-white"
                >
                  s
                </label>
                <Button
                  type="primary"
                  onClick={() => handleSaveTreatment(index)}
                >
                  Хадгалах
                </Button>
              </div>
            </div>
          ))}
          {authUser.authUser?.role === "doctor" && (
            <Button
              type="dashed"
              onClick={handleAddTreatment}
              className="w-full"
            >
              Эмчилгээ нэмэх
            </Button>
          )}
        </div>
      </div>
      {authUser.authUser?.role === "doctor" && (
        <Button type="primary">Акт үүсгэх</Button>
      )}
    </div>
  );
};

export default InspectionDetail;
