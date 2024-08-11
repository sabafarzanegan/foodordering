import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./Page/Home";
import AuthCallBackPage from "./Page/AuthCallBackPage";
import UserProfilePage from "./Page/UserProfilePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth-Callback" element={<AuthCallBackPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
