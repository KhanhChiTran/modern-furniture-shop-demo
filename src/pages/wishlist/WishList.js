import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { CartContext } from "../../contexts/CartContext";
import Rating from "../../components/Rating/Rating";
export default function WishList() {
  const { wishlist, handleAddToCart } = useContext(CartContext);

  return (
    <Layout>
      <h1>Your Wish Lists</h1>
      {wishlist.map((item) => {
        const { img, name, star, price, description, id } = item;
        return (
          <div>
            {" "}
            <div className="item-img">
              <img src={img} alt="deco" />
            </div>
            <div className="item-text">
              <h2>{name}</h2>
              <p className="item-price">{price}€</p>
              <Rating star={star} />
              <p>{description}</p>
            </div>
            <div className="item-cart">
              <button
                onClick={() =>
                  handleAddToCart({ img, name, star, price, description, id })
                }
                className="item-btn cart-btn"
                type="submit"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
