import { productTypes } from "./productTypes";
import { handleAddToCart } from "./productHelpers";

export const initialState = {
  cartItems: [],
  wishListItems: [],
  totalItems: 0,
  totalWishList: 0,
};

export const productReducer = (state, action) => {
  const { cartItems } = state;
  switch (action.type) {
    case productTypes.ADD_TO_CART:
      return {
        ...state,
        totalItems: state.totalItems + 1,
        cartItems: handleAddToCart({
          ...action.payload,
          cartItems,
        }) /*handleAddToCart() cartItems, action.payload  */,
      };
    default:
      return state;
  }
};
