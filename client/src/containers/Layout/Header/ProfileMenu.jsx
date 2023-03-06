import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { CART_PAGE, PROFILE_PAGE } from '../../../setting/constants'

const ProfileMenu = ({ auth }) => {
    const [show, setShow] = useState(false)
    const ref = useRef(null)
    useOnClickOutside(ref, () => setShow(false))
    return (
        <div className="avatar-dropdown" ref={ref}>
            <div className="avatar" onClick={() => setShow(!show)}>
                <img src={auth.avatar} alt="" />
            </div>
            <div className={`content-dropdown ${show ? 'active' : ''}`} >
                <ul>
                    <li onClick={() => setShow(false)}>
                        <Link to={PROFILE_PAGE}>Account Setting</Link>
                    </li>
                    <li onClick={() => setShow(false)}>
                        <Link to={CART_PAGE}>Cart</Link>
                    </li>
                    <li onClick={() => setShow(false)}>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileMenu