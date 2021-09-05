import { BsFolder } from "react-icons/bs";
import { FiExternalLink, FiGithub } from "react-icons/fi";
const Project = () => {
  return (
    <div className="flex flex-col p-4 space-y-4 bg-gray-900 border border-gray-700 rounded-md shadow-xl col-span-full sm:col-span-3 md:col-span-2 projectCard">
      <div className="flex items-center justify-between">
        <BsFolder className="w-10 h-10" />
        <div className="flex space-x-4">
          <FiGithub className="w-6 h-6" />
          <FiExternalLink className="w-6 h-6" />
        </div>
      </div>
      <h2 className="text-2xl">Lorem, ipsum dolor.</h2>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae incidunt enim?
      </h6>
      <div className="flex flex-wrap space-x-4 font-light">
        <span>lorem</span>
        <span>lorem</span>
        <span>lorem</span>
        <span>lorem</span>
      </div>
    </div>
  );
};

export default Project;
