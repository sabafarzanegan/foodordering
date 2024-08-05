import React from "react";
import Header from "./components/main/Header";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header componets */}
      <Header />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
}

export default Layout;
