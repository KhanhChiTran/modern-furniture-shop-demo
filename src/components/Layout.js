import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./layout.scss";
export default function Layout({ children }) {
  return (
    <div className="global-wrap">
      <Header className="header" />
      <main>{children}</main>
      <Footer className="footer" />
    </div>
  );
}
