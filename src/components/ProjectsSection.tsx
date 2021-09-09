import { FC, LegacyRef, useEffect, useState } from "react";
import { projects as allProjects } from "@libs/data";
import { Category } from "@libs/types";
import ProjectsNavbar from "./ProjectsNavbar";
import { stagger } from "@libs/variants";
import { motion, useAnimation } from "framer-motion";
import Project from "./Project";

import ProjectCardBig from "./ProjectCardBig";
import { GiConvergenceTarget } from "react-icons/gi";
import SectionTitle from "./SectionTitle";
import SectionContainer from "./SectionContainer";
import { useInView } from "react-intersection-observer";
import { fadeIn, textContainer } from "variants";
import AnimateWhenVisible from "./AnimateWhenVisible";

const ProjectsSection = () => {
  const [projects, setProjects] = useState(allProjects);
  const [active, setActive] = useState("all");
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  useEffect(() => {
    if (inView1) {
      controls.start("animate");
    }
  }, [controls, inView1]);

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
      <motion.div className="flex flex-col space-y-4">
        <AnimateWhenVisible variants={textContainer}>
          <motion.div className="flex flex-col my-4 space-y-12 " variants={textContainer}>
            <ProjectCardBig project={projects[0]} />
            <ProjectCardBig project={projects[1]} reverse />
            <ProjectCardBig project={projects[2]} />
            {/* {projects.map((project, i) => (
            ))} */}
          </motion.div>
        </AnimateWhenVisible>

        <motion.div
          variants={fadeIn("up")}
          className="flex items-center space-x-2 text-lg tracking-wider font-hina"
        >
          <GiConvergenceTarget />
          <span>Here are some other projects</span>
        </motion.div>

        <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
        <AnimateWhenVisible variants={textContainer}>
          <motion.div variants={textContainer} className="grid grid-cols-6 gap-6 mt-10 md:gap-12">
            {[...projects].map((project, i) => (
              <Project {...project} key={project.name} />
            ))}
          </motion.div>
        </AnimateWhenVisible>
      </motion.div>
    </SectionContainer>
  );
};

export default ProjectsSection;
