import Logo from "../Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="footer-newsletter">
            <h2 className="footer-newsletter__title">عضو خبرنامه شوید</h2>
            <p className="footer-newsletter__caption">
              برای آگاهی از آخرین دوره ها، تخفیف ها، رویداد ها و ... در خبرنامه
              عضو شوید
            </p>
            <form action="" className="footer-newsletter__form" noValidate>
              <input
                type="email"
                name="email"
                placeholder="ایمیل خود را وارد کنید."
              />
              <button>عضویت</button>
            </form>
          </div> */}
        <div className="footer__content">
          <div className="grid-system">
            <div className="col-span-12 lg:col-span-4">
              <div className="footer__company-description">
                <h2 className="footer__logo text-danger">
                  <Logo />
                </h2>
                <p className="footer__company-caption">
                  شرکت دیجی تلنت، با افتخار و تعهد به ارائه خدمات برتر و محصولات
                  با کیفیت به عنوان یک رهنمود در زمینه آموزش آنلاین به مشتریان
                  خود خدمت می کند. از شما برای انتخاب تیم ما سپاس گذاریم.
                </p>
                <div className="footer__socials">
                  <a href="#" className="footer-socials__icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="footer-socials__icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="footer-socials__icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="footer-socials__icon">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#" className="footer-socials__icon">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2">
              <ul className="footer-menu">
                <header>دسترسی سریع</header>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    درباره ما
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    رویداد های پیش رو
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    وبلاگ
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    سوالات متداول
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    حریم خصوصی
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-2">
              <ul className="footer-menu">
                <header>لینک های مفید</header>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    ارتباط با ما
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    دوره های محبوب
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    مدرسین
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    نظرات کاربران
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a href="#" className="footer-menu__link">
                    ضمانت بازگشت
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="footer__contact-info">
                <header>اطلاعات تماس</header>
                <div className="footer__location">
                  <i className="fa-solid fa-location-arrow"></i>
                  <span>تهران، ستارخان، خیابان یکم، کوچه دوم، پلاک 200</span>
                </div>
                <div className="footer__phone">
                  <i className="fa-solid fa-phone"></i>
                  <div className="flex flex-col gap-2">
                    <span>021-33849622</span>
                    <span>0919-7892478</span>
                  </div>
                </div>
                <div className="footer__email">
                  <i className="fa-regular fa-envelope"></i>
                  <span>matinhosseiniofficial@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <i className="fa-regular fa-copyright"></i>
          <span>تمامی حقوق محفوظ می باشد.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
