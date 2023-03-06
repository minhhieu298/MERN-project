import { GET_DATA, INIT_DATA } from "../constants"
import { callAPI } from '../../api/callApi'

export const getData = ({ page, pageSize }) => async (dispatch) => {
    const res = await callAPI.post('/v3/init-data', {
        page, pageSize
    })
    dispatch({
        type: GET_DATA,
        payload: res.data
    })
}

export const getDataAdmin = () => async (dispatch) => {
    try {
        const res = await callAPI.post('/v3/data')
        if (res.status === 200) {
            dispatch({
                type: INIT_DATA,
                payload: res.data
            })
        }
    } catch (error) {
        console.log(error);
    }
}