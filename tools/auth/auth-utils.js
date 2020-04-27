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
    clientId: "e885ad7e-3044-4feb-bebe-597c812a4c74",
    authority:
      "https://scruffysons.b2clogin.com/tfp/scruffysons.onmicrosoft.com/B2C_1_SignUpIn/",
    validateAuthority: false,
    postLogoutRedirectUrl: "http://localhost:3010",
    navigateToLoginRequestUrl: false,
    redirectUri: "http://localhost:3010",
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
});
