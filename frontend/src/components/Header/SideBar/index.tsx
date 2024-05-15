import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../Logo";
import { NavMegamenu, NavMenuTypes, NavSubMenu } from "../../../types/Header";

type SideBarSubmenuProps = {
  submenu: NavSubMenu[];
  open: boolean;
};

const SideBarSubmenu = ({ submenu, open }: SideBarSubmenuProps) => {
  return (
    <div
      className={`mt-2 bg-[var(--app-bg)] p-3 rounded-lg ${
        open ? "flex" : "hidden"
      } flex-col gap-4`}
    >
      {submenu.map((item) => (
        <Link to={"/"}>{item.title}</Link>
      ))}
    </div>
  );
};

type SideBarProps = {
  show: boolean;
  onHide: () => void;
  menus: NavMenuTypes[];
};

export default function SideBar({ show, menus, onHide }: SideBarProps) {
  const [openSubmenu, setOpenSubmenu] = useState(false);

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
          {menus.map((menu: NavMenuTypes) => (
            <li key={menu.id} className="relative ">
              <div className="flex items-center justify-between">
                <Link to={menu.path}>{menu.title}</Link>

                {(menu.megamenu || menu.submenu) && (
                  <IconButton onClick={() => setOpenSubmenu((prev) => !prev)}>
                    <KeyboardArrowDownIcon className="text-color" />
                  </IconButton>
                )}
              </div>

              {menu.submenu && (
                <>
                  <SideBarSubmenu submenu={menu.submenu} open={openSubmenu} />
                </>
              )}

              {menu.megamenu && (
                <>
                  <div className="mt-2 bg-[var(--app-bg)] p-3 rounded-lg flex flex-col gap-4">
                    {menu.megamenu.map((item: NavMegamenu) => (
                      <Link to={"/"} key={item.id}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </Drawer>
  );
}
