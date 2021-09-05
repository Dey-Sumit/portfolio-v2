import Map from "./Map";
import { GiTie } from "react-icons/gi";
const Hero = () => {
  return (
    <div className="grid grid-cols-5 px-5 py-10 mt-10 border md:p-6 h-[90vh]">
      <div className="grid h-full place-items-center col-span-full md:col-span-3">
        <div className="flex flex-col justify-center ">
          <h1 className="text-5xl font-semibold md:text-7xl ">
            Sumit <span className="text-white">Dey</span>{" "}
          </h1>
          <p className="my-4 text-lg font-medium text-gray-200">Full Stack Web Developer</p>
          {/* / YouTuber@BackbenchCoder */}
          <div className="flex mb-2 space-x-5">
            <button className="flex items-center justify-center px-4 py-2 space-x-2 bg-gray-900 border-gray-700 rounded-sm">
              <GiTie />
              <span>Hire Me</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 space-x-2 bg-gray-900 border-gray-700 rounded-sm">
              <GiTie />
              <span>Get Resume</span>
            </button>
          </div>
          <p className="mt-6 text-xl md:text-2xl">
            Looking for a full time
            <span className="text-yellow-400"> job </span>
          </p>
        </div>
      </div>
      <div className="grid p-4 mt-4 col-span-full md:col-span-2 place-items-center">
        <Map />
      </div>
    </div>
  );
};

export default Hero;
