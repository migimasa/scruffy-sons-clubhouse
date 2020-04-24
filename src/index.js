import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import authentication from "react-azure-b2c";

authentication.initialize({
  tenant: "scruffysons.onmicrosoft.com",
  signInPolicy: "B2C_1_SignUpIn",
  clientId: "e885ad7e-3044-4feb-bebe-597c812a4c74",
  cacheLocation: "localStorage",
  scopes: ["https://graph.microsoft.com/openid"],
  redirectUri: "http://localhost:3010/",
  postLogoutRedirectUri: window.location.origin,
});

authentication.run(() => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById("app")
  );
});
