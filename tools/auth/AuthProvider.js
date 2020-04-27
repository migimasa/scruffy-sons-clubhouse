import React, { Component } from "react";
import {
  msalApp,
  requiresInteraction,
  fetchMsGraph,
  GRAPH_ENDPOINTS,
  GRAPH_REQUESTS,
  isIE,
} from "./auth-utils";

// If you support IE, our recommendation is that you sign-in using Redirect APIs
const useRedirectFlow = isIE();

export default (C) =>
  class AuthProvider extends Component {
    constructor(props) {
      super(props);

      this.state = {
        account: null,
        error: null,
      };
    }

    async acquireToken(request, redirect) {
      return msalApp.acquireTokenSilent(request).catch((error) => {
        // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure
        // due to consent or interaction required ONLY
        if (requiresInteraction(error.errorCode)) {
          return redirect
            ? msalApp.acquireTokenRedirect(request)
            : msalApp.acquireTokenPopup(request);
        } else {
          console.error("Non-interactive error:", error.errorCode);
        }
      });
    }

    async onSignIn(redirect) {
      if (redirect) {
        return msalApp.loginRedirect(GRAPH_REQUESTS.LOGIN);
      }

      const loginResponse = await msalApp
        .loginPopup(GRAPH_REQUESTS.LOGIN)
        .catch((error) => {
          this.setState({
            error: error.message,
          });
        });

      if (loginResponse) {
        this.setState({
          account: loginResponse.account,
          error: null,
        });

        const tokenResponse = await this.acquireToken(
          GRAPH_REQUESTS.LOGIN
        ).catch((error) => {
          this.setState({
            error: error.message,
          });
        });

        if (tokenResponse) {
          const graphProfile = await fetchMsGraph(
            GRAPH_ENDPOINTS.ME,
            tokenResponse.accessToken
          ).catch(() => {
            this.setState({
              error: "Unable to fetch Graph profile.",
            });
          });

          if (graphProfile) {
            this.setState({
              graphProfile,
            });
          }
        }
      }
    }

    onSignOut() {
      msalApp.logout();
    }

    async componentDidMount() {
      msalApp.handleRedirectCallback((error) => {
        if (error) {
          const errorMessage = error.errorMessage
            ? error.errorMessage
            : "Unable to acquire access token.";
          // setState works as long as navigateToLoginRequestUrl: false
          this.setState({
            error: errorMessage,
          });
        }
      });

      const account = msalApp.getAccount();

      this.setState({
        account,
      });

      if (account) {
        const tokenResponse = await this.acquireToken(
          GRAPH_REQUESTS.LOGIN,
          useRedirectFlow
        );

        if (tokenResponse) {
          const graphProfile = await fetchMsGraph(
            GRAPH_ENDPOINTS.ME,
            tokenResponse.accessToken
          ).catch(() => {
            this.setState({
              error: "Unable to fetch Graph profile.",
            });
          });

          if (graphProfile) {
            this.setState({
              graphProfile,
            });
          }
        }
      }
    }

    render() {
      return (
        <C
          {...this.props}
          account={this.state.account}
          error={this.state.error}
          graphProfile={this.state.graphProfile}
          onSignIn={() => this.onSignIn(useRedirectFlow)}
          onSignOut={() => this.onSignOut()}
        />
      );
    }
  };
