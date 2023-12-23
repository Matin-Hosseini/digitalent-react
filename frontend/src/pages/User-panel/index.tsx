import "./index.css";

import { Link, Outlet } from "react-router-dom";

//react-icons
import {
  RiDashboardLine,
  RiEditLine,
  RiKeyLine,
  RiDatabase2Line,
  RiMoneyDollarCircleLine,
  RiCoupon2Line,
  RiLogoutCircleRLine,
  RiMedalLine,
} from "react-icons/ri";

export default function UserPanel() {
  return (
    <main>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 order-1 order-lg-0">
            <div className="account-side-bar">
              <div className="profile"></div>

              <ul className="menu">
                <li className="menu-item menu-item--active">
                  <RiDashboardLine />
                  <Link to="dashboard">داشبورد</Link>
                </li>
                <li className="menu-item">
                  <RiEditLine />
                  <Link to="edit-account">ویرایش حساب کاربری</Link>
                </li>
                <li className="menu-item">
                  <RiKeyLine />
                  <Link to="change-password">تغییر رمز عبور</Link>
                </li>
                <li className="menu-item">
                  <RiDatabase2Line />
                  <Link to="courses">همه دوره های من</Link>
                </li>
                <li className="menu-item">
                  <RiMoneyDollarCircleLine />
                  <Link to="buyed-courses">دوره های خریداری شده من</Link>
                </li>
                <li className="menu-item">
                  <RiMedalLine />
                  <Link to="free-courses">دوره های رایگان من</Link>
                </li>
                <li className="menu-item">
                  <RiCoupon2Line />
                  <Link to="tickets">تیکت ها</Link>
                </li>
                <li className="menu-item">
                  <RiLogoutCircleRLine />
                  <Link to="#">خروج از حساب کاربری</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 mb-5 mb-lg-0">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
