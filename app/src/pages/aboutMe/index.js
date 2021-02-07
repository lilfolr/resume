import React from "react";
import _ from "lodash";

const AboutMe = ({ isDark }) => {
  const color = isDark ? "#EEE" : "#000";

  return (
    <div style={{ color, padding: "30px" }} id="aboutMe">
      <h2 style={{ color }}>About Me</h2>
      <p>
        Software engineering professional with proven experience in web
        application development and full application lifecycle development.
        Known for passion in developing innovative solutions that expedite the
        efficiency of project delivery, as well as the unique ability to apply
        strategic thinking in alignment of an organisation’s vision. Collaborate
        well with colleagues and management by actively listening to other’s
        perspectives while offering creative solutions to complex problems. Able
        to exercise leadership and take on a variety of roles within the team.
        Keen knowledge in cybersecurity, with a desire to expand knowledge in
        the area.
      </p>
    </div>
  );
};

export default AboutMe;
