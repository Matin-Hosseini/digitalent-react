import { Link } from "react-router-dom";

//local-files
import "./../404/404.css";

export default function NotCompleted() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="not-found-img">
              <img src="src/assets/images/not-completed.png" alt="" />
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="not-found-content">
              <h1 className="title">ما داریم زحمت می کشیم!</h1>
              <h2 className="caption">
                این صفحه در دست ساخته و هنوز تکمیل نشده
              </h2>
              <Link to="/" className="not-found-link">
                مثل اینکه دیگه راهی نی
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
