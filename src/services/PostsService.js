import * as axios from "axios";

export const getArticles = async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=4221ecb737dc4c6f9c5a1be69fa7a66d"
  );
  return response.data.articles;
};
