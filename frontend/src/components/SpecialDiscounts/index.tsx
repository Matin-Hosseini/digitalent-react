import { useEffect, useState } from "react";
import CourseBox from "../CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

//<-------------- Swiper -------------->
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { useCoursesContext } from "../../contexts/courses";
import { Course } from "../../types/Course";

export default function SpecialDiscounts() {
  const { courses: allCourses } = useCoursesContext();

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const specialDiscountCourses = allCourses.filter(
      (course: any) => course.discount > 30
    );
    setCourses(specialDiscountCourses);
  }, []);

  return (
    <section className="special-discount my-5">
      <div className="container">
        <SectionHeader title="تخفیفات ویژه" to={"/"} />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          breakpoints={{
            400: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2.1,
            },
            768: {
              slidesPerView: 2.3,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3.5,
            },
            1536: {
              slidesPerView: 4.5,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {courses?.map((course: Course) => (
            <SwiperSlide key={course.id}>
              <CourseBox {...course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
