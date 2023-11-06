import CustomInput from "../../../components/Custom-input/Custom-input";
import "./EditAccount.css";

export default function EditAccount() {
  return (
    <section className="edit">
      <form action="" className="edit-form">
        <h1 className="title text-info mb-4">ویرایش حساب کاربری</h1>
        <div>
          <label>نام و نام خانوادگی</label>
          <input type="text" id="name" value="متین حسی" />
          <span className="error-message">این بخش را خالی نگذارید.</span>
        </div>
        <div>
          <label>نام کاربری</label>
          <input type="text" id="userName" placeholder="" />
          <span className="error-message">این بخش را خالی نگذارید.</span>
        </div>
        <div>
          <label>شماره موبایل</label>
          <input type="text" id="phone" placeholder="" />
          <span className="error-message">این بخش را خالی نگذارید.</span>
        </div>
        <div>
          <label>ایمیل</label>
          <input type="text" id="email" placeholder="" />
          <span className="error-message">این بخش را خالی نگذارید.</span>
        </div>

        <button type="submit" className="edit-form__submit-btn custom-btn">
          ویرایش اطلاعات
        </button>
      </form>
    </section>
  );
}
