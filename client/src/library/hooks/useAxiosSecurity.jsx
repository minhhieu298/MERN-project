import { useEffect } from "react";
import { callAPI } from "../../api/callApi";
import { useRefreshToken } from "./useRefreshToken";
import useStore from "./useStore";

const useAxiosSecurity = () => {
    const { token } = useStore();
    const resfresh = useRefreshToken();

    useEffect(() => {
        const request = callAPI.interceptors.request.use(
            (config) => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = token;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        const response = callAPI.interceptors.response.use(
            (res) => res,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response.status === 403 || !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await resfresh();
                    prevRequest.headers["Authorization"] = newAccessToken;
                    return callAPI(prevRequest);
                }
                return Promise.reject(error);
            }
        );
        return () => {
            callAPI.interceptors.request.eject(request);
            callAPI.interceptors.response.eject(response);
        };
    }, [resfresh, token]);
    return callAPI;
};

export default useAxiosSecurity;
