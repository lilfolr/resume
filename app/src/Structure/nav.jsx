import React, { useEffect, useState } from "react";

// UI
import { BsMoon, BsSun } from "react-icons/bs";
import { Layout, Menu } from 'antd';

import styles from "./nav.module.css";

const { Header, Content, Footer, Sider } = Layout;

const SideNav = () => {
  return <>
    <div className={styles.logo} />
    <Menu mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </>
}

export default SideNav;