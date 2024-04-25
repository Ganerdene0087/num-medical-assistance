import {
  FileTextOutlined,
  BookOutlined,
  CalendarOutlined,
  CheckSquareOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";

const appointmentMenuItem = {
  key: "appointment",
  parentIcon: <CalendarOutlined />,
  icon: <CalendarOutlined />,
  text: "Цаг захиалга",
};

const inspectionMenuItems = {
  key: "inspection",
  parentIcon: <CheckSquareOutlined />,
  icon: <CheckSquareOutlined />,
  text: "Үзлэг",
};

const treatmentMenuItems = {
  key: "treatment",
  parentIcon: <MedicineBoxOutlined />,
  icon: <MedicineBoxOutlined />,
  text: "Эмчилгээ",
};

const blogMenuItem = {
  key: "blog",
  parentIcon: <BookOutlined />,
  icon: <BookOutlined />,
  text: "Нийтлэл",
};

const absentMenuItem = {
  key: "absent",
  parentIcon: <FileTextOutlined />,
  icon: <FileTextOutlined />,
  text: "Цахим акт",
};

export {
  appointmentMenuItem,
  inspectionMenuItems,
  blogMenuItem,
  absentMenuItem,
  treatmentMenuItems,
};
