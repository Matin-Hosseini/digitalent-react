import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "../../components/CourseBox";
import ContainerBox from "../../components/ContainerBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";

const relatedCourses = [
  {
    id: "653692a1c65fadb18417f31b",
    title: "دارت و فلاتر",
    des: "دوره جامع برای یادگیری اصولی دارت و فلاتر",
    price: 870000,
    discountPercentage: 50,
    students: 32741,
    teacher: "سید متین حسینی",
    time: 30,
    rate: 4.5,
    createdAt: "2023-10-23T15:34:57.982Z",
    updatedAt: "2023-10-23T15:34:57.982Z",
    __v: 0,
  },
  {
    id: "653692acc65fadb18417f31d",
    title: "دیتابیس oracle",
    des: "دوره جامع برای یادگیری اصولی oracle",
    price: 658000,
    discountPercentage: 60,
    students: 5824,
    teacher: "علی رضایی",
    time: 20,
    rate: 3,
    createdAt: "2023-10-23T15:35:08.480Z",
    updatedAt: "2023-10-23T15:35:08.480Z",
    __v: 0,
  },
  {
    id: "653692b6c65fadb18417f31f",
    title: "تست نویسی",
    des: "دوره جامع برای یادگیری اصولی تست نویسی",
    price: 2360000,
    discountPercentage: 40,
    students: 20000,
    teacher: "مرتضی رضایی",
    time: 36,
    rate: 4.5,
    createdAt: "2023-10-23T15:35:18.349Z",
    updatedAt: "2023-10-23T15:35:18.349Z",
    __v: 0,
  },
  {
    id: "653692bec65fadb18417f321",
    title: "آموزش جامع مدل سازی پیشرفته یادگیری عمیق(deep learning) با پایتون",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 2500000,
    discountPercentage: 0,
    students: 32657,
    teacher: "رضا موسوی",
    time: 80,
    rate: 5,
    createdAt: "2023-10-23T15:35:26.936Z",
    updatedAt: "2023-10-23T15:35:26.936Z",
    __v: 0,
  },
  {
    id: "653692c6c65fadb18417f323",
    title: "دوره مانیتورینگ در SQL Server",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 600000,
    discountPercentage: 60,
    students: 30222,
    teacher: "سید متین حسینی",
    time: 30,
    rate: 4.5,
    createdAt: "2023-10-23T15:35:34.572Z",
    updatedAt: "2023-10-23T15:35:34.572Z",
    __v: 0,
  },
  {
    id: "653692d0c65fadb18417f325",
    title: "آموزش جامع یادگیری ماشین و زیرشاخه ها در پایتون (با رویکرد مالی)",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 3600000,
    discountPercentage: 70,
    students: 30578,
    teacher: "مهیار حجت پناه",
    time: 40,
    rate: 4,
    createdAt: "2023-10-23T15:35:44.387Z",
    updatedAt: "2023-10-23T15:35:44.387Z",
    __v: 0,
  },
  {
    id: "653692d7c65fadb18417f327",
    title: "دوره حامع بازی سازی platformer دو بعدی در یونیتی",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 147000,
    discountPercentage: 0,
    students: 15877,
    teacher: "طاها براری",
    time: 4,
    rate: 5,
    createdAt: "2023-10-23T15:35:51.032Z",
    updatedAt: "2023-10-23T15:35:51.032Z",
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
        {relatedCourses?.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseBox {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
