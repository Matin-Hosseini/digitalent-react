import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "../../components/CourseBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";
import { Course } from "../../types/Course";

const relatedCourses = [
  {
    id: "653692d0c65fadb18417f325",
    title: "آموزش جامع یادگیری ماشین و زیرشاخه ها در پایتون (با رویکرد مالی)",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 3600000,
    discount: 70,
    endDiscount: "2024-06-20T00:00:00",
    students: 30578,
    teacher: "مهیار حجت پناه",
    time: 40,
    rate: 4,
    short_name: "machine-learning",
    createdAt: "2023-10-23T15:35:44.387Z",
    updatedAt: "2023-10-23T15:35:44.387Z",
    __v: 0,
  },
  {
    id: "653692d7c65fadb18417f327",
    title: "دوره حامع بازی سازی platformer دو بعدی در یونیتی",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 147000,
    discount: 0,
    students: 15877,
    teacher: "طاها براری",
    time: 4,
    rate: 5,
    short_name: "platformer",
    createdAt: "2023-10-23T15:35:51.032Z",
    updatedAt: "2023-10-23T15:35:51.032Z",
    __v: 0,
  },
  {
    id: "653692ddc65fadb18417f329",
    title: "آموزش ساخت یک پروژه با Angular و ASP.NET Core API از صفر تا صد",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 600000,
    discount: 15,
    endDiscount: "2024-06-02T00:00:00",
    students: 25472,
    teacher: "علی مرادوند",
    time: 20,
    rate: 4,
    short_name: "angular&asp.net",
    createdAt: "2023-10-23T15:35:57.437Z",
    updatedAt: "2023-10-23T15:35:57.437Z",
    __v: 0,
  },
  {
    id: "653692e5c65fadb18417f32b",
    title: "دوره آموزشی چالش 5 روزه طراحی سایت بدون کد نویسی (قالب استادیار)",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 294000,
    discount: 45,
    endDiscount: "2024-05-23T00:00:00",
    students: 2581,
    teacher: "سارا بیانی",
    time: 5,
    rate: 4.5,
    short_name: "5-day-webdesign-challenge",
    createdAt: "2023-10-23T15:36:05.243Z",
    updatedAt: "2023-10-23T15:36:05.243Z",
    __v: 0,
  },
];

export default function RelatedCourses() {
  return (
    <div className={"p-4 mt-10"}>
      <ContainerBoxTitle title={"دوره های مشابه"} icon={""} color="purple" />
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
        {relatedCourses?.map((course: Course) => (
          <SwiperSlide key={course.id}>
            <CourseBox {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
