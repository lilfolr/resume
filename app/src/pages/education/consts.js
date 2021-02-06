import React from "react";

import Linkedin_logo from "../../assets/linkedin.png";
import Github_logo from "../../assets/github.png";
import Githublight_logo from "../../assets/githubLight.png";
import SO_logo from "../../assets/stackoverflow.png";
const Gravatar_logo =
  "https://www.gravatar.com/avatar/41d8cdc18dede0f4cb3771367addac36?s=32";

export const profiles = (isDark) => {
  const color = isDark ? "#EEE" : "#000";
  return [
    {
      url: "https://linkedin.com/in/leightonlilford",
      title: <span style={{ color }}>LinkedIn</span>,
      avatar: <img src={Linkedin_logo} alt="LinkedIn Logo" />,
    },
    {
      url: "https://github.com/lilfolr",
      title: <span style={{ color }}>GitHub</span>,
      avatar: (
        <img src={isDark ? Githublight_logo : Github_logo} alt="Github Logo" />
      ),
    },
    {
      url: "https://stackoverflow.com/users/3535990/",
      title: <span style={{ color }}>StackOverflow</span>,
      avatar: (
        <img
          src={SO_logo}
          width="34px"
          height="34px"
          alt="Stackoverflow Logo"
        />
      ),
    },
    {
      url: "https://lrlilford.com",
      title: <span style={{ color }}>Website</span>,
      avatar: <img src={Gravatar_logo} alt="Gravitar logo" />,
    },
  ];
};
