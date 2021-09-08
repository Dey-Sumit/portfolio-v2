import { useState } from "react";
import { projects as allProjects } from "@libs/data";
import { Category } from "@libs/types";
import ProjectsNavbar from "./ProjectsNavbar";
import { stagger } from "@libs/variants";
import { motion } from "framer-motion";
import Project from "./Project";

import ProjectCardBig from "./ProjectCardBig";
import { GiConvergenceTarget } from "react-icons/gi";
const ProjectsSection = () => {
  const [projects, setProjects] = useState(allProjects);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(allProjects);
      setActive(category);
      return;
    }

    const filteredProjects = allProjects.filter((project) => project.category.includes(category));
    setProjects(filteredProjects);
    setActive(category);
  };

  return (
    <div className="w-full px-6 py-10 md:px-40">
      <div className="flex items-center mb-10 space-x-2 ">
        <h1 className="text-3xl font-bold tracking-wide text-green-400 font-hina">
          Some of my works{" "}
        </h1>
        <div className="flex-1 w-10 h-[1px] bg-green-400"> </div>
      </div>
      {/* Large Card */}
      {/* <ProjectCardBig image={twitty} /> */}

      <div className="flex flex-col mb-4 space-y-12">
        {projects.map((project) => (
          <ProjectCardBig {...project} />
        ))}
      </div>

      <div className="flex items-center mb-4 space-x-2 text-lg tracking-wider font-hina">
        <GiConvergenceTarget />
        <span>All Projects</span>
      </div>

      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
      <motion.div
        className="grid grid-cols-6 gap-6 mt-10 md:gap-12"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {[...projects, ...projects].map((project) => (
          <Project {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
