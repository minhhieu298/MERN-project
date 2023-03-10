import React, { useEffect, useState } from 'react'
import AuthWrap from '../index.style'
import * as Icon from '../../../library/icons/index'
import { Link, useNavigate } from 'react-router-dom'
import { FORGOT_PASSWORD, HOME_PAGE, REGISTER_PAGE, } from '../../../setting/constants'
import { callAPI } from '../../../api/callApi'
import useStore from '../../../library/hooks/useStore'
import bg from '../../../assets/banner_login.jpg'

const Signin = () => {
    const [errMsg, setErrMsg] = useState({ errors: '' });
    const { dispatch } = useStore()
    let navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        let user = Object.fromEntries(new FormData(e.target))
        try {
            const res = await callAPI.post('/v2/login', user)
            if (res.status === 200) {
                navigate('/', { replace: true })
                window.location.reload()
            }
            setErrMsg({ errors: '' })
        } catch (error) {
            setErrMsg({ ...errMsg, errors: error.response.data.message })
        }
    }
    return (
        <AuthWrap>
            <div style={{ backgroundImage: `url(${bg})` }}>
                <div className="form">
                    <div className="head">
                        <div>
                            <Link to={HOME_PAGE}>
                                <span><Icon.BsArrowLeft /></span>
                                <span>Quay lại trang chủ</span>
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1>Đăng nhập</h1>
                            <div className="form-group">
                                <div style={{ borderColor: Object.keys(errMsg.errors).toString() === 'email' ? 'red' : '#80808024' }}>
                                    <input type="text" placeholder='Email' name='email' onFocus={() => setErrMsg({ errors: '' })} />
                                </div>
                                {
                                    Object.keys(errMsg.errors).toString() === 'email' && <span style={{ color: 'tomato' }}>{errMsg.errors.email}</span>
                                }
                            </div>
                            <div className="form-group">
                                <div style={{ borderColor: Object.keys(errMsg.errors).toString() === 'password' ? 'red' : '#80808024' }}>
                                    <input type="password" placeholder='Password' name='password' onFocus={() => setErrMsg({ errors: '' })} />
                                </div>
                                {
                                    Object.keys(errMsg.errors).toString() === 'password' && <span style={{ color: 'tomato' }}>{errMsg.errors.password}</span>
                                }
                            </div>
                            <div className="form-group">
                                <div className='btn'>
                                    <button>Đăng nhập</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="footer">
                        <div className="forgot">
                            <Link to={FORGOT_PASSWORD}><span>Quên mật khẩu?</span></Link>
                        </div>
                        <div className="register">
                            <p>Bạn chưa có tài khoản?</p>
                            <p>Đăng kí
                                <Link to={REGISTER_PAGE}><span>tại đây</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthWrap>
    )
}

export default Signin