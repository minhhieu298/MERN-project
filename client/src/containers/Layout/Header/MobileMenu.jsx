import React, { useRef, useState } from 'react'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import * as Icon from '../../../library/icons/index'
import { ADMIN_PAGE, CART_PAGE, HOME_PAGE, LOGIN_PAGE, MEN_CATEGORY_PRODUCT_PAGE, PROFILE_PAGE, REGISTER_PAGE, WOMEN_CATEGORY_PRODUCT_PAGE } from '../../../setting/constants'
import { Link } from 'react-router-dom'
import { logOut } from '../../../redux/actions/auth.action'

const MobileMenu = ({ isAdmin, setOpen, isUser, auth, handleLogout }) => {
    // const [search, setSearch] = useState(false)
    const ref = useRef(null)
    useOnClickOutside(ref, () => setOpen(false))


    return (
        <div ref={ref}>
            <div className="close-btn">
                <button onClick={() => setOpen(false)}><span><Icon.CloseOutlinedIcon /></span></button>
            </div>
            {
                isUser ? <div className="avatar">
                    <Link to={PROFILE_PAGE} onClick={() => setOpen(false)}>
                        <div>
                            <img src={auth?.avatar} alt="" />
                            <h3>{auth?.username}</h3>
                        </div>
                    </Link>
                </div> : <ul className='form'>
                    <li>
                        <span>
                            <Link to={LOGIN_PAGE}>Đăng nhập</Link>
                        </span>
                    </li>
                    <li>
                        <span>
                            <Link to={REGISTER_PAGE}>Đăng kí</Link>
                        </span>
                    </li>
                </ul>
            }
            <ul className='main-menu'>
                {
                    isAdmin && <li onClick={() => setOpen(false)}><Link to={ADMIN_PAGE}>Dashboard</Link></li>
                }
                <li onClick={() => setOpen(false)}>
                    <Link to={HOME_PAGE}>Trang chủ</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                    <Link to={MEN_CATEGORY_PRODUCT_PAGE}>Sản phẩm cho Nam</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                    <Link to={WOMEN_CATEGORY_PRODUCT_PAGE}>Sản phẩm cho Nữ</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                    <Link to={CART_PAGE}>Giỏ hàng</Link>
                </li>
                {
                    isUser && <li onClick={() => {
                        setOpen(false)
                        handleLogout()
                    }}>
                        <span>Đăng xuất</span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default MobileMenu