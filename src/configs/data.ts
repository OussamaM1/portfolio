import CROAS from "../assets/images/CROAS.jpg";
import ENSA from "../assets/images/ENSA.jpg";
import react from "../assets/images/logos/react.png";
import mysql from "../assets/images/logos/mysql.png";
import javascript from "../assets/images/logos/javascript.png";
import typescript from "../assets/images/logos/typescript.png";
import java from "../assets/images/logos/java.png";
import golang from "../assets/images/logos/golang.png";
import spring from "../assets/images/logos/spring.png";
import oracleDB from "../assets/images/logos/oracleDB.png";
import tailwindcss from "../assets/images/logos/tailwindcss.jpg";
import chakraui from "../assets/images/logos/chakraui.jpg";

export const experiences = [
  {
    title: "Regional Council of the Order of Architects of the south (CROAS)",
    alt: "CROAS",
    role: "Software Engineer intern",
    description:
      "As part of my end-of-year project, I did an internship at CROAS, an architect's council under the theme: The development and implementation of a web application for architecture project management, that simplified the process of submitting, verifying, and retrieving requests for new projects.",
    skills: ["react", "spring boot", "tailwind css", "javascript", "mysql"],
    period: "March 2021 – end of June 2021",
    logo: CROAS,
  },
];
export const education = [
  {
    title: "National school of applied sciences - Agadir",
    alt: "ENSA Agadir",
    role: "Master degree in Software engineering",
    description:
      "Three full years of theoretical courses to find a solid basis in logical reasoning, helping to improve one's general thinking skills. Furthermore, most courses are supported by practical seminars and end-of-course projects, intended to develop student's skills in the real world.",
    skills: ["Engineer", "Software engineering"],
    period: "2019 – present",
    logo: ENSA,
  },
  {
    title: "National school of applied sciences - Agadir",
    alt: "ENSA Agadir",
    role: "Integrated preparatory cycle",
    description:
      "Two first preparatory years for the engineering cycle have as goals: mastery of fundamental disciplines, solid foundation in mathematics and engineering sciences., acquisition of technical & methodological, and reinforcement of autonomy.",
    skills: ["Engineer"],
    period: "2017 – 2019",
    logo: ENSA,
  },
];
export const skills = [
  {
    name: "Java",
    link: "https://www.java.com/",
    image: java,
  },
  {
    name: "Golang",
    link: "https://www.golang.org/",
    image: golang,
  },
  {
    name: "Spring framework",
    link: "https://www.spring.io/",
    image: spring,
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    image: react,
  },
  {
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
    image: tailwindcss,
  },
  {
    name: "Chakra UI",
    link: "https://chakra-ui.com/",
    image: chakraui,
  },
  {
    name: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: javascript,
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    image: typescript,
  },

  {
    name: "Mysql",
    link: "https://www.mysql.com/",
    image: mysql,
  },
  {
    name: "Oracle database",
    link: "https://www.oracle.com/",
    image: oracleDB,
  },
];
