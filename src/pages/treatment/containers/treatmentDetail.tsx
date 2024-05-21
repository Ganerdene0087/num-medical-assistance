import React, { useState } from "react";
import { Divider, Input, Select, Switch } from "antd";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../../../graphql/queries/user.query";

const { Option } = Select;

const TreatmentDetail: React.FC = () => {
  const { data } = useQuery(GET_AUTHENTICATED_USER);
  interface Treatment {
    type: string;
    frequency: string;
    completed?: boolean;
  }

  const userData = {
    firstName: "Ган-Эрдэнэ",
    lastName: "Отгонболд",
    registerNumber: "УЗ00280732",
    age: 23,
    phone: "95465069",
  };

  const treatmentData: Treatment[] = [
    { frequency: "1", type: "boolt", completed: true },
    { frequency: "3", type: "Solux" },
  ];

  const [treatments, setTreatments] = useState<Treatment[]>(treatmentData);

  const handleTreatmentChange = (
    index: number,
    key: keyof Treatment,
    value: string | boolean
  ) => {
    const updatedTreatments = [...treatments];
    (updatedTreatments[index][key] as string | boolean) = value;
    setTreatments(updatedTreatments);
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
                  disabled
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
                  disabled={data.authUser.role !== "nurse"}
                />
              </div>
              <div>
                <label htmlFor={`frequency-${index}`} className="block mb-1 ">
                  Дууссан
                </label>
                <Switch
                  checked={treatment.completed}
                  onChange={(value) =>
                    handleTreatmentChange(index, "completed", value)
                  }
                  disabled={data.authUser.role !== "nurse"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
