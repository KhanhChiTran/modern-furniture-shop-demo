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
function handleAddToWishlist({
  img,
  name,
  star,
  price,
  description,
  id,
  wishlistItems,
}) {
  let newWishlist;
  let exitedItem = wishlistItems.find((item) => item.id === id);
  if (!exitedItem) {
    newWishlist = [
      ...wishlistItems,
      { img, name, star, price, description, id },
    ];
  } else {
    newWishlist = wishlistItems.filter((item) => item.id !== id);
  }
  return newWishlist;
}

export {
  handleAddToCart,
  handleMinusFromCart,
  handleAddToWishlist,
  handleRemoveFromCart,
};
