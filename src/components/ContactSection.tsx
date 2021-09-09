import { fadeInUp } from "@libs/variants";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { fadeIn, textContainer } from "variants";
import AnimateWhenVisible from "./AnimateWhenVisible";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("animate");
  //   }
  // }, [controls, inView]);
  return (
    <motion.div className="w-full px-6 pb-6 md:px-40" id="contacts">
      <SectionTitle title=" Let's Connect :" />

      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={textContainer} className="flex items-center justify-center space-x-6">
          <motion.span variants={fadeIn()} className="p-4 border border-green-400 rounded-full">
            <FaLinkedinIn className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>{" "}
          <motion.span variants={fadeIn()} className="p-4 border border-green-400 rounded-full">
            <FiTwitter className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>{" "}
          <motion.span variants={fadeIn()} className="p-4 border border-green-400 rounded-full">
            <FiMail className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>
        </motion.div>
      </AnimateWhenVisible>
    </motion.div>
  );
};

export default ContactSection;
