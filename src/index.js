import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";

render(
  <Router>
    <Route Component={App} />
  </Router>,
  document.getElementById("app")
);
