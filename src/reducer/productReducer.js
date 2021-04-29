import {
  handleAddToCart,
  handleMinusFromCart,
  handleRemoveFromCart,
  handleAddToWishlist,
} from "./utils";
import { productTypes } from "./productTypes";
// const handleAddToCart = () => 5;
// const handleRemoveFromCart = () => 6;

export const initialState = {
  cartItems: [],
  wishListItems: [],
  totalAdded: 0,
  totalWished: 0,
};

export const productReducer = (state, action) => {
  const { cartItems, wishListItems } = state;
  switch (action.type) {
    //ADD TO CART
    case productTypes.ADD_TO_CART:
      return {
        ...state,
        totalAdded: state.totalAdded + 1,
        cartItems: handleAddToCart({ ...action.payload, cartItems }),
      };
    //MINUS FROM CART
    case productTypes.MINUS_FROM_CART:
      return {
        ...state,
        totalAdded: state.totalAdded - 1,
        cartItems: handleMinusFromCart({ ...action.payload, cartItems }),
      };
    //REMOVE FROM CART
    case productTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: handleRemoveFromCart({ ...action.payload, cartItems }),
      };

    case productTypes.ADD_TO_WISHLIST:
      const { newWishListItems, amount } = handleAddToWishlist({
        ...action.payload,
        wishListItems,
      });
      return {
        ...state,
        totalWished: state.totalWished + amount,
        wishListItems: newWishListItems,
      };
    default:
      return state;
  }
};
