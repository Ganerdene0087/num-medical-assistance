import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  appointmentMenuItem,
  inspectionMenuItems,
  treatmentMenuItems,
  blogMenuItem,
  absentMenuItem,
} from "../../utils/menuItem";

const { Sider } = Layout;

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
          key={appointmentMenuItem.key}
          icon={appointmentMenuItem.icon}
          onClick={() => onMenuItemClick(appointmentMenuItem.key)}
        >
          {appointmentMenuItem.text}
        </Menu.Item>
        <Menu.Item
          key={inspectionMenuItems.key}
          icon={inspectionMenuItems.icon}
          onClick={() => onMenuItemClick(inspectionMenuItems.key)}
        >
          {inspectionMenuItems.text}
        </Menu.Item>
        <Menu.Item
          key={treatmentMenuItems.key}
          icon={treatmentMenuItems.icon}
          onClick={() => onMenuItemClick(treatmentMenuItems.key)}
        >
          {treatmentMenuItems.text}
        </Menu.Item>
        <Menu.Item
          key={blogMenuItem.key}
          icon={blogMenuItem.icon}
          onClick={() => onMenuItemClick(blogMenuItem.key)}
        >
          {blogMenuItem.text}
        </Menu.Item>
        <Menu.Item
          key={absentMenuItem.key}
          icon={absentMenuItem.icon}
          onClick={() => onMenuItemClick(absentMenuItem.key)}
        >
          {absentMenuItem.text}
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
