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
        className="h-full leading-[50px] inline-block overflow-hidden hover:text-red-500"
      >
        {title}
      </RouterNavLink>

      <div
        className={`absolute top-full right-0 z-50 flex flex-col ${
          megaMenu ? "w-full" : "w-[30rem]"
        } gap-3 p-4 transition-all bg-gray-600 rounded-lg invisible opacity-0 group-hover:opacity-100 group-hover:visible`}
      >
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
        <Link to={"/"}>زیر منو</Link>
      </div>
    </li>
  );
}
