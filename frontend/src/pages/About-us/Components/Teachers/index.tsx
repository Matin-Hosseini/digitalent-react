import "./Teacher.css";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import TeacherBox from "./Teacher-box/Teacher-Box";

const teachersData: { id: number; name: string; carrier: string }[] = [
  { id: 1, name: "سید متین حسینی", carrier: "فرانت اند" },
  { id: 2, name: "محمد رمضانی", carrier: "عکاسی" },
  { id: 3, name: "سارا بخشیان", carrier: "بک اند" },
  { id: 4, name: "امین فهیمه امیری", carrier: "آشپزی" },
  { id: 5, name: "شایان مرتضوی نیک", carrier: "برنامه نویسی" },
  { id: 6, name: "آنیتا رجبی", carrier: "هوش مصنوعی" },
  { id: 7, name: "مهسا مقیمی", carrier: "اندروید" },
  { id: 8, name: "امید باباخانی", carrier: "آی او اس" },
];

export default function Teachers() {
  return (
    <section className="teachers">
      <div className="container-fluid">
        <h3 className="section-name text-center">مدرسین خبره</h3>
        <h2 className="section-title text-center my-5">
          مدرسینی با سال ها تجربه حرفه ای برای شمایی که می خواهید متخصص شوید
        </h2>

        <Swiper
          className="teachers-swiper"
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            350: {
              slidesPerView: 1.2,
            },
            450: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 3.2,
            },
            992: {
              slidesPerView: 4.2,
            },
          }}>
          {teachersData?.map((teacher) => (
            <SwiperSlide key={teacher.id}>
              <TeacherBox {...teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-5">
        <a href="" className="teachers__link">
          مشاهده همه مدرسین
        </a>
      </div>
    </section>
  );
}
