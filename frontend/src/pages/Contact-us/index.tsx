import "./index.css"

export default function ContactUs() {
  return (
    <main>
      <section className="text-center my-5">
        <h3 className="section-name">تماس با ما</h3>
        <h4>شما می توانید از طریق راه های زیر با ما در ارتباط باشید</h4>

        <div className="container">
          <div className="contacts row">
            <div className="mb-4 col-12 col-sm-6 col-md-4 col-xl">
              <div className="contact">
                <i className="fa-solid fa-map-location-dot contact__icon"></i>
                <h5 className="cotact__title">آدرس</h5>
                <div className="contact__content">
                  <span>تهران - خیابان ستارخان - نرسیده به میدان باقر</span>
                </div>
              </div>
            </div>
            <div className="mb-4 col-12 col-sm-6 col-md-4 col-xl">
              <div className="contact">
                <i className="fa-solid fa-clock-rotate-left contact__icon"></i>
                <h5 className="cotact__title">ساعات کاری</h5>
                <div className="contact__content">
                  <span className="d-block">
                    شنبه تا چهارشنبه: 07:00 - 18:00
                  </span>
                  <span className="d-block">پنچ شنبه: 07:00 - 12:00</span>
                </div>
              </div>
            </div>
            <div className="mb-4 col-12 col-sm-6 col-md-4 col-xl">
              <div className="contact">
                <i className="fa-solid fa-phone contact__icon"></i>
                <h5 className="cotact__title">تماس</h5>
                <div className="contact__content">
                  <span className="d-block">09129323541</span>
                  <span className="d-block">09190888126</span>
                </div>
              </div>
            </div>
            <div className="mb-4 col-12 col-sm-6 col-md-6 col-xl">
              <div className="contact">
                <i className="fa-regular fa-envelope contact__icon"></i>
                <h5 className="cotact__title">ایمیل</h5>
                <div className="contact__content">
                  <span className="d-block">konigsegg.matin@gmail.com</span>
                  <span className="d-block">konigsegg.matin@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="mb-4 col-12 col-md-6 col-xl">
              <div className="contact">
                <i className="fa-solid fa-share-nodes contact__icon"></i>
                <h5 className="cotact__title">ما را دنبال کنید</h5>
                <div className="contact__content d-flex gap-3 justify-content-center align-items-center">
                  <a href="#" className="contact__content-link">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="contact__content-link">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="contact__content-link">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="contact__content-link">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          className="cotact-map__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.5618219571643!2d51.45794847579235!3d35.7861384725536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e044dcdbf2041%3A0xa9db7b4fd2da28c3!2sBehsazan%20Mellat%20Co.!5e0!3m2!1sen!2sae!4v1695136114781!5m2!1sen!2sae"
          loading="lazy"
          
        ></iframe>

        <form action="" className="contact-map__form" id="contact-us-form">
          <div>
            <div className="custom-input">
              <input
                type="text"
                placeholder=""
                className="custom-input__input"
                name="name"
                required
              />
              <label className="custom-input__label">نام و نام خانوادگی</label>
            </div>
            <span className="error-message name-error"></span>
          </div>
          <div></div>
          <div className="custom-input">
            <input
              type="text"
              placeholder=""
              className="custom-input__input"
              name="email"
              required
            />
            <label className="custom-input__label">ایمیل</label>
          </div>
          <span className="error-message email-error"></span>
          <div className="custom-text-area-wrapper">
            <textarea
              className="custom-text-area"
              rows={7}
              name="message"
              required
            ></textarea>
            <label htmlFor="" className="custom-text-area__label">
              پیام خود را وارد کنید
            </label>
          </div>
          <span className="error-message textarea-error"></span>
          <button className="contact-form__submit-btn">ارسال پیام</button>
        </form>
      </section>
    </main>
  );
}
