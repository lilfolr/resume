import React from "react";
import _ from "lodash";
import { Tabs, List, Card, Rate } from "antd";

import styles from "./index.module.css";

const Education = ({ isDark }) => {
  const color = isDark ? "#EEE" : "#000";

  return (
    <div style={{ color, padding: "30px" }} id="experience">
      <h2 style={{ color }}>Experience</h2>
      <div className={styles.rootDiv}>
        <div className={styles.date}>2019-PRESENT</div>
        <div className={styles.title}>
          <span className={styles.role}>
            SOFTWARE DEVELOPMENT ENGINEER - NETWORKING
          </span>
          , AMAZON WEB SERVICES
        </div>
        <div>
          Maintained and built enhancements for several long-standing
          applications used internally by AWS to ensure networking
          infrastructure is both kept up to date, and any blockers or systemic
          issues hindering deployment velocity are revealed. The expertise I
          bring to the team includes advanced awareness of modern frontend
          technologies; excellent knowledge on Linux and AWS services and
          innovative problem-solving skills.
          <br />
          Technologies used in this role:
          <ul>
            <li>ReactJS</li>
            <li>Java Services</li>
            <li>Python Services</li>
            <li>UI Integration tests with Pupeteer</li>
            <li>Followed agile (Kanban &amp; Scrum) workflows</li>
          </ul>
        </div>
        <br />
        <div className={styles.date}>2016-2019</div>
        <div className={styles.title}>
          <span className={styles.role}>Specialist Software Developer</span>,
          BHP
        </div>
        <div>
          Worked on several bespoke applications for BHP’s WAIO assets including
          a fatigue management website, a document management system, and
          recently as a core developer for a global rostering solution.
          <br />
          Some technologies used in this role include:
          <ul>
            <li>Frontend development using ReactJS</li>
            <li>Frontend TDD using Jest</li>
            <li>Python backend development with Django web framework</li>
            <li>
              Deployment orchestration with Ansible &amp; CloudFormation on AWS
            </li>
            <li>CI/CD with BitBucket Pipelines; TravisCI and TeamCity</li>
            <li>Nginx &amp; Gunicorn configuration</li>
            <li>Setup and maintain monitoring and logging on AWS CloudWatch</li>
            <li>Agile workflow using Jira &amp; BitBucket</li>
            <li>
              Open-Source contributions:
              <br />◦{" "}
              <a
                href="https://github.com/BHP-DevHub/react-timeline-9000"
                target="_blank"
              >
                React Timeline 9k
              </a>{" "}
              (Primary maintainer)
              <br />◦{" "}
              <a href="https://github.com/NekR/offline-plugin" target="_blank">
                Offline Plugin for webpack
              </a>
              <br />◦{" "}
              <a href="https://github.com/lins05/slackbot" target="_blank">
                Slack Bot
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className={styles.date}>2015-2016</div>
        <div className={styles.title}>
          <span className={styles.role}>Undergraduate Developer</span>, BHP
        </div>
        <div>
          Tasked with various .net focused assignments, including reverse
          engineering .net binaries to be used in future analysis and
          optimisation projects, and overhauling SSIS packages for BHP’s rail
          operations.
          <ul>
            <li>Asp.net MVC web application</li>
            <li>.net reverse engineering</li>
            <li>MS SQL development</li>
          </ul>
        </div>
        <br />
        <div className={styles.date}>2012-2015</div>
        <div className={styles.title}>
          <span className={styles.role}>Developer</span>, MiX Telematics
        </div>
        <div>
          Assisted the Perth &amp; Dubai offices with bespoke applications and
          scripts to optimise business operations and workflows
          <ul>
            <li>
              Designed schema and maintained SQL databases for collecting and
              maintaining quality control records.
            </li>
            <li>
              Developed asp.net website running on IIS 7 to manage QC processes.
            </li>
            <li>
              Developed and maintain a PHP/MySQL website used to host documents
              for a client.
            </li>
            <li>
              Create ad-hoc client-specific reports, and scripts to help
              efficiency internally.
            </li>
            <li>
              Communication with clients from the mining industry, oil and gas
              industry, postal services and fleet services to provide
              organisation specific solutions.
            </li>
            <li>
              Worked collaboratively with the Dubai IT Manager using active
              directory domain services.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
