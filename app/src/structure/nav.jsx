import React, { useEffect, useState } from "react";

// UI
import { BsMoon, BsSun } from "react-icons/bs";
import { Menu, Switch, Progress } from "antd";

import styles from "./nav.module.css";

const darkStyle = {
  backgroundColor: "#141414",
  color: "#fff",
  borderBottom: "2px solid #303030",
};
const lightStyle = {
  backgroundColor: "#fff",
  borderBottom: "1px solid #303030",
};

const SideNav = ({ isDark, setIsDark }) => {
  const toggle = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <div className={styles.root}>
        <div className={styles.menu}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={isDark ? darkStyle : lightStyle}
          >
            <Menu.Item key="1">About Me</Menu.Item>
            <Menu.Item key="2">Education</Menu.Item>
            <Menu.Item key="3">Skills</Menu.Item>
            <Menu.Item key="4">Experience</Menu.Item>
            <Menu.Item key="5">Interest</Menu.Item>
            <Menu.Item key="6">Profiles &amp; Contact</Menu.Item>
          </Menu>
        </div>
        <div
          className={styles.rightMenu}
          style={isDark ? darkStyle : lightStyle}
        >
          <Switch
            checked={!isDark}
            onChange={toggle}
            unCheckedChildren={<BsMoon />}
            checkedChildren={<BsSun />}
          />
        </div>
      </div>
    </>
  );
};

export default SideNav;
