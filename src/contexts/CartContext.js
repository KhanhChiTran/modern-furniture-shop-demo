import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextLayout({ children }) {
  //   const [cartItems, setCartItems] = useState([]);

  //   function handleAddToCart(item) {
  //     setCartItems((prevCartItems) => {
  //       const findItem = prevCartItems.find(
  //         (prevItem) => prevItem.id === item.id
  //       );
  //       if (findItem) {
  //         return { ...prevCartItems, qty: prevCartItems.qty + 1 };
  //       } else {
  //       }
  //     });
  //   }
  const [amount, setAmount] = useState(0);
  const [wishlist, setWishlist] = useState(0);
  const [color, setColor] = useState("");

  function handleAddToCart() {
    setAmount(amount + 1);
  }
  function handleAddToWishlist() {
    setWishlist(wishlist + 1);
    setColor("red");
  }
  return (
    <CartContext.Provider
      value={{
        amount,
        handleAddToCart,
        wishlist,
        handleAddToWishlist,
        color,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
