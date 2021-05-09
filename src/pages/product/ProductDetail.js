import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Layout from "../../components/Layout/";
import Rating from "../../components/Rating/Rating";
import { CartContext } from "../../contexts/CartContext";
import { productTypes } from "../../reducer/productTypes";
import "./product.scss";

export default function ProductDetail({ location }) {
  const { img, name, star, price, description, id } = location.state;
  const [{ cartItems, wishlistItems }, dispatch] = useContext(CartContext);

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
              onClick={() =>
                dispatch({
                  type: productTypes.ADD_TO_CART,
                  payload: { img, name, star, price, description, id },
                })
              }
              className="item-btn cart-btn"
              type="submit"
            >
              {cartItems.find((item) => item.id === id) ? (
                <span> &#10004; ADDED</span>
              ) : (
                <span>ADD TO CART</span>
              )}
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: productTypes.TOGGLE_WISHLIST,
                  payload: { img, name, star, price, description, id },
                })
              }
              className="item-btn wishlist-btn"
              type="submit"
            >
              ADD TO WISHLIST{" "}
              <span className="icon">
                {" "}
                {wishlistItems.find((item) => item.id === id) ? (
                  <AiOutlineHeart style={{ fill: "red" }} />
                ) : (
                  <AiOutlineHeart />
                )}
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="related-item"></div>
    </Layout>
  );
}
