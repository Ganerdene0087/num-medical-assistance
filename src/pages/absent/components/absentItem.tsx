import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  contentContainer: {
    flexDirection: "column",
    marginBottom: 20,
    width: "100%",
  },
  text: {
    fontSize: 12,
    marginBottom: 8, // Added margin between items
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItemNumber: {
    marginRight: 8,
  },
});

const AbsentItem = () => {
  return (
    <>
      <Document>
        <Page style={styles.page}>
          <Text style={styles.title}>Эмчийн магадлагаа</Text>
          <Text style={styles.text}>РД: УЗ00280732</Text>

          <Text style={styles.text}>1. Овог: Отгонболд Нэр: Ган-Эрдэнэ</Text>
          <Text style={styles.text}>2. Нас: 23</Text>
          <Text style={styles.text}>3. Хаяг: aaaa</Text>
          <Text style={styles.text}>
            4. Өвчтэй байсан 2024 оны 4 сарын 9 өдрөөс 2024 оны 5 сарын 9 хүртэл
            хичээлээс чөлөөлснийг магадлав.
          </Text>
          <Text style={styles.text}>5. Үндсэн онош: Ханиад</Text>

          <Text style={{ ...styles.text, marginTop: 30 }}>
            Ерөнхий эмч: doctor1
          </Text>
        </Page>
      </Document>
    </>
  );
};

export default AbsentItem;
