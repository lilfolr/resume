import React from "react";
import _ from "lodash";

import styles from "./index.module.css";

const Experience = ({ isDark }) => {
  const color = isDark ? "#EEE" : "#000";

  return (
    <div style={{ color, padding: "30px" }} id="interests">
      <h2 style={{ color }}>Interests &amp; Activities</h2>
      <div className={styles.rootDiv}>
        <div className={styles.title}>
          <span className={styles.role}>Certificates / Awards Received</span>
        </div>
        <div>
          <ul>
            <li>
              The Institute of Engineers, Australia award for Engineering
              Studies: 2012.
            </li>
            <li>
              MS: Programming in HTML5 with JavaScript and CSS3 Specialist –
              Microsoft
            </li>
            <li>MCPS: Microsoft Certified Professional - Microsoft </li>
            <li>Full Academics Colours 2012</li>
            <li>
              <a href="https://dukeofed.com.au/" target="_blank">
                Duke of Edinburgh Bronze Award
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className={styles.title}>
          <span className={styles.role}>VOLUNTEER EXPERIENCE</span>
        </div>
        <div>
          <ul>
            <li>
              Mentor for{" "}
              <a href="https://shecodes.com.au/" target="blank">
                SheCodes
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className={styles.title}>
          <span className={styles.role}>Own Projects</span>
        </div>
        <div>
          <ul>
            <li>
              Adapted the Linux kernel networking stack to create a custom
              TCP-like protocol
            </li>
            <li>
              Created a IPTables firewall simulator using docker containers and
              extracted IPTables kernel modules.
              <br />
              <a href="https://github.com/lilfolr/GENG5511" target="_blank">
                https://github.com/lilfolr/GENG5511
              </a>
            </li>
            <li>
              Built a react native bitbucket app <br />
              <a
                href="https://play.google.com/store/apps/details?id=com.lrlilford.bitbox"
                target="_blank"
              >
                https://play.google.com/store/apps/details?id=com.lrlilford.bitbox
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
