import { RiAddLine } from "react-icons/ri";
import "./AddTicket.css";

export default function AddTicket() {
  return (
    <>
      <form action="" className="add-ticket-form">
        <div className="row">
          <div className="col-12">
            <input type="text" placeholder="عنوان" />
            <span className="error-message">
              لطفا عنوان تیکت خود را وارد کنید.
            </span>
          </div>

          <div className="col-md-6">
            <select name="section" id="" className="add-ticket-form__select">
              <option value="-1">انتخاب بخش</option>
              <option value="finance">بخش مالی</option>
              <option value="education">بخش آموزش</option>
            </select>
            <span className="error-message">
              لطفا بخش مربوطه را انتخاب کنید.
            </span>
          </div>

          <div className="col-md-6">
            <select name="priority" id="" className="add-ticket-form__select">
              <option value="-1">انتخاب اولویت</option>
              <option value="normal">معمولی</option>
              <option value="important">مهم</option>
              <option value="very-important">خیلی مهم</option>
            </select>
            <span className="error-message">
              لطفا اولویت تیکت خود را مشخص کنید
            </span>
          </div>

          <div className="col-12">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="متن تیکت"></textarea>
            <span className="error-message">
              لطفا متن تیکت خود را وارد کنید.
            </span>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="custom-btn gap-3 add-ticket-form__submit-btn">
            <RiAddLine />
            افزودن تیکت جدید
          </button>
        </div>
      </form>
    </>
  );
}
