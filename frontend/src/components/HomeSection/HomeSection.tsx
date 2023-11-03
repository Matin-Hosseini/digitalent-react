import { useEffect, useState } from "react";

let homeCategories = [
  {
    id: 1,
    name: "نود جی اس",
    icon: "fa-brands fa-node-js",
    link: "#",
    fill: "brown",
  },
  {
    id: 2,
    name: "پایتون",
    icon: "fa-brands fa-python",
    link: "#",
    fill: "",
  },
  {
    id: 3,
    name: "پی اچ پی",
    icon: "fa-brands fa-php",
    link: "#",
    fill: "",
  },
  {
    id: 4,
    name: "بوت استرپ",
    icon: "fa-brands fa-bootstrap",
    link: "#",
    fill: "",
  },
  {
    id: 5,
    name: "لاراول",
    icon: "fa-brands fa-laravel",
    link: "#",
    fill: "purple",
  },
  {
    id: 6,
    name: "سی پنل",
    icon: "fa-brands fa-cpanel",
    link: "#",
    fill: "",
  },
  {
    id: 7,
    name: "ویندوز",
    icon: "fa-brands fa-windows",
    link: "#",
    fill: "",
  },
  {
    id: 8,
    name: "جاوا اسکریپت",
    icon: "fa-brands fa-js",
    link: "#",
    fill: "",
  },
  {
    id: 9,
    name: "ان پی ام",
    icon: "fa-brands fa-npm",
    link: "#",
    fill: "",
  },
  {
    id: 10,
    name: "وردپرس",
    icon: "fa-brands fa-wordpress",
    link: "#",
    fill: "",
  },
  {
    id: 11,
    name: "ریکت",
    icon: "fa-brands fa-react",
    link: "#",
    fill: "blue",
  },
  {
    id: 12,
    name: "ویو",
    icon: "fa-brands fa-vuejs",
    link: "#",
    fill: "",
  },
  {
    id: 13,
    name: "انگولار",
    icon: "fa-brands fa-angular",
    link: "#",
    fill: "",
  },
  {
    id: 14,
    name: "سرمایه گذاری",
    icon: "fa-solid fa-chart-column",
    link: "#",
    fill: "",
  },
  {
    id: 15,
    name: "لینوکس",
    icon: "fa-brands fa-linux",
    link: "#",
    fill: "",
  },
  {
    id: 16,
    name: "عکاسی",
    icon: "fa-solid fa-camera-retro",
    link: "#",
    fill: "purple",
  },
  {
    id: 17,
    name: "بازاریابی",
    icon: "fa-solid fa-magnifying-glass-dollar",
    link: "#",
    fill: "",
  },
  {
    id: 18,
    name: "رشد شخصی",
    icon: "fa-solid fa-person-walking-arrow-right",
    link: "#",
    fill: "",
  },
  {
    id: 19,
    name: "آشپزی",
    icon: "fa-solid fa-utensils",
    link: "#",
    fill: "orange",
  },
  {
    id: 20,
    name: "موسیقی",
    icon: "fa-solid fa-guitar",
    link: "#",
    fill: "",
  },
];

import "./HomeSection.css";
import HomeCategory from "./HomeCategory/HomeCategory";

export default function HomeSection() {
  console.log("render home section");
  const [categories, setCategories] = useState(homeCategories);

  useEffect(() => {
    // setCategories(homeCategories);
  }, []);

  //   useEffect(() => {
  //     const n: number = (categories?.length + 1) / 3;
  //     const firstRow = categories?.slice(0, n);
  //     const secondRow = categories?.slice(n, 2 * n - 1);
  //     const thirdRow = categories?.slice(2 * n - 1, categories.length);
  //   }, [categories]);

  return (
    <section className="home">
      <div className="container-fluid"></div>
      <h1 className="home__title" data-aos="fade-left">
        هرچی که میخوای رو سه سوته یاد بگیر
      </h1>
      {/* mobile */}
      <div className="home__swiper-container d-md-none">
        <div className="swiper home__category-swiper">
          <div className="swiper-wrapper" id="home__category-swiper-wrapper">
            {/* Slides will be shown by javascript */}
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="d-none d-md-block">
        <div className="first-row d-flex home__category-container">
          {categories
            .slice(0, 7)
            .map(
              (category: {
                id: number;
                name: string;
                icon: string;
                fill: string;
                link: string;
              }) => (
                <HomeCategory key={category.id} {...category} />
              )
            )}
        </div>
        <div className="second-row d-flex home__category-container">
          {categories
            ?.slice(7, 13)
            .map(
              (category: {
                id: number;
                name: string;
                icon: string;
                fill: string;
                link: string;
              }) => (
                <HomeCategory key={category.id} {...category} />
              )
            )}
        </div>
        <div className="third-row d-flex home__category-container">
          {categories
            ?.slice(13, 20)
            .map(
              (category: {
                id: number;
                name: string;
                icon: string;
                fill: string;
                link: string;
              }) => (
                <HomeCategory key={category.id} {...category} />
              )
            )}
        </div>
      </div>
    </section>
  );
}
