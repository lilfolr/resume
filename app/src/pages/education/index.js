import React from "react";
import _ from "lodash";
import { Collapse, Descriptions, Table, Typography } from "antd";

import "./index.css";

const { Panel } = Collapse;
const { Title } = Typography;

const Education = ({ isDark }) => {
  const color = isDark ? "#EEE" : "#000";
  const background = isDark ? "#1b1b1b" : "#eff2f5";

  return (
    <div style={{ color, padding: "30px" }} id="education">
      <h2 style={{ color }}>Education</h2>
      <Title style={{ color }} level={4}>
        Masters
      </Title>
      <p>
        <span>
          <b>Degree:</b> Master of Professional Engineering
        </span>
        <br />
        <span>
          <b>University:</b> University of Western Australia
        </span>
        <br />
        <span>
          <b>Specialisation:</b> Software Engineering
        </span>
        <br />
      </p>
      <Title style={{ color }} level={4}>
        Bachelors
      </Title>
      <p>
        <span>
          <b>Degree:</b> Bachelor of Science
        </span>
        <br />
        <span>
          <b>University:</b> University of Western Australia
        </span>
        <br />
        <span>
          <b>Degree Specific Major:</b> Engineering Science
        </span>
        <br />
        <span>
          <b>Second Major:</b> Computer Science
        </span>
        <br />
      </p>
      <Title style={{ color }} level={4}>
        High School
      </Title>
      <p>
        <span>
          <b>School:</b> Hale
        </span>
        <br />
        <b>Year 12 Subjects:</b>
        <br />
        <ul>
          <li>Engineering Studies 3A/3B</li>
          <li>Mathematics 3C/3D</li>
          <li>Physics 3A/3B</li>
          <li>Chemistry 3A/3B</li>
          <li>Mathematics Specialist 3C/3D</li>
          <li>English 3A/3B</li>
        </ul>
      </p>
    </div>
  );
};

export default Education;
