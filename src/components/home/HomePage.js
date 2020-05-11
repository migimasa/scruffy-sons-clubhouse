import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const HomePage = () => (
  <Container className="jumbotron">
    <h1>Scruffy Sons of Sadow</h1>
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
