import React from "react";
import { ITreatment } from "../../../interfaces/treatmentType";
import TreatmentItem from "./treatmentItem";
import { useQuery } from "@apollo/client";
import {
  GET_TREATMENTS_COMPLETED,
  GET_TREATMENTS_NOT_COMPLETED,
} from "../../../graphql/queries/treatment.query";
import { message, Tabs, Spin } from "antd";

const { TabPane } = Tabs;

const TreatmentList: React.FC = () => {
  const {
    loading: loadingDone,
    data: dataDone,
    error: errorDone,
  } = useQuery(GET_TREATMENTS_COMPLETED, { fetchPolicy: "network-only" });

  const {
    loading: loadingPending,
    data: dataPending,
    error: errorPending,
  } = useQuery(GET_TREATMENTS_NOT_COMPLETED, { fetchPolicy: "network-only" });

  if (loadingDone || loadingPending) {
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
  if (errorDone) {
    message.error(`Error loading completed treatments: ${errorDone.message}`);
  }
  if (errorPending) {
    message.error(`Error loading pending treatments: ${errorPending.message}`);
  }

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Хийгдэх эмчилгээ" key="1">
        {dataPending?.treatmentsByIsDone.length > 0 ? (
          dataPending.treatmentsByIsDone.map((item: ITreatment) => (
            <TreatmentItem key={item._id} data={item} />
          ))
        ) : (
          <>Хийгдэх эмчилгээ байхгүй.</>
        )}
      </TabPane>
      <TabPane tab="Хийгдсан эмчилгээ" key="2">
        {dataDone?.treatmentsByIsDone.length > 0 ? (
          dataDone.treatmentsByIsDone.map((item: ITreatment) => (
            <TreatmentItem key={item._id} data={item} />
          ))
        ) : (
          <>Хийгдсэн эмчилгээ байхгүй.</>
        )}
      </TabPane>
    </Tabs>
  );
};

export default TreatmentList;
