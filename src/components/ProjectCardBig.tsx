import { Project } from "@libs/types";
import { FC } from "react";
import Image from "next/image";

const ProjectCardBig: FC<Project> = ({
  category,
  deployed_url,
  points,
  github_url,
  image,
  name,
  key_techs,
}) => {
  return (
    <div className="flex flex-col space-y-6 md:space-x-8 md:space-y-0 sm:flex-row sm:even:flex-row-reverse ">
      <div className="flex-1 border-gray-400 nextImage">
        <Image width="" height="" src={image} quality={100} objectFit="contain" className="" />
      </div>
      <div className="flex flex-col flex-1 space-y-6 ">
        <h1 className="text-xl sm:text-2xl">{name} </h1>
        <div className="flex flex-col space-y-2 text-base sm:text-lg">
          {points.map((point, i) => (
            <p key={i}>{point}</p>
          ))}
        </div>
        <div className="flex flex-wrap text-sm text-green-400 sm:text-base">
          {key_techs.map((tech) => (
            <span key={tech} className="p-[3px] m-[1.5px]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardBig;
