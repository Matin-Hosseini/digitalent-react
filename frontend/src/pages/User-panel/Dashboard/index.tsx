import "./Dashboard.css";

//react-icons
import {
  RiPlayList2Line,
  RiCoupon3Line,
  RiMessage3Line,
  RiQuestionFill,
} from "react-icons/ri";

export default function UserDashBoard() {
  return (
    <div className="">
      <section className="boxes">
        <div className="box">
          <div className="box__content">
            <p>12 دوره</p>
            <span>دوره ها</span>
          </div>
          <i className="ri-play-list-2-line box__icon"></i>
          <RiPlayList2Line />
        </div>
        <div className="box">
          <div className="box__content">
            <p>3 تیکت</p>
            <span>تیکت ها</span>
          </div>
          <i className="ri-coupon-3-line box__icon"></i>
          <RiCoupon3Line />
        </div>
        <div className="box">
          <div className="box__content">
            <p>12 نظر</p>
            <span>نظرات من</span>
          </div>
          <i className="ri-message-3-line box__icon"></i>
          <RiMessage3Line />
        </div>
        <div className="box">
          <div className="box__content">
            <p>12 سوال</p>
            <span>سوالات من</span>
          </div>
          <i className="ri-question-fill box__icon"></i>
          <RiQuestionFill />
        </div>
      </section>

      <section className="user-info">
        <h1 className="user-info__title">داشبورد</h1>
        <div className="user-info__content">
          <div>
            <span>نام و نام خانوادگی: </span>
            <span>سید متین حسینی</span>
          </div>
          <div>
            <span>نام کاربری: </span>
            <span>matin-5500</span>
          </div>
          <div>
            <span>ایمیل: </span>
            <span>koenigsegg.matin@gmail.com</span>
          </div>
          <div>
            <span>شماره موبایل: </span>
            <span>0912932354</span>
          </div>
        </div>
      </section>
    </div>
  );
}
