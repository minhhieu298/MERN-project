import { ADD_TO_CART, ALL_CART, REMOVE_CART } from "../constants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // console.log(action.payload);
            return {
                ...state,
                // cartItems: action.payload.cartItems,
            };
        case ALL_CART:
            return {
                ...state,
                cartItems: action.payload.cartItems,
            };

        case REMOVE_CART:
            return {
                ...state,
            };
        default:
            return state;
    }
};