import { AiOutlineYoutube } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { FC } from "react";
import { Youtube } from "@libs/types";
import { motion } from "framer-motion";
import { fadeIn } from "@libs/variants";

const YouTubeCard: FC<Youtube> = ({ title, image, likes, youtubeLink, views }) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      variants={fadeIn()}
      className="flex flex-col p-4 space-y-4 bg-[#040404] border border-gray-600 bg-gradient rounded-md shadow-xl col-span-full sm:col-span-3 md:col-span-2 projectCard"
    >
      <div className="flex items-center justify-between">
        <AiOutlineYoutube className="w-10 h-10 text-green-400" />
        <FiExternalLink className="w-6 h-6 cursor-pointer" onClick={() => openLink(youtubeLink)} />
      </div>
      <div className="border border-gray-700">
        <Image src={image} objectFit="cover" />
      </div>
      <h2 className="text-lg">{title}</h2>

      <div className="flex justify-between text-sm">
        <span>Views : {views}</span>
        <span>Likes : {likes}</span>
      </div>
    </motion.div>
  );
};

export default YouTubeCard;
