// Functional
import React, { useState } from "react";
import _ from "lodash";

// Structure
import Nav from "./structure/nav"

// UI
import { Layout, BackTop } from "antd";
const { Header, Content, Footer } = Layout;


const App = () => {
  return (
    <>
      <BackTop />
      <Layout className="layout">
        <Header style={{padding: "0"}}>
          <Nav />
        </Header>
        <Content >
          <span>Hello</span>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Leighton Lilford - Last updated 21 Feb 2018
        </Footer>
      </Layout>
      </>
  )
}


export default App;
