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
