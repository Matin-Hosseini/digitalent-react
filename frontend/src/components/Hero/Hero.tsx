import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero split-container-left">
      {/* first element */}
      <div className="hero-content split-container-left__first align-self-center mb-5 mb-lg-0">
        <h1 className="hero__title" data-aos="fade-up">
          دنبال پیشرفتی؟
          <br />
          میتونی اینجا آیندت تغیرر بدی!
        </h1>
        <p className="hero__caption" data-aos="fade-left">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          سد.
        </p>
        <Link to={"/sign-up"} className="custom-btn ms-3">
          بزن بریم
        </Link>
        <Link to={"/course-category"} className="custom-btn--outline">
          دوره میخوام!
        </Link>
      </div>
      {/* second element */}
      <div className="hero__image-wrapper align-self-center split-container-left__second">
        <div className="hero__image">
          <img src="./src/assets/images/banner-2-1.jpg" alt="" />
        </div>
      </div>

      {/* absolute icons */}
      <div className="hero-absolute-image__cap d-none d-lg-block">
        <img src="./src/assets/detail-images/graduation-cap.png" alt="" />
      </div>
      <div className="hero-absolute-image__arrow d-none d-lg-block">
        <img src="./src/assets/detail-images/curved-arrow-2.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
