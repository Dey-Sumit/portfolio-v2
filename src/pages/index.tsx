import AboutSection from "@components/AboutSection";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Hero from "@components/Hero";
import SkillExSection from "@components/SkillExSection";
import YouTube from "@components/YouTube";
import ProjectsSection from "@components/ProjectsSection";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />

      <ProjectsSection />
      <Experience />
      {/* 
      <YouTube />
      <Contact /> */}
    </>
  );
}
