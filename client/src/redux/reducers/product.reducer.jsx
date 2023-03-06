import { ALL_PRODUCT, CREATE_ACCESSORY, CREATE_PRODUCT, DELETE_ACCESSORY, DELETE_PRODUCT, GET_DATA, SINGLE_PRODUCT, UPDATE_ACCESSORY, UPDATE_PRODUCT } from "../constants";

export const productReducer = (state = { products: [], product: {} }, action) => {
    switch (action.type) {
        // case GET_DATA:
        //     return {
        //         ...state,
        //         products: action.payload.products,
        //         meta: action.payload.meta
        //     }
        case ALL_PRODUCT:
            return {
                ...state,
                products: action.payload.products,
                meta: action.payload.meta,
            };

        case SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload.product
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
        default:
            return state;
    }
};