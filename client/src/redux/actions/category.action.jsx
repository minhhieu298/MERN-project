import { callAPI } from "../../api/callApi"
import { ALL_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY, ERROR_MESSAGE, UPDATE_CATEGORY } from "../constants"

export const getCates = () => async (dispatch) => {
    const res = await callAPI.get('/v2/list-categories')
    console.log(res.data);
    if (res.status === 200) {
        dispatch({
            type: ALL_CATEGORIES,
            payload: {
                categories: res.data.categories
            }
        })
    }
}

export const createCate = (data) => async (dispatch) => {
    try {
        const res = await callAPI.post('/v1/create-new-category', data)
        if (res.status === 201) {
            dispatch({
                type: CREATE_CATEGORY,
                payload: data,
            });
            dispatch(getCates())
        }
    } catch (error) {
        dispatch({
            type: ERROR_MESSAGE,
            payload: error.response.data.message
        })
    }
}

export const updateCate = (payload, token) => async (dispatch) => {
    const res = await callAPI.post('/v1/update-cate', {
        payload
    }, {
        headers: {
            Authorization: token,
        },
    })
    if (res.status === 200) {
        dispatch({
            type: UPDATE_CATEGORY
        })
        dispatch(getCates())
    }
}

export const deleteCate = (payload, token) => async (dispatch) => {
    const res = await callAPI.post('/v1/delete-cate', {
        payload
    }, {
        headers: {
            Authorization: token,
        },
    })
    if (res.status === 200) {
        dispatch({
            type: DELETE_CATEGORY
        })
        dispatch(getCates())
    }
}