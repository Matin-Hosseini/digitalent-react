import { useState } from "react";
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
} from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

//local files and components
import "./Header.css";
import SearchModal from "./SearchModal/SearchModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      {/* nav menu starts */}
      <nav className="nav">
        <i className="ri-menu-3-line menu-btn d-lg-none" id="menu-btn"></i>
        <div className="nav__logo">
          <Link to={"/"}>
            <img src="src/assets/images/app-logo/app-favicon.png" alt="logo" />
          </Link>
        </div>
        <ul className="nav-menu" id="nav-menu">
          <div className="d-flex d-lg-none justify-content-between align-items-center px-3 mt-3 mb-5">
            <div className="nav__logo">
              <Link to="/">
                <img src="assets/images/app-logo/app-favicon.png" alt="logo" />
              </Link>
            </div>
            <i className="bx bx-x" id="close-sidebar-btn"></i>
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
            <button className="d-flex" onClick={() => setShowModal(true)}>
              <BiSearchAlt className="nav__icon" />
            </button>
            <SearchModal show={showModal} onHide={() => setShowModal(false)} />
          </div>

          <div className="nav__shopping-cart d-flex">
            <BiCartAlt className="nav__icon" />
          </div>
          <button className="nav__dark-mode-btn d-flex" id="dark-mode-btn">
            <BiMoon className="nav__icon" />
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
