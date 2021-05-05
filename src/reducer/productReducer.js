import {
  handleAddToCart,
  handleMinusFromCart,
  handleRemoveFromCart,
  handleAddToWishlist,
} from "./productHelpers";
import { productTypes } from "./productTypes";

export const initialState = {
  cartItems: [],
  totalItems: 0,
  wishlistItems: [],
  totalWishlist: 0,
};

export const productReducer = (state, action) => {
  const { cartItems, totalItems, wishlistItems, totalWishlist } = state;
  switch (action.type) {
    case productTypes.ADD_TO_CART:
      return {
        ...state,
        totalItems: totalItems + 1,
        cartItems: handleAddToCart({ ...action.payload, cartItems }),
      };
    case productTypes.MINUS_FROM_CART:
      return {
        ...state,
        totalItems: totalItems - 1,
        cartItems: handleMinusFromCart({ ...action.payload, cartItems }),
      };
    case productTypes.REMOVE_FROM_CART:
      return {
        ...state,
        totalItems: totalItems - action.payload.quantity,
        cartItems: handleRemoveFromCart({ ...action.payload, cartItems }),
      };
    case productTypes.TOGGLE_WISHLIST:
      return {
        ...state,
        totalWishlist: totalWishlist + 1,
        wishlistItems: handleAddToWishlist({
          ...action.payload,
          wishlistItems,
        }),
      };

    default:
      return state;
  }
};
