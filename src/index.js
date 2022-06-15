import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  Row,
  Column,
  Centered,
  Navbar,
  MobileList,
  withScrollTo
} from "already-styled-components";
import { render } from "react-dom";
import CompareChart from "react-comparison-table";

import "./styles.css";

var data = [
  {
    Name: "Product 1",
    id: "1",
    image: "https://goo.gl/Wk14oo",
    features: [1, 2, 3],
    feature1: "feature 1 of product 1",
    feature2: "feature 2 of product 1",
    feature3: "feature 3 of product 1"
  },

  {
    Name: "Product 2",
    id: "2",
    image: "https://goo.gl/Wk14oo",
    features: [1, 2, 3],
    feature2: "feature 2 of product 2",
    feature3: "feature 3 of product 2"
  },

  {
    Name: "Product 3",
    id: "3",
    image: "https://goo.gl/Wk14oo",
    features: [1, 2, 3],
    feature1: "feature 1 of product 3",
    feature2: "feature 2 of product 3"
  },

  {
    Name: "Product 4",
    id: "4",
    image: "https://goo.gl/Wk14oo",
    features: [1, 2, 3],
    feature1: "feature 1 of product 4",
    feature2: "feature 2 of product 4",
    feature3: "feature 3 of product 4"
  }
];

const SinglePageLink = ({ sectionId, callback, children }) => (
  <Link
    to={`/${sectionId}`}
    onClick={e =>
      withScrollTo({
        sectionId,
        e,
        offset: 80,
        callback
      })
    }
  >
    {children}
  </Link>
);

const Home = () => (
  <div style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
    <CompareChart data={data} features={["feature1", "feature2", "feature3"]} />
  </div>
);
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
