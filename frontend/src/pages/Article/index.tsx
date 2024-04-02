// import ArticleContent from "./Components/ArticleContent/ArticleContent";
// import ArticleFooter from "./Components/ArticleFooter/ArticleFooter";
// import ArticleHeader from "./Components/ArticleHeader/ArticleHeader";
import { FcCalendar, FcShare } from "react-icons/fc";
import ContainerBox from "../../components/ContainerBox";
import useScrollToTop from "../../hooks/scrollToTop";
import BreadCrumb from "./Breadcrumb";

import { BsSuitHeart } from "react-icons/bs";
import { GoCommentDiscussion } from "react-icons/go";
import {
  IoCheckmarkOutline,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

import ArticleHeader from "./ArticleHeader";

import { FaPinterestP } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CommentBox from "../../components/CommentBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";
import "./Components/ArticleContent/ArticleContent.css";
import RelatedArticleBox from "./RelatedArticleBox";

export default function Article() {
  useScrollToTop();

  return (
    <main className="container my-10">
      {/* <ArticleHeader />
      <ArticleContent />
      <ArticleFooter /> */}

      <ContainerBox className={""}>
        {/* info */}
        <div className="grid-system">
          <div className="col-span-8">
            <BreadCrumb></BreadCrumb>
          </div>
          <div className="col-span-4">
            <div className="flex items-center justify-between h-full pe-5">
              <div className="flex flex-col gap-2 py-3">
                {/* <div className="flex items-center gap-2 text-xl">
                  <FcCalendar />
                  <div>
                    <span>افزوده شده در:</span>
                    <span>12 فروردین 1403</span>
                  </div>
                </div> */}
                <div className="flex items-center gap-2 text-xl">
                  <FcCalendar />
                  <div>
                    <span>آخرین به روزرسانی: </span>
                    <span>12 فروردین 1403</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-xl">
                <FcShare />
                <span>اشتراک گذاری</span>
              </button>
            </div>
          </div>
        </div>
      </ContainerBox>

      {/* content */}

      <div className="grid-system my-12">
        <div className="col-span-9">
          <ContainerBox className="p-5 mb-4">
            <ContainerBoxTitle title={"بازی و سرگرمی"} />
            <ArticleHeader />
            {/* content */}
            <div>
              <img src="src/assets/images/about-us/offers-bg.jpg" alt="" />

              <h2 className="article-content__title">توضیحات اول:</h2>
              <p className="article-content__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <p className="article-content__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <blockquote className="article-content__quote">
                <q>دانا داند و پرسد نادان نداند و نپرسد </q>
                <i className="bx bxs-quote-alt-left bx-tada article-content__quote-icon"></i>
              </blockquote>

              <h2 className="article-content__title">توضیحات دوم:</h2>
              <p className="article-content__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <h2 className="article-content__title">
                موارد لازم نمیدونم چی چی
              </h2>
              <ul className="article-content__list">
                <li>این اولین مورد کسشریه که به ذهنم می رسه</li>
                <li>این واسهی متن دوم می رسه</li>
                <li>حالا اینم برای اینکه یذرع بخوام تفاوت قایل بشم</li>
                <li>اینم به خاطر گل روی ماه تو عشقم</li>
              </ul>

              <img
                src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
                alt=""
                className="article-content__image"
              />

              <h2 className="article-content__title">توضیحات سوم:</h2>
              <p className="article-content__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>

              <div className="row article-content__two-images">
                <div className="col-md-6 mb-3 rounded-3">
                  <img src="src/assets/images/about-us/offers-bg.jpg" alt="" />
                </div>
                <div className="col-md-6 mb-3 rounded-3">
                  <img src="src/assets/images/home-page/bg-test1.jpg" alt="" />
                </div>
              </div>
              <h2 className="article-content__title">توضیحات چهارم:</h2>
              <p className="article-content__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </ContainerBox>
          <ContainerBox className={"p-5"}>
            <ContainerBoxTitle title={"نظرات کاربران"} />
            <div className="mt-5 divide-y">
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
            </div>
          </ContainerBox>
        </div>
        <div className="col-span-3">
          <div className="sticky top-4">
            <ContainerBox className={"p-5 mb-4"}>
              <div>
                <div className="flex justify-between items-center text-lg">
                  <div className="flex items-center gap-2">
                    <BsSuitHeart />
                    <div className="flex items-center gap-3">
                      <p>پسندیده شده:</p>
                      <span>243</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GoCommentDiscussion />
                    <div className="flex items-center gap-3">
                      <p>نظرات کاربران:</p>
                      <span>110</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5  bg-[rgba(130,140,154,0.09)] p-4 rounded-lg mt-8 text-[var(--green)]">
                  <IoCheckmarkOutline />
                  <p>مطلب بررسی شده است.</p>
                </div>
              </div>
            </ContainerBox>
            <ContainerBox className={"p-5 mb-4"}>
              <div></div>
            </ContainerBox>
            <ContainerBox className={"p-5 mb-4"}>
              <ContainerBoxTitle title={"مقالات مرتبط"} />
              <div className="mt-8 divide-y max-h-[38rem] overflow-auto">
                <RelatedArticleBox />
                <RelatedArticleBox />
                <RelatedArticleBox />
                <RelatedArticleBox />
                <RelatedArticleBox />
                <RelatedArticleBox />
              </div>
            </ContainerBox>
            <ContainerBox className={"p-5 mb-4"}>
              <section className="text-center">
                <img
                  src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
                  className="w-24 h-24 rounded-full mx-auto"
                  alt=""
                />
                <h3>علیرضا علی مردانی</h3>
                <h4 className="text-lg text-[var(--gray)]">نویسنده و طراح</h4>
                <p className="text-xl my-4">
                  استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزار
                </p>
                <div className="flex items-center gap-4 justify-center">
                  <Link to={"/"}>
                    <RiFacebookFill className="text-blue-800 dark:text-blue-600" />
                  </Link>
                  <Link to={"/"}>
                    <IoLogoInstagram className="text-pink-600" />
                  </Link>
                  <Link to={"/"}>
                    <IoLogoLinkedin className="text-blue-500" />
                  </Link>
                  <Link to={"/"}>
                    <FaPinterestP className="text-[var(--red)]" />
                  </Link>
                </div>
              </section>
            </ContainerBox>
          </div>
        </div>
      </div>
    </main>
  );
}
