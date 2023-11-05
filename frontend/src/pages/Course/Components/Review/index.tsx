import "./Review.css"

export default function Reveiw(){
    return (
      <section className="review tab-content">
        <section className="comments__results">
          <div className="text-center comments__rate-summery">
            <span className="comments__rate">4.9</span>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i
                className="fa-solid fa-star-half-stroke"
                data-fa-transform="flip-h"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <span className="course-comments-count">(56 نظر)</span>
          </div>
          <ul className="comments__rate-bars">
            <li className="comments-rate-item">
              <span className="comments__rate-title">مهارت در یادگیری</span>
              <div className="comments__rate-bar"></div>
              <span className="comments__rate-number">4.2</span>
            </li>
            <li className="comments-rate-item">
              <span className="comments__rate-title">مهارت در توضیح دادن</span>
              <div className="comments__rate-bar"></div>
              <span className="comments__rate-number">4.2</span>
            </li>
            <li className="comments-rate-item">
              <span className="comments__rate-title">مهارت در پاسخگویی</span>
              <div className="comments__rate-bar"></div>
              <span className="comments__rate-number">4.2</span>
            </li>
            <li className="comments-rate-item">
              <span className="comments__rate-title">مهارت در تست نویسی</span>
              <div className="comments__rate-bar"></div>
              <span className="comments__rate-number">4.2</span>
            </li>
            <li className="comments-rate-item">
              <span className="comments__rate-title">مهارت در بتشنمیب</span>
              <div className="comments__rate-bar"></div>
              <span className="comments__rate-number">4.2</span>
            </li>
          </ul>
        </section>

        <section className="comments">
          <div className="comment">
            {/* <!--prettier-ignore--> */}
            <div>
              <img
                src="src/assets/images/profile.jpg"
                alt=""
                className="comment__img"
              />
            </div>
            <div className="comment__content">
              <div className="comment__header">
                <div>
                  <span className="comment__name">علیرضا محمودی</span>
                  <span className="comment__date">7 آذر 1401</span>
                </div>
              </div>
              <p className="comment__text">
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
          </div>
          <div className="comment">
            {/* <!--prettier-ignore--> */}
            <div>
              <img
                src="assets/images/profile.jpg"
                alt=""
                className="comment__img"
              />
            </div>
            <div className="comment__content">
              <div className="comment__header">
                <div>
                  <span className="comment__name">علیرضا محمودی</span>
                  <span className="comment__date">7 آذر 1401</span>
                </div>
              </div>
              <p className="comment__text">
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
          </div>
        </section>

        <section className="add-comment">
          <div className="add-comment__header">
            <h5 className="add-comment__title">
              شما هم نظر خود را درباره دوره ثبت کنید.
            </h5>
            <h6 className="add-comment__subtitle">
              چقدر از این دوره رضایت دارید؟
            </h6>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i
                className="fa-solid fa-star-half-stroke"
                data-fa-transform="flip-h"></i>
              <i className="fa-regular fa-star"></i>
            </div>

            <form action="" className="add-comment__form">
              <div>
                <div className="custom-input">
                  <input
                    type="text"
                    placeholder=""
                    className="custom-input__input"
                    id="login-name-input"
                    required
                  />
                  <label className="custom-input__label">نام</label>
                </div>
              </div>
              <div>
                <div className="custom-input">
                  <input
                    type="text"
                    placeholder=""
                    className="custom-input__input"
                    id="login-name-input"
                    required
                  />
                  <label className="custom-input__label">نام خانوادگی</label>
                </div>
              </div>
              <div className="custom-input">
                <input
                  type="text"
                  placeholder=""
                  className="custom-input__input"
                  id="login-name-input"
                  required
                />
                <label className="custom-input__label">ایمیل</label>
              </div>
              <div className="custom-text-area-wrapper">
                <textarea
                  name=""
                  className="custom-text-area"
                  id=""
                  required></textarea>
                <label className="custom-text-area__label">
                  هرجی دل تنگت میخواد بگو!
                </label>
              </div>
              <button className="add-comment__submit-btn">ثبت پیام</button>
            </form>
          </div>
        </section>
      </section>
    );
}