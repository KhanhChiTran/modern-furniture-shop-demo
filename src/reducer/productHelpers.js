const handleAddToCart = ({
  img,
  name,
  star,
  price,
  description,
  id,
  cartItems,
}) => {
  let exitedItem = cartItems.find((item) => item.id === id);

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

const handleMinusFromCart = ({
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

const handleRemoveFromCart = ({
  img,
  name,
  star,
  price,
  description,
  id,
  quantity,
  cartItems,
}) => {
  console.log(cartItems);
  let newCartItems = cartItems.filter((item) => item.id !== id);
  return newCartItems;
};
function toggleWishlist({
  img,
  name,
  star,
  price,
  description,
  id,
  wishlistItems,
}) {
  let value;
  let newWishlistItems;
  let exitedItem = wishlistItems.find((item) => item.id === id);
  if (!exitedItem) {
    value = 1;
    newWishlistItems = [
      ...wishlistItems,
      { img, name, star, price, description, id },
    ];
  } else {
    value = -1;
    newWishlistItems = wishlistItems.filter((item) => item.id !== id);
  }
  return { value, newWishlistItems };
}

export {
  handleAddToCart,
  handleMinusFromCart,
  toggleWishlist,
  handleRemoveFromCart,
};
