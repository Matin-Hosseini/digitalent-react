import "./Teacher.css"

export default function Teacher(){
    return (
      <section className="teacher tab-content">
        <div className="teacher-info">
          <img
            src="src/assets/images/profile.jpg"
            alt=""
            className="teacher-info__img"
          />
          <div className="teacher-info__content">
            <div>
              <a href="#" className="teacher__name">
                سید متین حسینی
              </a>
              <span className="teacher__teaching-category">فرانت اند</span>
              <ul className="teacher__contacts">
                <li>
                  <span className="teacher__contacts-title">آدرس ایمیل:</span>
                  <span className="teacher__contacts-info">
                    matin@gmail.com
                  </span>
                </li>
                <li>
                  <span className="teacher__contacts-title">شماره تماس:</span>
                  <span className="teacher__contacts-info">09124567891</span>
                </li>
              </ul>

              <div className="teacher__socials">
                <a href="#">
                  <i className="fa-brands fa-linkedin teacher__socials-icon"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter teacher__socials-icon"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-telegram teacher__socials-icon"></i>
                </a>
              </div>

              <a href="#" className="teacher__contact-me-btn">
                با من در ارتباط باشید
              </a>
            </div>
          </div>
        </div>

        <div className="teacher__description">
          <span className="section-name">درباره مدرس</span>
          <span className="teacher__greeting">سلام ! من متین حسینی هستم</span>
          <p className="teacher__bio">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </section>
    );
}   