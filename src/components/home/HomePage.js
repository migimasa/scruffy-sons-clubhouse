import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomePage = ({ auth }) => {
  const { isAuthenticated, login } = auth;

  return (
    <div className="jumbotron">
      <h1>Scruffy Sons of Sadow Clubhouse</h1>
      {isAuthenticated() ? (
        <Link to="/profile">View profile</Link>
      ) : (
        <button onClick={login}>Log In</button>
      )}
    </div>
  );
};

HomePage.propTypes = {
  auth: PropTypes.object.isRequired,
};
export default HomePage;
