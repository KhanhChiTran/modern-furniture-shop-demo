import React, { createContext, useState } from "react";
import Products from "../assets/data/products";
export const CartContext = createContext();

export default function CartContextLayout({ children }) {
  const [amount, setAmount] = useState(0);
  const [wishlist, setWishlist] = useState(0);
  const [color, setColor] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function handleAddToCart(id, price) {
    let inCartProducts = Products.filter((item) => item.id === id);
    let exitedItem = cartItems.find((item) => item.id === id);
    console.log(exitedItem);
    setAmount(amount + 1);
    /*
 cartItem = {
     id : 10,
     title : 'glass',
     
 }
 */
    setCartItems((prevState) => {
      if (!exitedItem) {
        return prevState.concat(inCartProducts);
      } else {
        const newCartItems = prevState.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        return newCartItems;
      }
    });
    setPrice((prevPrice) => {
      return prevPrice + price;
    });

    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
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
        cartItems,
        price,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
