import "./Weblog.css";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";


//local components
import BlogBox from "./../BlogBox/BlogBox";

const swiperData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Weblog() {
  return (
    <section className="weblog">
      <div className="container-fluid">
        <div className="articles my-5">
          <Row>
            <Col sm={5} lg={4} xl={3} className="align-self-center">
              <h2 className="articles__title">خواندنی ها</h2>
              <p className="articles__caption">
                جدیدترین مقاله های روز در حوضه مورد نظرتان را بخوانید و لذت
                ببرید
              </p>
              <Link to="#" className="section-header__link articles__link">
                <div className="section-header__icon-container m-0">
                  <MdOutlineKeyboardArrowLeft className="section-header__icon" />
                </div>
                مشاهده همه
              </Link>
            </Col>
            <Col sm={7} lg={8} xl={9}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                navigation
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1.2,
                  },
                  640: {
                    slidesPerView: 1.4,
                  },
                  768: {
                    slidesPerView: 1.6,
                  },
                  900: {
                    slidesPerView: 2.2,
                  },
                  992: {
                    slidesPerView: 2.7,
                  },
                  1200: {
                    slidesPerView: 3.2,
                  },
                  1400: {
                    slidesPerView: 3.5,
                  },
                }}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper: any) => console.log(swiper)}>
                {swiperData?.map((article) => (
                  <SwiperSlide key={article}>
                    <BlogBox />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
