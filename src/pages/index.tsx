import AboutSection from "@components/AboutSection";
import Contact from "@components/Contact";
import ExperienceSection from "@components/Experience";
import HeroSection from "@components/HeroSection";
import SkillExSection from "@components/SkillExSection";

import ProjectsSection from "@components/ProjectsSection";
import { motion } from "framer-motion";
import YouTubeSection from "@components/YouTubeSection";
import ContactSection from "@components/ContactSection";
import { MutableRefObject } from "react";
import { NextPage } from "next";
// import motion from 'framer-motion'
type Props = {
  aboutSectionRef: MutableRefObject<HTMLDivElement>;
  projectSectionRef: MutableRefObject<HTMLDivElement>;
  contactSectionRef: MutableRefObject<HTMLDivElement>;
  youtubeSectionRef: MutableRefObject<HTMLDivElement>;
  experienceSectionRef: MutableRefObject<HTMLDivElement>;
  heroSectionRef: MutableRefObject<HTMLDivElement>;
  scrolled: Boolean;
};
const Home: NextPage<Props> = ({
  heroSectionRef,
  aboutSectionRef,
  projectSectionRef,
  contactSectionRef,
  youtubeSectionRef,
  experienceSectionRef,
}) => {
  console.log("index", {
    heroSectionRef,
    aboutSectionRef,
    projectSectionRef,
    contactSectionRef,
    youtubeSectionRef,
    experienceSectionRef,
  });

  return (
    <>
      <HeroSection heroSectionRef={heroSectionRef} />
      <AboutSection aboutSectionRef={aboutSectionRef} />
      <ProjectsSection projectSectionRef={projectSectionRef} />
      <ExperienceSection experienceSectionRef={experienceSectionRef} />
      <YouTubeSection youtubeSectionRef={youtubeSectionRef} />
      <ContactSection contactSectionRef={contactSectionRef} />
    </>
  );
};

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
export default Home;
