import HomePage from "../../pages/homePage/containers/homePage";
import TimeTable from "../../pages/order/containers/timetable";
import Inspection from "../../pages/inspection/containers/inspection";
import NotFoundPage from "../../pages/notFound/notFound";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "../../pages/order/containers/order";

const CustomRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<Layout component={Order} />} />
        <Route
          path="/order/timetable"
          element={<Layout component={TimeTable} />}
        />
        <Route path="/inspection" element={<Layout component={Inspection} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Layout component={NotFoundPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
