import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

//local-files
import "./index.css";
import CustomInput from "../../components/Custom-input/Custom-input";

export default function SignUp() {
  return (
    <div className="sign-up">
      <Container>
        <p className="sign-up__title">خوشحالیم که قراره به خانوادمون بپیوندی</p>

        <form action="" className="sign-up-form" noValidate>
          <div className="sign-up-form__inputs">
            <CustomInput name="name" label="نام و نام خانوادگی" type="text" />
            <CustomInput name="userName" label="نام کاربری" type="text" />
            <CustomInput name="email" label="ایمیل" type="email" />
            <CustomInput name="phone" label="شماره موبایل" type="text" />
            <CustomInput name="password" label="رمز عبور" type="password" />
            <CustomInput
              name="confirmPassword"
              label="تکرار رمز عبور"
              type="password"
            />
          </div>
          <div className="sign-up-form__options">
            <div className="login-form__remember-me">
              <div className="checkbox">
                <label>
                  <span>
                    <Link to="#" className="text-decoration-underline">
                      شرایط و قوانین
                    </Link>
                    سایت را میپذیرم
                  </span>
                  <input type="checkbox" name="checkbox" />
                  <span className="checkbox-material">
                    <span className="check"></span>
                  </span>
                </label>
              </div>
            </div>
            <Link to="/login" className="sign-up-form__login">
              حساب کاربری دارید؟
            </Link>
          </div>
          <button className="sign-up-form__btn">ثبت نام</button>
        </form>
      </Container>
    </div>
  );
}
