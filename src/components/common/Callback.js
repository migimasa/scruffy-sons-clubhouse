import React, { Component } from "react";
import PropTypes from "prop-types";

class Callback extends Component {
  componentDidMount() {
    // Hanlde authentication if expected values are in the url
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  }
  render() {
    return <h1>Loading...</h1>;
  }
}

Callback.propTypes = {
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default Callback;
