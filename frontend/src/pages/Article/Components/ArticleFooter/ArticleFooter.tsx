import { Link } from "react-router-dom";

import "./ArticleFooter.css";

//react-icons
import { BsBookmarks, BsFacebook } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export default function ArticleFooter() {
  return (
    <section className="article-footer">
      <div className="container">
        <div className="d-flex flex-column gap-2 flex-sm-row justify-content-between align-items-center">
          <div className="article-overview">
            <div className="article-options">
              <BiMenuAltRight className="article-options__icon" />
              <ul className="artilce-options__list">
                <li>گذارش تخلف</li>
                <li>بلاک کاربر</li>
              </ul>
            </div>
            <div className="article-likes">
              <AiOutlineHeart className="article-likes__icon" />
              <span>8</span>
            </div>
            <BsBookmarks clasName="article-save-icon" />
          </div>
          <div className="article-share">
            <Link to="#" className="article-share__short-link">
              https://dgtlnt.ir/f57g
            </Link>
            <div className="article-share__socials">
              <div className="article-share__social">
                <span>اشتراک گذاری در توییتر</span>
                <i className="bx bxl-twitter"></i>
                <FiTwitter />
              </div>
              <div className="article-share__social">
                <span>اشتراک گذاری در فیس بوک</span>
                <BsFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className="article-tags">
          <Link to="#" className="article-tag article-tag--green">
            برنامه نویسی
          </Link>
          <Link to="#" className="article-tag">
            نرم افزار
          </Link>
          <Link to="#" className="article-tag article-tag--blue">
            طراحی سایت
          </Link>
          <Link to="#" className="article-tag">
            فرانت اند
          </Link>
          <Link to="#" className="article-tag article-tag--purple">
            بک اند
          </Link>
        </div>
      </div>
    </section>
  );
}
