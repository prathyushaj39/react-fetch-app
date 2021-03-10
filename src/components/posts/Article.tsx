import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

const Article = ({ article }: any) => {
  const history = useHistory();
  const handleNavigateToDetails = () => {
    history.push("/article-details", {
      articleDetails: article,
    });
  };

  return (
    <Card className="my-3" onClick={handleNavigateToDetails}>
      <Card.Body>
        <Card.Title className="article-title">{article.title}</Card.Title>
        <Card.Text>{article.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Article;
