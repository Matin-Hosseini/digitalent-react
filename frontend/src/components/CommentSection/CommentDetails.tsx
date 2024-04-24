import { Avatar, Divider } from "@mui/material";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";

export default function CommentDetails({ reply }: { reply: Boolean }) {
  return (
    <div className={`${reply ? "bg-[var(--app-bg)] p-8 rounded-lg" : ""}`}>
      <div
        className={`flex items-center gap-6 border-solid border-gray-300 dark:border-gray-900 my-2`}
      ></div>

      <div className="flex gap-3">
        <Avatar
          src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
          alt="متین حسینی"
          sx={{
            width: "4rem",
            height: "4rem",
            fontFamily: "vasir",
            backgroundColor: "var(--purple)",
            fontSize: "1.5rem",
          }}
        />

        <div>
          <div className="flex items-center gap-6 mb-3">
            <div className="flex items-center gap-4">
              <div>
                <h6 className="text-2xl">لانا ردز</h6>
                <span className="text-lg text-[var(--gray)]">کاربر</span>
              </div>
            </div>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                background: "var(--text-color)",
                transition: "var(--transition)",
              }}
            />
            <span className="text-xl hidden xs:block">1403/01/14</span>
          </div>

          {reply && (
            <span className="text-[var(--gray)] text-xl">
              در پاسخ به {"لاناردز"}
            </span>
          )}
        </div>
      </div>

      <p className="my-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
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
  );
}
