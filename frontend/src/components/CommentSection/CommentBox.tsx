import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { RiShareForwardFill } from "react-icons/ri";

export default function CommentBox() {
  return (
    <div className="flex gap-6 border-solid py-8 border-gray-300 dark:border-gray-900">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
            alt=""
            className="w-full h-full"
          />
        </div>
        <h5 className="text-lg text-[var(--gray)]">لانا ردز</h5>
      </div>
      <div>
        <div className="flex items-center justify-between text-[var(--gray)] mb-4">
          <div className="flex items-center gap-4 text-lg">
            <span>1403/01/14</span>
            <span>10:28</span>
          </div>
          <button>
            <RiShareForwardFill />
          </button>
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را م
        </p>
        <div className="flex items-center justify-between">
          <button className="text-[var(--gray)]">پاسخ</button>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-[var(--green)] text-lg">
              <span>3</span>
              <IoMdThumbsUp className="text-[var(--green)]" />
            </button>
            <button className="flex items-center gap-1 text-[var(--red)] text-lg">
              <span>4</span>
              <IoMdThumbsDown className="text-[var(--red)]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
