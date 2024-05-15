import { Avatar, IconButton, Menu } from "@mui/material";
import { useState } from "react";
import { BiLogoDiscourse } from "react-icons/bi";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { LuPanelRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth";

export default function UserMenu() {
  const { userInfo } = useAuthContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{ background: "var(--section-bg)", color: "var(--text-color)" }}
      >
        <FiUser />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
            background: "var(--section-bg)",
            color: "var(--text-color)",
          },
        }}
      >
        <div className="p-5 grid grid-cols-1 divide-y space-y-6">
          <div className="flex items-center gap-3">
            <Avatar
              src="/src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
              alt={userInfo.name || userInfo.username}
              sx={{
                width: "4rem",
                height: "4rem",
                fontFamily: "vasir",
                backgroundColor: "var(--purple)",
                fontSize: "1.5rem",
              }}
            />
            <p className="text-2xl font-bold">
              {userInfo.name || userInfo.username}
            </p>
          </div>

          <div className="space-y-6 border-[var(--border-color)] border-solid pt-6">
            <Link
              onClick={handleClose}
              to={"/user-panel/dashboard"}
              className="flex items-center gap-3"
            >
              <LuPanelRight />
              پنل کاربری
            </Link>
            <Link
              onClick={handleClose}
              to={"/user-panel/courses"}
              className="flex items-center gap-3"
            >
              <BiLogoDiscourse />
              دوره ها
            </Link>
            <Link
              onClick={handleClose}
              to={"/user-panel/tickets"}
              className="flex items-center gap-3"
            >
              <BsFillTicketPerforatedFill />
              تیکت ها
            </Link>
          </div>
          <div className="border-[var(--border-color)] border-solid pt-6">
            <Link to={"/user-panel/"} className="flex items-center gap-3">
              <CgLogOut className="text-[var(--red)]" />
              خروج
            </Link>
          </div>
        </div>
      </Menu>
    </>
  );
}
