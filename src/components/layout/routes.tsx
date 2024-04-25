import HomePage from "../../pages/homePage/containers/homePage";
import Inspection from "../../pages/inspection/containers/inspection";
import Blog from "../../pages/blog/containers/blog";
import Absent from "../../pages/absent/containers/absent";
import Treatment from "../../pages/treatment/containers/treatment";
import NotFoundPage from "../../pages/notFound/notFound";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "../../pages/appointment/containers/appointment";

const CustomRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/appointment"
          element={<Layout component={Appointment} />}
        />
        <Route path="/absent" element={<Layout component={Absent} />} />
        <Route path="/inspection" element={<Layout component={Inspection} />} />
        <Route path="/treatment" element={<Layout component={Treatment} />} />
        <Route path="/blog" element={<Layout component={Blog} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Layout component={NotFoundPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
