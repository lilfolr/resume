import React from "react";
import _ from "lodash";
import { Collapse, Descriptions, Table } from "antd";

const { Panel } = Collapse;

const Education = ({ isDark }) => {
  const color = isDark ? "#EEE" : "#000";
  const text = "";

  return (
    <div style={{ color, padding: "30px" }} id="education">
      <h2 style={{ color }}>Education</h2>
      <Collapse ghost>
        <Panel header="Masters" key="3">
          <Descriptions bordered column={2}>
            <Descriptions.Item label="Degree">
              Master of Professional Engineering
            </Descriptions.Item>
            <Descriptions.Item label="University">
              University of Western Australia
            </Descriptions.Item>
            <Descriptions.Item label="Specialisation" span={2}>
              Software Engineering
            </Descriptions.Item>
          </Descriptions>
        </Panel>
        <Panel header="Bachelors" key="2">
          <Descriptions bordered column={2}>
            <Descriptions.Item label="Degree">
              Bachelor of Science
            </Descriptions.Item>
            <Descriptions.Item label="University">
              University of Western Australia
            </Descriptions.Item>
            <Descriptions.Item label="Degree Specific Major">
              Engineering Science
            </Descriptions.Item>
            <Descriptions.Item label="Second Major">
              Computer Science
            </Descriptions.Item>
          </Descriptions>
        </Panel>
        <Panel header="High School" key="1">
          <Descriptions bordered column={2}>
            <Descriptions.Item label="School" span={2}>
              Hale
            </Descriptions.Item>
            <Descriptions.Item label="Year 12 subjects" span={2}>
              <Table
                pagination={false}
                columns={[
                  { title: "Subject", dataIndex: "s" },
                  { title: "Unit", dataIndex: "u" },
                ]}
                dataSource={[
                  {
                    s: "Engineering Studies",
                    u: "3A/3B",
                  },
                  {
                    s: "Mathematics",
                    u: "3C/3D",
                  },
                  {
                    s: "Physics",
                    u: "3A/3B",
                  },
                  {
                    s: "Chemistry",
                    u: "3A/3B",
                  },
                  {
                    s: "Mathematics: Specialist",
                    u: "3C/3D",
                  },
                  {
                    s: "English",
                    u: "3A/3B",
                  },
                ]}
              />
            </Descriptions.Item>
          </Descriptions>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Education;
