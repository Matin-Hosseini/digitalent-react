import Checkbox from "@mui/material/Checkbox";

import "./index.css";

import UnderlinedLink from "../../components/UnderlinedLink";
import Logo from "./../../components/Logo";
import { useContext, useState } from "react";
import { Controller, SubmitHandler, get, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Api from "../../axios/api";
import { toast } from "react-toastify";
import { authContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import ThreeDotsLoading from "../../components/Loaders/ThreeDots";

const schema = z.object({
  username: z
    .string()
    .min(1, { message: "این فیلد اجباری است." })
    .min(3, { message: "نام کاربری باید حداقل 3 کاراکتر باشد." }),
  email: z
    .string()
    .min(1, { message: "این فیلد اجباری است." })
    .email({ message: "ایمیل نامعتبر می باشد." }),
  password: z
    .string()
    .min(1, { message: "این فیلد اجباری می باشد." })
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد." })
    .regex(/[A-Za-z]/, {
      message: "رمز عبور باید شامل حداقل یک حرف انگلیسی باشد.",
    })
    .regex(/[0-9]/, {
      message: "رمز عبور باید شامل حداقل یک عدد باشد.",
    }),
  chekcbox: z
    .boolean()
    .refine((val) => val === true, { message: "تیک این گزینه را بزنید." }),
});

type FormFields = z.infer<typeof schema>;

export default function SignUp() {
  const { getUser } = useContext(authContext);
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const registerSubmitHandler: SubmitHandler<FormFields> = async (data) => {
    try {
      await Api.post("/register", data);
      getUser();
      toast("ثبت نام با موفقیت انجام شد.");

      setTimeout(() => {
        navigate("/user-panel");
      }, 2000);
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        return toast("نام کاربری یا ایمیل قبلا استفاده شده است.");
      }
      toast("خطایی رخ داده است.");
    }
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
            onSubmit={handleSubmit(registerSubmitHandler)}
          >
            <div className="sign-up-form__inputs">
              <div className={`custom-input mt-8`}>
                <input
                  type="text"
                  className="custom-input__input"
                  {...register("username")}
                  required
                />
                <label className="custom-input__label">{"نام کاربری"}</label>
              </div>
              {errors.username && (
                <div className="text-red-400">{errors.username.message}</div>
              )}
            </div>
            <div className="sign-up-form__inputs">
              <div className={`custom-input mt-8`}>
                <input
                  type="email"
                  className="custom-input__input"
                  {...register("email")}
                  required
                />
                <label className="custom-input__label">{"ایمیل"}</label>
              </div>
              {errors.email && (
                <div className="text-red-400">{errors.email.message}</div>
              )}
            </div>
            <div className="sign-up-form__inputs">
              <div className={`custom-input mt-8`}>
                <input
                  type="text"
                  className="custom-input__input"
                  {...register("password")}
                  required
                />
                <label className="custom-input__label">{"رمز عبور"}</label>
              </div>
              {errors.password && (
                <div className="text-red-400">{errors.password.message}</div>
              )}
            </div>
            <div className="mb-5 flex gap-2 items-center">
              <Controller
                name="chekcbox"
                defaultValue={false}
                control={control}
                render={({ field }) => (
                  <>
                    <Checkbox
                      {...field}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 27,
                          color: "var(--text-color)",
                        },
                      }}
                    />
                  </>
                )}
              />
              <p className="cursor-pointer text-lg flex items-center gap-2">
                <UnderlinedLink to={"/"}>شرایط و قوانین</UnderlinedLink>
                <span>سایت را می پذیرم.</span>
              </p>
            </div>
            {errors.chekcbox && (
              <div className="text-red-400">{errors.chekcbox.message}</div>
            )}

            <button className="sign-up-form__btn">
              {isSubmitting ? <ThreeDotsLoading /> : "ثبت نام"}
            </button>

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
