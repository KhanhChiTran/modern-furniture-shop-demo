export const handleAddToCart = ({
  img,
  name,
  star,
  price,
  description,
  id,
  cartItems,
}) => {
  let exitedItem = cartItems.find((item) => item.id === id);
  //   setAmount(amount + 1);
  let newCartItems;
  if (!exitedItem) {
    newCartItems = [
      ...cartItems,
      {
        id,
        price,
        name,
        img,
        quantity: 1,
      },
    ];
  } else {
    newCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return newCartItems;
};
export const handleRemoveFromCart = ({
  img,
  name,
  star,
  price,
  description,
  id,
  quantity,
  cartItems,
}) => {
  let newCartItems = cartItems.filter((item) => item.id !== id);
  //   setCartItems(newCartItems);
  //   setAmount(amount - quantity);
  //   setTotalPrice((prevPrice) => {
  //     return prevPrice - price * quantity;
  //   });
  return newCartItems;
};

export const handleAddToWishlist = ({
  img,
  name,
  star,
  price,
  description,
  id,
  wishListItems,
}) => {
  let amount = 0;
  let newWishListItems;
  let exitedItem = wishListItems.find((item) => item.id === id);
  if (!exitedItem) {
    amount = 1;
    newWishListItems = [
      ...wishListItems,
      { img, name, star, price, description, id },
    ];
  } else {
    amount = -1;
    newWishListItems = wishListItems.filter((item) => item.id !== id);
  }
  return { newWishListItems, amount };
};

export const handleMinusFromCart = ({
  img,
  name,
  star,
  price,
  description,
  id,
  quantity,
  cartItems,
}) => {
  let newCartItems;
  if (quantity === 1) {
    newCartItems = cartItems.filter((item) => item.id !== id);
  } else {
    newCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
  return newCartItems;
};
