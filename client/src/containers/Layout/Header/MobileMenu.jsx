import React, { useRef, useState } from 'react'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import * as Icon from '../../../library/icons/index'
import { ADMIN_PAGE, HOME_PAGE, LOGIN_PAGE, MEN_CATEGORY_PRODUCT_PAGE, PROFILE_PAGE, REGISTER_PAGE, WOMEN_CATEGORY_PRODUCT_PAGE } from '../../../setting/constants'
import { Link } from 'react-router-dom'

const MobileMenu = ({ isAdmin, setOpen, isUser, auth }) => {
    // const [search, setSearch] = useState(false)
    const ref = useRef(null)
    useOnClickOutside(ref, () => setOpen(false))
    return (
        <React.Fragment>
            <div ref={ref}>
                <div className="close-btn">
                    <button onClick={() => setOpen(false)}><span><Icon.CloseOutlinedIcon /></span></button>
                </div>
                {
                    isUser ? <div className="avatar">
                        <Link to={PROFILE_PAGE}>
                            <div>
                                <img src={auth?.avatar} alt="" />
                                <h3>{auth?.username}</h3>
                            </div>
                        </Link>
                    </div> : <ul className='form'>
                        <li>
                            <span>
                                <Link to={LOGIN_PAGE}>Sign in</Link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <Link to={REGISTER_PAGE}>Sign up</Link>
                            </span>
                        </li>
                    </ul>
                }
                <ul className='main-menu'>
                    {
                        isAdmin && <li onClick={() => setOpen(false)}><Link to={ADMIN_PAGE}>Dashboard</Link></li>
                    }
                    <li onClick={() => setOpen(false)}>
                        <Link to={HOME_PAGE}>Home</Link>
                    </li>
                    {/* <li onClick={() => setOpen(false)}>
                        <Link to={PRODUCT_PAGE}>Products</Link>
                    </li> */}
                    <li onClick={() => setOpen(false)}>
                        <Link to={MEN_CATEGORY_PRODUCT_PAGE}>Men</Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link to={WOMEN_CATEGORY_PRODUCT_PAGE}>Woman</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default MobileMenu