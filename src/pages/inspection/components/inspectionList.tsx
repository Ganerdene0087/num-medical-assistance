import React from "react";
import { IAppointment } from "../../../interfaces/appointmentType";
import InspectionItem from "./inspectionItem";
import { useQuery } from "@apollo/client";
import {
  GET_PAST_INSPECTIONS,
  GET_UPCOMING_INSPECTIONS,
} from "../../../graphql/queries/inspection.query";
import { message, Spin, Tabs } from "antd";

const { TabPane } = Tabs;

const InspectionList: React.FC = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const {
    loading: loadingUpcoming,
    data: dataUpcoming,
    error: errorUpcoming,
  } = useQuery(GET_UPCOMING_INSPECTIONS, {
    variables: { date: currentDate },
    fetchPolicy: "network-only",
  });

  const {
    loading: loadingPast,
    data: dataPast,
    error: errorPast,
  } = useQuery(GET_PAST_INSPECTIONS, {
    variables: { date: currentDate },
    fetchPolicy: "network-only",
  });

  if (loadingUpcoming || loadingPast) {
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
  if (errorUpcoming) {
    message.error(`${errorUpcoming}`);
  }

  if (errorPast) {
    message.error(`${errorPast}`);
  }

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Үзлэг" key="1">
        {dataUpcoming?.upcomingInspections?.length > 0 ? (
          dataUpcoming.upcomingInspections?.map((item: IAppointment) => (
            <InspectionItem key={item._id} inspection={item} />
          ))
        ) : (
          <>Үзлэг байхгүй.</>
        )}
      </TabPane>
      <TabPane tab="Үзлэгийн түүх" key="2">
        {dataPast?.pastInspections?.length > 0 ? (
          dataPast?.pastInspections?.map((item: IAppointment) => (
            <InspectionItem key={item._id} inspection={item} />
          ))
        ) : (
          <>Үзлэгийн түүх байхгүй.</>
        )}
      </TabPane>
    </Tabs>
  );
};

export default InspectionList;
