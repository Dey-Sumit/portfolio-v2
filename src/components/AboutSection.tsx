import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <SectionContainer>
      <SectionTitle title="Brief about me" />
      {/* // TODO work on responsiveness */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg border ">
          • Hi, I am Sumit . I build cool shits for web since 2017 :)
          <br />• Fast forward to today, I am a self made web developer and a YouTuber @ Backbench
          Coder.
        </h3>
        <div className="flex flex-col w-full sm:flex-row ">
          <div className="flex-1 text-lg col-span-full md:col-span-1">
            {/* add border triangle to highlight this section */}
            <p className="mb-2">Here are a few technologies I've been working with recently:</p>

            <div className="grid grid-cols-2 gap-3 text-base md:place-items-center">
              <div className="space-y-3 col-span-full md:col-span-1">
                <div className="flex items-center space-x-2">
                  <BiRightArrow className="text-green-400" />
                  <span>JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BiRightArrow className="text-green-400" />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BiRightArrow className="text-green-400" />
                  <span>React & Redux </span>
                </div>
              </div>
              <div className="flex-1 space-y-3 md:col-span-1">
                <div className="flex items-center space-x-2">
                  <BiRightArrow className="text-green-400" />
                  <span>Express</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BiRightArrow className="text-green-400" />
                  <span>Mongo DB </span>
                </div>
                <div className="flex items-center space-x-2">
                  <BiRightArrow className="text-green-400" />
                  <span>Tailwind CSS </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-4 mt-4 space-x-4 text-xl text-gray-300 border border-dashed rounded-sm md:mt-0 md:text-3xl col-span-full md:col-span-1">
            <span className="flex-none ">Email : </span>
            <div
              className="flex flex-col cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("code.sumax@gmail.com");
                setIsCopied(true);
              }}
            >
              <span className="">code.sumax@gmail.com</span>
              <span className="text-sm text-right text-gray-400 ">
                {isCopied ? "copied" : "click to copy!"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
