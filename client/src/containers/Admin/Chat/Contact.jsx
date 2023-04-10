import React, { useEffect } from 'react'
import useStore from '../../../library/hooks/useStore'
import useWindowSize from '../../../library/hooks/useWindowSize'


const Contact = ({ setUserSelect, open, setOpen }) => {
    const { users, auth } = useStore()
    const { width } = useWindowSize()

    return (
        <div className={`container__contact ${open ? 'active' : ''}`}>
            <div className="container__contact__title">
                <h3>Nhắn tin với khách hàng</h3>
            </div>
            <div className="container__contact__users">
                <div className="wrapper">
                    <div className="list__user">
                        <div className="list__user__item">
                            {
                                users?.filter(item => item._id !== auth?._id)?.map(user => (
                                    <div key={user?._id} className="item" onClick={() => setUserSelect(user)}>
                                        <img src={user?.avatar} alt="" />
                                        <h4>{user?.username}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact