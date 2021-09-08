import { FaLinkedinIn } from "react-icons/fa";
import { FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <div className="w-full px-6 py-10 md:px-40">
      <SectionTitle title=" Let's Connect :" />

      <div className="flex items-center justify-center space-x-6">
        <span className="p-4 border border-green-400 rounded-full">
          <FaLinkedinIn className="w-6 h-6 " />
        </span>{" "}
        <span className="p-4 border border-green-400 rounded-full">
          <FiTwitter className="w-6 h-6 " />
        </span>{" "}
        <span className="p-4 border border-green-400 rounded-full">
          <FiMail className="w-6 h-6 " />
        </span>
      </div>
    </div>
  );
};

export default ContactSection;
