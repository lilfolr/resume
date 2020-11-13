// Functional
import React, { useEffect, useState } from "react";
import _ from "lodash";

// Structure
import Nav from "./structure/nav"

// UI
import { Layout, BackTop, Affix } from "antd";
import { Row, Col } from 'antd';
// Styles
import lstyles from "./App.light.module.css";
import dstyles from "./App.dark.module.css";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const styles = isDark ? dstyles : lstyles;

  useEffect(() => {
    document.getElementById("loadingDiv").style["display"] = "none";
  },[])


  return (
    <div >
      <BackTop />
      <Layout className={styles.root}>
        <Affix >
          <Header style={{ padding: "0" }}>
            <Nav isDark={isDark} setIsDark={setIsDark} />
          </Header>
        </Affix>
        <Content>
          <Row>
            <Col flex={1} co/>
            <Col flex={3} className={styles.content}>Content</Col>
            <Col flex={1} />
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }} className={styles.root}>
          Leighton Lilford - Last updated 21 Feb 2018
        </Footer>
      </Layout>
    </div>
  )
}


export default App;
