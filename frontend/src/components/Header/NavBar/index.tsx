import { Link } from "react-router-dom";
import Box from "../../Box";

import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

import Icon from "../../Icon";

import "./index.css";

export default function NavBar() {
  return (
    <Box className="">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-14">
          <li>
            <Link to={"/"}>خانه</Link>
          </li>
          <li>
            <Link to="">برنامه نویسی</Link>
          </li>
          <li>
            <Link to={"/"}>دوره ها</Link>
          </li>
          <li>
            <Link to={"/"}>مقالات</Link>
          </li>
          <li>
            <Link to={"/"}>تماس با ما</Link>
          </li>
          <li>
            <Link to={"/"}>خانه</Link>
          </li>
          <li>
            <Link to={"/"}>مقالات</Link>
          </li>
          <li>
            <Link to={"/"}>تماس با ما</Link>
          </li>
          <li>
            <Link to={"/"}>خانه</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Icon>
            <IoCartOutline className="text-color" />
          </Icon>
          <Icon>
            <FiHeart className="text-color" />
          </Icon>
          <Link to={"/login"}>ورود</Link>
        </div>
      </nav>
    </Box>
  );
}
