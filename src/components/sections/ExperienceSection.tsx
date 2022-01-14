import { experiences } from "@libs/data";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn, textContainer } from "@libs/variants";
import { AnimateWhenVisible, SectionContainer, SectionTitle } from "@components/layouts";
import { ExperienceCard } from "@components/cards";

const ExperienceSection = () => {
  const [selected, setSelected] = useState<"Betterhalf" | "TCS" | "Freelancer" | "YouTube">("Betterhalf");

  return (
    <SectionContainer id="experience">
      <SectionTitle title="Experience" />
      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={fadeIn()} className="flex mb-4 space-x-6 ">
          <span
            className={classNames("  cursor-pointer ", {
              "border-b-2 pb-2": selected === "Betterhalf",
            })}
            onClick={() => setSelected("Betterhalf")}
          >
            Betterhalf
          </span>
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

        {selected === "Betterhalf" && <ExperienceCard {...experiences[0]} />}
        {selected === "TCS" && <ExperienceCard {...experiences[1]} />}
        {selected === "Freelancer" && <ExperienceCard {...experiences[2]} />}
        {selected === "YouTube" && <ExperienceCard {...experiences[3]} />}
      </AnimateWhenVisible>
    </SectionContainer>
  );
};

export default ExperienceSection;
