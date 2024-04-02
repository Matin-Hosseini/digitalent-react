import { FcCalendar, FcShare } from "react-icons/fc";
import ContainerBox from "../../components/ContainerBox";
import useScrollToTop from "../../hooks/scrollToTop";
import BreadCrumb from "../../components/Breadcrumb";

import CommentBox from "../../components/CommentBox";
import ContainerBoxTitle from "../../components/ContainerBoxTitle";
import UserInfoBox from "../../components/UserInfoBox";
import ArticleOverView from "./ArticleOverView";
import ArticleContent from "./ArticleContent";
import RelatedArticles from "./RelatedArticles";
export default function Article() {
  useScrollToTop();

  return (
    <main className="container my-10">
      <ContainerBox className={""}>
        {/* info */}
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

      {/* content */}

      <div className="grid-system my-12">
        <div className="col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9">
          <div className="lg:hidden">
            <ArticleOverView />
          </div>
          <ArticleContent />
          <div className="lg:hidden">
            <UserInfoBox />
          </div>
          <ContainerBox className={"p-5"}>
            <ContainerBoxTitle title={"نظرات کاربران"} />
            <div className="mt-5 divide-y">
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
            </div>
          </ContainerBox>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="sticky top-4">
            <div className="hidden lg:block">
              <ArticleOverView />
            </div>
            <ContainerBox className={"p-5 mb-4"}>
              <div></div>
            </ContainerBox>
            <RelatedArticles />
            <div className="hidden lg:block">
              <UserInfoBox />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
