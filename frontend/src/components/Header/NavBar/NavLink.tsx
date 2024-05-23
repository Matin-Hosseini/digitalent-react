import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { NavMegamenu, NavSubMenu } from "../../../types/Header";

type NavLinkProps = {
  title: String;
  megamenu?: NavMegamenu[];
  submenu?: NavSubMenu[];
  path: string | any;
};

export default function NavLink({
  title,
  megamenu,
  submenu,
  path,
}: NavLinkProps) {
  return (
    <li className={`h-full block  group ${!megamenu ? "relative" : ""}`}>
      <RouterNavLink
        to={path}
        className={({ isActive }) => {
          return [
            `relative inline-block h-full leading-[50px] overflow-hidden  group-hover:text-[var(--red)]  transition-all before:absolute before:content-[""] before:w-full before:h-[8px] before:bg-[var(--red)] before:bottom-[-5px] before:rounded-lg before:translate-y-10  before:rotate-[-4deg]  group-hover:before:translate-y-0`,
            isActive ? "before:translate-y-0 text-[var(--red)]" : "",
          ].join(" ");
        }}
      >
        {title}
      </RouterNavLink>

      {megamenu && (
        <div
          className={`absolute top-full right-0 z-50 flex flex-col flex-wrap items-start ${
            megamenu ? "w-full" : "w-[30rem]"
          } gap-3 p-4 transition-all bg-[var(--section-bg)] max-h-64 border border-t-2 border-[var(--red)] shadow-lg rounded-lg invisible opacity-0 group-hover:opacity-100 group-hover:visible`}
        >
          {megamenu.map((menu: NavMegamenu) => (
            <Link to={path} key={menu.id}>
              {menu.title}
            </Link>
          ))}
        </div>
      )}

      {submenu && (
        <div
          className={`absolute top-full right-0 z-50 flex flex-col flex-wrap items-start w-[30rem] gap-3 p-4 transition-all bg-[var(--section-bg)] max-h-64 border border-t-2 border-[var(--red)] shadow-lg rounded-lg invisible opacity-0 group-hover:opacity-100 group-hover:visible`}
        >
          {submenu.map((menu: NavSubMenu) => (
            <Link to={menu.path} key={menu.id}>
              {menu.title}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
