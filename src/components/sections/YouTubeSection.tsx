import { motion } from "framer-motion";
import { youtubeVideos } from "@libs/data";
import YouTubeCard from "@components/cards/YouTubeCard";
import { BiArrowToRight } from "react-icons/bi";

import { textContainer } from "@libs/variants";
import { AnimateWhenVisible, SectionContainer, SectionTitle } from "@components/layouts";

const YouTubeSection = () => {
  return (
    <SectionContainer id="youtube">
      <SectionTitle title="My Popular Uploads" />
      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={textContainer} className="grid grid-cols-6 gap-6 mt-10 md:gap-12">
          {youtubeVideos.map((youtube) => (
            <YouTubeCard key={youtube.id} {...youtube} />
          ))}
        </motion.div>
      </AnimateWhenVisible>
      <div
        onClick={() => window.open("https://www.youtube.com/c/BackbenchCoder", "_blank")}
        className="flex items-center h-10 px-5 mx-auto my-6 space-x-2 text-sm bg-green-600 border border-green-400 rounded-full shadow-md cursor-pointer md:px-10 bg-opacity-90 w-max md:text-base"
      >
        <span>Checkout my YouTube Channel</span>
        <BiArrowToRight size={26} />
      </div>
    </SectionContainer>
  );
};

export default YouTubeSection;
