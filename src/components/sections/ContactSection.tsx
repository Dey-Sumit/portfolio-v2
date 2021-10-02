import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiTwitter } from "react-icons/fi";
import { fadeIn, textContainer } from "@libs/variants";
import SectionTitle from "@components/layouts/SectionTitle";
import { AnimateWhenVisible } from "@components/layouts";

const ContactSection = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <motion.div className="w-full px-6 pb-6 md:px-40" id="contacts">
      <SectionTitle title=" Let's Connect :" />

      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={textContainer} className="flex items-center justify-center space-x-6">
          <motion.span
            onClick={() => openLink("https://www.linkedin.com/in/code-sumit/")}
            variants={fadeIn()}
            className="p-4 border border-green-400 rounded-full"
          >
            <FaLinkedinIn className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>{" "}
          <motion.span
            onClick={() => openLink("https://www.twitter.com/backbench_coder")}
            variants={fadeIn()}
            className="p-4 border border-green-400 rounded-full"
          >
            <FiTwitter className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>{" "}
          <motion.span
            onClick={() => window.open("mailto:dev.sumitdey@gmail.com")}
            variants={fadeIn()}
            className="p-4 border border-green-400 rounded-full"
          >
            <FiMail className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>
        </motion.div>
      </AnimateWhenVisible>
    </motion.div>
  );
};

export default ContactSection;
