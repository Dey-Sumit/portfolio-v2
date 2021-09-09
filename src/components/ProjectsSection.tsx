import { FC, LegacyRef, useState } from "react";
import { projects as allProjects } from "@libs/data";
import { Category } from "@libs/types";
import ProjectsNavbar from "./ProjectsNavbar";
import { stagger } from "@libs/variants";
import { motion } from "framer-motion";
import Project from "./Project";

import ProjectCardBig from "./ProjectCardBig";
import { GiConvergenceTarget } from "react-icons/gi";
import SectionTitle from "./SectionTitle";
import SectionContainer from "./SectionContainer";

const ProjectsSection: FC<{
  projectSectionRef: LegacyRef<HTMLDivElement>;
}> = ({ projectSectionRef }) => {
  console.log({ projectSectionRef });

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
    <SectionContainer id="projects">
      <SectionTitle title="Some of my works" />
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col my-4 space-y-12 ">
          {projects.map((project, i) => (
            <ProjectCardBig {...project} key={i} />
          ))}
        </div>

        <div className="flex items-center space-x-2 text-lg tracking-wider font-hina">
          <GiConvergenceTarget />
          <span>Here are some other projects</span>
        </div>

        <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
        <motion.div
          className="grid grid-cols-6 gap-6 mt-10 md:gap-12"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {[...projects, ...projects].map((project, i) => (
            <Project {...project} key={i} />
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
