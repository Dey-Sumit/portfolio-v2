import { useState } from "react";
import { projects as allProjects } from "@libs/data";
import { Category } from "@libs/types";
import ProjectsNavbar from "./ProjectsNavbar";
import ProjectCard from "./ProjectCard";
import { stagger } from "@libs/variants";
import { motion } from "framer-motion";
import Project from "./Project";
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
  const [showDetail, setShowDetail] = useState<null | Number>(null);

  return (
    <div className="w-full py-10">
      <div className="flex items-center px-4 mb-6 space-x-2 md:px-40">
        <h1 className="text-2xl font-bold text-yellow-400 ">Projects </h1>
        <div className="flex-1 w-10 h-[1px] bg-yellow-400"> </div>
      </div>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
      <motion.div
        className="grid grid-cols-6 gap-6 px-4 mt-10 md:gap-12 md:px-20"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
