import { AnimatePresence, motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { GrYoutube, GrJava, GrProjects } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoMdGitNetwork } from "react-icons/io";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      exit={{
        y: -120,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="fixed top-0 left-0 z-20 w-full py-4 bg-black shadow-lg h-14"
    >
      <nav className="flex items-center justify-around w-full uppercase ">
        <ul className="flex justify-center flex-auto tracking-wide space-x-14 ">
          <li className="cursor-pointer">
            <AiFillHome className="block w-4 h-4 md:hidden" />
            <span className="hidden md:block">Home</span>
          </li>
          <li className="cursor-pointer">
            <IoMdGitNetwork className="block w-4 h-4 md:hidden" />
            <span className="hidden md:block">Projects</span>
          </li>
          <li className="cursor-pointer">
            <SiJavascript className="block w-4 h-4 md:hidden" />
            <span className="hidden md:block">Skills</span>
          </li>
          <li className="cursor-pointer">
            <MdEmail className="block w-4 h-4 md:hidden" />
            <span className="hidden md:block">Contacts</span>
          </li>
          <li className="cursor-pointer">
            <GrYoutube className="block w-4 h-4 md:hidden" />
            <span className="hidden md:block">YouTube</span>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> */}
// font-family: 'Inter', sans-serif;
export default Header;
