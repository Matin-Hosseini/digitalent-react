import Logo from "../../Logo";

import { BiSearchAlt } from "react-icons/bi";
import Icon from "../../Icon";

import ThemeBtn from "../ThemeBtn";
import "./index.css";

export default function TopBar() {
  return (
    <>
      <div className="flex items-center content-between my-3">
        <Logo />

        <div className="flex items-center gap-3">
          <ThemeBtn />
          <div className="hidden lg:block search-input px-4 py-2">
            <div>
              <input
                type="text"
                placeholder="چه دوره ای دوست داری؟"
                className="bg-transparent pr-3 text-xl w-80"
              />
              <Icon>
                <BiSearchAlt className="text-color" />
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
