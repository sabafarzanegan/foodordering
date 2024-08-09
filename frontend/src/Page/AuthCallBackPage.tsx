import { useAuth0 } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/userapi";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function AuthCallBackPage() {
  const Navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  const hasCreatedUser = useRef(false);
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    Navigate("/");
  }, [user, createUser, Navigate]);
  return <div>loading...</div>;
}

export default AuthCallBackPage;
