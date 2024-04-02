import { LuCalendarPlus } from "react-icons/lu";
import { TfiWrite } from "react-icons/tfi";

export default function RelatedArticleBox() {
  return (
    <div className="flex gap-5 border-b-4">
      <img
        src="src/assets/images/about-us/offers-bg.jpg"
        alt=""
        className="w-32 rounded-lg"
      />
      <div>
        <h3 className="line-clamp-2 text-2xl mb-6">
          راه های جدید به وجود آمده جهت بررسی و به دست آوردن سود بیشتر
        </h3>
        <div className="flex items-center gap-4 text-gray-800 dark:text-gray-300">
          <div className="flex items-center gap-2 text-lg">
            <TfiWrite className="w-6 text-[var(--purple)]" />
            <span>علی رضا</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <LuCalendarPlus className="w-6 text-[var(--green)]" />
            <span>12 فروردین 1403</span>
          </div>
        </div>
      </div>
    </div>
  );
}