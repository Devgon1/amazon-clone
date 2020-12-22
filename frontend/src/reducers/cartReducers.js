import { CARD_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CARD_ADD_ITEM:
      const item = action.payload; //here we are trying to add this item to the cart
      const existItem = state.cartItems.find((x) => x.product === item.product); //compare current item that it is gonna be added with the id of the items in the cartItem
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }; //add the new item at the end of cartItems
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
