import Map from "./Map";
import { GiTie } from "react-icons/gi";
const Hero = () => {
  return (
    <div className="grid grid-cols-5 px-5 py-10 mt-0 md:mt-10 border-b-2 md:p-6 h-[90vh]">
      <div className="grid h-full place-items-center col-span-full md:col-span-3">
        <div className="flex flex-col justify-center ">
          <p className="mb-1 text-base font-medium text-gray-400">Full Stack Web Developer</p>
          <h1 className="mb-4 text-5xl font-semibold md:text-8xl">
            Sumit <span className="text-black text-stroke">Dey</span>{" "}
          </h1>
          {/* / YouTuber@BackbenchCoder */}
          <div className="flex mb-2 space-x-5">
            <button className="flex items-center justify-center px-4 py-2 space-x-2 border border-gray-700 rounded-sm shadow-sm bg-gradient">
              <GiTie />
              <span>Hire Me</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 space-x-2 border border-gray-700 rounded-sm shadow-sm bg-gradient">
              <GiTie />
              <span>Get Resume</span>
            </button>
          </div>
          <p className="mt-4 text-lg md:text-2xl">
            Looking for a full time
            <span className="text-yellow-400"> job </span>
          </p>
        </div>
      </div>
      <div className="grid mt-4 overflow-hidden border-4 border-gray-800 rounded-xl col-span-full md:col-span-2 place-items-center">
        <Map />
      </div>
    </div>
  );
};

export default Hero;
