import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="story my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="story__img h-100">
              <img src="src/assets/images/about-us/story.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column align-items-start justify-content-between h-100 p-5">
              <h3 className="section-name">داستان ما</h3>
              <h2 className="section-title">
                بهترین برنامه مورد نظرت رو توی دوره های ما پیدا کن
              </h2>
              <p className="story__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                موردکار گیرد.
              </p>

              <div className="story-boxes">
                <div className="story-box">
                  <i className="fa-solid fa-certificate"></i>
                  <div className="d-flex flex-column">
                    <span>2000+</span>
                    <span>دوره های معتبر</span>
                  </div>
                </div>
                <div className="story-box">
                  <i className="fa-solid fa-certificate"></i>
                  <div className="d-flex flex-column">
                    <span>2000+</span>
                    <span>دوره های معتبر</span>
                  </div>
                </div>
              </div>

              <a href="#" className="story__link">
                مشاهده همه دوره ها
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
