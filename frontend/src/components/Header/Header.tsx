import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

//icons
import {
  BiHomeSmile,
  BiCategoryAlt,
  BiBookReader,
  BiBriefcase,
  BiPhoneCall,
  BiSearchAlt,
  BiCartAlt,
  BiMoon,
  BiLogIn,
  BiSun,
} from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

//local files and components
import "./Header.css";
import SearchModal from "./SearchModal/SearchModal";

const Header = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const navMenuElem = useRef(null);

  const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   function logger(e) {
  //     console.log(e.target);
  //     if (navMenuElem.current && !navMenuElem.current.contains(e.target)) {
  //       console.log("close");
  //     }
  //   }

  //   document.addEventListener("mousedown", logger);
  //   return () => {
  //     document.removeEventListener("mousedown", logger);
  //   };
  // }, []);

  return (
    <header>
      <nav className="header-nav">
        <div onClick={() => setShowSideBar(true)}>
          <RiMenu3Fill className="menu-btn d-lg-none" />
        </div>
        <div className="nav__logo">
          <Link to={"/"}>
            <img src="src/assets/images/app-logo/app-favicon.png" alt="logo" />
          </Link>
        </div>
        {/* nav menu starts */}
        <ul
          ref={navMenuElem}
          className={`nav-menu ${showSideBar && "nav-menu--open"}`}
          id="nav-menu">
          <div className="d-flex d-lg-none justify-content-between align-items-center px-3 mt-3 mb-5">
            <div className="nav__logo">
              <Link to="/">
                <img
                  src="src/assets/images/app-logo/app-favicon.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div
              className="close-side-bar-btn"
              onClick={() => setShowSideBar(false)}>
              <IoCloseSharp />
            </div>
          </div>
          <li className="nav-menu__item nav-menu__item--active">
            <Link to="/" className="nav-menu__link">
              <BiHomeSmile className="nav-menu__icon" />
              <span>خانه</span>
            </Link>
          </li>
          <li className="nav-menu__item h-6">
            <Link to="/not-completed" className="nav-menu__link">
              <BiCategoryAlt className="nav-menu__icon" />
              <span>دسته بندی</span>
            </Link>
          </li>
          <li className="nav-menu__item d-none">
            <BsCodeSlash />
            <Link to="/" className="nav-menu__link">
              برنامه نویسی
            </Link>
            <IoIosArrowDown className="nav-menu__arrow-down d-none d-lg-block" />
            <ul className="nav-sub-menu">
              <li className="nav-sub-menu__item">
                <a href="#" className="nav-sub-menu__link">
                  فرانت اند
                </a>
              </li>
              <li className="nav-sub-menu__item">
                <a href="#" className="nav-sub-menu__link">
                  بک اند
                </a>
              </li>
              <li className="nav-sub-menu__item">
                <a href="#" className="nav-sub-menu__link">
                  امنیت
                </a>
              </li>
              <li className="nav-sub-menu__item">
                <a href="#" className="nav-sub-menu__link">
                  اندروید
                </a>
              </li>
              <li className="nav-sub-menu__item">
                <a href="#" className="nav-sub-menu__link">
                  ios
                </a>
              </li>
              <li className="nav-sub-menu__item">
                <a href="#" className="nav-sub-menu__link">
                  هوش مصنوعی
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-menu__item">
            <Link to="/not-completed" className="nav-menu__link">
              <BiBookReader className="nav-menu__icon" />
              <span>بلاگ</span>
            </Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/not-completed" className="nav-menu__link">
              <BiBriefcase className="nav-menu__icon" />
              <span>همکاری با دیجی تلنت</span>
            </Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/contact-us" className="nav-menu__link">
              <BiPhoneCall />
              <span>تماس با ما</span>
            </Link>
          </li>
        </ul>
        {/* nav menu ends */}

        {/* nav options starts */}
        <div className="nav__options d-flex justify-content-center align-items-center">
          <div className="search-modal">
            <button
              className="d-flex"
              onClick={() => setShowSearchModal((prev) => !prev)}>
              <BiSearchAlt className="nav__icon" />
            </button>
            <SearchModal
              show={showSearchModal}
              onHide={() => setShowSearchModal(false)}
            />
          </div>

          <div className="nav__shopping-cart d-flex">
            <BiCartAlt className="nav__icon" />
          </div>
          <button className="nav__dark-mode-btn d-flex">
            {theme === "dark" ? (
              <BiSun className="nav__icon" />
            ) : (
              <BiMoon className="nav__icon" />
            )}
          </button>
          <Link to="/login" className="login-signup-btn">
            <BiLogIn className="nav__icon" />
            <span className="d-none d-md-block">ورود | ثبت نام</span>
          </Link>
        </div>
        {/* nav options ends */}
      </nav>
    </header>
  );
};

export default Header;
