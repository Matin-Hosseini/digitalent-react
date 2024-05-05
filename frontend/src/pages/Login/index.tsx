//local-folders
import Logo from "../../components/Logo";
import UnderlinedLink from "../../components/UnderlinedLink";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./index.css";
import ThreeDotsLoading from "../../components/Loaders/ThreeDots";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "این فیلد اجباری است." })
    .email({ message: "ایمیل نا معتبر می باشد." }),
  password: z
    .string()
    .min(1, { message: "این فیلد اجباری است." })
    .min(3, { message: "رمز عبور باید حداقل 3 کاراکتر باشد." }),
});

type FormFields = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  console.log(watch());

  const loginSubmitHandler: SubmitHandler<FormFields> = async (data) => {
    await setTimeout(() => {}, 2000);

    setError("root", {
      message: "ارور ست شده",
    });
    console.log(data);
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
                  {...register("email")}
                  required
                />
                <label className="custom-input__label">
                  {"نام کاربری یا ایمیل"}
                </label>
              </div>
              {errors.email && (
                <div className="text-red-400">{errors.email.message}</div>
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
