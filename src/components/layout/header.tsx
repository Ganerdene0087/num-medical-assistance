import React from "react";
import { Layout, Button, Space, Image } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

interface HeaderProps {
  routeName: string;
}

const AppHeader: React.FC<HeaderProps> = ({ routeName }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const onLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("routes");
    navigate("/");
  };

  return (
    <Header style={{ backgroundColor: "#001529", padding: "0 28px" }}>
      <div
        style={{
          height: "100%",
          alignContent: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <span
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <Image
              src="https://news.num.edu.mn/wp-content/uploads/2015/09/logo.png"
              alt="Logo"
              style={{
                width: "40px",
                objectFit: "scale-down",
                marginRight: "10px",
              }}
              preview={false}
            />
            <span
              style={{ color: "white", fontSize: "24px", marginLeft: "20px" }}
            >
              {routeName}
            </span>
          </span>
        </div>

        <div style={{ textAlign: "right", overflow: "hidden" }}>
          <Space>
            <>
              <UserOutlined style={{ color: "white", fontSize: "14px" }} />
              <span style={{ color: "white", marginRight: "16px" }}>
                {username}
              </span>
            </>

            <Button
              type="primary"
              onClick={onLogout}
              style={{ color: "white" }}
              icon={<LogoutOutlined style={{ fontSize: "14px" }} />}
            ></Button>
          </Space>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
