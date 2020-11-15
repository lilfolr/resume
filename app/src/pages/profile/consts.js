import React from "react";

import Linkedin_logo from "../../Assets/linkedin.png";
import Github_logo from "../../Assets/github.png";
import SO_logo from "../../Assets/stackoverflow.png";
const Gravatar_logo =
  "https://www.gravatar.com/avatar/41d8cdc18dede0f4cb3771367addac36?s=32";

export const profiles = [
  {
    url: "https://linkedin.com/in/leightonlilford",
    title: "LinkedIn",
    avatar: <img src={Linkedin_logo} alt="LinkedIn Logo" />,
  },
  {
    url: "https://github.com/lilfolr",
    title: "GitHub",
    avatar: <img src={Github_logo} alt="Github Logo" />,
  },
  {
    url: "https://stackoverflow.com/users/3535990/",
    title: "StackOverflow",
    avatar: (
      <img src={SO_logo} width="34px" height="34px" alt="Stackoverflow Logo" />
    ),
  },
  {
    url: "https://lrlilford.com",
    title: "Own website",
    avatar: <img src={Gravatar_logo} alt="Gravitar logo" />,
  },
];
