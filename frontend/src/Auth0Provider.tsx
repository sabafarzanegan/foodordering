import React from "react";
import { AppState, Auth0Provider, useAuth0, User } from "@auth0/auth0-react";
import { useCreateMyUser } from "./api/userapi";
import { useNavigate } from "react-router-dom";

type props = {
  children: React.ReactNode;
};
function AuthProvider({ children }: props) {
  const Navigate = useNavigate();

  const { createUser } = useCreateMyUser();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirecturl = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    Navigate("/Auth-Callback");
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
