import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Experience, Project, Service, Skill, Youtube } from "@libs/types";
import twitty from "@public/images/projects/twitty.png";
import youTube from "@public/images/projects/youTube.png";
import algorithm from "@public/images/projects/algorithm.png";
import portfolio from "@public/images/youtube/portfolio.jpeg";
import youtubeClone from "@public/images/youtube/youtubeClone.webp";
import swr from "@public/images/youtube/swr.webp";
// import youTube from "@public/images/projects/youTube.png";
// import youTube from "@public/images/projects/youTube.png";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: Project[] = [
  // {
  //   id: 0,
  //   name: "COVID Tracker",
  //   points: "This app shows a statistical view about corona virus over the world",
  //   image: "/images/covid.jpg",
  //   deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
  //   category: ["react"],
  //   key_techs: ["React", "Chart.js", "Material UI"],
  // },
  {
    id: 1,
    name: "Twitty : Social Media App",
    points: [
      " • Fully functional twitter like MERN Stack Web App",
      " • Populated with authentication, Tweets, Tags, Follow, RealTime Notifications",
    ],
    // points: "This app shows a statistical view about corona virus over the world",
    image: twitty,
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react", "express", "next", "mongo", "tailwind"],
    key_techs: ["React", "Socket", "Tailwind", "TypeScript", "Next", "Express", "REST"],
  },
  {
    id: 2,
    name: "Algorithm Visualizer",
    image: algorithm,
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    points: [
      " • I am a Dev who loves DSA , So why combine those ? :)",
      " • This app shows how an algorithm works with cool animation",
    ],
    key_techs: ["React", "Firebase", "Framer Motion"],
  },

  // {
  //   id: 2,
  //   name: "Realtime Chat App",
  //   image: "/images/chatapp.jpg",
  //   deployed_url: "https://sumit-chat.netlify.app/",
  //   github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
  //   //TODO type on category
  //   category: ["node", "react"],
  //   points: "Basic Realtime Chat App where one can create a room can talk to each other",
  //   key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  // },

  {
    id: 6,
    name: "Not YouTube : YouTube Clone",
    image: youTube,
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["react"],
    points: [
      " • YouTube replica created using YouTube API where one can login with his google account and browse just like YouTube ",
      " • User can search videos, subscribe, like, comment, browse other channels , etc",
    ],

    key_techs: ["React", "Redux", "Firebase Auth", "YouTube API", "Sass", "Bootstrap"],
  },
  // {
  //   id: 9,
  //   name: "Football App",
  //   //TODO add image,github,dep url
  //   image: "/images/football.png",
  //   deployed_url: "https://o-my-goal.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/football-app",
  //   category: ["react"],
  //   points:
  //     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  //   key_techs: ["React", "Redux", "Firebase", "API", "Sass"],
  // },
];

export const experiences: Experience[] = [
  {
    company: "TCS",
    jobTitle: "Frontend Developer Intern",
    timeline: "July 2020 - Jan 2021",
    points: [
      "Worked on an automation project using Selenium that checks the accuracy of tab orders of web elements",
      "Created the frontend in .NET",
    ],
  },
  {
    company: "Freelancer",
    jobTitle: "Freelance Web Developer",
    timeline: "2020 - Present",
    points: [
      "Working as a part-time freelancer from my 3rd of college",
      "Successfully completed 4+ Projects",
    ],
  },
  {
    company: "YouTube",
    jobTitle: "YouTuber @ Backbench Coder",
    timeline: "August 2020 - Present",
    points: [
      "I love to teach because I love to learn!",
      "I create content on Modern Web Development mainly using React and TypeScript",
    ],
  },
];

export const youtubeVideos: Youtube[] = [
  {
    id: 1,
    title: "YouTube Clone using React, Redux & YT API",
    image: youtubeClone,
    youtubeLink: "",
    views: "25k+",
    likes: "95%",
  },
  {
    id: 2,
    title: "A+ Developer Portfolio using Next Js , Tailwind and TypeScript",
    image: portfolio,
    youtubeLink: "",
    views: "10k+",
    likes: "100%",
  },
  {
    id: 3,
    title: "Advance Web Dev using SWR",
    image: swr,
    youtubeLink: "",
    views: "1k+",
    likes: "96%",
  },
];
