import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { orderMenuItem, inspectionMenuItems } from "../../utils/menuItem";
import { AudioOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  text: string;
}

interface SidebarProps {
  selectedMenuItem: string;
  onMenuItemClick: (key: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedMenuItem,
  onMenuItemClick,
}) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    const parentKey = selectedMenuItem.split("/")[0];
    if (parentKey) {
      setOpenKeys([parentKey]);
    }
  }, [selectedMenuItem]);

  const renderMenuItems = (menuItems: MenuItem[]) => {
    return menuItems.map((item) => (
      <Menu.Item
        key={item.key}
        icon={item.icon}
        onClick={() => onMenuItemClick(item.key)}
      >
        {item.text}
      </Menu.Item>
    ));
  };

  const handleSubMenuOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <Sider
      theme="dark"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRight: "1px solid #f0f0f0",
      }}
      width={220}
    >
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[selectedMenuItem]}
        openKeys={openKeys}
        onOpenChange={handleSubMenuOpenChange}
        style={{ flex: 1, height: "100%" }}
      >
        <Menu.Item
          key={orderMenuItem.key}
          icon={orderMenuItem.icon}
          onClick={() => onMenuItemClick(orderMenuItem.key)}
        >
          {orderMenuItem.text}
        </Menu.Item>

        <SubMenu key="inspection" icon={<AudioOutlined />} title="Үзлэг">
          {renderMenuItems(inspectionMenuItems)}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
