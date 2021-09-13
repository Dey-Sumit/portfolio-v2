import { Category } from "@libs/types";
import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";

type Props = {
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
};

export const NavItem: FC<Props> = ({ value, handlerFilterCategory, active }) => {
  console.log({ value, active });

  let className = "capitalize cursor-pointer hover:text-green-400";
  if (active === value) className += " text-green-400";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FC<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  const ref = useRef<HTMLDivElement>();

  const [stickedToTop, setStickedToTop] = useState(false);

  const scrollHandler = () => {
    ref.current!.getBoundingClientRect().y === 0 ? setStickedToTop(true) : setStickedToTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  return (
    <nav
      ref={ref}
      onScroll={scrollHandler}
      className={classNames(" sticky z-[25] md:-mx-40 flex items-center w-screen -mx-6 h-16 bg-transparent top-0", {
        "bg-gradient": stickedToTop,
      })}
    >
      <ul className="flex justify-center w-full px-10 py-2 my-4 space-x-4 overflow-x-auto text:sm md:text-lg">
        <NavItem value="all" {...props} />
        <NavItem value="react" {...props} />
        <NavItem value="next" {...props} />
        <NavItem value="mongo" {...props} />
        <NavItem value="express" {...props} />
        <NavItem value="socket" {...props} />
      </ul>
    </nav>
  );
};

export default ProjectsNavbar;
