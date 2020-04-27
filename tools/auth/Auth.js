import { UserAgentApplication } from "msal";
import PropTypes from "prop-types";

const REDIRECT_ON_LOGIN = "redirect_on_login";

// Stored outside class since private
// eslint-disable-next-line
let _idToken = null;
let _accessToken = null;
let _scopes = null;
let _expiresAt = null;

export default class Auth {
  constructor(history) {
    this.history = history;
    this.userProfile = null;
    this.requestedScopes = "openid profile";
    this.msalApp = new UserAgentApplication({
      auth: {
        clientId: process.env.REACT_APP_AZURE_B2C_CLIENTID,
        authority: process.env.REACT_APP_AZURE_B2C_AUTHORITY,
        validateAuthority: false,
        postLogoutRedirectUrl: process.env.REACT_APP_AZURE_B2C_REDIRECT_URI,
        navigateToLoginRequestUrl: false,
        redirectUri: process.env.REACT_APP_AZURE_B2C_REDIRECT_URI,
      },
      cache: {
        cacheLocation: "sessionStorage",
      },
    });
  }

  login = () => {
    localStorage.setItem(
      REDIRECT_ON_LOGIN,
      JSON.stringify(this.history.location)
    );
    this.msalApp
      .loginPopup({
        scopes: this.requestedScopes,
      })
      .then((loginResponse) => {
        this.setSession(loginResponse);
      });
  };

  handleAuthentication = () => {
    //TODO
  };

  setSession = (authResult) => {
    console.log(authResult);

    _expiresAt = authResult.expiresOn;

    // If there are scopes in the auth result use it to set
    // session scopes for the user. Otherwise, use the
    // requested scopes. If nothing was requested, set to nothing
    _scopes = authResult.scopes || this.requestedScopes || "";

    _accessToken = authResult.accessToken;
    _idToken = authResult.idToken;
    this.scheduleTokenRenewal();
  };

  isAuthenticated() {
    return new Date().getTime() < _expiresAt;
  }

  logout = () => {
    this.msalApp.logout();
  };

  getAccessToken = () => {
    if (!_accessToken) {
      throw new Error("No access token found.");
    }
    return _accessToken;
  };

  getProfile = (callBack) => {
    if (this.userProfile) return callBack(this.userProfile);
    const profile = this.msalApp.getAccount();

    if (profile) this.userProfile = profile;
    callBack(profile);
  };

  userHasScopes(scopes) {
    const grantedScopes = (_scopes || "").split(" ");
    return scopes.every((scope) => grantedScopes.includes(scope));
  }

  renewToken(cb) {
    //TODO
  }

  scheduleTokenRenewal() {
    const delay = _expiresAt - Date.now();
    if (delay > 0) setTimeout(() => this.renewToken(), delay);
  }
}

Auth.propTypes = {
  isAuthenticated: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
