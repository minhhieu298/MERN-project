import { callAPI } from "../../api/callApi"
import { ALL_CATEGORIES, CREATE_CATEGORY, ERROR_MESSAGE } from "../constants"

export const getCates = () => async (dispatch) => {
    const res = await callAPI.get('/v2/list-categories')
    if (res.status === 200) {
        dispatch({
            type: ALL_CATEGORIES,
            payload: res.data
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