import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typograpy from "@material-ui/core/Typography";

const HomePage = () => (
  <Container className="jumbotron">
    <Typograpy variant="h1">Scruffy Sons of Sadow</Typograpy>
    <p>A mediocre gang in a mediocre galaxy</p>
    <Button
      variant="contained"
      color="secondary"
      component={RouterLink}
      to="about"
    >
      Learn more
    </Button>
  </Container>
);

export default HomePage;
