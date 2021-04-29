import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Layout from "../../components/layout/Layout";

import "./cart.scss";
import { CgAddR } from "react-icons/cg";
export default function Cart() {
  const { cartItems, amount, totalPrice } = useContext(CartContext);

  return (
    <Layout>
      {amount === 0 ? (
        <div className="cart-empty">
          <h1> Your bag is empty!</h1>
          <Link to="/store">
            <button>Back To Shop</button>
          </Link>
        </div>
      ) : (
        <div className="cart-wrap">
          <div className="cart-item-wrap">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img className="cart-item-img" src={item.img} alt="image" />
                <div className="cart-item-name">
                  <h4>{item.name}</h4>
                  <div className="quantity">{item.quantity}</div>
                </div>
                <div className="cart-item-price">
                  <h4>x {item.price} €</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <div className="total-amount">
              <h3>Quantity</h3>
              <h1>{amount}</h1>
            </div>
            <div className="total-text">
              <h1>Total</h1>
              <div className="total-price">
                <h1>€ {totalPrice}</h1>
              </div>
            </div>
            <p>*This total doesn’t include the delivery or pickup costs</p>
            <button className="check-out-btn" type="submit">
              <h3>Check Out</h3>
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

//     console.log(cartItems);

//     const { img, name, star, price, description, id } = cartItem;

//     <div className="item-info">
//       <div className="item-img">
//         <img src={img} alt="deco" />
//       </div>
//       <div className="item-text">
//         <h2>{name}</h2>
//         <p className="item-price">{price}€</p>
//         {/* <Rating star={star} /> */}
//         <p>{description}</p>
//       </div>
//     </div>;
//   })}
// </Layout>
