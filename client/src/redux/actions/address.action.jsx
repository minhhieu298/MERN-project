import { callAPI } from "../../api/callApi";
import { CREATE_NEW_ADDRESS, DELETE_USER_ADDRESS, GET_DELIVERY_ADDRESS, GET_USER_ADDRESS, SET_DEFAULT_ADDRESS, UPDATE_USER_ADDRESS } from "../constants";

export const getAdr = (token) => async (dispatch) => {
    const res = await callAPI.get("/v2/get-user-address", {
        headers: {
            // "content-type": "multipart/form-data",
            Authorization: token,
        },
    });

    if (res.status === 200) {
        const { addresses } = res.data;

        dispatch({
            type: GET_USER_ADDRESS,
            payload: addresses,
        });
    }
};

export const createAdr = (payload, token) => async (dispatch) => {
    const res = await callAPI.post('/v2/create-new-address', { payload }, {
        headers: {
            // "content-type": "multipart/form-data",
            Authorization: token,
        },
    })
    if (res.status === 201) {
        const { address } = res.data;
        dispatch({
            type: CREATE_NEW_ADDRESS,
            payload: address
        })
        dispatch(getAdr(token))
    }
}

export const updateAdr = (payload, token) => async (dispatch) => {
    const res = await callAPI.post(
        "/v2/update-user-address",
        { payload },
        {
            headers: {
                Authorization: token,
            },
        }
    );
    if (res.status === 200) {
        dispatch({
            type: UPDATE_USER_ADDRESS,
        });
        dispatch(getAdr(token));
    }
};

export const deleteAdr = (payload, token) => async (dispatch) => {
    await callAPI.post(
        "/v2/delete-user-address",
        {
            addressId: payload,
        },
        {
            headers: {
                Authorization: token,
            },
        }
    );
    dispatch({
        type: DELETE_USER_ADDRESS,
    });
    dispatch(getAdr(token));
};

export const setDefaultAdr = (addressId, token) => async (dispatch) => {
    const res = await callAPI.post(
        "/v2/set-default-address",
        {
            addressId,
        },
        {
            headers: {
                Authorization: token,
            },
        }
    );
    if (res.status === 200) {
        dispatch({
            type: SET_DEFAULT_ADDRESS,
        });
        dispatch(getAdr(token));
    }
};

export const getDeliveryAdr = (addressId, token) => async (dispatch) => {
    const res = await callAPI.post(
        "/v2/set-delivery-address",
        {
            addressId,
        },
        {
            headers: {
                Authorization: token,
            },
        }
    );
    if (res.status === 200) {
        dispatch({
            type: GET_DELIVERY_ADDRESS,
        });
        dispatch(getAdr(token));
    }
}