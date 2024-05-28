import React from "react";
import AbsentItem from "../components/absentItem";
import { Spin } from "antd";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../../../graphql/queries/user.query";
import { GET_ABSENTNOTE_BY_CLIENT } from "../../../graphql/queries/absentNote.query";

const Absent: React.FC = () => {
  const { data: userData, loading: userLoading } = useQuery(
    GET_AUTHENTICATED_USER
  );

  const { data: absentNoteData, loading: absentLoading } = useQuery(
    GET_ABSENTNOTE_BY_CLIENT,
    {
      variables: { clientId: userData?.authUser?._id },
    }
  );

  if (userLoading || absentLoading) {
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
  return (
    <div>
      {absentNoteData?.absentNoteByClient.length > 0 ? (
        absentNoteData?.absentNoteByClient.map(
          (absentItem: any, index: number) => (
            <>
              <AbsentItem key={index} absentNote={absentItem} />
            </>
          )
        )
      ) : (
        <>Цахим акт байхгүй.</>
      )}
    </div>
  );
};

export default Absent;
