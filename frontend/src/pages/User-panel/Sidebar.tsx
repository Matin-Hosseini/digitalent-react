import { useEffect, useState } from "react";
import {
  RiCoupon2Line,
  RiDashboardLine,
  RiDatabase2Line,
  RiEditLine,
  RiKeyLine,
  RiLogoutCircleRLine,
  RiMedalLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import PanelSidebarLink from "./SidebarLink";

const userPanelSidebarMenu = [
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
  {
    id: "evehh",
    title: "خروج از حساب",
    icon: <RiLogoutCircleRLine />,
    path: "get-out",
  },
];

export default function PanelSidebar() {
  const [sidebarMenu, setSidebarMenu] = useState([]);

  useEffect(() => {
    setSidebarMenu(userPanelSidebarMenu);
  }, []);

  return (
    <div className="account-side-bar">
      <div className="profile"></div>

      <div className="menu space-y-4">
        {sidebarMenu.map((menu) => (
          <PanelSidebarLink key={menu.id} {...menu} />
        ))}
      </div>
    </div>
  );
}
