import { LIST_USER, LOGIN, LOGOUT, TOKEN, UPDATE_USER } from "../constants";


export const authReducer = (
    state = { auth: [], isUser: false, isAdmin: false },
    action
) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isUser: true,
                isAdmin: action.payload.role === "admin" ? true : false,
                auth: action.payload,
            };
        case TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        case UPDATE_USER:
            return {
                ...state,
                auth: action.payload
            }

        case LIST_USER:
            return {
                ...state,
                users: action.payload.users,
                total: action.payload.total
            }

        case LOGOUT:
            return {
                ...state,
                isUser: false,
                isAdmin: false,
                auth: []
            }
        default:
            return state;
    }
};
