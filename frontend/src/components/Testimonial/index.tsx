// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { useEffect, useState } from "react";
import { EffectCards } from "swiper/modules";
import TestimoinalBox from "./TestimonialBox";

const testimoinalsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimoinalsData);
  }, []);
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center justify-between container xl:pe-32 gap-5">
        <div>
          <h3 className="font-title text-[5rem]">نظرات کاربران</h3>
          <p>جدیدترین نظرات و تجربه ی کاربران از دیجی تلنت بخوانید.</p>
        </div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="m-0 max-w-[80%] h-[45%] xs:max-w-[70%] xs:h-[40%] md:max-w-[60%] md:h-[35%] lg:max-w-[50%] lg:h-[30%]] xl:w-[400px] xl:h-[250px] text-2xl"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              className="bg-[var(--section-bg)] rounded-xl shadow-lg"
              key={testimonial}
            >
              <TestimoinalBox />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
