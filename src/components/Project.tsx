import { Project as IProject } from "@libs/types";
import { FC } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

const Project: FC<IProject> = ({ deployed_url, category, points, github_url, key_techs, name }) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col p-4 space-y-4 bg-[#040404] border border-gray-600 bg-gradient rounded-md shadow-xl col-span-full sm:col-span-3 md:col-span-2 projectCard">
      <div className="flex items-center justify-between">
        <AiOutlineFolder className="w-10 h-10 text-green-400" />
        <div className="flex space-x-4 text-gray-300">
          <FiGithub className="w-6 h-6 cursor-pointer" onClick={() => openLink(github_url)} />
          <FiExternalLink
            className="w-6 h-6 cursor-pointer"
            onClick={() => openLink(deployed_url)}
          />
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
    </div>
  );
};

export default Project;
