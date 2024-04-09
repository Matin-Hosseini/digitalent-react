import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "../../components/CourseBox";
import ContainerBox from "../../components/ContainerBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";

const relatedCourses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function RelatedCourses() {
  return (
    <div className={"p-4 mt-10"}>
        <ContainerBoxTitle title={"دوره های مشابه"} icon={""} color="purple"/>
      <Swiper
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
      >
        {relatedCourses?.map((course) => (
          <SwiperSlide key={course}>
            <CourseBox />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
