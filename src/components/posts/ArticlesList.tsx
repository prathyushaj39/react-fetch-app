import React from "react";
import Article from "./Article";

const ArticlesList = ({ articles }: any) => {
  return articles.map((article: any, index: number) => {
    return <Article key={index} article={article} />;
  });
};

export default ArticlesList;
