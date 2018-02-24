import React, { Component } from "react";
import _ from "lodash";
import {menu} from "./menu";

import { Layout, Menu, Icon, BackTop } from "antd";
import "./App.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BackTop />
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              {_.map(menu, i => {
                return (
                  <Menu.Item key={i.id}>
                    <Icon type={i.icon} />
                    <span>{i.text}</span>
                  </Menu.Item>
                )
              })}
            </Menu>
          </Header>
          <Content style={{ padding: "20px 50px" }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              Content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Leighton Lilford - Last updated 21 Feb 2018
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
