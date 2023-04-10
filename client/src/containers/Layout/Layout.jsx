import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import LayoutProvider from '../../context/LayoutProvider'
import useStore from '../../library/hooks/useStore'
import { getCartItems } from '../../redux/actions/cart.action'
import { ADMIN_PAGE, HOME_PAGE, CHECKOUT_PAGE, FORGOT_PASSWORD, LOGIN_PAGE, OTP_PAGE, REGISTER_PAGE, RESET_PASSWORD_PAGE } from '../../setting/constants'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import ChatMessage from '../Chat/ChatMessage'



const Layout = () => {
    const location = useLocation()
    const { token, dispatch, isUser, isAdmin } = useStore()

    useEffect(() => {
        if (token) {
            dispatch(getCartItems(token))
        }
    }, [dispatch, token])
    return (
        <LayoutProvider>
            {
                location.pathname === LOGIN_PAGE ||
                    location.pathname === REGISTER_PAGE ||
                    location.pathname === CHECKOUT_PAGE ||
                    location.pathname === RESET_PASSWORD_PAGE ||
                    location.pathname === OTP_PAGE ||
                    location.pathname === FORGOT_PASSWORD ||
                    location.pathname === ADMIN_PAGE ? (
                    <React.Fragment>
                        <Outlet />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Header />
                        <Outlet />
                        <>
                            {
                                !isAdmin && isUser &&
                                <ChatMessage />
                            }
                        </>
                        <Footer />
                    </React.Fragment>
                )
            }
        </LayoutProvider>
    )
}

export default Layout