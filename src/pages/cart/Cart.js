import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { productTypes } from "../../reducer/productTypes";

import Layout from "../../components/layout/Layout";

import "./cart.scss";
import { MdDelete } from "react-icons/md";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function Cart() {
  const [
    {
      cartItems,
      wishListItems,
      totalAdded,
      totalWished,
      // amount,
      // totalPrice,
      // handleAddToCart,
      // handleMinusFromCart,
      // handleRemoveFromCart,
    },
    dispatch,
  ] = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <Layout>
      {totalAdded === 0 ? (
        <div className="cart-empty">
          <h1> Your bag is empty!</h1>
          <Link to="/store">
            <button>Back To Shop</button>
          </Link>
        </div>
      ) : (
        <div className="cart-wrap">
          <div className="cart-item-wrap">
            {cartItems.map((item) => {
              const {
                img,
                name,
                star,
                price,
                description,
                id,
                quantity,
              } = item;
              return (
                <div key={item.id} className="cart-item">
                  <img className="cart-item-img" src={img} alt="image" />
                  <div className="cart-item-name">
                    <h4>{name}</h4>
                    <div className="quantity">
                      <AiFillMinusCircle
                        onClick={() =>
                          dispatch({
                            type: productTypes.MINUS_FROM_CART,
                            payload: {
                              img,
                              name,
                              star,
                              price,
                              description,
                              id,
                              quantity,
                            },
                          })
                        }
                        className="quantity-cta"
                      />
                      {quantity}
                      <AiFillPlusCircle
                        onClick={() =>
                          dispatch({
                            type: productTypes.ADD_TO_CART,
                            payload: {
                              img,
                              name,
                              star,
                              price,
                              description,
                              id,
                              quantity,
                            },
                          })
                        }
                        className="quantity-cta"
                      />
                    </div>
                  </div>
                  <div className="cart-item-price">
                    <h4>x {price} €</h4>
                    <span className="remove">
                      <MdDelete
                        onClick={() =>
                          dispatch({
                            type: productTypes.REMOVE_FROM_CART,
                            payload: {
                              img,
                              name,
                              star,
                              price,
                              description,
                              id,
                              quantity,
                            },
                          })
                        }
                      />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total">
            <div className="total-amount">
              <h3>Quantity</h3>
              <h1>{totalAdded}</h1>
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
