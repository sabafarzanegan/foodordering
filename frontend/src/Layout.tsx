import React from "react";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header componets */}
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
