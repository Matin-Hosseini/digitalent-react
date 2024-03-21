//local-folders
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import UnderlinedLink from "../../components/UnderlinedLink";
import "./index.css";

export default function Login() {
  return (
    <>
      <div className="login h-dvh grid lg:grid-cols-2 px-6 lg:p-0">
        <div className="grid">
          <div className="m-4">
            <Logo />
          </div>
          <div>
            <p className="text-center mb-10 login-title">
              خوش برگشتی دوست خوبم
            </p>

            <form action="" className="login-form" id="login-form" noValidate>
              <Input
                name="identifier"
                label="ایمیل یا شماره موبایل"
                type="text"
              />
              <Input name="password" label="رمز عبور" type="password" />

              <button className="login-form__btn">ورود</button>

              <div className="mt-10">
                <p className="flex justify-center items-center gap-2 mb-8">
                  <span>رمز عبور خود را فراموش کرده اید؟</span>
                  <UnderlinedLink to={"/"}>بازیابی رمز</UnderlinedLink>
                </p>
                <p className="flex justify-center items-center gap-2 mb-8">
                  <span>هنوز ثبت نام نکرده اید؟</span>
                  <UnderlinedLink to={"/sign-up"}>ثبت نام</UnderlinedLink>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:grid items-center bg-stone-900 h-full">
          <img src="src/assets/images/login-page/login.png" alt="" />
        </div>
      </div>
    </>
  );
}
