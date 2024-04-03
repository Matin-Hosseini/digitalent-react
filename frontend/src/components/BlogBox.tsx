import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";

//react-icons

export default function BlogBox() {
  return (
    <>
      <ContainerBox className="p-3">
        <article>
          <Link to="/article">
            <img
              src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
              alt=""
              className="rounded-lg mb-4"
            />
          </Link>
          <p className="text-[var(--yellow)] text-base">12 اردیبهشت 1402</p>
          <h2 className="text-2xl line-clamp-2 mt-3 mb-6 font-bold h-[4rem]">
            <Link to="/article">
              این متن به صورت آزمایشی قرار گرفته است این متن به صورت ازمایشی
              قرار گرفته است
            </Link>
          </h2>
          <p className="text-base text-[var(--gray)] mb-5 line-clamp-3 h-[4.5rem]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div className="flex justify-end">
            <div className="flex items-center gap-3">
              <div className="text-left">
                <h3 className="text-base">ریحانه حدادی</h3>
                <p className="text-sm text-[var(--gray)]">10 مرداد 1396</p>
              </div>
              <img
                src="src/assets/images/profile.jpg"
                alt=""
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>
        </article>
      </ContainerBox>
    </>
  );
}
