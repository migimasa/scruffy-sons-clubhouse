import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ auth }) => {
  const { isAuthenticated, login, logout } = auth;

  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeStyle={activeStyle} exact>
            Home
          </NavLink>
        </li>
        {isAuthenticated() && (
          <li>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
        )}

        <li>
          <button onClick={isAuthenticated() ? logout : login}>
            {isAuthenticated() ? "Log Out" : "Log In"}
          </button>
          s
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Header;
