import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Page/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile" element={<span>userprofile page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
