import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Logo";
import { NavMenuTypes } from "../../../types/Header";
import { IconButton } from "../../mui/customs";

const SideBarMenu = ({ title, path, megamenu, submenu }: NavMenuTypes) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className="relative ">
        <div className="flex items-center justify-between">
          <Link to={path}>{title}</Link>

          {(megamenu || submenu) && (
            <IconButton onClick={() => setOpen((prev) => !prev)}>
              <KeyboardArrowDownIcon className="text-color" />
            </IconButton>
          )}
        </div>

        {submenu && (
          <div
            className={`bg-[var(--app-bg)] mt-4 flex-col gap-5 ps-4 py-4 rounded-lg ${
              open ? "flex" : "hidden"
            } `}
          >
            {submenu?.map((item) => (
              <Link to={item.path}>{item.title}</Link>
            ))}
          </div>
        )}

        {megamenu && (
          <div
            className={`bg-[var(--app-bg)] mt-4 flex-col gap-5 ps-4 py-4 rounded-lg ${
              open ? "flex" : "hidden"
            } `}
          >
            {megamenu?.map((item) => (
              <Link to={item.path}>{item.title}</Link>
            ))}
          </div>
        )}
      </li>
    </>
  );
};

type SideBarProps = {
  show: boolean;
  onHide: () => void;
  menus: NavMenuTypes[];
};

export default function SideBar({ show, menus, onHide }: SideBarProps) {
  const location = useLocation();

  useEffect(() => {
    onHide();
  }, [location.pathname]);

  return (
    <Drawer
      anchor="right"
      sx={{
        "& .MuiPaper-root": {
          width: "25rem",
          padding: "12px",
          background: "var(--section-bg)",
          color: "var(--text-color)",
        },
      }}
      open={show}
      onClose={onHide}
    >
      <aside>
        <div className="flex items-center justify-between mb-4">
          <Logo />
          <IconButton aria-label="close" onClick={onHide}>
            <MdOutlineClose className="text-color" />
          </IconButton>
        </div>
        <ul className="space-y-6">
          {menus?.map((menu: NavMenuTypes) => (
            <SideBarMenu key={menu.id} {...menu} />
          ))}
        </ul>
      </aside>
    </Drawer>
  );
}
