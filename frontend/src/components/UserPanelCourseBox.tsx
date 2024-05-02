import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";

export default function UserPanelCourseBox() {
  return (
    <ContainerBox className={"p-2"}>
      <Link to="/course" className="block mb-3">
        <img
          src="/src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
          alt=""
          className="rounded-md"
        />
      </Link>
      <div className="course-box__info mb-0">
        <h2 className="mb-3">
          <Link to="/course" className="line-clamp-2 text-xl">
            این یک دوره کسشر می باشد که میخواد بگه کیرم تو این زندگی
          </Link>
        </h2>
        <div className="text-lg flex items-center gap-2">
          <span>تاریخ ثبت نام:</span>
          <span>23 فروردین 1403</span>
        </div>
      </div>
    </ContainerBox>
  );
}
