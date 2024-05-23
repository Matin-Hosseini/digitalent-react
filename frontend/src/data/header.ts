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
    submenu: [
      { id: "fnee", title: "بلاک چین", path: "/courses?cat=blockchain" },
      { id: "fege", title: "گرافیک", path: "/courses?cat=graphic" },
      { id: "fefe", title: "سئو", path: "/courses?cat=seo" },
      { id: "aaae", title: "برنامه نویسی", path: "/courses?cat=programming" },
    ],
  },
  // {
  //   id: 3,
  //   title: "برنامه نویسی",
  //   path: "/courses?cat=programming",
  //   // submenu: [
  //   //   { id: "fnslkf", title: "فرانت اند", path: "/courses?cat=programming" },
  //   //   { id: "febe", title: "بک اند", path: "/courses/backend" },
  //   //   { id: "hehrh", title: "موبایل", path: "/courses/mobile" },
  //   //   { id: "ehhjy", title: "دیتا ساینس", path: "/courses/datasience" },
  //   // ],
  // },
  { id: 4, title: "مقالات", path: "/articles" },
  { id: 5, title: "ارتباط با ما", path: "/contact-us" },
];
