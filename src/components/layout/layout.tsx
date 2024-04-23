import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { useNavigate, useLocation } from "react-router-dom";
import { routeNameFinder } from "../../utils/utilityFunctions";

interface LayoutProps {
  component: React.FC;
}

const Layout: React.FC<LayoutProps> = ({ component: PageComponent }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("order/");
  const [routeName, setRouteName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.substring(1);
    const path = routeNameFinder(location.pathname);
    setSelectedMenuItem(pathname);
    setRouteName(path as string);
  }, [location.pathname]);

  const handleMenuItemClick = (key: string) => {
    setSelectedMenuItem(key);
    navigate(`/${key}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header routeName={routeName} />
      <div style={{ display: "flex", flex: 1 }}>
        <div>
          <Sidebar
            selectedMenuItem={selectedMenuItem}
            onMenuItemClick={handleMenuItemClick}
          />
        </div>

        <div
          style={{
            flex: "1",
            padding: "16px",
            overflow: "auto",
            height: "calc(100vh - 96px)",
          }}
        >
          <PageComponent />
        </div>
      </div>
    </div>
  );
};

export default Layout;
