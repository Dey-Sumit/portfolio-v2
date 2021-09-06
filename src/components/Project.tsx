import { Project as IProject } from "@libs/types";
import { FC } from "react";
import { BsFolder } from "react-icons/bs";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

const Project: FC<IProject> = ({
  deployed_url,
  category,
  description,
  github_url,
  key_techs,
  name,
}) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col p-4 space-y-6 bg-[#040404] border border-gray-600 bg-gradient rounded-md shadow-xl col-span-full sm:col-span-3 md:col-span-2 projectCard">
      <div className="flex items-center justify-between">
        <FiFolder className="w-10 h-10 text-yellow-500" />
        <div className="flex space-x-4">
          <FiGithub className="w-6 h-6 cursor-pointer" onClick={() => openLink(github_url)} />
          <FiExternalLink
            className="w-6 h-6 cursor-pointer"
            onClick={() => openLink(deployed_url)}
          />
        </div>
      </div>
      <h2 className="text-2xl">{name}</h2>
      <h6 className="text-gray-300">{description}</h6>
      <div className="flex flex-wrap space-x-4 font-light text-gray-100">
        {key_techs?.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;
