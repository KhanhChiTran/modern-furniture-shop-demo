import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

import Rating from "../../components/rating/Rating";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

import "./product.scss";

export default function ProductDetail({ location }) {
  const { img, name, star, price, description } = location.state;
  const [productList, setProductList] = useState([]);

  return (
    <Layout>
      <div className="item-info">
        <div className="item-img">
          <img src={img} alt="deco" />
        </div>
        <div className="item-text">
          <h2>{name}</h2>
          <p className="item-price">{price}€</p>
          <Rating star={star} />
          <p>{description}</p>
          <div className="item-cart">
            <button
              // onClick={handleAddToCart}
              className="item-btn cart-btn"
              type="submit"
            >
              ADD TO CART
            </button>
            <button className="item-btn wishlist-btn" type="submit">
              ADD TO WISHLIST{" "}
              <span className="icon">
                {" "}
                <AiOutlineHeart />
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="related-item"></div>
    </Layout>
  );
}
