import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import ArticleDetailsPage from "./pages/article-details/ArticleDetailsPage";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/article-details" component={ArticleDetailsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
