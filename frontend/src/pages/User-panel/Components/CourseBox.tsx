import { Link } from "react-router-dom";

export default function CourseBox() {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="course-box">
        <Link to="/course" className="course-box__image">
          <img
            src="./../src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
            alt=""
          />
        </Link>
        <div className="course-box__info mb-0">
          <h2 className="course-box__name">
            <Link to="/course" className="underline-animated-text">
              این یک دوره کسشر می باشد که میخواد بگه کیرم تو این زندگی
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
