import { Link } from "react-router-dom";

//react-icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

//local-files
import "./Course-info.css";

export default function CourseInfo() {
  return (
    <section className="course-info">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6">
            <h1 className="course-info__title">
              آموزش حرفه ای متلب برای تازه کار ها
            </h1>
            <h2 className="course-info__description">
              متلب یه برامخ برای اینه که بتونی هر طرح پیچیده و چرت و پرتی که به
              ذهنت رسید رو طراحی کنی
            </h2>

            <div className="course-info__content">
              <div className="course-teacher">
                <img
                  src="src/assets/images/profile.jpg"
                  alt=""
                  className="course-teacher__profile"
                />
                <h3 className="course-teacher__name">
                  <Link to="#">سید متین حسینی</Link>
                </h3>
              </div>
              <div className="course-category">
                <span>دسته بندی:</span>
                <span>
                  <Link to="#">طراحی</Link>
                </span>
              </div>
              <div className="course-rating">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="course-comments-count">(56 نظر)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
