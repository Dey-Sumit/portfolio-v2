import { SplashScreen } from "@components/layouts";
import Head from "next/head";

import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  YouTubeSection,
} from "@components/sections";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Sumit Dey | Web Developer | portfolio </title>
      </Head>
      <SplashScreen />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <YouTubeSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
