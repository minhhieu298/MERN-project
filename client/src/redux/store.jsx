import {
    combineReducers,
    applyMiddleware,
    legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/product.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { addressReducer } from "./reducers/address.reducer";
import { cateReducer } from "./reducers/category.reducer";
import { initDataAdmin } from "./reducers/init.reducer";
import { cartReducer } from "./reducers/cart.reducer";
import { orderReducer } from "./reducers/order.reducer";

const middleware = [thunk];

const reducers = combineReducers({
    products: productReducer,
    auth: authReducer,
    addresses: addressReducer,
    categories: cateReducer,
    initData: initDataAdmin,
    cart: cartReducer,
    order: orderReducer,
})

const initialState = {
    auth: {
        auth: sessionStorage.getItem("auth")
            ? JSON.parse(sessionStorage.getItem("auth"))
            : {},
        cartItems: {},
    },
};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
