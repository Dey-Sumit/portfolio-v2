import { motion } from "framer-motion";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { fadeIn, textContainer } from "@libs/variants";

import SectionContainer from "@components/layouts/SectionContainer";
import SectionTitle from "@components/layouts/SectionTitle";
import { AnimateWhenVisible } from "@components/layouts";

const AboutSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <SectionContainer id="about">
      <AnimateWhenVisible variants={textContainer}>
        <SectionTitle title="Brief about me" />
        <motion.div variants={fadeIn("up")} className="flex flex-col space-y-4">
          <motion.div className="flex flex-col mb-4 space-y-2 text-base sm:text-lg">
            <p>• Hi, I am Sumit and I refuse to make boring websites :)</p>
            <p>
              • I started web development back in 2018...Fast forward to today, I am a self taught web developer ,
              mainly work on frontend these days.
            </p>
            <p>
              • I love to teach because I love to learn .YouTuber @ Backbench Coder where I make full stack web dev
              tutorials
            </p>
          </motion.div>
          <motion.div className="flex flex-col w-full sm:flex-row ">
            <motion.div className="flex-1 text-base sm:text-lg col-span-full md:col-span-1">
              {/* add border triangle to highlight this section */}
              <p className="mb-2">Here are a few technologies I've been working with recently:</p>

              <div className="grid grid-cols-2 gap-3 text-sm md:place-items-center sm:text-base">
                <div className="space-y-3 col-span-full md:col-span-1 ">
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>JavaScript (ES6+)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>React & Redux </span>
                  </div>
                </div>
                <div className="flex-1 space-y-3 md:col-span-1">
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>Express</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>Next Js </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiRightArrow className="text-green-400" />
                    <span>Tailwind CSS </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              className="flex justify-center p-4 mt-4 space-x-4 text-base text-gray-300 border border-dashed rounded-sm cursor-pointer md:mt-0 md:text-3xl col-span-full md:col-span-1"
              onClick={() => {
                navigator.clipboard.writeText("dev.sumitdey@gmail.com");
                setIsCopied(true);
              }}
            >
              <span className="flex-none ">Email : </span>
              <div className="flex flex-col cursor-pointer">
                <span className="">dev.sumitdey@gmail.com</span>
                <span className="text-sm text-right text-gray-400 ">{isCopied ? "copied" : "click to copy!"}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimateWhenVisible>
    </SectionContainer>
  );
};

export default AboutSection;
