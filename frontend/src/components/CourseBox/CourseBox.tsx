import { Link } from "react-router-dom";

import "./CourseBox.css";

import { BsCartPlus } from "react-icons/bs";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentLight, PiShootingStarFill } from "react-icons/pi";
import { BsClockHistory } from "react-icons/bs";
import CountDownTimerSm from "../CountDownTimer/Sm/Sm";

export default function CourseBox() {
  return (
    <div className="course-box">
      <div className="course-box__discount-percentage">25%</div>
      <Link to="/course" className="course-box__image">
        <img
          src="./src/assets/images/f4aa8891-d9a5-48f6-9166-8f40fa5e5f0f_cover.webp"
          alt=""
        />
      </Link>
      <div className="course-box__info">
        <h2 className="course-box__name">
          <Link to="/course" className="underline-animated-text">
            آموزش html و css برای مبتدی ها که در واقع منجر به این هست خط سوم
          </Link>
        </h2>
        <div className="course-box__price">
          <button className="course-box__shopping-cart-icon">
            <BsCartPlus />
          </button>

          <div className="d-flex align-items-center">
            <span className="course-box__old-price">220,000 تومان</span>
            <span className="course-box__current-price">175,000 تومان</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="course-box__teacher d-flex align-items-center">
            <LiaChalkboardTeacherSolid />
            <h3 className="course-box__teacher-name">متین حسینی</h3>
          </div>

          <div className="course-box__students">
            <PiStudentLight />
            <span>11,578</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <BsClockHistory />
            <span className="course-box__time">20:50:34</span>
          </div>
          <div className="course-box__ratings">
            <span>4</span>
            <PiShootingStarFill className="star-icon" />
          </div>
          <CountDownTimerSm/>
        </div>
      </div>
    </div>
  );
}
