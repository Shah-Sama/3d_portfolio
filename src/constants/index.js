import {
  hdc,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  python,
  reactjs,
  cloud,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cyberium,
  savi,
  kpmg,
  meta,
  starbucks,
  rivian,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  sigmatec,
  threejs,
  go,
  c,
  csharp,
  java,
  cplusplus,
  airunner,
  thrifty,
  sql,
  r

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Robotics Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "ML/AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cplus",
    icon: cplusplus,
  },
  {
    name: "go",
    icon: go,
  },
  {
    name: "java",
    icon: java,
  },
  // {
  //   name: "r",
  //   icon: r,
  // },
  // {
  //   name: "csharp",
  //   icon: csharp,
  // },
  // {
  //   name: "sql",
  //   icon: sql,
  // },


];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Rivian",
    icon: rivian,
    iconBg: "#383E56",
    date: "September 2024 - April 2025",
    points: [
      "Incoming Software Engineering Intern on the Vehicle Management Software Team"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Cyberium Group",
    icon: cyberium,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Developed software for a multimillion-dollar software company, increasing employee engagement in cybersecurity training through Socket.io for peer-to-peer client communication.",
      "Engineered a secure login system using MySQL databases hosted on Azure, reducing login time by 25% and ensuring robust data management.",
      "Conducted extensive load testing to simulate 1,000+ users using Artillery and Playwright, enhancing system reliability through YAML script-based load balancing.",
      "Created a dynamic and responsive front-end with TypeScript and React, reducing page load times by 30%, while leveraging Node.js for efficient back-end processing.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Savi Finance",
    icon: savi,
    iconBg: "#383E56",
    date: "January 2024 - April 2024",
    points: [
      "Developed a Node.js JSONRPC server that streamlined task management and enhanced client communication.",
      "Boosted web app responsiveness by 40% using web workers and the custom JSONRPC server to offload heavy tasks.",
      "Enhanced CI/CD pipeline efficiency using Jenkins and Git, significantly streamlining deployment processes.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "KPMG",
    icon: kpmg,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: ["Utilized Python, Pandas, and NumPy to analyze datasets, increasing processing efficiency by 25% using OpenPyXL.",
    "Created dynamic data visualizations with Matplotlib and Seaborn, enhancing data-driven decision-making.",
    "Spearheaded successful collaborations with prestigious clients such as Qatar Development Bank, Doha Bank, and QIA.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Sigmatec",
    icon: sigmatec,
    iconBg: "#383E56",
    date: "June 2021 - September 2021",
    points: [
      "Developed a responsive, user-friendly website for a Pakistani charity school, enabling online donations and successfully raising over $8,000 with 600+ active users using HTML/CSS, JavaScript, and Laravel.",
      "Implemented and managed a secure MySQL database for user logins, ensuring data integrity and privacy.",
      "Tested and debugged applications using PHP and Laravel, ensuring robust and error-free functionality.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "AI Music Runner",
    description:
      "AI powered music runner game that has obstacles and uses the spotify API to play music. Music uses skybox AI to determine how you feel and change background",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: airunner,
    source_code_link: "https://github.com/Shah-Sama/Music-VideoGame",
  },
  {
    name: "Thrifty Grocers",
    description:
      "In an effort to combat high grocery prices. Me and my friends took initiative together on an alternative for UBC. I was the web developer for the website which had 50+ orders ",
    tags: [
      {
        name: "Go",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: thrifty,
    source_code_link: "https://github.com/Shah-Sama/ThrifyGrocer",
  },
  {
    name: "Cloud Monitoring Application",
    description:
      "A simple and easy way to see your CPU and Memory metrics using EKS cluster and Docker container.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: cloud,
    source_code_link: "https://github.com/Shah-Sama/Cloud-Monitoring-App",
  },
  {
    name: "ML Heart Disease Classifer",
    description:
      "An ML model degined to predict the likelyhood of heart disease based on predisposed factors such as cholesterol, age, weight etc.",
    tags: [
      {
        name: "R",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter",
        color: "green-text-gradient",
      },
      {
        name: "tidyverse",
        color: "pink-text-gradient",
      },
    ],
    image: hdc,
    source_code_link: "https://github.com/Shah-Sama/Machine-Learning--HDC",
  },
];

export { services, technologies, experiences, projects };
