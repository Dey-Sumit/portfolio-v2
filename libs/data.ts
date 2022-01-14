import { Experience, Project, Youtube } from "@libs/types";

import twitty from "@public/images/projects/twitty.png";
import youTube from "@public/images/projects/youTube.png";
import algorithm from "@public/images/projects/algorithm.png";
import portfolio from "@public/images/youtube/portfolio.jpeg";
import youtubeClone from "@public/images/youtube/youtubeClone.webp";
import swr from "@public/images/youtube/swr.webp";

export const projects: Project[] = [
  {
    id: 1,
    name: "Twitty : Social Media App",
    points: [
      " • Fully functional twitter like MERN Stack Web App",
      " • Populated with authentication, Tweets, Tags, Follow, RealTime Notifications",
    ],
    image: twitty,
    deployed_url: "https://twitty-blue.vercel.app/",
    github_url: "https://github.com/Dey-Sumit/twitter-clone-MERN-client",
    category: ["react", "express", "next", "mongo", "tailwind", "socket"],
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
      " • I am a Dev who loves DSA , So why not combine those ? :)",
      " • This app shows how algorithm works with cool animation",
    ],
    key_techs: ["React", "Firebase", "Framer Motion"],
  },

  {
    id: 3,
    name: "Not YouTube : YouTube Clone",
    image: youTube,
    deployed_url: "https://not-yt.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["react"],
    points: [
      " • YouTube replica created using YouTube API where one can login with his google account and browse just like YouTube ",
      " • User can search videos, subscribe, like, comment, browse other channels , etc",
    ],

    key_techs: ["React", "Redux", "Firebase Auth", "YouTube API", "Sass", "Bootstrap"],
  },

  {
    id: 4,
    name: "Realtime Chat App",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    //TODO type on category
    category: ["express", "socket", "react"],
    points: [
      " • Basic Realtime Chat App where one can create a room can talk to each other",
      " • working on the version_2 of this project",
    ],
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },
  {
    id: 5,
    name: "COVID Tracker",
    points: [
      " • This app shows a statistical view about corona virus over the world",
      " • One of the first projects on React 🙃",
    ],

    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 6,
    name: "Los-Spotify",

    deployed_url: "https://los-spotify.vercel.app",
    github_url: "https://github.com/Dey-Sumit/los-spotify-next",
    category: ["react", "next"],
    points: [" • Spotify Api in action", " • This app will keep providing all the data of your spotify account"],
    key_techs: ["React", "API"],
  },
  {
    id: 7,
    name: "Postwoman",

    deployed_url: "hpostwoman-sandy.vercel.app",
    github_url: "https://github.com/Dey-Sumit/postwoman-web-app-react",
    category: ["react", "next"],
    points: [" • Http API Client like postman", " • User can create new tab, make requests , see response"],
    key_techs: ["React", "axios", "Next"],
  },
];

export const experiences: Experience[] = [
  {
    company: "betterhalf.ai",
    jobTitle: "Frontend Developer ",
    timeline: "Oct 2021 - Present",
    points: ["Working as a full time React & React Native Developer", "I got this job without being interviewed!!!"],
  },
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
    points: ["Working as a part-time freelancer from my 3rd of college", "Successfully completed 4+ Projects"],
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
    youtubeLink: "https://youtu.be/Mos5QJAje28",
    views: "40k+",
    likes: "95%",
  },
  {
    id: 2,
    title: "A+ Developer Portfolio using Next Js , Tailwind and TypeScript",
    image: portfolio,
    youtubeLink: "https://youtu.be/atebfXxl9B4",
    views: "22k+",
    likes: "99%",
  },
  {
    id: 3,
    title: "Advance Web Dev using SWR",
    image: swr,
    youtubeLink: "https://youtu.be/6V0zwzAS5tM",
    views: "1k+",
    likes: "96%",
  },
];
