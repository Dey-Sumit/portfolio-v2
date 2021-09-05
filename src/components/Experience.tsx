import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";

const Experience = () => {
  const [selected, setSelected] = useState("TCS");

  return (
    <div className="flex flex-col px-64 py-2 mx-4 my-20 space-y-4">
      <div className="flex items-center space-x-2 ">
        <h1 className="text-2xl font-bold ">Experience as Developer </h1>
        <div className="flex-1 w-10 h-[1px] border bg-red-50"> </div>
      </div>
      <div className="flex flex-col space-x-8 md:flex-row">
        <div className="flex space-x-8 space-y-6 md:space-x-0 md:flex-col md:items-baseline">
          <span
            className="w-full px-2 border-b-2 cursor-pointer md:border-b-0 md:border-r-2"
            onClick={() => setSelected("TCS")}
          >
            TCS
          </span>
          <span
            className="w-full px-2 border-b-2 cursor-pointer md:border-b-0 md:border-r-2 "
            onClick={() => setSelected("Freelancer")}
          >
            Freelancer
          </span>
          <span
            className="w-full px-2 border-b-2 cursor-pointer md:border-b-0 md:border-r-2"
            onClick={() => setSelected("YouTube")}
          >
            YouTube
          </span>
        </div>
        <div>
          {selected === "TCS" && (
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl">Frontend Developer Intern </h3>
              <h6 className="text-lg italic">July 2020 - Jan 2021</h6>
              <div className="flex items-center space-x-4">
                <BiRightArrow className="" />
                <p className="">
                  TCS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti mollitia
                  sequi,
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <BiRightArrow className="" />
                <p className="">
                  TCS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti mollitia
                  sequi,
                </p>
              </div>
            </div>
          )}
          {selected === "Freelancer" && (
            <div>
              <h3>Frontend Developer Intern </h3>
              <h6>July 2020 - Jan 2021</h6>
              <p>
                Free Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti mollitia
                sequi,
              </p>
              <p>
                TCS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti mollitia
                sequi,
              </p>
            </div>
          )}
          {selected === "YouTube" && (
            <div>
              <h3>Frontend Developer Intern </h3>
              <h6>July 2020 - Jan 2021</h6>
              <p>
                YT Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti mollitia
                sequi,
              </p>
              <p>
                TCS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti mollitia
                sequi,
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
