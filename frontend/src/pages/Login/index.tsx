//local-folders
import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import UnderlinedLink from "../../components/UnderlinedLink";
import { max, min, required } from "../../validators/rules";
import "./index.css";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // const body = { identifier, password };

    // const res = await axios.post("http://localhost:8000/api/v1/login", body);
  };

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

            <form
              action=""
              className="login-form"
              id="login-form"
              noValidate
              onSubmit={handleLogin}
            >
              <Input
                name="identifier"
                label="ایمیل یا شماره موبایل"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                validations={[required(), min(4), max(20)]}
              />
              <Input
                name="password"
                label="رمز عبور"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                validations={[required(), min(8)]}
              />

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
