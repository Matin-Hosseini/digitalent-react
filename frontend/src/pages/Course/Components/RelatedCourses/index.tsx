import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CourseBox from "../../../../components/CourseBox/CourseBox";

const relatedCoursesData = [1, 2, 3, 4, 5, 6, 7, 8];

export default function RelatedCourses() {
  return (
    <section className="related-articles">
      <div className="container">
        <SectionHeader title="دوره های مشابه" to="/" />

        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            290: {
              slidesPerView: 1.2,
            },
            400: {
              slidesPerView: 1.5,
            },
            500: {
              slidesPerView: 1.8,
            },
            576: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 2.8,
            },
            992: {
              slidesPerView: 3.8,
            },
            1200: {
              slidesPerView: 4.3,
            },
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}>
          {relatedCoursesData?.map((course) => (
            <SwiperSlide key={course}>
              <CourseBox />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
