import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
