import * as React from "react";
import { Card } from "react-bootstrap";

const ArticleDetailsPage = (props: any) => {
  const article = props.location.state.articleDetails;

  return (
    <div className="container article-details-page">
      <Card className="my-3">
        <Card.Body>
          <img src={article.urlToImage} alt={article.title} className="w-100" />
          <Card.Title className="article-title mt-5 mb-3">
            {article.title}
          </Card.Title>
          <Card.Subtitle>
            Author: <strong>{article.author}</strong>, Published on: {article.publishedAt.split("T")[0]}
          </Card.Subtitle>
          <Card.Text className="mt-3">{article.content}</Card.Text>
          <Card.Text>{article.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleDetailsPage;
