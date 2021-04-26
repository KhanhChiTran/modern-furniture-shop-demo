import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
export default function Header() {
  return (
    <div className="header-wrap">
      <div className="logo">
        <h1>MINI</h1>
      </div>
      <div className="nav-bar">
        <ul className="nav-list">
          <NavLink exact className="link-item" to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink className="link-item" to="/store" activeClassName="active">
            Shop
          </NavLink>
          <NavLink className="link-item" to="/blog" activeClassName="active">
            Blog
          </NavLink>
          <NavLink className="link-item" to="/login" activeClassName="active">
            Log In
          </NavLink>
          <NavLink className="link-item" to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
