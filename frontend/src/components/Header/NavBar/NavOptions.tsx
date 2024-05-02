import { useContext, useEffect, useState } from "react";
import { FiHeart, FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/auth";
import UserMenu from "./UserMenu";
import IconButton from "../../mui-customs/IconButton";
import ContainerBox from "../../ContainerBox";
import CourseCartItem from "../../CourseBox/CourseCartItem";
import { Menu } from "@mui/material";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import useLocalStorage from "../../../hooks/localstorage";
import allcourses from "./../../../data/courses";

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

  const [wishListCourses, setWishListCourses] = useState([]);
  

  useEffect(() => {
    const [localStorage, setLocalStorage] = useLocalStorage("products");

    localStorage?.forEach((storageCourse: string) => {
      allcourses?.forEach((course) => {
        if (course.id === storageCourse) {
          setWishListCourses((prevCourses) => [...prevCourses, course]);
        }
      });
    });
  }, []);

  return (
    <div className="flex items-center gap-4 h-full">
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
              background: "none",
            },
            "& .MuiList-root": {
              padding: 0,
              background: "none",
              color: "var(--text-color)",
              width: 450,
            },
          }}
        >
          <ContainerBox className={"p-5"}>
            <p className="mb-4">سبد خرید</p>
            <div className="divide-y divide-solid divide-gray-600 max-h-[32rem] overflow-auto ">
              <CourseCartItem isCartProduct />
              <CourseCartItem isCartProduct />
              <CourseCartItem isCartProduct />
              <CourseCartItem isCartProduct />
            </div>
            <div className="h-[20rem] border border-[var(--red)] border-dashed rounded-lg flex items-center justify-center text-center hidden">
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
      <div className="relative h-full flex items-center group">
        <IconButton>
          <Link to={"/wishlist"}>
            <FiHeart className="text-color" />
          </Link>
        </IconButton>

        <ContainerBox
          className={
            "p-5 absolute top-[120%] -left-8 w-[40rem] z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-full transition-all"
          }
        >
          <p className="mb-4">لیست علاقه مندی</p>
          <div className="divide-y divide-solid divide-gray-600 max-h-[32rem] overflow-auto ">
            {wishListCourses.map((course) => (
              <CourseCartItem
                isCartProduct={false}
                key={course.id}
                {...course}
              />
            ))}
          </div>
          <div className="h-[20rem] border border-[var(--red)] border-dashed rounded-lg flex items-center justify-center text-center hidden">
            <div className="">
              <MdOutlineRemoveShoppingCart className="text-[var(--red)] w-16 h-16 m-auto" />
              <p>لیست علاقه مندی شما خالی می باشد.</p>
            </div>
          </div>
          <button className="custom-btn custom-btn-purple mt-8 w-full ">
            افزودن همه به سبر خرید
          </button>
        </ContainerBox>
      </div>
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
