import { useEffect } from "react";
import ArticleContent from "./Components/ArticleContent/ArticleContent";
import ArticleFooter from "./Components/ArticleFooter/ArticleFooter";
import ArticleHeader from "./Components/ArticleHeader/ArticleHeader";

export default function Article() {

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <main>
      <ArticleHeader />
      <ArticleContent />
      <ArticleFooter />
    </main>
  );
}
