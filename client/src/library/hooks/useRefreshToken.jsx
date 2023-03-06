import useStore from "./useStore";
import { getToken, login } from "../../redux/actions/auth.action";
import { Navigate, Outlet } from 'react-router-dom'
import { callAPI } from '../../api/callApi'

export const useRefreshToken = () => {
    const { dispatch } = useStore();
    const refresh = async () => {
        const res = await callAPI.get("/v2/refresh", {
            withCredentials: true,
        });
        const user = await callAPI.get("/v2/me", {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: res?.data.access_token,
            },
        });

        dispatch(getToken(res?.data.access_token));
        dispatch(login(user?.data.user));
    };
    return refresh;
};
