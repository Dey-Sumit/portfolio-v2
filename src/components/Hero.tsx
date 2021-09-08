import Map from "./Map";
import { GiTie } from "react-icons/gi";
import { motion, Variants } from "framer-motion";
import { borderAnimation, fadeIn, textContainer } from "variants";
import { AiOutlineProfile } from "react-icons/ai";
import { BsFileCode } from "react-icons/bs";

const pathVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Hero = () => {
  return (
    <div className="grid grid-cols-5 px-5 py-10 mt-0 md:mt-10 md:p-6 h-[90vh]">
      <div className="grid place-items-center col-span-full md:col-span-3">
        <motion.div
          className="flex flex-col justify-center "
          variants={textContainer}
          initial="initial"
          animate="animate"
        >
          <motion.p
            variants={fadeIn("up")}
            className="pl-1 mb-1 text-base font-medium text-gray-300"
          >
            Full Stack Web Developer
          </motion.p>
          <motion.h1 variants={fadeIn("up")} className="mb-4 text-5xl font-semibold md:text-8xl">
            Sumit <span className="text-black text-stroke">Dey</span>{" "}
          </motion.h1>
          {/* / YouTuber@BackbenchCoder */}
          <motion.div variants={fadeIn("up")} className="flex pl-1 mb-2 space-x-5">
            <button className="flex items-center justify-center px-4 py-2 space-x-2 border border-gray-700 rounded-sm shadow-sm bg-[#292d31]">
              <GiTie />
              <span>Hire Me</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 space-x-2 border border-gray-700 rounded-sm shadow-sm bg-[#292d31]">
              <BsFileCode />
              <span>Get Resume</span>
            </button>
          </motion.div>
          <motion.p
            variants={fadeIn("up")}
            className="relative pl-1 mt-4 text-lg text-gray-200 w-max md:text-2xl font-nato"
          >
            Looking for a full time
            <span className="text-green-400"> job </span>
            <svg
              width="50"
              height="35"
              viewBox="0 0 60 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute text-green-400 -bottom-7 -right-4"
            >
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M2.00024 25.3631C5.44721 16.6278 25.0002 -2.09741 57.3811 11.2481"
                // stroke="black"
                className="stroke-current"
                stroke-width="2.89672"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        animate="animate"
        initial="initial"
        variants={borderAnimation}
        className="grid m-10 mt-0 overflow-hidden border-2 border-[#040404] border-opacity-10 shadow-md md:mt-4 rounded-xl col-span-full md:col-span-2 place-items-center"
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default Hero;
