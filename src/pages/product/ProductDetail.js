import React, { useState, useContext } from "react";
import Layout from "../../components/layout/Layout";
import { CartContext } from "../../contexts/CartContext";

import Rating from "../../components/rating/Rating";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

import "./product.scss";

export default function ProductDetail({ location }) {
  const { img, name, star, price, description, id } = location.state;

  const [productList, setProductList] = useState([]);
  const { handleAddToCart, handleAddToWishlist } = useContext(CartContext);
  // console.log(handleAddToCart);
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
              onClick={() => handleAddToCart(id, price)}
              className="item-btn cart-btn"
              type="submit"
            >
              ADD TO CART
            </button>
            <button
              onClick={handleAddToWishlist}
              className="item-btn wishlist-btn"
              type="submit"
            >
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
