import { AnimatePresence, motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { GrYoutube, GrJava, GrProjects } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoMdGitNetwork } from "react-icons/io";
import classNames from "classnames";
import { FC } from "react";

const Header: FC<{ scrolled: Boolean }> = ({ scrolled }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: 0,
        transition: {
          delay: 1,
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      exit={{
        y: -100,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      className={classNames("fixed top-0 bg-red left-0 z-20 w-full py-4 h-14", {
        "shadow-lg bg-gradient": scrolled,
      })}
    >
      <nav className={classNames(" flex items-center justify-around w-full uppercase")}>
        <ul className="flex justify-center flex-auto tracking-wide space-x-14 ">
          <li className="cursor-pointer">
            <a href="#hero">
              <AiFillHome className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">Home</span>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#about">
              <SiJavascript className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">About</span>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#projects">
              <IoMdGitNetwork className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">Projects</span>
            </a>
          </li>

          <li className="cursor-pointer">
            <a href="#youtube">
              <GrYoutube className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">YouTube</span>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#contacts">
              <MdEmail className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">Contacts</span>
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> */
}
// font-family: 'Inter', sans-serif;
export default Header;
