import { UserAgentApplication } from "msal";

export const requiresInteraction = (errorMessage) => {
  if (!errorMessage || !errorMessage.length) {
    return false;
  }

  return (
    errorMessage.indexOf("consent_required") > -1 ||
    errorMessage.indexOf("interaction_required") > -1 ||
    errorMessage.indexOf("login_required") > -1
  );
};

export const fetchMsGraph = async (url, accessToken) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const isIE = () => {
  const ua = window.navigation.userAgent;
  const msie = ua.indexOf("MSIE ") > -1;
  const msie11 = ua.indexOf("Trident/") > -1;

  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;

  return msie || msie11;
};

export const GRAPH_SCOPES = {
  OPENID: "openid",
  // PROFILE: "profile",
  // USER_READ: "User.Read",
};

export const GRAPH_ENDPOINTS = {
  ME: "https://graph.microsoft.com/v1.0/me",
};

export const GRAPH_REQUESTS = {
  LOGIN: {
    // scopes: [GRAPH_SCOPES.OPENID, GRAPH_SCOPES.PROFILE, GRAPH_SCOPES.USER_READ],
    scopes: [GRAPH_SCOPES.OPENID],
  },
};

export const msalApp = new UserAgentApplication({
  auth: {
    clientId: "",
    authority: "",
    validateAuthority: false,
    postLogoutRedirectUrl: "",
    navigateToLoginRequestUrl: false,
    redirectUri: "",
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
});
