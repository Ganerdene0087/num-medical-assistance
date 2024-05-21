import HomePage from "../../pages/homePage/containers/homePage";
import Inspection from "../../pages/inspection/containers/inspection";
import Blog from "../../pages/blog/containers/blog";
import Absent from "../../pages/absent/containers/absent";
import Treatment from "../../pages/treatment/containers/treatment";
import NotFoundPage from "../../pages/notFound/notFound";
import InspectionDetail from "../../pages/inspection/components/inspectionDetail";
import TreatmentDetail from "../../pages/treatment/containers/treatmentDetail";
import Layout from "./layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Appointment from "../../pages/appointment/containers/appointment";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../../graphql/queries/user.query";
import { message } from "antd";

const CustomRouter: React.FC = () => {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);

  if (loading) return null;
  if (error) {
    message.error(`${error}`);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/appointment"
          element={
            data.authUser && data.authUser.role === "client" ? (
              <Layout component={Appointment} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/absent"
          element={
            data.authUser ? <Layout component={Absent} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/inspection"
          element={
            data.authUser && data.authUser.role !== "nurse" ? (
              <Layout component={Inspection} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/inspection/detail/:id"
          element={
            data.authUser && data.authUser.role !== "nurse" ? (
              <Layout component={InspectionDetail} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/treatment"
          element={
            data.authUser && data.authUser.role !== "doctor" ? (
              <Layout component={Treatment} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/treatment/detail/:id"
          element={
            data.authUser && data.authUser.role !== "doctor" ? (
              <Layout component={TreatmentDetail} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/blog"
          element={
            data.authUser && data.authUser.role !== "client" ? (
              <Layout component={Blog} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={
            !data.authUser ? (
              <HomePage />
            ) : data.authUser.role === "client" ? (
              <Navigate to="/appointment" />
            ) : data.authUser.role === "doctor" ? (
              <Navigate to="/inspection" />
            ) : (
              <Navigate to="/treatment" />
            )
          }
        />
        <Route path="*" element={<Layout component={NotFoundPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
