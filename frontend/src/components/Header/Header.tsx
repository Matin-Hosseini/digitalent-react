import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {
  return (
    <header>
      {/* nav menu starts */}
      <nav className="nav">
        <i className="ri-menu-3-line menu-btn d-lg-none" id="menu-btn"></i>
        <div className="nav__logo">
          <a href="index.html">
            <img src="assets/images/app-logo/app-favicon.png" alt="logo" />
          </a>
        </div>
        <ul className="nav-menu" id="nav-menu">
          <div className="d-flex d-lg-none justify-content-between align-items-center px-3 mt-3 mb-5">
            <div className="nav__logo">
              <a href="index.html">
                <img src="assets/images/app-logo/app-favicon.png" alt="logo" />
              </a>
            </div>
            <i className="bx bx-x" id="close-sidebar-btn"></i>
          </div>
          <li className="nav-menu__item nav-menu__item--active">
            <a href="index.html" className="nav-menu__link">
              <i className="bx bx-home-smile nav-menu__icon"></i>
              <span>خانه</span>
            </a>
          </li>
          <li className="nav-menu__item h-6">
            <a href="not-completed.html" className="nav-menu__link">
              <i className="bx bx-category-alt nav-menu__icon"></i>
              <span>دسته بندی</span>
            </a>
          </li>
          <li className="nav-menu__item d-none">
            <svg>
              <use href="#code"></use>
            </svg>
            <a href="#" className="nav-menu__link">
              برنامه نویسی
            </a>
            <svg className="nav-menu__arrow-down d-none d-lg-block">
              <use href="#arrow-down"></use>
            </svg>
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
            <a href="not-completed.html" className="nav-menu__link">
              <i className="bx bx-book-reader nav-menu__icon"></i>
              <span>بلاگ</span>
            </a>
          </li>
          <li className="nav-menu__item">
            <a href="#" className="nav-menu__link">
              <i className="bx bx-briefcase nav-menu__icon"></i>
              <span>همکاری با دیجی تلنت</span>
            </a>
          </li>
          <li className="nav-menu__item">
            <a href="contact-us.html" className="nav-menu__link">
              <i className="bx bx-phone-call nav-menu__icon"></i>
              <span>تماس با ما</span>
            </a>
          </li>
        </ul>
        {/* nav menu ends */}

        {/* nav options starts */}
        <div className="nav__options d-flex justify-content-center align-items-center">
          <div className="search-modal">
            <button
              className="d-flex"
              data-bs-toggle="modal"
              data-bs-target="#searchModal">
              <i className="bx bx-search-alt nav__icon"></i>
            </button>
            <div
              className="search-modal modal fade"
              id="searchModal"
              // tabindex="0"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <form action="">
                      <div className="custom-input position-relative m-0">
                        <input
                          type="text"
                          className="custom-input__input"
                          id="login-name-input"
                          required
                        />
                        <label className="custom-input__label">
                          چی دلت میخواد؟
                        </label>
                        <i className="bx bx-search-alt search-modal__search-icon"></i>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav__shopping-cart d-flex">
            <i className="bx bx-cart-alt nav__icon"></i>
          </div>
          <button className="nav__dark-mode-btn d-flex" id="dark-mode-btn">
            <i className="bx bx-moon nav__icon"></i>
          </button>
          <a href="login.html" className="login-signup-btn">
            <i className="bx bx-log-in nav__icon"></i>
            <span className="d-none d-md-block">ورود | ثبت نام</span>
          </a>
        </div>
        {/* nav options ends */}
      </nav>
    </header>
  );
};

export default Header;
