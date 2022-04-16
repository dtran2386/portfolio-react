import weatherApp from "../images/react-weather-app.PNG";

const header = {
  homepage: "",
  title: "DKT",
};

const about = {
  name: "Dylan Tran",
  role: "Full Stack Engineer",
  description:
    "4+ years of experience in analyzing, designing, developing and integrating Front-End & Back-End based applications. Experience in developing applications using RESTful Web Services. Experience in developing web applications using HTML, CSS, JavaScript, React, NodeJS, and various other technologies.",
  resume:
    "https://docs.google.com/document/d/e/2PACX-1vR9XyhtYmIp6r3WHJ9bbCuSDcMltp0ZAV9T4QmzL8bjgBUGna_-7nKphYhRUApTJscVA8wKrrjtGym9/pub",
  social: {
    linkedin: "https://www.linkedin.com/in/dylanktran/",
    github: "https://github.com/dtran2386",
  },
};

const projects = [
  {
    name: "React Weather App with Geolocation",
    image: weatherApp,
    stack: ["React", "+", "CSS"],
    sourceCode: "https://github.com/dtran2386/react-weather-app",
    livePreview: "https://reactweatherapp11.netlify.app/",
  },
  {
    name: "Project 2",
    image:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    image:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "ES6",
  "React",
  "Redux",
  "HTML",
  "CSS",
  "NodeJS",
  "Express",
  "REST",
  "SQL",
  "MongoDB",
  "SSR",
  "Webpack",
  "Git",
  "DevOps",
  "Ansible | Ansible Tower",
  "CI | CD",
  "Linux CLI",
  "Material UI",
];

const contact = {
  email: "dtran2386@gmail.com",
};

export { header, about, projects, skills, contact };
