import { BsSuitHeart } from "react-icons/bs";
import { GoCommentDiscussion } from "react-icons/go";
import { IoCheckmarkOutline } from "react-icons/io5";
import ContainerBox from "../../components/ContainerBox";

export default function ArticleOverView({ className }: { className: String }) {
  return (
    <ContainerBox className={`p-5 mb-4 ${className ? className : ""}`}>
      <div>
        <div className="flex justify-between items-center text-lg">
          <div className="flex items-center gap-2">
            <BsSuitHeart />
            <div className="flex items-center gap-3">
              <p className="hidden xs:block">پسندیده شده:</p>
              <span>243</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GoCommentDiscussion />
            <div className="flex items-center gap-3">
              <p className="hidden xs:block">نظرات کاربران:</p>
              <span>110</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5  bg-[rgba(130,140,154,0.09)] p-4 rounded-lg mt-8 text-[var(--green)]">
          <IoCheckmarkOutline />
          <p>مطلب بررسی شده است.</p>
        </div>
      </div>
    </ContainerBox>
  );
}
