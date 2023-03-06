import { CREATE_NEW_ADDRESS, DELETE_USER_ADDRESS, GET_DELIVERY_ADDRESS, GET_USER_ADDRESS, SET_DEFAULT_ADDRESS, UPDATE_USER_ADDRESS } from "../constants";

export const addressReducer = (state = { addresses: [] }, action) => {
    switch (action.type) {
        case GET_USER_ADDRESS:
            return {
                ...state,
                addresses: action.payload
            }

        case CREATE_NEW_ADDRESS:
            return {
                ...state
            }

        case UPDATE_USER_ADDRESS:
            return {
                ...state
            }

        case DELETE_USER_ADDRESS:
            return {
                ...state
            }

        case SET_DEFAULT_ADDRESS:
            return {
                ...state
            }

        case GET_DELIVERY_ADDRESS:
            return {
                ...state
            }
        default:
            return state
    }
}