import { Link } from "react-router-dom";
import "./Tickets.css";

//react-icons
import { RiAddLine, RiCoupon3Fill } from "react-icons/ri";

export default function Tickets() {
  return (
    <div>
      <section className="no-tickets ">
        <i className="ri-coupon-3-fill"></i>
        <RiCoupon3Fill />
        <span>شما در حال حاظر هیچ تیکتی ثبت نکرده اید.</span>
      </section>

      <section className="tickets">
        <div className="ticket">
          <p className="ticket__title">
            درخواست تخفیف برای دوره آموزش Doker مقدماتی تا پیشرفته
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="ticket__section" data-section="finance">
              مالی
            </span>
            <span className="ticket__priority" data-priority="important">
              مهم
            </span>
          </div>
          <span className="ticket__status" data-status="answered">
            پاسخ داده شده
          </span>
        </div>

        <div className="ticket">
          <p className="ticket__title">
            درخواست تخفیف برای دوره آموزش Doker که الان داره مید خط ددوممقدماتی
            تا پیشرفته
          </p>
          <div className="flex items-center gap-3">
            <span className="ticket__section" data-section="finance">
              آموزش
            </span>
            <span className="ticket__priority" data-priority="very-important">
              بسیار مهم
            </span>
          </div>
          <span className="ticket__status" data-status="in-progress">
            در حال بررسی
          </span>
        </div>

        <div className="ticket">
          <p className="ticket__title">
            درخواست تخفیف برای دوره آموزش Doker مقدماتی تا پیشرفته
          </p>
          <div className="flex items-center gap-3">
            <span className="ticket__section" data-section="finance">
              مالی
            </span>
            <span className="ticket__priority" data-priority="normal">
              معمولی
            </span>
          </div>
          <span className="ticket__status" data-status="sent">
            ارسال شده
          </span>
        </div>
      </section>

      <div className="text-center">
        <Link
          to="/user-panel/add-ticket"
          className="custom-btn add-ticket-btn gap-3"
        >
          <RiAddLine />
          افزودن تیکت جدید
        </Link>
      </div>
    </div>
  );
}
