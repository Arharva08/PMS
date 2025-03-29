import React, { useState } from "react";
import { Layout, Input, Avatar, Space, Dropdown, Menu } from "antd";
import {
  MenuOutlined,
  BellOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header } = Layout;

const Navbar = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const profileMenu = (
    <Menu>
      <Menu.Item key="edit">Edit Profile</Menu.Item>
      <Menu.Item key="settings">Account Settings</Menu.Item>
      <Menu.Item key="help">Help</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" style={{ color: "red" }}>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  const notificationsMenu = (
    <Menu>
      <Menu.Item key="1">No new notifications</Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
        padding: "0 20px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section - Logo & Menu Icon */}
      <Space>
        <MenuOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        <span
          style={{ fontSize: "20px", fontWeight: "bold", color: "#001529" }}
        >
          demo
        </span>
      </Space>

      {/* Middle Section - Search Bar */}
      <Input.Search placeholder="Search..." style={{ width: 250 }} />

      {/* Right Section - Icons & User Profile */}
      <Space size="middle">
        <Dropdown overlay={notificationsMenu} trigger={["click"]}>
          <BellOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Dropdown>
        <SettingOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <Space
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <Avatar src="https://i.pravatar.cc/40" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.2",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Demo User</span>
              <span style={{ fontSize: "12px", color: "gray" }}>
                Property Owner
              </span>
            </div>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default Navbar;
