import { useEffect, useState } from "react";
import CourseBox from "../CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

//<-------------- Swiper -------------->
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import "swiper/css";

const specialDiscountsProducts: any[] = [
  { id: 1, name: "" },
  { id: 2, name: "" },
  { id: 3, name: "" },
  { id: 4, name: "" },
  { id: 5, name: "" },
  { id: 6, name: "" },
  { id: 7, name: "" },
];

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
          modules={[Autoplay]}
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
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <CourseBox {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
