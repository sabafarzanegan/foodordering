import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type props = {
  children: React.ReactNode;
};
function AuthProvider({ children }: props) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirecturl = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("user", user);
  };

  if (!domain || !clientID || !redirecturl) {
    throw new Error("نمی توانید وارد شوید");
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: redirecturl,
      }}
      onRedirectCallback={onRedirectCallback}>
      {children}
    </Auth0Provider>
  );
}

export default AuthProvider;
