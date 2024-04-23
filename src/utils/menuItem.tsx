import {
  ReadOutlined,
  AppstoreOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const orderMenuItems = [
  {
    key: "order/",
    parentIcon: <ReadOutlined />,
    icon: <ReadOutlined />,
    text: "Цаг захиалга",
  },
  {
    key: "timetable/",
    parentIcon: <CalendarOutlined />,
    icon: <CalendarOutlined />,
    text: "Үзлэгийн хуваарь",
  },
];

const inspectionMenuItems = [
  {
    key: "inspection/",
    parentIcon: <AppstoreOutlined />,
    icon: <AppstoreOutlined />,
    text: "Үзлэгийн жагсаалт",
  },
];

export { orderMenuItems, inspectionMenuItems };
