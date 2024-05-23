import { BiCategory } from "react-icons/bi";
import ContainerBox from "../../components/ContainerBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";
import { GoEye } from "react-icons/go";
import { RxTimer } from "react-icons/rx";

import "./ArticleContent.css";
import { Article } from "../../types/Article";

export default function Articlecontent({ article }: { article: Article }) {
  return (
    <ContainerBox className="p-5 mb-4">
      <ContainerBoxTitle
        title={"بازی و سرگرمی"}
        icon={<BiCategory />}
        color="red"
      />
      <div className="flex flex-col sm:flex-row gap-5 justify-between items-center mb-10">
        <div className=" ">
          <h1 className="text-5xl  mb-8 leading-[4.5rem]">{article.title}</h1>
          <div className="flex items-center gap-2 text-xl text-slate-400 dark:text-slate-200">
            <p>انتشار:</p>
            <span>1402/12/4</span>
          </div>
        </div>
        <div className="flex items-center justify-evenly text-gray-500 dark:text-gray-300 bg-[rgba(140,140,140,0.09)] rounded-lg py-4 gap-4 w-full sm:w-auto sm:bg-transparent">
          <div className="flex flex-col items-center gap-2">
            <GoEye />
            <span className="text-lg">280 بازدید</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RxTimer />
            <span className="text-lg">8 دقیقه</span>
          </div>
        </div>
      </div>
      <div>
        <img src={article.cover} alt="" />

        <h2 className="article-content__title">توضیحات اول:</h2>
        <p className="article-content__caption">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <p className="article-content__caption">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <blockquote className="article-content__quote">
          <q>دانا داند و پرسد نادان نداند و نپرسد </q>
          <i className="bx bxs-quote-alt-left bx-tada article-content__quote-icon"></i>
        </blockquote>

        <h2 className="article-content__title">توضیحات دوم:</h2>
        <p className="article-content__caption">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <h2 className="article-content__title">موارد لازم نمیدونم چی چی</h2>
        <ul className="article-content__list">
          <li>این اولین موردیه که به ذهنم می رسه</li>
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
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
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
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </ContainerBox>
  );
}
