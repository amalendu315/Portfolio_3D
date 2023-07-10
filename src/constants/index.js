import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  airbnb,
  defi,
  cryptonation,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Visudh Ajivam Private Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2021 - September 2021",
    points: [
      "Developing and maintaining web applications using HTML, CSS and Javascript technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cyber Crime Analyst",
    company_name: "Cyberops Infosec LLP",
    icon: shopify,
    iconBg: "#383E56",
    date: "December 2021 - February 2022",
    points: [
      "Investigating and analyzing all response activities related to cyber incidents.",
      "Performing digital forensics and incident response activities.",
      "Conducting research on emerging security threats.",
      "Developing and maintaining incident response plans.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Vebholic Private Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - February 2023",
    points: [
      "Developing and maintaining web applications using MERN technologies with Typescript ORM.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "Property Rental",
    description:
      "Web-based platform that allows users to search, book, and manage property rentals from various providers, providing a convenient and efficient solution for accomodation needs for vacations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link:
      "https://github.com/amalendu315/dynamic-typescript-airbnb",
  },
  {
    name: "Crypto Exchange Platform",
    description:
      "A platform that allows users to exchange cryptocurrencies. It uses Metamask to connect to the Ethereum blockchain and perform transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: defi,
    source_code_link: "https://github.com/amalendu315/DeFi--Crypto",
  },
  {
    name: "Crypto Information Portal",
    description:
      "A web-based platform that provides information about cryptocurrencies, including their price, market cap, volume, and other metrics. It also provides a dashboard to track the performance of the user's portfolio.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cryptonation,
    source_code_link: "https://github.com/amalendu315/CryptoNation",
  },
];

export { services, technologies, experiences, testimonials, projects };