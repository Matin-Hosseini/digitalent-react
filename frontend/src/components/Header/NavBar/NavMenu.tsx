import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import SideBar from "../SideBar";
import NavLink from "./NavLink";

const navMenu = [
  { id: 1, title: "خانه", megaMenu: false, to: "/" },
  { id: 2, title: "دوره ها", megaMenu: true, to: "/courses" },
  { id: 3, title: "برنامه نویسی", megaMenu: false, to: "/courses/programming" },
  { id: 4, title: "مقالات", megaMenu: false, to: "/articles" },
  { id: 4, title: "ارتباط با ما", megaMenu: false, to: "/contact-us" },
];

export default function NavMenu() {
  const [showSideBar, setShowSideBar] = useState(false);

  const [menus, setMenus] = useState([]);

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

      <button className="block lg:hidden" onClick={() => setShowSideBar(true)}>
        <MdOutlineMenu />
      </button>

      <SideBar show={showSideBar} onHide={() => setShowSideBar(false)} />
    </>
  );
}
