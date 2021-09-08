import AboutSection from "@components/AboutSection";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Hero from "@components/Hero";
import SkillExSection from "@components/SkillExSection";

import ProjectsSection from "@components/ProjectsSection";
import { motion } from "framer-motion";
import YouTubeSection from "@components/YouTubeSection";
import ContactSection from "@components/ContactSection";
// import motion from 'framer-motion'
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Experience />
      <YouTubeSection />
      <ContactSection />
    </>
  );
}

{
  /* <motion.div
        className="fixed z-50 w-full h-screen "
        initial={{
          y: 0,
        }}
        animate={{
          y: "-120%",
          transition: {
            duration: 1,
            delay: 0.1,
          },
        }}
      >
        <div className="grid w-full md:h-64 bg-white h-[32rem] place-items-center"></div>

        <svg viewBox="0 0 800 330">
          <path
            id="curve"
            fill="#fff"
            d="M 800 300 Q 400 250 0 300 L 0 0 L 800 0 L 800 300 Z"
          ></path>
        </svg>
      </motion.div> */
}
