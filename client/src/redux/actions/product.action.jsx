import { callAPI } from "../../api/callApi";
import { ALL_PRODUCT, CREATE_PRODUCT, SINGLE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, DISCOUNT, CREATE_COMMENT, DELETE_COMMENT, ERROR_MESSAGE, UPDATE_COMMENT } from "../constants";

export function createUrl(urlData) {
    const keys = Object.keys(urlData);
    let search = '?';
    keys.forEach((key) => {
        if (urlData[key] !== null && urlData[key] !== '') {
            search += `${key}=${urlData[key]}&`;
        }
    });
    return search.substring(0, search.length - 1);
}

export function setStateToUrl(state) {
    let urlData = {};
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            switch (key) {
                case 'cp':
                    urlData[key] =
                        state[key] ? state[key] : null;
                    break;

                case 'cc':
                    urlData[key] =
                        state[key] ? state[key] : null;
                    break;

                case 'sort':
                    urlData[key] =
                        state[key] ? state[key] : null;
                    break;

                case 'color':
                    urlData[key] =
                        state[key] ? state[key] : null;
                    break;

                case 'size':
                    urlData[key] =
                        state[key] ? state[key] : null;
                    break;

                case 'q':
                    urlData[key] =
                        state[key] ? state[key] : null;
                    break;

                default:
                    urlData[key] = state[key];
                    break;
            }
        }
    }
    return createUrl(urlData)
}
export const getAllProducts =
    (url) =>
        async (dispatch) => {
            // let url = `/v2/list-product?page=${Number(page)}&pageSize=${Number(pageSize)}`;
            const res = await callAPI.get(`/v2/list-product${setStateToUrl(url)}`);
            if (res.status === 200) {
                const { data } = res.data
                dispatch({
                    type: ALL_PRODUCT,
                    payload: {
                        products: data?.products,
                        meta: data?.meta
                    }
                });
            }
        };

export const getSingleProduct = (id) => async (dispatch) => {
    try {
        const { data } = await callAPI.get(`/v2/product/${id}`);
        dispatch({
            type: SINGLE_PRODUCT,
            payload: {
                product: data.product
            }
        })
    } catch (error) {
        dispatch({
            type: ERROR_MESSAGE,
            payload: error.response.data.message
        })
    }
}

export const createProduct = (data, token) => async (dispatch) => {
    const res = await callAPI.post('/v1/create-new-product', data, {
        headers: {
            Authorization: token
        }
    })
    if (res.status === 201) {
        dispatch({
            type: CREATE_PRODUCT,
        })
        dispatch(getAllProducts({ page: 1, pageSize: 10 }))
    }
}

export const updateProduct = (id, data, token) => async (dispatch) => {
    const res = await callAPI.post(`/v1/update-product/${id}`, data, {
        headers: {
            Authorization: token
        }
    });
    if (res.status === 200) {
        dispatch({
            type: UPDATE_PRODUCT,
        })
        dispatch(getSingleProduct(id))
    }
}

export const deleteProduct = (id, token) => async (dispatch) => {
    const res = await callAPI.delete(`/v1/delete-product/${id}`, {
        headers: {
            Authorization: token
        }
    })
    if (res.status === 200) {
        dispatch({
            type: DELETE_PRODUCT,
        })
        dispatch(getAllProducts({ page: 1, pageSize: 10 }))
    }
}

export const createDiscount = (data, url, token) => async (dispatch) => {
    const res = await callAPI.post(`/v1/create-discount/${data._id}`, data, {
        headers: {
            Authorization: token
        }
    })
    if (res.status === 200) {
        dispatch({
            type: DISCOUNT,
        })
        dispatch(getAllProducts(url))
    }
}

export const createComment = (payload, token) => async (dispatch) => {
    const res = await callAPI.post('/v2/create-new-comment', payload, {
        headers: {
            Authorization: token
        }
    })
    if (res.status === 201) {
        dispatch({
            type: CREATE_COMMENT,
        })
        dispatch(getSingleProduct(payload.product))
    }
}

export const updateComment = (payload, token) => async (dispatch) => {
    const res = await callAPI.post('/v2/update-comment', payload, {
        headers: {
            Authorization: token
        }
    })
    if (res.status === 200) {
        dispatch({
            type: UPDATE_COMMENT,
        })
        dispatch(getSingleProduct(payload.product))
    }
}


export const deleteComment = (payload, token) => async (dispatch) => {
    const res = await callAPI.post('/v2/delete-comment', payload, {
        headers: {
            Authorization: token
        }
    })
    if (res.status === 200) {
        dispatch({
            type: DELETE_COMMENT,
        })
        dispatch(getSingleProduct(payload.product))
    }
}