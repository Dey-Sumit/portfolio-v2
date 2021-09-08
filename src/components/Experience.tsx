import { experiences } from "@libs/data";
import classNames from "classnames";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import ExperienceCard from "./ExperienceCard";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  const [selected, setSelected] = useState("TCS");

  return (
    // <div className="flex flex-col px-4 m-4 md:my-20 md:px-64">
    <SectionContainer>
      <SectionTitle title="Experience" />

      <div className="flex mb-4 space-x-6 ">
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
      </div>

      {selected === "TCS" && <ExperienceCard {...experiences[0]} />}
      {selected === "Freelancer" && <ExperienceCard {...experiences[1]} />}
      {selected === "YouTube" && <ExperienceCard {...experiences[2]} />}
    </SectionContainer>
  );
};

export default Experience;
