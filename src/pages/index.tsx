import { SplashScreen } from "@components/layouts";
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
