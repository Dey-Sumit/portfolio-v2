import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { fadeIn, textContainer } from "@libs/variants";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionContainer from "@components/layouts/SectionContainer";
import SectionTitle from "@components/layouts/SectionTitle";

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const [isCopied, setIsCopied] = useState(false);
  return (
    <SectionContainer id="about">
      <SectionTitle title="Brief about me" />
      {/* // TODO work on responsiveness */}
      {/* <AnimateWhenVisible
        variants={{}}
        transition={{
          duration: 1,

          ease: "easeOut",
        }}
      > */}
      {/* <div className="h-1 mt-4 bg-[#ffc4c4]"></div> */}
      <motion.div
        className="flex flex-col space-y-4"
        variants={textContainer}
        // initial="initial"
        // animate="animate"
        ref={ref}
        animate={controls}
        initial="initial"
        // transition={transition}
        // variants={variants}
      >
        <motion.div
          variants={fadeIn("up")}
          className="flex flex-col mb-4 space-y-2 text-base sm:text-lg"
        >
          <p>• Hi, I am Sumit . I build cool stuffs for web since 2017 :)</p>
          <p>
            • Fast forward to today, I am a self taught web developer , mainly work on frontend
            these days.
          </p>
          <p>• I am also a YouTuber @ Backbench Coder where I make full stack web dev tutorials</p>
        </motion.div>
        <motion.div className="flex flex-col w-full sm:flex-row ">
          <motion.div
            variants={fadeIn("up")}
            className="flex-1 text-base sm:text-lg col-span-full md:col-span-1"
          >
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
                  <span>Mongo DB </span>
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
              navigator.clipboard.writeText("code.sumax@gmail.com");
              setIsCopied(true);
            }}
          >
            <span className="flex-none ">Email : </span>
            <div className="flex flex-col cursor-pointer">
              <span className="">code.sumax@gmail.com</span>
              <span className="text-sm text-right text-gray-400 ">
                {isCopied ? "copied" : "click to copy!"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* </AnimateWhenVisible> */}
    </SectionContainer>
  );
};

export default AboutSection;
