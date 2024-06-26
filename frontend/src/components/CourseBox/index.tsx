import { Link } from "react-router-dom";

import "./../../styles/modules/underline-animated-text.css";

import { BsClockHistory } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiShootingStarFill, PiStudentLight } from "react-icons/pi";

import "react-toastify/dist/ReactToastify.css";

import ContainerBox from "../ContainerBox";
import DiscountTimer from "./DiscountTimer";
import { useCoursesContext } from "../../contexts/courses";

import courseCover from "./../../assets/images/html-course-cover.jpg";
import { Course } from "../../types/Course";

export default function CourseBox({
  id,
  title,
  price,
  discount,
  students,
  teacher,
  time,
  rate,
  endDiscount,
  short_name,
}: Course) {
  const { addCourseToWishlist } = useCoursesContext();
  const priceAfterDiscount: Number = (price * (100 - discount)) / 100;

  return (
    <ContainerBox className="group p-3">
      <div className="course-box relative text-xl text-[var(--gray)] transition-all">
        {discount !== 0 && (
          <div className="absolute grid place-content-center bg-[var(--purple)] text-white w-14 h-14 rounded-full -top-4 -right-4 -rotate-[30deg] group-hover:-rotate-[10deg] transition-all z-40">
            {discount}%
          </div>
        )}
        <Link to={`/course/${short_name}`} className="relative">
          {discount !== 0 && (
            <DiscountTimer
              className={"absolute left-3 top-3"}
              endTime={endDiscount || ""}
            />
          )}
          <img src={courseCover} alt="" className="rounded-lg mb-3 h-[16rem]" />
        </Link>
        <div className="relative">
          <h2 className="line-clamp-2 mb-5 text-2xl text-[var(--title-color)] h-24">
            <Link
              to={`/course/${short_name}`}
              className="underline-animated-text group-hover:bg-[length:100%_2px]"
            >
              {title}
            </Link>
          </h2>

          <div className="bg-[rgba(130,140,154,0.09)] flex items-center justify-between p-4 rounded-lg">
            <button
              className="grid place-content-center w-10 h-10 bg-[var(--red)]  rounded-se-xl rounded-es-xl text-white transition-all hover:rounded-full"
              onClick={() => addCourseToWishlist(id)}
            >
              <FaRegHeart className="w-6" />
            </button>

            <div className="flex items-center gap-2">
              {discount !== 0 && (
                <span className="relative text-[var(--gray)] text-lg me-4 before:absolute before:content-[''] before:w-full before:h-[0.1rem] before:bg-[var(--red)] before:top-1/2 before:-translate-y-2/4 before:-rotate-12">
                  {price.toLocaleString()} تومان
                </span>
              )}
              <span className="text-[var(--green)] text-2xl">
                {priceAfterDiscount === 0 ? (
                  "رایگان"
                ) : (
                  <>{priceAfterDiscount.toLocaleString()} تومان</>
                )}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center my-3">
            <div className="flex items-center gap-2">
              <BsClockHistory className="w-6" />
              <span>{time} ساعت</span>
            </div>
            <div className="flex items-center gap-1">
              <PiShootingStarFill className="w-7 fill-yellow" />
              <span>{rate}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to={"/teacher"}
              className=" flex items-center gap-2 hover:text-[var(--purple)] transition-all"
            >
              <LiaChalkboardTeacherSolid className="w-7" />
              <h3>{teacher}</h3>
            </Link>

            <div className="flex items-center gap-2">
              <PiStudentLight className="w-7" />
              <span>{students?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
}
