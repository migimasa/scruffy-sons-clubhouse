import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import AboutPage from "./about/AboutPage";
import AuthContext from "../../tools/auth/AuthContext";
import Auth from "../../tools/auth/Auth";
import PrivateRoute from "./common/PrivateRoute";
import PropTypes from "prop-types";
import Callback from "./common/Callback";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
      tokenRenewalComplete: false,
    };
  }

  componentDidMount() {
    this.state.auth.renewToken(() => {
      this.setState({ tokenRenewalComplete: true });
    });
  }

  render() {
    const { auth } = this.state;
    if (!this.state.tokenRenewalComplete) return "Loading...";
    return (
      <AuthContext.Provider value={auth}>
        <div className="container-fluid">
          <Header auth={auth} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <HomePage auth={auth} {...props} />}
            />
            <Route
              path="/callback"
              render={(props) => <Callback auth={auth} {...props} />}
            />
            <PrivateRoute path="/about" component={AboutPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </AuthContext.Provider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default App;
