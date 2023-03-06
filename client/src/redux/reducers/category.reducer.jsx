import { ALL_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY, ERROR_MESSAGE, GET_DATA, UPDATE_CATEGORY } from '../constants'

const buildNewCate = (parentName, categories, category) => {
    let myCates = [];
    if (parentName === undefined) {
        return [
            ...categories,
            {
                _id: category?._id,
                name: category?.name,
                slug: category?.slug,
                children: [],
            },
        ];
    }
    for (let cat of categories) {
        if (cat.name === parentName) {
            myCates.push({
                ...cat,
                children: cat?.children
                    ? buildNewCate(
                        parentName,
                        [
                            ...cat?.children,
                            {
                                _id: category?._id,
                                name: category?.name,
                                slug: category?.slug,
                                parentName: category?.parentName,
                                children: category?.children,
                            },
                        ],
                        category
                    )
                    : [],
            });
        } else {
            myCates.push({
                ...cat,
                children: cat?.children
                    ? buildNewCate(parentName, cat?.children, category)
                    : [],
            });
        }
    }
    return myCates;
};

export const cateReducer = (state = { categories: [], error: '' }, action) => {
    switch (action.type) {
        // case GET_DATA:
        //     return {
        //         ...state,
        //         categories: action.payload.categories
        //     }
        case ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories
            }

        case CREATE_CATEGORY:
            const category = action.payload;
            const updateCate = buildNewCate(
                category?.parentName,
                state.categories,
                category
            );
            return {
                ...state,
                // categories: updateCate,
            };

        case UPDATE_CATEGORY:
            return {
                ...state
            }

        case DELETE_CATEGORY:
            return {
                ...state
            }

        case ERROR_MESSAGE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}