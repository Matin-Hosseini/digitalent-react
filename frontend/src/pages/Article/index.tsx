import { LiaUserEditSolid } from "react-icons/lia";

import CommentSection from "../../components/CommentSection";
import ContainerBox from "../../components/ContainerBox";
import PageInfoBox from "../../components/PageInfoBox";
import UserInfoBox from "../../components/UserInfoBox";
import ArticleContent from "./ArticleContent";
import ArticleOverView from "./ArticleOverView";
import RelatedArticles from "./RelatedArticles";
import { useParams } from "react-router-dom";

import articles from "../../data/articles";
import { useEffect, useState } from "react";

export default function Article() {
  const [article, setArticle] = useState<any>({});
  const { short_name } = useParams();

  useEffect(() => {
    const targetArticle = articles.find(
      (article) => article.short_name === short_name
    );

    setArticle(targetArticle);
  }, []);

  return (
    <main className="container my-10">
      <PageInfoBox />

      <div className="grid-system my-12">
        <div className="col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9">
          <ArticleOverView className="lg:hidden" article={article} />

          <ArticleContent article={article} />

          <UserInfoBox
            className="mb-4 lg:hidden"
            title={"نویسنده"}
            icon={<LiaUserEditSolid />}
            color="green"
          />

          <CommentSection />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="sticky top-4">
            <ArticleOverView className="hidden lg:block" article={article} />

            <ContainerBox className="p-5 mb-4">
              <div></div>
            </ContainerBox>
            <RelatedArticles />

            <UserInfoBox
              className="hidden lg:block"
              title={"نویسنده"}
              icon={<LiaUserEditSolid />}
              color="green"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
