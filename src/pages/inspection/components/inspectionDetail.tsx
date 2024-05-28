import React, { useState } from "react";
import {
  Divider,
  Form,
  Input,
  Button,
  Select,
  message,
  Alert,
  Spin,
} from "antd";
import {
  GET_AUTHENTICATED_USER,
  GET_USER_BY_ID,
} from "../../../graphql/queries/user.query";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TREATMENT } from "../../../graphql/mutations/treatment.mutation";
import { GET_INSPECTION_BY_ID } from "../../../graphql/queries/inspection.query";
import { useParams } from "react-router-dom";
import { UPDATE_INSPECTION } from "../../../graphql/mutations/inspection.mutation";
import { GET_TREATMENTS_BY_INSPECTION } from "../../../graphql/queries/treatment.query";

const { Option } = Select;

const InspectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [updateInspection] = useMutation(UPDATE_INSPECTION);

  const [createTreatment] = useMutation(CREATE_TREATMENT, {
    refetchQueries: [
      {
        query: GET_TREATMENTS_BY_INSPECTION,
        variables: { inspectionId: id },
      },
    ],
  });

  const { data: authUser } = useQuery(GET_AUTHENTICATED_USER);

  const {
    data: inspectionData,
    error: inspectionError,
    loading: inspectionLoading,
  } = useQuery(GET_INSPECTION_BY_ID, {
    variables: { inspectionId: id },
  });

  const {
    data: treatmentData,
    error: treatmentError,
    loading: treatmentLoading,
  } = useQuery(GET_TREATMENTS_BY_INSPECTION, {
    variables: { inspectionId: id },
  });

  const { data: userData } = useQuery(GET_USER_BY_ID, {
    variables: { userId: inspectionData?.inspection?.clientId },
  });

  if (inspectionLoading || treatmentLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (inspectionError) {
    return (
      <Alert
        message="Error"
        description={inspectionError.message}
        type="error"
      />
    );
  }
  if (treatmentError) {
    return (
      <Alert
        message="Error"
        description={treatmentError.message}
        type="error"
      />
    );
  }

  interface Treatment {
    type: string;
    frequency: string;
  }

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
    try {
      await createTreatment({
        variables: {
          input: {
            clientId: inspectionData.inspection.clientId,
            inspectionId: id,
            type: treatments[index].type,
            frequency: Number(treatments[index].frequency),
          },
        },
      });

      const updatedTreatments = [...treatments];
      updatedTreatments.splice(index, 1);
      setTreatments(updatedTreatments);
    } catch (error) {
      console.error("Validation failed:", error);
      message.error(`${error}`);
    }
  };

  const handleUpdateInspection = async (values: any) => {
    try {
      await updateInspection({
        variables: {
          input: {
            _id: id,
            date: inspectionData?.inspection?.date,
            diagnosis: values.diagnosis,
            prescription: values.prescriptions,
          },
        },
      });
      message.success("Inspection details updated successfully");
    } catch (error) {
      console.error("Update failed:", error);
      message.error("Failed to update inspection details");
    }
  };

  return (
    <div className="w-full items-center flex flex-col h-full p-4">
      <div className="w-full mb-6">
        <h2 className="text-lg font-semibold mb-2">Өвчтөний мэдээлэл</h2>
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="font-bold">Нэр:</span> {userData?.user?.firstName}
          </div>
          <div className="mb-2">
            <span className="font-bold">Овог:</span> {userData?.user?.lastName}
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

      <Divider />

      <div className="mb-6 w-full">
        <h2 className="text-lg font-semibold mb-2">Үзлэгийн дэлгэрэнгүй</h2>
        <Form
          layout="vertical"
          initialValues={{
            diagnosis: inspectionData?.inspection?.diagnosis,
            prescriptions: inspectionData?.inspection?.prescription,
          }}
          onFinish={handleUpdateInspection}
        >
          <Form.Item label="Огноо">
            <Input defaultValue={inspectionData?.inspection?.date} disabled />
          </Form.Item>
          <Form.Item label="Онош" name="diagnosis">
            <Input.TextArea disabled={authUser?.authUser?.role !== "doctor"} />
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
          {treatmentData?.treatmentsByInspection?.map(
            (treatment: any, index: number) => (
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
                    disabled
                  />
                </div>
              </div>
            )
          )}
        </div>
        <div>
          {treatments.map((treatment: any, index: number) => (
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
