import { useEffect, useState } from "react";
import CourseBox from "../CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

//<-------------- Swiper -------------->
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const specialDiscountsProducts: number[] = [1, 2, 3, 4, 6, 7, 8, 9, 0];

export default function SpecialDiscounts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(specialDiscountsProducts);
  }, []);

  return (
    <section className="special-discount my-5">
      <div className="container">
        <SectionHeader title="تخفیفات ویژه" to={"/"} />
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
          {products?.map((product) => (
            <SwiperSlide>
              <CourseBox key={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
