import React from "react";
import { Layout, Button, Space, Image, message } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { LOGOUT } from "../../graphql/mutations/user.mutation";
import { GET_AUTHENTICATED_USER } from "../../graphql/queries/user.query";

const { Header } = Layout;

interface HeaderProps {
  routeName: string;
}

const AppHeader: React.FC<HeaderProps> = ({ routeName }) => {
  const [logout] = useMutation(LOGOUT, {
    refetchQueries: ["GetAuthenticatedUser"],
  });
  const { data } = useQuery(GET_AUTHENTICATED_USER);

  const onLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Validation failed:", error);
      message.error(`${error}`);
    } finally {
    }
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
                {data.authUser && data.authUser.username}
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
