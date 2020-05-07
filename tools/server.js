const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retreive RSA keys from JSON Web Key set (JWKS) endpoint
// const checkScope = require("express-jwt-authz"); //Validate JWT Scopes
const https = require("https");
const fs = require("fs");
const mockData = require("../tools/mockData");

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header
  // and the signing keys provided by JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  // This must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab
  algorithms: ["RS256"],
});

const app = express();

app.get("/public", function (req, res) {
  res.json({
    message: "Hello from a public API!",
  });
});

app.get("/private", checkJwt, function (req, res) {
  res.json({
    message: "Hello from a private API!",
  });
});

function checkRole(role) {
  return function (req, res, next) {
    const assignedRoles = req.user["http://localhost:3010/roles"];
    if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
      return next();
    } else {
      return res.status(401).send("Insufficient role");
    }
  };
}

app.get("/admin", checkJwt, checkRole("admin"), function (req, res) {
  res.json({
    message: "Hello from an admin API!",
  });
});

app.get("characters/:playerId", checkJwt, function (req, res) {
  res.json({
    characters: mockData.characters.filter(
      (c) => c.playerId === req.params.playerId
    ),
  });
});

https
  .createServer(
    {
      key: fs.readFileSync("./tools/server.key"),
      cert: fs.readFileSync("./tools/server.cert"),
    },
    app
  )
  .listen(44348, function () {
    console.log("API Listening on port 44348! Go to https://localhost:44348/");
  });
