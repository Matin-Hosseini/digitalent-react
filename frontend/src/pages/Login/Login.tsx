import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//local-folders
import "./Login.css"

export default function Login() {
  return (
    <div className="login">
      <Row className="flex-row-reverse">
        <Col md={6} className="login-img order-1">
          <img
            src="src/assets/images/login-page/attachment_102306474_prev_ui.png"
            alt=""
          />
        </Col>
        <Col md={6} className="align-self-center">
          <p className="text-center mb-5 login-title">خوش برگشتی دوست خوبم</p>

          <form action="" className="login-form" id="login-form" noValidate>
            <div className="custom-input">
              <input
                type="text"
                name="identifier"
                className="custom-input__input"
                required
              />
              <label className="custom-input__label">
                ایمیل یا شماره موبایل
              </label>
            </div>
            <div className="custom-input">
              <input
                type="password"
                name="password"
                className="custom-input__input"
                required
              />
              <label className="custom-input__label">رمز عبور</label>
            </div>

            <div className="login-form__options">
              <div className="login-form__remember-me">
                <div className="checkbox">
                  <label>
                    مرا به خاطر بسپار
                    <input type="checkbox" name="rememberMe" />
                    <span className="checkbox-material">
                      <span className="check"></span>
                    </span>
                  </label>
                </div>
              </div>
              <Link to="/not-completed" className="login-form__forgot-password">
                رمز عبور خود را فراموش کرده اید؟
              </Link>
            </div>

            <Link to="/sign-up" className="d-block text-center mb-4">
              حساب کاربری ندارید؟
            </Link>

            <button className="login-form__btn">ورود</button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
