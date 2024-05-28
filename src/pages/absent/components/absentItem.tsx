import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../../graphql/queries/user.query";
import { Spin, Button } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5Q.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 30,
    padding: 30,
    borderWidth: 1,
    borderColor: "#000",
    display: "flex",
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    marginBottom: 8,
  },
});

const AbsentItem = ({ absentNote }: any) => {
  const { data: userData, loading } = useQuery(GET_USER_BY_ID, {
    variables: { userId: absentNote.clientId },
    fetchPolicy: "network-only",
  });

  if (loading) {
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

  const AbsentDocument = () => {
    return (
      <Document>
        <Page style={styles.page}>
          <Text style={styles.title}>Эмчийн магадлагаа</Text>
          <Text style={styles.text}>РД: {userData?.user?.registerNumber}</Text>
          <Text style={styles.text}>
            1. Овог: {userData?.user?.firstName} Нэр: {userData?.user?.lastName}
          </Text>
          <Text style={styles.text}>2. Нас: {userData?.user?.age}</Text>
          <Text style={styles.text}>3. Хаяг: {userData?.user?.address}</Text>
          <Text style={styles.text}>
            4. Өвчтэй байсан {absentNote.start_date} өдрөөс{" "}
            {absentNote.end_date} хүртэл хичээлээс чөлөөлснийг магадлав.
          </Text>
          <Text style={styles.text}>5. Үндсэн онош: {absentNote.reason}</Text>
          <Text style={{ ...styles.text, marginTop: 30 }}>
            Ерөнхий эмч: doctor1
          </Text>
        </Page>
      </Document>
    );
  };

  return (
    <>
      <AbsentDocument />
      <PDFDownloadLink document={<AbsentDocument />} fileName="Akt">
        <Button type="primary">Татах</Button>
      </PDFDownloadLink>
    </>
  );
};

export default AbsentItem;
