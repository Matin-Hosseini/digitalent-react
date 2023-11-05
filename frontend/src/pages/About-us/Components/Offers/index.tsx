import "./Offers.css";

export default function Offers() {
  return (
    <section className="offers">
      <div className="container">
        <h3 className="section-name text-center mb-4">چه خدماتی ارائه میدیم</h3>
        <h2 className="offers-title section-title d-flex flex-column align-items-center">
          <span className="mb-3">هر زمانی هر کجا که باشی میتونی</span>
          <span className="fw-bold">هرچی بخوای یاد بگیری</span>
        </h2>
        <div className="offers-boxes row">
          <div className="col-sm-6 col-md-3">
            <div className="offer-box">
              <i className="fa-solid fa-briefcase offer-box__icon"></i>
              <h2 className="offer-box__title">یادگیری از راه دور</h2>
              <p className="offer-box__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استعل
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="offer-box">
              <i className="fa-solid fa-briefcase offer-box__icon"></i>
              <h2 className="offer-box__title">یادگیری از راه دور</h2>
              <p className="offer-box__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استعل
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="offer-box">
              <i className="fa-solid fa-briefcase offer-box__icon"></i>
              <h2 className="offer-box__title">یادگیری از راه دور</h2>
              <p className="offer-box__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استعل
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="offer-box">
              <i className="fa-solid fa-briefcase offer-box__icon"></i>
              <h2 className="offer-box__title">یادگیری از راه دور</h2>
              <p className="offer-box__caption">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استعل
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
