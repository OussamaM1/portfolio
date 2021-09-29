import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaHackerrank,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Makhlouk Oussama. All Rights Reserved.`,
  author: {
    name: "Makhlouk Oussama",
    accounts: [
      {
        url: "https://github.com/OussamaM1",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://leetcode.com/OussamaM1/",
        label: "LeetCode Account",
        type: "orange",
        icon: <SiLeetcode />,
      },
      {
        url: "https://www.hackerrank.com/OussamaMakhlouk",
        label: "Hackerrank Account",
        type: "green",
        icon: <FaHackerrank />,
      },
      {
        url: "https://twitter.com/OMakhlouk",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />,
      },
      {
        url: "https://www.linkedin.com/in/oussama-makhlouk/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://stackoverflow.com/users/15061745/oussama-makhlouk",
        label: "Stack Overflow Account",
        type: "orange",
        icon: <FaStackOverflow />,
      },
      {
        url: "mailto:makhloukoussama1@gmail.com",
        label: "Mail Oussama",
        type: "red",
        icon: <FiMail />,
      },
    ],
  },
};

export default siteConfig;
