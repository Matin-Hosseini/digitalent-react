import { Link } from "react-router-dom";
import "./../../styles/modules/animations.css";
import "./../../styles/modules/split-container.css";
import "./Hero.css";

import heroBg from "./../../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="hero split-container-left relative py-20">
      {/* first element */}
      <div className="split-container-left__first self-center mb-40 lg:mb-0">
        <div
          className="relative font-title text-[5rem] lg:text-[7rem]  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          <div className="glow-effect"></div>
          <div className="glow-effect-2"></div>
          <h1>
            دنبال پیشرفتی؟
            <br />
            اینجا آیندت تغییر بده!
          </h1>
        </div>

        <p
          className="my-12 text-xl text-[var(--gray)] leading-7"
          data-aos="fade-left"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          سد.
        </p>
        <div className="flex items-center gap-3">
          <Link to={"/sign-up"} className="custom-btn">
            بزن بریم
          </Link>
          <Link to={"/courses"} className="custom-btn--outline">
            دوره میخوام!
          </Link>
        </div>
      </div>
      {/* second element */}
      <div className="hero__image-wrapper self-center split-container-left__second">
        <div className="hero__image relative overflow-hidden border-[1rem] border-solid border-l-0 border-[var(--section-bg)] transition-all duration-200 rounded-[0_25rem_25rem_0] shadow-xl">
          <img src={heroBg} alt="" />
        </div>
      </div>

      {/* absolute icons */}
      {/* <div className="hero-absolute-image__cap hidden lg:block absolute top-40 left-[60%] animate-movement-x ">
        <img src="./src/assets/detail-images/graduation-cap.png" alt="" />
      </div>
      <div className="hero-absolute-image__arrow hidden lg:block animate-movement-x">
        <img src="./src/assets/detail-images/curved-arrow-2.png" alt="" />
      </div> */}
      {/* .hero-absolute-image__arrow {
      position: absolute;
      rotate: 180deg;
      animation: movement-x 3s 1s infinite alternate;
      top: 38rem;
      right: 30%;
      } */}
    </section>
  );
};

export default Hero;
