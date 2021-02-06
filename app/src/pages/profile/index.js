import React, { Component } from "react";
import _ from "lodash";
import * as consts from "./consts";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

const Profile = ({ isDark }) => {
  const background = isDark ? "#1b1b1b" : "#ECECEC";
  const color = isDark ? "#EEE" : "#000";
  const secondColor = isDark ? "#AAA" : "#888";
  const cardStyle = isDark
    ? {
        backgroundColor: background,
        color: color,
      }
    : null;

  return (
    <div style={{ background, color, padding: "30px" }}>
      <h2 style={{ color }}>Web Profiles</h2>
      <Row gutter={16}>
        {_.map(consts.profiles(isDark), (p) => {
          return (
            <Col span={6}>
              <a target="_blank" href={p.url} key={p.url}>
                <Card hoverable style={cardStyle}>
                  <Meta
                    style={{ color }}
                    avatar={p.avatar}
                    title={p.title}
                    description={
                      <span style={{ color: secondColor }}>{p.url}</span>
                    }
                  />
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Profile;
