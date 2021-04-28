import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import { FiHeart } from "react-icons/fi";
import "./header.scss";
export default function Header() {
  const { amount, wishlist, color } = useContext(CartContext);

  return (
    <div className="header-wrap">
      <div className="logo">
        <h1>MINI</h1>
      </div>
      <div className="cart">
        <Link to="/cart">
          <IoCartOutline className="icon cart-icon" />
          <span className="cart-amount">{amount}</span>
        </Link>
        <Link to="/wishlist">
          {" "}
          <FiHeart className="icon heart-icon" style={{ color }} />
          <span className="cart-wishlist">{wishlist}</span>
        </Link>
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
