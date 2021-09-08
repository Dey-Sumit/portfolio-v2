import { Experience } from "@libs/types";
import { FC } from "react";
import { BiRightArrow } from "react-icons/bi";

const ExperienceCard: FC<Experience> = ({ points, company, jobTitle, timeline }) => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-xl">{jobTitle} </h3>
      <h6 className="mt-1 mb-4 text-base italic text-gray-300">{timeline}</h6>
      {points.map((point) => (
        <div className="flex items-center mb-2 space-x-4">
          <BiRightArrow className="text-green-400" />
          <p className="">{point}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
