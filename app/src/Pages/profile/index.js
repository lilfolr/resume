import React, { Component } from "react";
import _ from "lodash";
import * as consts from "./consts";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

class Profile extends Component {

  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
      <h2>Web Profiles</h2>
        <Row gutter={16}>
          {_.map(consts.profiles, p => {
            return (
              <Col span={6}>
                <a s href={p.url} key={p.url}>
                  <Card>
                    <Meta
                      avatar={p.avatar}
                      title={p.title}
                      description={p.url}
                    />
                  </Card>
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Profile;
