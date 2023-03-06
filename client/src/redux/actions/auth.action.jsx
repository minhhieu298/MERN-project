import { callAPI } from "../../api/callApi";
import { LIST_USER, LOGIN, LOGOUT, TOKEN, UPDATE_USER } from "../constants";

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

                case 'sort':
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

export const getToken = (token) => async (dispatch) => {
    dispatch({
        type: TOKEN,
        payload: token,
    });
};

export const login = (user) => async (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: user,
    });
};


export const updateUser = (data, token) => async (dispatch) => {
    const res = await callAPI.post(`/v2/update-user`, data, {
        headers: {
            Authorization: token
        }
    })

    if (res.status === 200) {
        const user = await callAPI.get("/v2/me", {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: token,
            },
        });
        if (user.status === 200) {
            dispatch({
                type: UPDATE_USER,
                payload: user?.data.user
            })
        }
    }
}

export const getListUser = (url, token) => async (dispatch) => {
    const res = await callAPI.post(`/v1/list-user${setStateToUrl(url)}`, {}, {
        headers: {
            "content-type": "multipart/form-data",
            Authorization: token,
        },
    });
    if (res.status === 200) {
        const { data } = res.data
        dispatch({
            type: LIST_USER,
            payload: {
                users: data?.users,
                total: data?.total
            }
        })
    }
}

export const logOut = () => async (dispatch) => {
    await callAPI.post(`/v2/logout`)
    dispatch({
        type: LOGOUT
    })
}