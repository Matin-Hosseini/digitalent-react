import Checkbox from "@mui/material/Checkbox";

//local-files
import { useState } from "react";
import Input from "../../components/Input";
import "./index.css";

import UnderlinedLink from "../../components/UnderlinedLink";
import Logo from "./../../components/Logo";

export default function SignUp() {
  const [checkbox, setCheckbox] = useState(false);

  const toggleCheckbox = () => setCheckbox((prev) => !prev);

  const registerHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-dvh grid lg:grid-cols-2">
      <div className="grid">
        <div className="m-4">
          <Logo />
        </div>
        <div className="px-5 ">
          <p className="sign-up__title">
            خوشحالیم که قراره به خانوادمون بپیوندی
          </p>

          <form
            action=""
            className="sign-up-form"
            noValidate
            onSubmit={registerHandler}
          >
            <div className="sign-up-form__inputs">
              <Input name="userName" label="نام کاربری" type="text" />
              <Input name="email" label="ایمیل" type="email" />
              <Input name="password" label="رمز عبور" type="password" />
            </div>
            <div className="mb-5 flex gap-2 items-center">
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 27,
                    color: "var(--primary-color)",
                  },
                }}
                checked={checkbox}
                onChange={toggleCheckbox}
              />
              <p
                onClick={toggleCheckbox}
                className="cursor-pointer text-lg flex items-center gap-2"
              >
                <UnderlinedLink to={"/"}>شرایط و قوانین</UnderlinedLink>
                <span>سایت را می پذیرم.</span>
              </p>
            </div>
            <button className="sign-up-form__btn">ثبت نام</button>

            <p className="text-center mt-8 flex items-center gap-2 justify-center">
              <span>حساب کاربری دارید؟</span>
              <UnderlinedLink to={"/login"}>وارد شوید</UnderlinedLink>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden lg:grid items-center bg-stone-900 h-full">
        <img src="src/assets/images/sign-up-page/sign-up.png" alt="" />
      </div>
    </div>
  );
}
