import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typograpy from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const HomePage = ({ auth }) => {
  const { isAuthenticated, login } = auth;

  return (
    <Container className="jumbotron">
      <Typograpy variant="h1">Scruffy Sons of Sadow</Typograpy>
      <Typograpy variat="subtitle1">
        A mediocre gang in a mediocre galaxy
      </Typograpy>
      {isAuthenticated() ? (
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="about"
        >
          Learn more
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={login}>
          Log In
        </Button>
      )}
    </Container>
  );
};

HomePage.propTypes = {
  auth: PropTypes.auth,
};

export default HomePage;
