import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

//local-files
import Input from "../../components/Input";
import "./index.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SignUp() {
  return (
    <div className="h-dvh grid lg:grid-cols-2 items-center">
      <div className="px-5">
        <p className="sign-up__title">خوشحالیم که قراره به خانوادمون بپیوندی</p>

        <form action="" className="sign-up-form" noValidate>
          <div className="sign-up-form__inputs">
            <Input name="name" label="نام و نام خانوادگی" type="text" />
            <Input name="userName" label="نام کاربری" type="text" />
            <Input name="email" label="ایمیل" type="email" />
            <Input name="password" label="رمز عبور" type="password" />
          </div>
          <div className="sign-up-form__options">
            <div className="login-form__remember-me">
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
              <span>قوانین را میپذیرم</span>
            </div>
            <Link to="/login" className="sign-up-form__login">
              حساب کاربری دارید؟
            </Link>
          </div>
          <button className="sign-up-form__btn">ثبت نام</button>
        </form>
      </div>

      <div className="hidden lg:grid items-center bg-stone-900 h-full">
        <img src="src/assets/images/sign-up-page/sign-up.png" alt="" />
      </div>
    </div>
  );
}
