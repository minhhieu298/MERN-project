import { callAPI } from "../../api/callApi"
import { ADD_TO_CART, ALL_CART, REMOVE_CART } from "../constants";
import store from "../store";

export const getCartItems = (token) => async (dispatch) => {
    try {
        const res = await callAPI.get("/v2/get-user-cart", {
            headers: {
                // "content-type": "multipart/form-data",
                Authorization: token,
            },
        });

        if (res.status === 200) {
            dispatch({
                type: ALL_CART,
                payload: res.data
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export const addToCart =
    (product, newQty = 1) =>
        async (dispatch) => {
            // console.log({ product, newQty });
            const {
                cart: { cartItems },
            } = store.getState();
            // console.log(cartItems);
            const exist = cartItems.find(item => item.product._id === product.product && item.color === product.color && item.size === product.size)
            // console.log(quantity);
            const payload = {
                cartItems: {
                    color: product.color,
                    size: product.size,
                    product: product.product,
                    price: product.price,
                    quantity: exist ? exist.quantity + newQty : newQty,
                    _id: product._id
                }
            }
            console.log(payload);
            const res = await callAPI.post("/v2/add-to-cart", payload, {
                headers: {
                    Authorization: product.token,
                },
            });
            // dispatch({
            //     type: ADD_TO_CART,
            //     // payload: {
            //     //     cartItems: {}
            //     // }
            // })
            // dispatch(getCartItems(product.token))
            if (res.status === 200) {
                dispatch({
                    type: ADD_TO_CART,
                    // payload: {
                    //     cartItems
                    // },
                });
                dispatch(getCartItems(product.token))
            }
            if (res.status === 201) {
                dispatch({
                    type: ADD_TO_CART,
                    // payload: {
                    //     cartItems
                    // },
                });
                dispatch(getCartItems(product.token))
            }
        };

export const updateCart = () => {
    return async (dispatch) => {
        const cart = localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : null;

        if (cart) {
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    cartItems: cart,
                },
            });
        }
    };
};

export const deleteCart = (id, token) => async (dispatch) => {
    try {
        const res = await callAPI.post(
            "/v2/delete-cart",
            { id },
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        if (res.status === 200) {
            dispatch({
                type: REMOVE_CART,
            });
            dispatch(getCartItems(token));
        }
    } catch (error) {
        console.log(error);
    }
};
