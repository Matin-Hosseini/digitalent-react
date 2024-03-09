import { Link } from "react-router-dom";

//local-folders
import Input from "../../components/Input";
import "./index.css";

export default function Login() {
  return (
    <div className="login h-dvh grid lg:grid-cols-2 items-center px-6 lg:p-0">
      <div className="hidden lg:grid items-center bg-stone-900 h-full">
        <img src="src/assets/images/login-page/test-illustration.jpg" alt="" />
      </div>

      <div>
        <p className="text-center mb-5 login-title">خوش برگشتی دوست خوبم</p>

        <form action="" className="login-form" id="login-form" noValidate>
          <Input name="identifier" label="ایمیل یا شماره موبایل" type="text" />
          <Input name="password" label="رمز عبور" type="password" />

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
      </div>
    </div>
  );
}
