import { BiRightArrow } from "react-icons/bi";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center px-24 py-6 space-y-4 border">
      <h3 className="text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est ratione, minima esse
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est ratione, minima esse
      </h3>
      <div className="grid w-full grid-cols-2 place-items-center">
        <div className="col-span-full md:col-span-1">
          {/* add border triangele to highlight this section */}
          <p className="mb-2">Here are a few technologies I've been working with recently:</p>
          <div className="grid grid-cols-2 gap-4 place-items-center">
            <div className="space-y-3 col-span-full md:col-span-1">
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-yellow-400" />
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-yellow-400" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-yellow-400" />
                <span>React & Redux </span>
              </div>
            </div>
            <div className="space-y-3 col-span-full md:col-span-1">
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-yellow-400" />
                <span>Express</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-yellow-400" />
                <span>Mongo DB </span>
              </div>
              <div className="flex items-center space-x-2">
                <BiRightArrow className="text-yellow-400" />
                <span>Tailwind CSS </span>
              </div>
            </div>
          </div>
          {/* <div>TypeScript </div>
          <div>React Js</div>
          <div>Next Js </div>
          <div>React Native </div>
          <div>Express Js</div>
          <div>Tailwind Css</div> */}
        </div>

        <div className="flex justify-center p-4 space-x-4 text-3xl text-gray-300 border border-dashed rounded-sm col-span-full md:col-span-1">
          <span>Email : </span>
          <div className="flex flex-col">
            <span className="cursor-pointer">code.sumax@gmail.com</span>
            <span className="text-sm text-right text-gray-400 cursor-pointer">click to copy!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
