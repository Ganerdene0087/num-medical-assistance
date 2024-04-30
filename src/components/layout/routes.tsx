import HomePage from "../../pages/homePage/containers/homePage";
import Inspection from "../../pages/inspection/containers/inspection";
import Blog from "../../pages/blog/containers/blog";
import Absent from "../../pages/absent/containers/absent";
import Treatment from "../../pages/treatment/containers/treatment";
import NotFoundPage from "../../pages/notFound/notFound";
import Layout from "./layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Appointment from "../../pages/appointment/containers/appointment";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../../graphql/queries/user.query";
import { message } from "antd";

const CustomRouter: React.FC = () => {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);
  console.log("data", data);
  if (loading) return null;
  message.error(`${error}`);
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
            data.authUser ? (
              <Layout component={Inspection} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/treatment"
          element={
            data.authUser ? (
              <Layout component={Treatment} />
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
          element={!data.authUser ? <HomePage /> : <Navigate to="/treatment" />}
        />
        <Route path="*" element={<Layout component={NotFoundPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
