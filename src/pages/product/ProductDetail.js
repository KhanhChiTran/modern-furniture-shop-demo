import React from "react";
import Layout from "../../components/layout/Layout";

import Rating from "../../components/rating/Rating";
import { Link } from "react-router-dom";

import "./product.scss";

export default function ProductDetail({ location }) {
  const { img, name, star, price } = location.state;
  return (
    <Layout>
      <div className="item-info">
        <div className="item-img">
          <img src={img} alt="" />
        </div>
        <div className="item-text">
          <h2>{name}</h2>
          <p className="item-price">{price}€</p>
          <Rating star={star} />
          <div className="item-cart">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="related-item"></div>
    </Layout>
  );
}
