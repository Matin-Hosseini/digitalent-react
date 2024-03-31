import { Link } from "react-router-dom";

import "./../../styles/modules/underline-animated-text.css";

import { BsCartPlus, BsClockHistory } from "react-icons/bs";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiShootingStarFill, PiStudentLight } from "react-icons/pi";
import ContainerBox from "../ContainerBox";
import DiscountTimer from "./DiscountTimer";

export default function CourseBox() {
  return (
    <ContainerBox className="group p-3">
      <div className="course-box relative text-xl text-[var(--gray)] transition-all">
        <div className="absolute grid place-content-center bg-[var(--purple)] text-white w-14 h-14 rounded-full -top-4 -right-4 -rotate-[30deg] group-hover:-rotate-[10deg] transition-all z-50">
          25%
        </div>
        <Link to="/course" className="relative">
          <DiscountTimer
            className={"absolute left-3 top-3"}
            endTime={"2024-04-01T00:00:00"}
          />
          <img
            src="./src/assets/images/f4aa8891-d9a5-48f6-9166-8f40fa5e5f0f_cover.webp"
            alt=""
            className="rounded-lg mb-3"
          />
        </Link>
        <div className="relative">
          <h2 className="line-clamp-2 mb-5 text-2xl text-[var(--title-color)] h-24">
            <Link
              to="/course"
              className="underline-animated-text group-hover:bg-[length:100%_2px]"
            >
              نجر به این هست خط ن در این عبارت درحال زیاد شدن بوده و با اضافه
              کردن متن به خط بعدی خواهیم رتف حال حاضر با
            </Link>
          </h2>

          <div className="bg-[rgba(130,140,154,0.09)] flex items-center justify-between p-4 rounded-lg">
            <button className="grid place-content-center w-10 h-10 bg-[var(--red)] rounded-se-xl rounded-es-xl text-white transition-all hover:rounded-full">
              <BsCartPlus className="w-6" />
            </button>

            <div className="flex items-center gap-2">
              <span className="relative text-[var(--gray)] text-lg me-4 before:absolute before:content-[''] before:w-full before:h-[0.1rem] before:bg-[var(--red)] before:top-1/2 before:-translate-y-2/4 before:-rotate-12">
                220,000 تومان
              </span>
              <span className="text-[var(--green)] text-2xl">
                175,000 تومان
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center my-3">
            <div className="flex items-center gap-2">
              <BsClockHistory className="w-6" />
              <span>20:50:34</span>
            </div>
            <div className="flex items-center gap-1">
              <PiShootingStarFill className="w-7 fill-yellow" />
              <span>4</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to={"/teacher"}
              className=" flex items-center gap-2 hover:text-[var(--purple)] transition-all"
            >
              <LiaChalkboardTeacherSolid className="w-7" />
              <h3>متین حسینی</h3>
            </Link>

            <div className="flex items-center gap-2">
              <PiStudentLight className="w-7" />
              <span>11,578</span>
            </div>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
}
