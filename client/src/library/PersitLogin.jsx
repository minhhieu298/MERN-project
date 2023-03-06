import React, { useEffect, useState } from 'react'
import { useRefreshToken } from './hooks/useRefreshToken';
import useStore from './hooks/useStore';
import { Outlet } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
const PersitLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { token } = useStore();
    useEffect(() => {
        const verifyRefresh = async () => {
            try {
                await refresh();
            } catch (error) {
                // console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        !token ? verifyRefresh() : setIsLoading(false);
        return () => {
            // verifyRefresh();
            setIsLoading(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{isLoading ? <Loader /> : <Outlet />}</>;
}

export default PersitLogin