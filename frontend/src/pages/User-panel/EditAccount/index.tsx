import { useContext, useEffect, useState } from "react";
import "./EditAccount.css";
import { authContext } from "../../../contexts/auth";
import { toast } from "react-toastify";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailValidator,
  nameValidator,
  phoneValidator,
  usernameValidator,
} from "../../../validators/schemas";
import ThreeDotsLoading from "../../../components/Loaders/ThreeDots";
import Api from "../../../axios/api";
import { Button } from "@mui/material";

export default function EditAccount() {
  const { userInfo, changeUserInfo } = useContext(authContext);

  const schema = z.object({
    name: nameValidator,
    username: usernameValidator,
    phone: phoneValidator,
    email: emailValidator,
  });

  type FormFields = z.infer<typeof schema>;

  useEffect(() => {
    console.log(userInfo);
    setValue("name", userInfo.name || "");
    setValue("email", userInfo.email || "");
    setValue("username", userInfo.username || "");
    setValue("phone", userInfo.phone || "");
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  console.log(watch());

  const submitHandler: SubmitHandler<FormFields> = async (data) => {
    try {
      await Api.put("/user/info", data);
      toast("ویرایش اطلاعات انجام شد.");
      changeUserInfo({
        ...userInfo,
        username: data.username,
        name: data.name,
        phone: data.phone,
        email: data.email,
      });
    } catch (error) {
      if (error.response.status === 400) {
        return toast("کاربری با این نام کاربری یا ایمیل قبلا ثبت شده است");
      }
      toast("خطایی به وجود آمده است!");
    }
  };

  return (
    <section className="edit">
      <form className="edit-form" onSubmit={handleSubmit(submitHandler)}>
        <h1 className="title text-info mb-4">ویرایش حساب کاربری</h1>
        <div className="input-box">
          <label>نام و نام خانوادگی</label>
          <input type="text" {...register("name")} />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>
        <div className="input-box">
          <label>نام کاربری</label>
          <input type="text" {...register("username")} />
          {errors.username && (
            <span className="error-message">{errors.username.message}</span>
          )}
        </div>
        <div className="input-box">
          <label>شماره موبایل</label>
          <input type="text" {...register("phone")} />
          {errors.phone && (
            <span className="error-message">{errors.phone.message}</span>
          )}
        </div>
        <div className="input-box">
          <label>ایمیل</label>
          <input type="text" {...register("email")} />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <Button
          sx={{
            color: "white",
            fontSize: 17,
            background: "var(--blue)",
            borderRadius: 2,
            width: "15rem",
            height: "4.5rem",
            "&:hover": {
              background: "#51a0b6",
            },
            "&:disabled": {
              background: "#51a0b6",
            },
          }}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? <ThreeDotsLoading /> : "ویرایش اطلاعات"}
        </Button>
      </form>
    </section>
  );
}
