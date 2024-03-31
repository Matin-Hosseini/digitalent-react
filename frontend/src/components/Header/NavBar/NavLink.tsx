import { Link, NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({
  title,
  megaMenu,
  to,
}: {
  title: String;
  megaMenu: boolean;
  to: string;
}) {
  return (
    <li className={`h-full block  group ${!megaMenu ? "relative" : ""}`}>
      <RouterNavLink
        to={to}
        className={({ isActive }) => {
          return [
            `relative inline-block h-full leading-[50px] overflow-hidden  group-hover:text-[var(--red)]  transition-all before:absolute before:content-[""] before:w-full before:h-[8px] before:bg-[var(--red)] before:bottom-[-5px] before:rounded-lg before:translate-y-10 before:rotate-[-4deg]  group-hover:before:translate-y-0`,
            isActive
              ? "before:translate-y-0 before:rotate-[-4deg] text-[var(--red)]"
              : "",
          ].join(" ");
        }}
      >
        {title}
      </RouterNavLink>

      <div
        className={`absolute top-full right-0 z-50 flex flex-col flex-wrap items-start ${
          megaMenu ? "w-full" : "w-[30rem]"
        } gap-3 p-4 transition-all bg-[var(--section-bg)] max-h-64 border border-t-2 border-[var(--red)] shadow-lg rounded-lg invisible opacity-0 group-hover:opacity-100 group-hover:visible`}
      >
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
      </div>
    </li>
  );
}
