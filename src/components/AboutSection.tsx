import { FC, LegacyRef, MutableRefObject, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const AboutSection: FC<{
  aboutSectionRef: MutableRefObject<HTMLDivElement>;
}> = ({ aboutSectionRef }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <SectionContainer id="about">
      <SectionTitle title="Brief about me" />
      {/* // TODO work on responsiveness */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 text-base sm:text-lg">
          <p>• Hi, I am Sumit . I build cool shits for web since 2017 :)</p>
          <p>
            • Fast forward to today, I am a self made web developer and a YouTuber @ Backbench
            Coder.
          </p>
        </div>
        <div className="flex flex-col w-full sm:flex-row ">
          <div className="flex-1 text-base sm:text-lg col-span-full md:col-span-1">
            {/* add border triangle to highlight this section */}
            <p className="mb-2">Here are a few technologies I've been working with recently:</p>

            <div className="grid grid-cols-2 gap-3 text-sm text-base md:place-items-center sm:text-base">
              <div className="space-y-3 col-span-full md:col-span-1 ">
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

          <div className="flex justify-center p-4 mt-4 space-x-4 text-base text-gray-300 border border-dashed rounded-sm md:mt-0 md:text-3xl col-span-full md:col-span-1">
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
