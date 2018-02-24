import React, { Component } from "react";
import _ from "lodash";
import * as consts from "./consts";
import { Row, Col, Card, Icon, Avatar } from "antd";

const { Meta } = Card;

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          {_.map(consts.profiles, p => {
            return (
              <Col span={5}>
                <a href={p.url} key={p.url}>
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
