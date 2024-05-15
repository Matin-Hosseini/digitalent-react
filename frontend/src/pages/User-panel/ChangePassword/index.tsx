import { SubmitHandler, useForm } from "react-hook-form";
import "./ChangePassword.css";
import { z } from "zod";
import { passwordValidator } from "../../../validators/schemas";
import ThreeDotsLoading from "../../../components/Loaders/ThreeDots";
import { zodResolver } from "@hookform/resolvers/zod";
import Api from "../../../axios/api";
import { toast } from "react-toastify";

const schema = z.object({
  currentPassword: z.string().min(1, { message: "این فیلد اجباری است." }),
  newPassword: passwordValidator,
});

type Formfields = z.infer<typeof schema>;

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Formfields>({ resolver: zodResolver(schema) });

  const submitHandler: SubmitHandler<Formfields> = async (data) => {
    try {
      await Api.put("/user/password", data);
      toast("تغییر رمز عبور انجام شد.");

      setValue("currentPassword", "");
      setValue("newPassword", "");
    } catch (error: any) {
      if (error.response.status === 400) {
        return toast("رمز عبور با رمز عبور قبلی تطابق ندارد.");
      }
      toast("خطایی رخ داده است.");
    }
  };

  return (
    <section className="change-password mx-5">
      <h1 className="title mb-4 text-center">تغییر رمز عبور</h1>

      <form
        className="change-password-form"
        noValidate
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className={`custom-input mt-8`}>
          <input
            type="password"
            className="custom-input__input"
            {...register("currentPassword")}
            required
          />
          <label className="custom-input__label">{"رمز عبور فعلی"}</label>
        </div>
        {errors.currentPassword && (
          <div className="text-red-400">{errors.currentPassword.message}</div>
        )}

        <div className={`custom-input mt-8`}>
          <input
            type="password"
            className="custom-input__input"
            {...register("newPassword")}
            required
          />
          <label className="custom-input__label">{"رمز عبور جدید"}</label>
        </div>
        {errors.newPassword && (
          <div className="text-red-400">{errors.newPassword.message}</div>
        )}

        <button type="submit" className="custom-btn d-block m-auto mt-4">
          {isSubmitting ? <ThreeDotsLoading /> : "تغییر رمز عبور"}
        </button>
      </form>
    </section>
  );
}
