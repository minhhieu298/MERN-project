import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PAGE, REGISTER_PAGE } from '../../../setting/constants'
import { AuthMenuWrap } from './index.style'

const AuthMenu = () => {
    return (
        <AuthMenuWrap>
            <ul className='form'>
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
        </AuthMenuWrap>
    )
}

export default AuthMenu