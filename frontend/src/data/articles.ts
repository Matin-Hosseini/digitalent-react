import getToKnowProgrammingCover from "./../assets/images/articles/get-to-know-programming/cover.jpg";
import whatIsGoogleColabCover from "./../assets/images/articles/what-is-google-colab/cover.jpg";
import shoeLaceCover from "./../assets/images/articles/shoelce/cover.png";
import agileCover from "./../assets/images/articles/agile/cover.jpg";
import techTrendsCover from "./../assets/images/articles/tech-trends/cover.jpg";
import apiTestToolsCover from "./../assets/images/articles/12-api-test-tools/cover.jpg";
import freelacnersCover from "./../assets/images/articles/freelancers/cover.png";
import udpVStcpCover from "./../assets/images/articles/udp-vs-tcp/cover.png";

const articles = [
  {
    id: "1",
    cover: getToKnowProgrammingCover,
    title: "آشنایی با برنامه نویسی",
    views: 35,
    likes: 34,
    subtitle:
      "در دنیای امروزی، اکثر مشاغل و کار‌ها با کامپیوتر‌ها پیوندی جدا نشدنی پیدا کرده‌اند به گونه‌ای که علوم کامپیوتری لازمه‌ای برای زنده نگه داشتن دنیای امروزی می‌باشند.",
    author: { cover: "", name: "امیر رضایی", joined_on: "25 خرداد 1399" },
    short_name: "get-to-know-programming",
    createdAt: "13 اردیبهشت 1403",
    updatedAt: "13 اردیبهشت 1403",
  },
  {
    id: "2",
    cover: whatIsGoogleColabCover,
    title: "Google Colab چیست؟",
    views: 42,
    likes: 3,
    subtitle:
      "زبان برنامه نویسی پایتون (Python) را کم و بیش اکثر برنامه نویس ها و مهندسان جهان می شناسند و بیشتر تکنولوژی ها از جمله (Google) نیز برای اهداف خود از این زبان بهره می گیرند، یکی از پروژه های گوگل پلتفرم (Colab)، از پایتون استفاده می کند که در این مقاله ما شما را با آن آشنا خواهیم کرد.",
    author: { cover: "", name: "رضا دیانی", joined_on: "31 مرداد 1398" },
    short_name: "what-is-google-colab",
    createdAt: "2 فروردین 1400",
    updatedAt: "2 فروردین 1400",
  },
  {
    id: "3",
    cover: shoeLaceCover,
    title: "کتابخانه بند کفش (ShoeLace) و مزایای آن",
    views: 87,
    likes: 6,
    subtitle:
      "همانطور که می‌دانید برنامه نویسی وب، امروزه یکی از پرکاربردترین علوم از علوم کامپیوتری هست. طراحی سمت کاربر وب، یکی از مسائلی است که امروزه ذهن بسیاری از افراد را به خودش مشغول کرده و هر روز چالش های بیشتری ایجاد می‌کند.",
    author: { cover: "", name: "سارا حبیبی", joined_on: "31 تیر 1398" },
    short_name: "shoelace",
    createdAt: "4 خرداد 1400",
    updatedAt: "4 خرداد 1400",
  },
  {
    id: "4",
    cover: agileCover,
    title: " متدولوژی agile چیست؟ توسعه نرم افزار مدرن ",
    views: 90,
    likes: 13,
    subtitle:
      "شاید باور کردن این مسئله بسیار سخت باشد که امسال متدولوژی agile  20 ساله شد. این روش در واقع روشی بود که زمانی برای استارت آپ هایی که در یک فضای کوچک کار می کردند مورد استفاده قرار می گرفت و آنها با استفاده از یک تخته و چسب هایی با یکدیگر همکاری می کردند ولی امروزه به مجموعه ای پیچیده، مقیاس پذیر و بسیار پرکاربرد تبدیل شده است که فرایندها و ابزارهای زیادی را در اختیار شما قرار می دهد.",
    author: { cover: "", name: "سارا حبیبی", joined_on: "31 تیر 1398" },
    short_name: "agile",
    createdAt: "4 خرداد 1400",
    updatedAt: "4 خرداد 1400",
  },
  {
    id: "5",
    cover: techTrendsCover,
    title: " آشنایی با ترندهای تکنولوژی در سال 2022 ",
    views: 90,
    likes: 45,
    subtitle:
      "امروزه صنعت تکنولوژی روز به روز در حال پیشرفت است و شاهد آن هستیم که هر روزه ترندهای تکنولوژی در حال پیشرفت هستند. همین عامل نیز باعث می شود تا پیگیری این ترندهای تکنولوژی کمی سخت و دشوار باشد. به عنوان مثال در سال 2022 ممکن است شما ندانید که دقیقا باید کدام ترندها را پیگیری کنید.",
    author: { cover: "", name: "منا صادقی", joined_on: "31 تیر 1400" },
    short_name: "tech-trends",
    createdAt: "7 اردیبهشت 1403",
    updatedAt: "7 اردیبهشت 1403",
  },
  {
    id: "6",
    cover: apiTestToolsCover,
    title: " 12 ابزار رایگان برای طراحی API و تست آن ",
    views: 23,
    likes: 20,
    subtitle: `ظهور API های RESTful با افزایش ابزارهایی برای ایجاد، آزمایش و مدیریت آنها همراه شده است. فرقی نمی کند که شما یک شخص مبتدی در طراحی API باشید که در حال طراحی اولین API خود هستید یا این که یک فرد متخصص در این حوزه هستید که در کوتاه ترین زمان ممکن می توانید اقدام به طراحی API کنید.`,
    author: { cover: "", name: "مهدی سبحانی", joined_on: "24 شهریور 1399" },
    short_name: "12-api-test-tools",
    createdAt: "9 دی 1401",
    updatedAt: "9 دی 1401",
  },
  {
    id: "7",
    cover: freelacnersCover,
    title: "چرا باید فریلنسرها کار خود را ارزان ارائه ندهند",
    views: 44,
    likes: 11,
    subtitle: `این معمولا اولین سوالی است که به ذهن شما خطور می‌کند. و مغز شما احتمالا هنگام رو به رو شدن با این سوال می‌گوید "قطعا" و به دنبال این بازنگری سریع قیمت پروژه را پایین می‌آورید.`,
    author: { cover: "", name: "ایمان مدائنی", joined_on: "31 تیر 1400" },
    short_name: "freelacners",
    createdAt: "7 آبان 1400",
    updatedAt: "7 آبان 1400",
  },
  {
    id: "8",
    cover: udpVStcpCover,
    title: "مقایسه TCP و UDP، کدام یک سریع تر است؟ ",
    views: 44,
    likes: 8,
    subtitle: `TCP مخفف Transmission Control Protocol است. این یک پروتکل لایه حمل و نقل است که اجازه می‌دهد بسته‌ها از یک مکان به مکان دیگر ارسال شوند.`,
    author: { cover: "", name: "سعید حمیدی", joined_on: "31 تیر 1399" },
    short_name: "udp-vs-tcp",
    createdAt: "7 تیر 1400",
    updatedAt: "7 تیر 1400",
  },
];

export default articles;
