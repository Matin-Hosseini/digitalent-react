import { Link } from "react-router-dom";

import "./CourseBox.css";

import { BsCartPlus, BsClockHistory } from "react-icons/bs";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentLight, PiShootingStarFill } from "react-icons/pi";
// import CountDownTimerSm from "../CountDownTimer/Sm/Sm";
import ContainerBox from "../ContainerBox";

export default function CourseBox() {
  return (
    <ContainerBox padding={3}>
      <div className="course-box">
        <div className="course-box__discount-percentage">25%</div>
        <Link to="/course" className="">
          <img
            src="./src/assets/images/f4aa8891-d9a5-48f6-9166-8f40fa5e5f0f_cover.webp"
            alt=""
            className="rounded-lg mb-3"
          />
        </Link>
        <div className="course-box__info">
          <h2 className="course-box__name">
            <Link to="/course" className="underline-animated-text">
              آموزش html و css برای مبتدی ها که در واقع منجر به این هست خط سوم
            </Link>
          </h2>

          <div className="course-box__price flex items-center justify-between p-4 rounded-lg">
            <button className="course-box__shopping-cart-icon">
              <BsCartPlus />
            </button>

            <div className="flex items-center gap-2">
              <span className="course-box__old-price">220,000 تومان</span>
              <span className="course-box__current-price">175,000 تومان</span>
            </div>
          </div>

          <div className="flex justify-between items-center my-3">
            <div className="flex items-center gap-2">
              <BsClockHistory />
              <span className="course-box__time">20:50:34</span>
            </div>
            <div className="course-box__ratings flex items-center gap-1">
              <PiShootingStarFill className="star-icon" />
              <span>4</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className=" flex items-center gap-2">
              <LiaChalkboardTeacherSolid />
              <h3 className="course-box__teacher-name">متین حسینی</h3>
            </div>

            <div className="flex items-center gap-2">
              <PiStudentLight />
              <span>11,578</span>
            </div>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
}
