import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import SideBar from "../SideBar";
import NavLink from "./NavLink";
import { NavMenuTypes } from "../../../types/Header";
import { navMenu } from "../../../data/header";

export default function NavMenu() {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const [menus, setMenus] = useState<NavMenuTypes[]>([]);

  useEffect(() => {
    setMenus(navMenu);
  }, []);

  return (
    <>
      <ul className="items-center hidden h-20  lg:flex gap-14">
        {menus.map((menu) => (
          <NavLink key={menu.id} {...menu} />
        ))}
      </ul>

      <div className="lg:hidden">
        <IconButton
          className="block lg:hidden"
          onClick={() => setShowSideBar(true)}
        >
          <MdOutlineMenu className="text-color" />
        </IconButton>
      </div>

      <SideBar
        show={showSideBar}
        onHide={() => setShowSideBar(false)}
        menus={menus}
      />
    </>
  );
}
