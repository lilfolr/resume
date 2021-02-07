import React from "react";

// UI
import { BsMoon, BsSun } from "react-icons/bs";
import { Menu, Switch } from "antd";

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
  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.root}>
        <div className={styles.menu}>
          <Menu
            mode="horizontal"
            selectedKeys={[]}
            style={isDark ? darkStyle : lightStyle}
          >
            <Menu.Item key="1" onClick={() => scroll("aboutMe")}>
              About Me
            </Menu.Item>
            <Menu.Item key="2" onClick={() => scroll("education")}>
              Education
            </Menu.Item>
            <Menu.Item key="3" onClick={() => scroll("skills")}>
              Skills
            </Menu.Item>
            <Menu.Item key="4" onClick={() => scroll("experience")}>
              Experience
            </Menu.Item>
            <Menu.Item key="5" onClick={() => scroll("interests")}>
              Interests/Activities
            </Menu.Item>
            <Menu.Item key="6" onClick={() => scroll("profiles")}>
              Profiles &amp; Contact
            </Menu.Item>
          </Menu>
        </div>
        <div
          className={styles.rightMenu}
          style={isDark ? darkStyle : lightStyle}
        >
          <Switch
            checked={!isDark}
            onChange={toggle}
            unCheckedChildren={
              <div style={{ paddingTop: "2px" }}>
                <BsMoon />
              </div>
            }
            checkedChildren={
              <div style={{ paddingTop: "2px" }}>
                <BsSun />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default SideNav;
