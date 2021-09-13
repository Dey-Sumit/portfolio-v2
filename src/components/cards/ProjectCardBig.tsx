import { Project } from "@libs/types";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@libs/variants";
import classNames from "classnames";
import { FiExternalLink, FiGithub } from "react-icons/fi";
type Props = {
  project: Project;
  reverse?: Boolean;
};
// TODO add deployed ang gh links
const ProjectCardBig: FC<Props> = ({
  reverse,
  project: { deployed_url, points, github_url, image, name, key_techs },
}) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <motion.div
      variants={fadeIn("up")}
      className="flex flex-col space-y-6 md:space-x-8 md:space-y-0 sm:flex-row sm:even:flex-row-reverse "
    >
      <div className={classNames("flex-1 border-gray-400 nextImage")}>
        <Image alt={name} src={image} quality={100} objectFit="contain" className="" placeholder="blur" />
      </div>
      <div
        className={classNames("flex flex-col flex-1 space-y-6 ", {
          "!ml-0 !mr-8": reverse,
        })}
      >
        <h1 className="text-xl sm:text-2xl">{name} </h1>
        <div className="flex flex-col space-y-2 text-base text-gray-200 sm:text-lg">
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
        <div className="flex space-x-4 text-gray-300">
          <FiGithub className="w-6 h-6 cursor-pointer" onClick={() => openLink(github_url)} />
          <FiExternalLink className="w-6 h-6 cursor-pointer" onClick={() => openLink(deployed_url)} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardBig;
