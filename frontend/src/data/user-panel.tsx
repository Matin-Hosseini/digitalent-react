import {
  RiCoupon2Line,
  RiDashboardLine,
  RiDatabase2Line,
  RiEditLine,
  RiKeyLine,
} from "react-icons/ri";
import { UserPanelSidebarMenuTypes } from "../types/UserPanel";

export const userPanelSidebarMenu: UserPanelSidebarMenuTypes[] = [
  {
    id: "nekjn",
    title: "داشبورد",
    icon: <RiDashboardLine />,
    path: "dashboard",
  },
  {
    id: "enbr",
    title: "ویرایش حساب کاربری",
    icon: <RiEditLine />,
    path: "edit-account",
  },
  {
    id: "wevwe",
    title: "تغییر رمز عبور",
    icon: <RiKeyLine />,
    path: "change-password",
  },
  {
    id: "vevg",
    title: "دوره های من",
    icon: <RiDatabase2Line />,
    path: "courses",
  },
  {
    id: "avae",
    title: "تیکت ها",
    icon: <RiCoupon2Line />,
    path: "tickets",
  },
];
