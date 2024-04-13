import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import SideBar from "../SideBar";
import NavLink from "./NavLink";

const navMenu = [
  {
    id: 1,
    title: "خانه",
    path: "/",
    submenu: [{ id: "fsdknfs", title: "زیر منوی 1" }],
  },
  {
    id: 2,
    title: "دوره ها",
    path: "/courses",
    megamenu: [
      { id: "fnee", title: "فیلمبرداری" },
      { id: "fege", title: "گرافیک" },
      { id: "leme", title: "آشپزی" },
      { id: "fefe", title: "ui/ux" },
      { id: "aaae", title: "انیمیشن سازی" },
    ],
  },
  {
    id: 3,
    title: "برنامه نویسی",
    path: "/courses/programming",
    submenu: [
      { id: "fnslkf", title: "فرانت اند", path: "/courses/frontend" },
      { id: "febe", title: "بک اند", path: "/courses/backend" },
      { id: "hehrh", title: "موبایل", path: "/courses/mobile" },
      { id: "ehhjy", title: "دیتا ساینس", path: "/courses/datasience" },
    ],
  },
  { id: 4, title: "مقالات", path: "/articles" },
  { id: 5, title: "ارتباط با ما", path: "/contact-us" },
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
