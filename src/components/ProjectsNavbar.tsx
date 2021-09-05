import { Category } from "@libs/types";
import { FC } from "react";

type Props = {
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
};

export const NavItem: FC<Props> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

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
  return (
    <nav className="sticky z-[25] flex items-center w-full h-16 bg-gray-900 top-0">
      <ul className="flex flex-wrap justify-center w-full my-6 space-x-4">
        <NavItem value="all" {...props} />
        <NavItem value="react" {...props} />
        <NavItem value="mongo" {...props} />
        <NavItem value="django" {...props} />
        <NavItem value="node" {...props} />
      </ul>
    </nav>
  );
};

export default ProjectsNavbar;
