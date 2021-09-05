import { Project } from "@libs/types";
import { FC, useState } from "react";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@libs/variants";
// import img from "@public/images/projects/1.png";

type Props = {
  project: Project;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
};

const ProjectCard: FC<Props> = ({
  project: { name, image_path, category, deployed_url, description, github_url, key_techs, id },
  setShowDetail,
  showDetail,
}) => {
  return (
    <motion.div
      className="p-3 bg-gray-900 border border-gray-700 rounded-md col-span-full sm:col-span-3 md:col-span-2 projectCard"
      variants={fadeInUp}
    >
      <Image
        onClick={() => setShowDetail(id)}
        src="/images/projects/1.png"
        alt={name}
        className="border cursor-pointer"
        layout="responsive"
        height="150"
        width="300"
        objectFit="cover"
      />

      <p className="mt-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="fixed top-0 bottom-0 left-0 z-30 grid w-full p-8 text-black bg-gray-600 rounded-lg md:p-10 dark:bg-black-100 dark:text-gray-100 md:grid-cols-2 gap-x-12 ">
          <motion.div variants={stagger} initial="initial" animate="animate" exit="exit">
            <motion.div className="border-4 border-gray-100 " variants={fadeInUp}>
              <Image
                src="/images/projects/1.png"
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={300}
                height={150}
              />
              {/* <img src={image_path} alt={name} /> */}
            </motion.div>
            <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500 "
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl ">
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="my-3 text-base font-medium">
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((value, i) => (
                <span key={i} className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-black-500">
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
