import React from "react";
import AbsentItem from "../components/absentItem";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "antd";

const Absent: React.FC = () => {
  return (
    <div>
      <AbsentItem />
      <PDFDownloadLink document={<AbsentItem />} fileName="Akt">
        <Button type="primary">Татах</Button>
      </PDFDownloadLink>
    </div>
  );
};

export default Absent;
