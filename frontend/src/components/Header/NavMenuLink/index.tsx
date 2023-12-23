import { NavLink } from "react-router-dom";

const NavMenuLink = ({
  name,
  path,
  icon,
}: {
  name: String;
  path: String;
  icon: Element;
}) => {
  return (
    <NavLink to={path} className="nav-menu__item">
      {icon}
      <span>{name}</span>
    </NavLink>
  );
};

export default NavMenuLink;
