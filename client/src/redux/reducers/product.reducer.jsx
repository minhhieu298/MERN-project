import { ALL_PRODUCT, CREATE_ACCESSORY, CREATE_COMMENT, CREATE_PRODUCT, DELETE_ACCESSORY, DELETE_COMMENT, DELETE_PRODUCT, ERROR_MESSAGE, GET_DATA, SINGLE_PRODUCT, UPDATE_ACCESSORY, UPDATE_COMMENT, UPDATE_PRODUCT } from "../constants";

export const productReducer = (state = { products: [], product: {} }, action) => {
    switch (action.type) {
        case ALL_PRODUCT:
            return {
                ...state,
                products: action.payload.products,
                meta: action.payload.meta,
                error_server: ''
            };

        case SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload.product,
                error_server: ''
            }

        case CREATE_PRODUCT:
            return {
                ...state
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
            }

        case DELETE_PRODUCT:
            return {
                ...state
            }

        case CREATE_ACCESSORY:
            return {
                ...state
            }

        case UPDATE_ACCESSORY:
            return {
                ...state
            }

        case DELETE_ACCESSORY:
            return {
                ...state
            }

        case CREATE_COMMENT:
            return {
                ...state
            }

        case DELETE_COMMENT:
            return {
                ...state
            }

        case UPDATE_COMMENT:
            return {
                ...state
            }

        case ERROR_MESSAGE:
            return {
                error_server: action.payload
            }
        default:
            return state;
    }
};