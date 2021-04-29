import React, { createContext, useState, useReducer } from "react";

import { productReducer, initialState } from "../reducer/productReducer";
export const CartContext = createContext();

export default function CartContextLayout({ children }) {
  const [amount, setAmount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [likedItem, setLikedItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const store = useReducer(productReducer, initialState);

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}
