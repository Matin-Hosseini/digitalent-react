import CustomInput from "../../../components/Input";
import "./ChangePassword.css";

export default function ChangePassword() {
  return (
    <section className="change-password mx-5">
      <h1 className="title mb-4 text-center">تغییر رمز عبور</h1>

      <form action="" className="change-password-form" noValidate>
        <CustomInput
          label="رمز عبور فعلی"
          name="current-password"
          type="password"
        />

        <CustomInput
          label="رمز عبور جدید"
          name="new-password"
          type="password"
        />
        <button type="submit" className="custom-btn d-block m-auto">
          تغییر رمز عبور
        </button>
      </form>
    </section>
  );
}
