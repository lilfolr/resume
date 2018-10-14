import React, { Component } from "react";
import _ from "lodash";
import * as consts from "./consts";
import { Row, Timeline } from "antd";

class Profile extends Component {

  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
      <h2>Education & Certificates</h2>
      <br/>
        <Row gutter={16}>
          <Timeline>
            {_.map(consts.education, e => {
              return <Timeline.Item color="blue" key={e.key}>{e.title}</Timeline.Item>
            })
            }
          </Timeline>
        </Row>
      </div>
    );
  }
}

export default Profile;
