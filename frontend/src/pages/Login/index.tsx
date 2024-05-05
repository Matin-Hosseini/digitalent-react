//local-folders
import Logo from "../../components/Logo";
import UnderlinedLink from "../../components/UnderlinedLink";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import "./index.css";
import ThreeDotsLoading from "../../components/Loaders/ThreeDots";
import Api from "../../axios/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { authContext } from "../../contexts/auth";

const schema = z.object({
  identifier: z.string().min(1, { message: "این فیلد اجباری است." }),
  password: z.string().min(1, { message: "این فیلد اجباری است." }),
});

type FormFields = z.infer<typeof schema>;

export default function Login() {
  const { login } = useContext(authContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const loginSubmitHandler: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await Api.post("/login", data);
      console.log(res.data.user);
      toast("خوش آمدید.");
      login(res.data.user);

      setTimeout(() => {
        navigate("/user-panel");
      }, 2000);
    } catch (error) {
      toast("اطلاعات وارد شده درست نمی باشد.");
    }
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
              onSubmit={handleSubmit(loginSubmitHandler)}
            >
              <div className={`custom-input mt-8`}>
                <input
                  type="text"
                  className="custom-input__input"
                  {...register("identifier")}
                  required
                />
                <label className="custom-input__label">
                  {"نام کاربری یا ایمیل"}
                </label>
              </div>
              {errors.identifier && (
                <div className="text-red-400">{errors.identifier.message}</div>
              )}

              <div className={`custom-input mt-8`}>
                <input
                  type="password"
                  className="custom-input__input"
                  {...register("password")}
                  required
                />
                <label className="custom-input__label">{"رمز عبور"}</label>
              </div>
              {errors.password && (
                <div className="text-red-400 ">{errors.password.message}</div>
              )}

              <button
                className="login-form__btn mt-8"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? <ThreeDotsLoading /> : "ورود"}
              </button>
              {errors.root && (
                <div className="text-red-400">{errors.root.message}</div>
              )}
            </form>

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
          </div>
        </div>
        <div className="hidden lg:grid items-center bg-stone-900 h-full">
          <img src="src/assets/images/login-page/login.png" alt="" />
        </div>
      </div>
    </>
  );
}
