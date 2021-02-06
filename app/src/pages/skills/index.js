import React from "react";
import _ from "lodash";
import { Tabs, List, Card, Rate } from "antd";

const { TabPane } = Tabs;

const Education = ({ isDark }) => {
  const color = isDark ? "#EEE" : "#000";

  const data = {
    p: [
      {
        name: "Python",
        rating: 5,
        skills: "Django; DjangoRestFramework; Flask; Celery",
      },
      {
        name: "JavaScript",
        rating: 5,
        skills: "ReactJS; Jest",
      },
      {
        name: "Shell Scripting",
        rating: 3,
        skills: "Bash; Fish; Make",
      },
      {
        name: "SQL",
        rating: 3,
        skills: "PostgreSQL",
      },
    ],
    t: [
      {
        name: "Git",
        rating: 5,
      },
      {
        name: "Linux",
        rating: 5,
        skills: "AmazonLinux; Ubuntu; Arch Linux",
      },
      {
        name: "AWS",
        rating: 5,
        skills:
          "CloudFormation; CloudWatch; EC2; Lambda; RDS; Route53; SNS/SQS; IAM; DynamoDB; S3",
      },
      {
        name: "Windows",
        rating: 4,
      },
      {
        name: "Bitbucket",
        rating: 4,
        skills: "Bitbucket Pipelines",
      },
      {
        name: "GitHub",
        rating: 4,
      },
      {
        name: "TravisCI",
        rating: 4,
      },
      {
        name: "TeamCity",
        rating: 3,
      },
    ],
    m: [
      {
        name: "Agile Development",
        rating: 4,
      },
      {
        name: "DevOps",
        rating: 4,
      },
    ],
  };

  const innerPane = (data) => (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card size="small">
            <div style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, position: "relative" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    fontSize: "16px",
                    position: "absolute",
                    bottom: "4px",
                  }}
                >
                  <b>{item.name}</b>:
                </span>
              </div>
              <div>
                <Rate disabled value={item.rating} />
              </div>
            </div>
            {item.skills && (
              <div>
                <div>
                  <b>Specific Skills</b>
                </div>
                <div>{item.skills}</div>
              </div>
            )}
          </Card>
        </List.Item>
      )}
    />
  );

  return (
    <div style={{ color, padding: "30px" }} id="skills">
      <h2 style={{ color }}>Skills</h2>
      <Tabs type="card">
        <TabPane tab="Programming Languages" key="1">
          {innerPane(data.p)}
        </TabPane>
        <TabPane tab="Tools &amp; Systems" key="3">
          {innerPane(data.t)}
        </TabPane>
        <TabPane tab="Methadologies" key="2">
          {innerPane(data.m)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Education;
