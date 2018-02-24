// Functional
import React, { Component } from "react";
import _ from "lodash";
import {menu} from "./menu";

// Pages
import Profile from "./Pages/profile";

// UI
import { Layout, Menu, Icon, BackTop } from "antd";
import "./App.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;


class App extends Component {
  constructor(props) {
    super(props);

    this.setPage = this.setPage.bind(this);
    this.getPage = this.getPage.bind(this);

    this.state = {page: "1"};
  }

  setPage = ({key}) => {
    this.setState({page: key});
  }
  getPage() {
    const {page} = this.state
    switch (page) {
      case "6":
        return (<Profile />)
      default:
        return "Page here";
    }
  }
  render() {
    const {page} = this.state;
    const getPage = this.getPage;

    return (
      <div className="App">
        <BackTop />
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[String(page)]}
              style={{ lineHeight: "64px" }}
              onClick={this.setPage}
            >
              {_.map(menu, i => {
                return (
                  <Menu.Item key={i.id} >
                    <Icon type={i.icon} />
                    <span>{i.text}</span>
                  </Menu.Item>
                )
              })}
            </Menu>
          </Header>
          <Content style={{ padding: "20px 50px" }}>
            {getPage()}
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
