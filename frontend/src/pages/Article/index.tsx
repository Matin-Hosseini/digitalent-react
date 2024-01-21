import ArticleContent from "./Components/ArticleContent/ArticleContent";
import ArticleFooter from "./Components/ArticleFooter/ArticleFooter";
import ArticleHeader from "./Components/ArticleHeader/ArticleHeader";
import useScrollToTop from "../../hooks/scrollToTop";

export default function Article() {
  useScrollToTop()

  return (
    <main>
      <ArticleHeader />
      <ArticleContent />
      <ArticleFooter />
    </main>
  );
}
