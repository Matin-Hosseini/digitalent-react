// import { useContext, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// //icons
// import { BiCartAlt, BiLogIn, BiMoon, BiSearchAlt, BiSun } from "react-icons/bi";
// import { BsCodeSlash } from "react-icons/bs";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoCloseSharp } from "react-icons/io5";
// import { RiMenu3Fill } from "react-icons/ri";

// //local files and components
// import Logo from "../Logo";
// import "./Header.css";
// import NavMenuLink from "./NavMenuLink";
// import SearchModal from "./SearchModal/SearchModal";

// //hooks
// import useScrollDirection from "./../../hooks/scrollDirection";

// //contexts
// import { ThemeContext } from "../../contexts/theme";

// //datas
// import navLinks from "../../data/navMenuLink";

// const Header = () => {
//   const [showSearchModal, setShowSearchModal] = useState(false);
//   const [showSideBar, setShowSideBar] = useState(false);
//   const navMenuElem = useRef(null);

//   const scrollDirection = useScrollDirection();
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <header
//       className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
//     >
//       <nav className="header-nav">
//         <div onClick={() => setShowSideBar(true)}>
//           <RiMenu3Fill className="menu-btn d-lg-none" />
//         </div>
//         <Logo />
//         {/* nav menu starts */}
//         <ul
//           ref={navMenuElem}
//           className={`nav-menu ${showSideBar && "nav-menu--open"}`}
//           id="nav-menu"
//         >
//           <div className="px-3 mt-3 mb-5 d-flex d-lg-none justify-content-between align-items-center">
//             <Logo />
//             <div
//               className="close-side-bar-btn"
//               onClick={() => setShowSideBar(false)}
//             >
//               <IoCloseSharp />
//             </div>
//           </div>
//           {navLinks.map((navLink) => (
//             <NavMenuLink key={navLink.id} {...navLink} />
//           ))}

//           <li className="nav-menu__item d-none nav-menu__item--active">
//             <BsCodeSlash />
//             <Link to="/" className="nav-menu__link">
//               برنامه نویسی
//             </Link>
//             <IoIosArrowDown className="nav-menu__arrow-down d-none d-lg-block" />
//             <ul className="nav-sub-menu">
//               <li className="nav-sub-menu__item">
//                 <a href="#" className="nav-sub-menu__link">
//                   فرانت اند
//                 </a>
//               </li>
//               <li className="nav-sub-menu__item">
//                 <a href="#" className="nav-sub-menu__link">
//                   بک اند
//                 </a>
//               </li>
//               <li className="nav-sub-menu__item">
//                 <a href="#" className="nav-sub-menu__link">
//                   امنیت
//                 </a>
//               </li>
//               <li className="nav-sub-menu__item">
//                 <a href="#" className="nav-sub-menu__link">
//                   اندروید
//                 </a>
//               </li>
//               <li className="nav-sub-menu__item">
//                 <a href="#" className="nav-sub-menu__link">
//                   ios
//                 </a>
//               </li>
//               <li className="nav-sub-menu__item">
//                 <a href="#" className="nav-sub-menu__link">
//                   هوش مصنوعی
//                 </a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//         {/* nav menu ends */}

//         {/* nav options starts */}
//         <div className="nav__options d-flex justify-content-center align-items-center">
//           <div className="search-modal">
//             <button
//               className="d-flex"
//               onClick={() => setShowSearchModal((prev) => !prev)}
//             >
//               <BiSearchAlt className="nav__icon" />
//             </button>
//             <SearchModal
//               show={showSearchModal}
//               onHide={() => setShowSearchModal(false)}
//             />
//           </div>

//           <div className="nav__shopping-cart d-flex">
//             <BiCartAlt className="nav__icon" />
//           </div>
//           <button className="nav__dark-mode-btn d-flex" onClick={toggleTheme}>
//             {theme === "dark" ? (
//               <BiSun className="nav__icon" />
//             ) : (
//               <BiMoon className="nav__icon" />
//             )}
//           </button>

//           <Link to="/login" className="login-signup-btn">
//             <BiLogIn className="nav__icon" />
//             <span className="d-none d-md-block">ورود | ثبت نام</span>
//           </Link>
//         </div>
//         {/* nav options ends */}
//       </nav>
//     </header>
//   );
// };

// export default Header;

//icons

//local files and components
import "./Header.css";

//hooks

//contexts
import NavBar from "./NavBar";
import TopBar from "./TopHeader";

//datas

const Header = () => {
  return (
    <header>
      <div className="container">
        <TopBar />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
