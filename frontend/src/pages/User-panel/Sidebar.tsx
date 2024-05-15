import { useEffect, useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import PanelSidebarLink from "./SidebarLink";
import { useAuthContext } from "../../contexts/auth";
import { UserPanelSidebarMenuTypes } from "../../types/UserPanel";
import { userPanelSidebarMenu } from "../../data/user-panel";

export default function PanelSidebar() {
  const { logout } = useAuthContext();
  const [sidebarMenu, setSidebarMenu] = useState<UserPanelSidebarMenuTypes[]>(
    []
  );

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
        <button
          onClick={() => logout()}
          className="flex items-centerr gap-3 p-3 rounded-lg hover:text-[var(--purple)] hover:bg-[var(--bg-purple)] w-full transition"
        >
          <RiLogoutCircleRLine />
          خروج از حساب
        </button>
      </div>
    </div>
  );
}
