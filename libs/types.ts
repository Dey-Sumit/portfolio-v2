import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Experience {
  company: string;
  jobTitle: string;
  timeline: string;
  points: string[];
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface Project {
  name: string;
  points: string[];
  image: StaticImageData;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
  id: number;
}

export type Category = "react" | "express" | "mongo" | "socket" | "tailwind" | "next";

export interface Youtube {
  id: number;
  title: string;
  image: StaticImageData;
  youtubeLink: string;
  views: string;
  likes: string;
}
