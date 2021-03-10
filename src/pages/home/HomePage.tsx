import React, { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import ArticlesList from "../../components/posts/ArticlesList";
import { getArticles } from "../../services/PostsService";

const HomePage = () => {
  const [isLoading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticlesList() {
      setLoading(true);
      const response = await getArticles();
      setArticles(response);
      setLoading(false);
    }
    getArticlesList();
  }, []);

  return (
    <main className="container home-page">
      {isLoading && <Loading />}
      {articles.length > 0 && <ArticlesList articles={articles} />}
    </main>
  );
};

export default HomePage;
