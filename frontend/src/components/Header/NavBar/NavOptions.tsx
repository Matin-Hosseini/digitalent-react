import { useContext, useState } from "react";
import { FiHeart, FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/auth";
import Icon from "../../Icon";
import UserMenu from "./UserMenu";
import IconButton from "../../mui-customs/IconButton";
import ContainerBox from "../../ContainerBox";
import CourseCartItem from "../../CourseBox/CourseCartItem";
import { Menu } from "@mui/material";
import SectionHeader from "../../SectionHeader/SectionHeader";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function NavOptions() {
  const { userInfo, isLoggedIn } = useContext(authContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <IconButton onClick={handleClick}>
          <IoCartOutline />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            ".MuiPaper-root": {
              // top: "",
              background: "none",
            },
            "& .MuiList-root": {
              padding: 0,
              background: "none",
              color: "var(--text-color)",
              width: 400,
            },
          }}
        >
          <ContainerBox className={"p-5"}>
            <p className="mb-4">سبد خرید</p>
            <div className="divide-y divide-solid divide-gray-600 max-h-[20rem] overflow-auto ">
              <CourseCartItem />
              <CourseCartItem />
              <CourseCartItem />
              <CourseCartItem />
            </div>
            <div className="h-[20rem] border border-[var(--red)] border-dashed rounded-lg flex items-center justify-center text-center">
              <div className="">
                <MdOutlineRemoveShoppingCart className="text-[var(--red)] w-16 h-16 m-auto" />
                <p>سبد خرید شما خالی می باشد.</p>
              </div>
            </div>
            <button className="custom-btn custom-btn-green mt-8 w-full ">
              پرداخت
            </button>
          </ContainerBox>
        </Menu>
      </div>
      <Icon>
        <FiHeart className="text-color" />
      </Icon>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Link to={"/login"} className="flex items-center gap-2">
          <span className="hidden md:block">ورود | عضویت</span>
          <FiUser />
        </Link>
      )}
    </div>
  );
}
