import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
