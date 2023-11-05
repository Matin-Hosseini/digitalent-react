import "./ArticleHeader.css";

//react-icons
import { BsCalendar2Range } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";

export default function ArticleHeader() {
  return (
    <section className="article-header">
      <div className="container">
        <h1 className="article-header__title">
          اصن جی شد که تصمیم گرفتم یه مقاله راجع به اینکه طراحی سایت چه شکلیه
          بنویسم
        </h1>
        <p className="article-header__description">
          این مقاله برای اینه که بخواد یه سری اطلاعات راحع به اینکه طراحی سایت
          اصن چه شکلی هست رو توضیح بده پس ازش لذت ببر و گوه هم نخور
        </p>
        <div className="article-header__details">
          <div className="article-header__writer-info">
            <img
              src="src/assets/images/profile.jpg"
              alt=""
              className="article-header__writer-img"
            />
            <h2 className="article-header__writer-name">سید متین حسینی</h2>
          </div>
          <div className="article-header__date">
            <BsCalendar2Range className="article-header__icon" />
            <span>12 مرداد 1398</span>
          </div>
          <div className="article-header__comments">
            <BiMessageRoundedDetail className="article-header__icon" />
            <span>5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
