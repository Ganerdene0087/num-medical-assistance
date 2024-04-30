import React from "react";
import { IAppointment } from "../../../interfaces/appointmentType";
import InspectionItem from "./inspectionItem";
import { AppointmentDummy } from "../../../dummyData/appointmentDummy";

const InspectionList: React.FC = () => {
  const dataList = AppointmentDummy;
  return (
    <div className="w-full items-center flex flex-col h-full gap-y-16 my-8">
      {dataList.map((item: IAppointment) => {
        return <InspectionItem key={item._id} data={item} />;
      })}
    </div>
  );
};

export default InspectionList;
