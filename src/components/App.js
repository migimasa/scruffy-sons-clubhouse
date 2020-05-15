import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import AboutPage from "./about/AboutPage";
import CharactersPage from "./characters/CharactersPage";
import CreateCharacterWizardPage from "./characters/CreateCharacterWizardPage";
import Auth from "../../tools/auth/Auth";
import PropTypes from "prop-types";
import AuthContext from "../../tools/auth/AuthContext";
import Callback from "./common/Callback";

const App = ({ history }) => {
  const [tokenRenewalComplete, setTokenRenewalComplete] = useState(false);
  const [auth, setAuth] = useState(new Auth(history));

  useEffect(() => {
    auth.renewToken(() => {
      setTokenRenewalComplete(true);
    });
  }, []);

  return !tokenRenewalComplete ? (
    "Loading..."
  ) : (
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
          <Route path="/about" component={AboutPage} />
          <Route path="/characters" component={CharactersPage} />
          <Route path="/character" component={CreateCharacterWizardPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
