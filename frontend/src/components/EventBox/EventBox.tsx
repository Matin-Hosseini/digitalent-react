import "./EventBox.css"

import {Link} from 'react-router-dom'

import { HiArrowNarrowLeft, HiOutlineLocationMarker } from "react-icons/hi";
import {BiTimeFive} from 'react-icons/bi'

export default function () {
  return (
    <div className="event-box active">
      <Link to="/event" className="event-box__image">
        <img
          src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
          alt=""
        />
      </Link>
      <div className="event-box__info ">
        <div className="event-box__date mb-3">17 دی</div>
        <h2>
          <Link to="/event" className="event-box__title">
            چکونه شبکه سازی بهینه ای داشته باشیم که بتوانیم در همه شرایط بهترین
            کار هارا انجام دهیم
          </Link>
        </h2>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center event-box__time">
            {/* <i className="fa-regular fa-clock event-box__icon"></i> */}
            <BiTimeFive className="event-box__icon"/>
            <div>
              <span>00</span>
              <span>:</span>
              <span>08</span>
            </div>
          </div>
          <div className="d-flex align-items-center event-box__location">
            <HiOutlineLocationMarker className="event-box__icon"/>
            <span>تهران - ستارخان -بعد از پل اول</span>
          </div>
        </div>
      </div>
      <Link to="/event" className="">
        <HiArrowNarrowLeft className="event-box__link" />
      </Link>
    </div>
  );
}
