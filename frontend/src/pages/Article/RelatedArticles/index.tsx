import { PiArticleNyTimesLight } from "react-icons/pi";

import "swiper/css";
import ContainerBox from "../../../components/ContainerBox";
import ContainerBoxTitle from "../../../components/ContainerBoxTitle";
import RelatedArticleBox from "./RelatedArticleBox";

import { Swiper, SwiperSlide } from "swiper/react";

const relatedArticles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function () {
  return (
    <ContainerBox className={"p-5 mb-4"}>
      <ContainerBoxTitle
        title={"مقالات مرتبط"}
        icon={<PiArticleNyTimesLight />}
        color="blue"
      />
      <div className="mt-8 divide-y max-h-[38rem] overflow-auto hidden lg:block">
        <RelatedArticleBox />
        <RelatedArticleBox />
        <RelatedArticleBox />
        <RelatedArticleBox />
        <RelatedArticleBox />
        <RelatedArticleBox />
      </div>
      <div className="lg:hidden">
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {relatedArticles?.map((article) => (
            <SwiperSlide  key={article}>
              {/* <BlogBox /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ContainerBox>
  );
}
