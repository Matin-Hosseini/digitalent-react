import { useEffect, useState } from "react";

import SectionHeader from "../SectionHeader/SectionHeader";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseBox from "../CourseBox/CourseBox";

const allCourses = [
  {
    _id: "65369297c65fadb18417f319",
    title: "آموزش جامع NFT",
    des: "دوره جامع برای یادگیری اصولی NFT",
    price: 245000,
    discountPercentage: 0,
    students: 12567,
    teacher: "مرضیه مقدس",
    time: 14,
    rate: 4,
    createdAt: "2023-10-23T15:34:47.424Z",
    updatedAt: "2023-10-23T15:34:47.424Z",
    __v: 0,
  },
  {
    _id: "653692a1c65fadb18417f31b",
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
    _id: "653692acc65fadb18417f31d",
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
    _id: "653692b6c65fadb18417f31f",
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
    _id: "653692bec65fadb18417f321",
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
    _id: "653692c6c65fadb18417f323",
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
    _id: "653692d0c65fadb18417f325",
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
    _id: "653692d7c65fadb18417f327",
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
  {
    _id: "653692ddc65fadb18417f329",
    title: "آموزش ساخت یک پروژه با Angular و ASP.NET Core API از صفر تا صد",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 600000,
    discountPercentage: 15,
    students: 25472,
    teacher: "علی مرادوند",
    time: 20,
    rate: 4,
    createdAt: "2023-10-23T15:35:57.437Z",
    updatedAt: "2023-10-23T15:35:57.437Z",
    __v: 0,
  },
  {
    _id: "653692e5c65fadb18417f32b",
    title: "دوره آموزشی چالش 5 روزه طراحی سایت بدون کد نویسی (قالب استادیار)",
    des: "دوره جامع برای یادگیری اصولی جاوااسکریپت",
    price: 294000,
    discountPercentage: 45,
    students: 2581,
    teacher: "سارا بیانی",
    time: 5,
    rate: 4.5,
    createdAt: "2023-10-23T15:36:05.243Z",
    updatedAt: "2023-10-23T15:36:05.243Z",
    __v: 0,
  },
];

export default function NewestCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(allCourses);
  }, []);

  return (
    <>
      <Container>
        <SectionHeader title="جدیدترین دوره ها" to="/" />
        <Row>
          {courses?.map((course) => (
            <Col key={course._id} sm={6} md={4} lg={3}>
              <CourseBox {...course} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
