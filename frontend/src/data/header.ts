import { NavMenuTypes } from "../types/Header";

export const navMenu: NavMenuTypes[] = [
  {
    id: 1,
    title: "خانه",
    path: "/",
  },
  {
    id: 2,
    title: "دوره ها",
    path: "/courses",
    megamenu: [
      { id: "fnee", title: "فیلمبرداری", path: "/" },
      { id: "fege", title: "گرافیک", path: "/" },
      { id: "leme", title: "آشپزی", path: "/" },
      { id: "fefe", title: "ui/ux", path: "/" },
      { id: "aaae", title: "انیمیشن سازی", path: "/" },
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
