import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="item">
          <h2>CUSTOMER SERVICE</h2>
          <a href="./">
            <p>Help & Contact Us</p>
          </a>
          <a href="./">
            <p>Returns & Refunds</p>
          </a>
          <a href="./">
            <p>Online Stores</p>
          </a>
          <a href="./">
            <p>Terms & Conditions</p>
          </a>
        </div>
        <div className="item">
          <h2>COMPANY</h2>
          <a href="./">
            <p>What We Do</p>
          </a>
          <a href="./">
            <p>Available Services</p>
          </a>
          <a href="./">
            <p>Latest Post</p>
          </a>
          <a href="./">
            <p>FAQs</p>
          </a>
        </div>
        <div className="item">
          <h2>SOCIAL MEDIA</h2>
          <a href="./">
            <p>Twitter</p>
          </a>
          <a href="./">
            <p>Instagram</p>
          </a>
          <a href="./">
            <p>Tumblr</p>
          </a>
          <a href="./">
            <p>Pinterest</p>
          </a>
        </div>
        <div className="item">
          <h2>PROFILE</h2>
          <a href="./">
            <p>My Account</p>
          </a>
          <a href="./">
            <p>Checkout</p>
          </a>
          <a href="./">
            <p>Order Tracking</p>
          </a>
          <a href="./">
            <p>Help & Support</p>
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2021 All Rights Reserved</p>
      </div>
    </div>
  );
}
