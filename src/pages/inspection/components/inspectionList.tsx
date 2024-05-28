import React from "react";
import { IAppointment } from "../../../interfaces/appointmentType";
import InspectionItem from "./inspectionItem";
import { useQuery } from "@apollo/client";
import { GET_INSPECTIONS } from "../../../graphql/queries/inspection.query";
import { message } from "antd";

const InspectionList: React.FC = () => {
  const { loading, data, error } = useQuery(GET_INSPECTIONS);

  if (loading) return null;
  if (error) {
    message.error(`${error}`);
  }

  return (
    <div className="w-full items-center flex flex-col h-full gap-y-16 my-8">
      {data?.inspections.map((item: IAppointment) => {
        return <InspectionItem key={item._id} inspection={item} />;
      })}
    </div>
  );
};

export default InspectionList;
