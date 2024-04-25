import { AppstoreOutlined, CalendarOutlined } from "@ant-design/icons";

const orderMenuItem = {
  key: "order",
  parentIcon: <CalendarOutlined />,
  icon: <CalendarOutlined />,
  text: "Цаг захиалга",
};

const inspectionMenuItems = [
  {
    key: "inspection",
    parentIcon: <AppstoreOutlined />,
    icon: <AppstoreOutlined />,
    text: "Үзлэгийн жагсаалт",
  },
];

export { orderMenuItem, inspectionMenuItems };
