import { NavLink } from "react-router-dom";

export default function PanelSidebarLink({ path, icon, title }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return [
          "flex items-centerr gap-3 p-3 rounded-lg hover:text-[var(--purple)] hover:bg-[var(--bg-purple)] transition",
          isActive ? "bg-[var(--bg-purple)] text-[var(--purple)]" : "",
        ].join(" ");
      }}
    >
      {icon}
      {title}
    </NavLink>
  );
}
