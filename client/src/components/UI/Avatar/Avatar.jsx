import React from 'react'
import { LOGIN_PAGE, PROFILE_PAGE } from '../../../setting/constants'
import AvatarWrap from './style'
import { Link } from 'react-router-dom'
import useStore from '../../../library/hooks/useStore'

const Avatar = ({ src, icon }) => {
    const { isUser } = useStore()
    return (
        <AvatarWrap>
            {
                isUser ? <div>
                    <Link to={PROFILE_PAGE}>
                        <img src={src} alt="" />
                    </Link>
                </div> : <Link to={LOGIN_PAGE}>{icon}</Link>
            }
        </AvatarWrap>
    )
}

export default Avatar