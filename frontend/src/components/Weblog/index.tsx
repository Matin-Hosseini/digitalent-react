import { Link } from "react-router-dom";
import "./Weblog.css";

//swiper
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "swiper/css";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import BlogBox from "../BlogBox";

//local components

const swiperData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
import allArticles from "../../data/articles";
import { useEffect, useState } from "react";

export default function Weblog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(allArticles);
  }, []);

  return (
    <section className="weblog container">
      <div className="articles my-5 bg-[#C2C2C2] dark:bg-[#474554] p-6">
        <div className="grid-system">
          <div className="col-span-12 sm:col-span-5 lg:col-span-4 xl:col-span-3 self-center">
            <h2 className="articles__title">خواندنی ها</h2>
            <p className="articles__caption text-gray-600 dark:text-white">
              جدیدترین مقاله های روز در حوضه مورد نظرتان را بخوانید و لذت ببرید
            </p>
            <Link to="#" className="section-header__link articles__link">
              <div className="section-header__icon-container m-0">
                <MdOutlineKeyboardArrowLeft className="section-header__icon" />
              </div>
              مشاهده همه
            </Link>
          </div>
          <div className="col-span-12 sm:col-span-7 lg:col-span-8 xl:col-span-9">
            <Swiper
              modules={[Navigation]}
              spaceBetween={5}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1.4,
                },
                640: {
                  slidesPerView: 1.4,
                },
                768: {
                  slidesPerView: 1.6,
                },
                1024: {
                  slidesPerView: 2.2,
                },
                1280: {
                  slidesPerView: 3.2,
                },
                1536: {
                  slidesPerView: 3.5,
                },
              }}
              pagination={{ clickable: true }}
            >
              {articles?.map((article) => (
                <SwiperSlide key={article.id}>
                  <BlogBox {...article} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
