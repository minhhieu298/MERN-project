import { callAPI } from "../../api/callApi";
import { CREATE_ACCESSORY, UPDATE_ACCESSORY } from "../constants";
import { getDataAdmin } from "./initData.action";

export const createAccess = (payload) => async (dispatch) => {
    try {
        const res = await callAPI.post('/v1/create-new-accessory', payload)
        if (res.status === 201) {
            dispatch({
                type: CREATE_ACCESSORY
            })
            dispatch(getDataAdmin())
        }
    } catch (error) {

    }
}

export const updateAccess = (payload) => async (dispatch) => {
    try {
        const res = await callAPI.post('/v1/update-accessory', payload)
        if (res.status === 200) {
            dispatch({
                type: UPDATE_ACCESSORY
            })
            dispatch(getDataAdmin())
        }
    } catch (error) {

    }
}

export const deleteAccess = (payload) => async (dispatch) => {
    try {
        const res = await callAPI.post('/v1/delete-accessory', payload)
        if (res.status === 200) {
            dispatch({
                type: UPDATE_ACCESSORY
            })
            dispatch(getDataAdmin())
        }
    } catch (error) {

    }
}