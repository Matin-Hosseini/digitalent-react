import { useEffect } from "react";
import "./Sessions.css";

export default function Sessions() {
  return (
    <section className="sessions tab-content">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne">
              فصل اول
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <ul className="session-items">
                <li className="session-item">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    ویدیو معرفی
                  </a>
                  <span className="session-item__duration">02:30</span>
                  {/* <!-- <i className="fa-solid fa-lock session-item__locked"></i> --> */}
                </li>
                <li className="session-item active">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    آموزش مقدماتی
                  </a>
                  {/* <!-- <span className="session-item__duration">02:30</span> --> */}
                  <i className="fa-solid fa-lock session-item__locked"></i>
                </li>
                <li className="session-item">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    آموزش مقدماتی
                  </a>
                  {/* <!-- <span className="session-item__duration">02:30</span> --> */}
                  <i className="fa-solid fa-lock session-item__locked"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo">
              فصل دوم
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <ul className="session-items">
                <li className="session-item">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    ویدیو معرفی
                  </a>
                  <span className="session-item__duration">02:30</span>
                  {/* <!-- <i className="fa-solid fa-lock session-item__locked"></i> --> */}
                </li>
                <li className="session-item">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    آموزش مقدماتی
                  </a>
                  {/* <!-- <span className="session-item__duration">02:30</span> --> */}
                  <i className="fa-solid fa-lock session-item__locked"></i>
                </li>
                <li className="session-item">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    آموزش مقدماتی
                  </a>
                  {/* <!-- <span className="session-item__duration">02:30</span> --> */}
                  <i className="fa-solid fa-lock session-item__locked"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree">
              فصل سوم
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <ul className="session-items">
                <li className="session-item">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    ویدیو معرفی
                  </a>
                  <span className="session-item__duration">02:30</span>
                  {/* <!-- <i className="fa-solid fa-lock session-item__locked"></i> --> */}
                </li>
                <li className="session-item">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    آموزش مقدماتی
                  </a>
                  {/* <!-- <span className="session-item__duration">02:30</span> --> */}
                  <i className="fa-solid fa-lock session-item__locked"></i>
                </li>
                <li className="session-item">
                  <i className="fa-regular fa-circle-play session-item__play-icon"></i>
                  <a href="#" className="session-item__title">
                    آموزش مقدماتی
                  </a>
                  {/* <!-- <span className="session-item__duration">02:30</span> --> */}
                  <i className="fa-solid fa-lock session-item__locked"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
