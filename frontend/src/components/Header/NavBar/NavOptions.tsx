import { useContext } from "react";
import { FiHeart, FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/auth";
import Icon from "../../Icon";

export default function NavOptions() {
  const { userInfo, isLoggedIn } = useContext(authContext);
  return (
    <div className="flex items-center gap-4">
      <Icon>
        <IoCartOutline className="text-color" />
      </Icon>
      <Icon>
        <FiHeart className="text-color" />
      </Icon>
      <Link to={"/login"} className="flex items-center gap-2">
        <span className="hidden md:block">
          {isLoggedIn ? userInfo.username : "ورود | عضویت"}
        </span>
        <FiUser />
      </Link>
    </div>
  );
}
