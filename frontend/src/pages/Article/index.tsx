import ArticleContent from "./Components/ArticleContent/ArticleContent";
import ArticleFooter from "./Components/ArticleFooter/ArticleFooter";
import ArticleHeader from "./Components/ArticleHeader/ArticleHeader";

export default function Article() {
  return (
    <main>
      <ArticleHeader />
      <ArticleContent />
      <ArticleFooter />
    </main>
  );
}
