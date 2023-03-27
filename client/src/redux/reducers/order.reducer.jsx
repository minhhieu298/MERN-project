import { CREATE_NEW_ORDER, GET_CHART, GET_ORDER_USER, GET_ORDER_USER_ADMIN, UPDATE_ORDER_ADMIN, UPDATE_STATUS_PAYMENT } from "../constants";

export const orderReducer = (state = { orders: [], order: {} }, action) => {
    switch (action.type) {
        case CREATE_NEW_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload],
            };

        case GET_ORDER_USER:
            return {
                ...state,
                orders: action.payload,
            };

        case UPDATE_STATUS_PAYMENT:
            return {
                ...state,
                // orders: action.payload,
            };

        case UPDATE_ORDER_ADMIN:
            return {
                ...state
            }

        case GET_CHART:
            return {
                ...state,
                chart: action.payload
            }

        case GET_ORDER_USER_ADMIN:
            return {
                ...state,
                orders: action.payload.orders,
                totalOrder: action.payload.totalOrder
            }
        default:
            return state
    }
}