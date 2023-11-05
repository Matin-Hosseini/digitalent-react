import { Link } from "react-router-dom";

//local-files
import "./404.css";
export default function NotFound() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="not-found-img">
              <img src="src/assets/images/404/404_prev_ui.png" alt="" />
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="not-found-content">
              <h1 className="title">اوخ اوخ، دیدی چی شد ستونم!</h1>
              <h2 className="caption">مث اینکه اشتباهی رات خورده پیش من</h2>
              <h2 className="caption">حالا یه پیتزامون نشه؟</h2>
              <Link to="/" className="not-found-link">
                نه بابا مشتی خونه کار دارم
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
