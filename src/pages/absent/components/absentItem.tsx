import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";

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
  contentContainer: {
    flexDirection: "column",
    marginBottom: 20,
    width: "100%",
  },
  text: {
    fontSize: 12,
    marginBottom: 8,
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
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Эмчийн магадлагаа</Text>
        <Text style={styles.text}>РД: УЗ00280732</Text>
        <Text style={styles.text}>1. Овог: Отгонболд Нэр: Ган-Эрдэнэ</Text>
        <Text style={styles.text}>2. Нас: 23</Text>
        <Text style={styles.text}>3. Хаяг: aaaa</Text>
        <Text style={styles.text}>
          4. Өвчтэй байсан 2024 оны 5 сарын 22 өдрөөс 2024 оны 5 сарын 23 хүртэл
          хичээлээс чөлөөлснийг магадлав.
        </Text>
        <Text style={styles.text}>5. Үндсэн онош: Ханиад</Text>
        <Text style={{ ...styles.text, marginTop: 30 }}>
          Ерөнхий эмч: doctor1
        </Text>
      </Page>
    </Document>
  );
};

export default AbsentItem;
