import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import AboutPage from "./about/AboutPage";
import CharactersPage from "./characters/CharactersPage";
import CreateCharacterWizardPage from "./characters/CreateCharacterWizardPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/characters" component={CharactersPage} />
        <Route path="/character" component={CreateCharacterWizardPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
