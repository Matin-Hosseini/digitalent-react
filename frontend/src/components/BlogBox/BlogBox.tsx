import "./BlogBox.css";

import { Link } from "react-router-dom";

//react-icons
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

export default function BlogBox() {
  return (
    <article className="article-box">
      <Link to="/article" className="article-box__img">
        <img
          src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
          alt=""
        />
      </Link>
      <div className="article-box__content">
        <h2 className="article-box__title">
          <Link to="/article" className="underline-animated-text">
            اهمیت یادگیری پایتون در برنامه نویسی مخصوصا برنامه که دارم میرم خط
            سوم دیگه نویسی سمت سرور
          </Link>
        </h2>
        <div className="article-box__info d-sm-flex justify-content-between align-items-end">
          <div>
            <div className="article-box__views">
              <HiOutlineEye />
              <span>1,257</span>
            </div>
            <div className="article-box__comments">
              <HiOutlineChatBubbleBottomCenterText />
              <span>1,120 دیدگاه</span>
            </div>
          </div>
          <div className="article-box__date">
            <span>7</span>
            <span>مرداد</span>
            <span>1382</span>
          </div>
        </div>
      </div>
    </article>
  );
}
