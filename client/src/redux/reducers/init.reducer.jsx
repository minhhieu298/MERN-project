import { INIT_DATA } from "../constants";

const initialData = {
    accessories: {},
    categories: []
}

export const initDataAdmin = (state = initialData, action) => {
    switch (action.type) {
        case INIT_DATA:
            return {
                ...state,
                accessories: action.payload.accessories,
                categories: action.payload.categories
            }

        default:
            return state
    }
}