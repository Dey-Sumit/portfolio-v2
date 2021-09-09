import { experiences } from "@libs/data";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn, textContainer } from "variants";
import AnimateWhenVisible from "./AnimateWhenVisible";
import ExperienceCard from "./ExperienceCard";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const ExperienceSection = () => {
  const [selected, setSelected] = useState("TCS");

  return (
    <SectionContainer id="experience">
      <SectionTitle title="Experience" />
      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={fadeIn()} className="flex mb-4 space-x-6 ">
          <span
            className={classNames("  cursor-pointer ", {
              "border-b-2 pb-2": selected === "TCS",
            })}
            onClick={() => setSelected("TCS")}
          >
            TCS
          </span>
          <span
            className={classNames("  cursor-pointer ", {
              "border-b-2  pb-2 ": selected === "Freelancer",
            })}
            onClick={() => setSelected("Freelancer")}
          >
            Freelancer
          </span>
          <span
            className={classNames("  cursor-pointer ", {
              "border-b-2 pb-2": selected === "YouTube",
            })}
            onClick={() => setSelected("YouTube")}
          >
            YouTube
          </span>
        </motion.div>

        {selected === "TCS" && <ExperienceCard {...experiences[0]} />}
        {selected === "Freelancer" && <ExperienceCard {...experiences[1]} />}
        {selected === "YouTube" && <ExperienceCard {...experiences[2]} />}
      </AnimateWhenVisible>
    </SectionContainer>
  );
};

export default ExperienceSection;
