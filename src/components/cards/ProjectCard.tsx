import { Project as IProject } from "@libs/types";
import { motion } from "framer-motion";
import { FC } from "react";
import { AiOutlineFolder } from "react-icons/ai";

import { FiExternalLink, FiGithub } from "react-icons/fi";
import { fadeIn } from "@libs/variants";

const ProjectCard: FC<IProject> = ({ deployed_url, category, points, github_url, key_techs, name }) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      variants={fadeIn("up")}
      key={name}
      className="flex flex-col p-4 space-y-4 bg-[#040404] border border-gray-600 bg-gradient rounded-md shadow-xl col-span-full sm:col-span-3 md:col-span-2 projectCard"
    >
      <div className="flex items-center justify-between">
        <AiOutlineFolder className="w-10 h-10 text-green-400" />
        <div className="flex space-x-4 text-gray-300">
          <FiGithub className="w-6 h-6 cursor-pointer" onClick={() => openLink(github_url)} />
          <FiExternalLink className="w-6 h-6 cursor-pointer" onClick={() => openLink(deployed_url)} />
        </div>
      </div>
      <h2 className="text-xl">{name}</h2>
      <div className="flex flex-col space-y-2 text-sm sm:text-base">
        {points.map((point, i) => (
          <p key={i}>{point}</p>
        ))}
      </div>
      <div className="flex flex-wrap text-sm font-light text-green-400 sm:text-base ">
        {key_techs?.map((tech) => (
          <span className="p-[3px] m-[1.5px]" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
