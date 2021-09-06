import { experiences } from "@libs/data";
import classNames from "classnames";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [selected, setSelected] = useState("TCS");

  return (
    <div className="flex flex-col px-4 m-4 md:my-20 md:px-64">
      <div className="flex items-center mb-6 space-x-2 ">
        <h1 className="text-2xl font-bold text-yellow-400 ">Experience </h1>
        <div className="flex-1 w-10 h-[1px] bg-yellow-400"> </div>
      </div>

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
    </div>
  );
};

export default Experience;
