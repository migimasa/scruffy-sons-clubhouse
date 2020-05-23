import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const Header = ({ auth }) => {
  const activeStyle = { color: "#F15B2A" };

  const { isAuthenticated, login, logout } = auth;

  return (
    <nav>
      <Link component={NavLink} to="/" exact activeStyle={activeStyle}>
        Home
      </Link>
      {" | "}
      <Link component={NavLink} to="/about" activeStyle={activeStyle}>
        About
      </Link>
      {isAuthenticated() && (
        <>
          {" | "}
          <Link component={NavLink} to="/characters" activeStyle={activeStyle}>
            Characters
          </Link>
        </>
      )}
      <Button onClick={isAuthenticated() ? logout : login}>
        {isAuthenticated() ? "Log Out" : "Log In"}
      </Button>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Header;
