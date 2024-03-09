import { Link } from "react-router-dom";

//local-files
import Input from "../../components/Input";
import "./index.css";

export default function SignUp() {
  return (
    <div className="h-dvh grid lg:grid-cols-2 items-center">
      <div className="hidden lg:grid items-center bg-stone-900 h-full">
        <img src="src/assets/images/login-page/test-illustration.jpg" alt="" />
      </div>

      <div className="px-5">
        <p className="sign-up__title">خوشحالیم که قراره به خانوادمون بپیوندی</p>

        <form action="" className="sign-up-form" noValidate>
          <div className="sign-up-form__inputs">
            <Input name="name" label="نام و نام خانوادگی" type="text" />
            <Input name="userName" label="نام کاربری" type="text" />
            <Input name="email" label="ایمیل" type="email" />
            <Input name="phone" label="شماره موبایل" type="text" />
            <Input name="password" label="رمز عبور" type="password" />
            <Input
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
      </div>
    </div>
  );
}
