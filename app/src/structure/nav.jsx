import React, { useEffect, useState } from "react";

// UI
import { BsMoon, BsSun } from "react-icons/bs";
import { Layout, Menu, Switch } from 'antd';

import darkVars from './dark.json';
import lightVars from './light.json';
import styles from "./nav.module.css";


const SideNav = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const vars = isDark ? darkVars : lightVars;
    window.less.modifyVars(vars)
  }, [isDark])

  const toggle = () => {
    setIsDark(!isDark);
  }
  return <>
    <div className={styles.logo} />
    <Menu mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
      <div className={styles.rightMenu}>
        <Switch checked={!isDark} onChange={toggle} unCheckedChildren={<BsMoon />} checkedChildren={<BsSun />} />
      </div>
    </Menu>
  </>
}

export default SideNav;