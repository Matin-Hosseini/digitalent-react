import { FcCalendar, FcShare } from "react-icons/fc";
import BreadCrumb from "./Breadcrumb";
import ContainerBox from "./ContainerBox";

export default function PageInfoBox() {
  return (
    <ContainerBox className={""}>
      <div className="grid-system">
        <div className="col-span-8">
          <BreadCrumb></BreadCrumb>
        </div>
        <div className="col-span-4">
          <div className="flex items-center justify-between h-full pe-5">
            <div className="flex flex-col gap-2 py-3">
              {/* <div className="flex items-center gap-2 text-xl">
                  <FcCalendar />
                  <div>
                    <span>افزوده شده در:</span>
                    <span>12 فروردین 1403</span>
                  </div>
                </div> */}
              <div className="flex items-center gap-2 text-xl">
                <FcCalendar />
                <div>
                  <span>آخرین به روزرسانی: </span>
                  <span>12 فروردین 1403</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-xl">
              <FcShare />
              <span>اشتراک گذاری</span>
            </button>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
}
