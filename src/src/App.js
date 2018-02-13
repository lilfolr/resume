import React, { Component } from 'react';
import './App.css';

import { Layout, Menu, Icon } from "antd";
import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.onCollapse = this.onCollapse.bind(this);
    this.state = {collapsed: false}
  }

  onCollapse(collapsed) {
    this.setState({collapsed})
  }
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Education</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Skills</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="desktop" />
              <span>Experience</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="desktop" />
              <span>Interests</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "16px 16px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Content here
            </div>
          </Content>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default App;
