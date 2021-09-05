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
    <div className="w-full ">
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
      <motion.div
        className="grid grid-cols-6 gap-12 px-20 mt-10"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {/* {projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.name}
            setShowDetail={setShowDetail}
            showDetail={showDetail}
          />
        ))} */}
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
