import React, { useEffect, useState } from 'react'
import AuthWrap from '../index.style'
import * as Icon from '../../../library/icons/index'
import { Link, Navigate, useNavigate, redirect } from 'react-router-dom'
import { REGISTER_PAGE } from '../../../setting/constants'
// import image from '../../../assets/banner-form.png'
import { callAPI } from '../../../api/callApi'
import useStore from '../../../library/hooks/useStore'
// import useStore from '../../../library/hooks/useStore'

const Signin = () => {
    const [errMsg, setErrMsg] = useState({ errors: '' });
    const { dispatch } = useStore()
    // const { dispatch } = useStore()
    let navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        let user = Object.fromEntries(new FormData(e.target))
        try {
            await callAPI.post('/v2/login', user)

            navigate('/', { replace: true })

            setErrMsg({ errors: '' })
        } catch (error) {
            setErrMsg({ ...errMsg, errors: error.response.data.message })
        }
    }
    // useEffect(() => {
    //     return () => {
    //         setErrMsg({ errors: '' })
    //     }
    // }, [])
    return (
        <AuthWrap>
            <div>
                <div className="image-form">
                    {/* <img src={image} alt="" /> */}
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span>Đăng nhập</span>
                        <div className="form-group">
                            <div>
                                <input type="text" placeholder='Email' name='email' onFocus={() => setErrMsg({ errors: '' })} />
                                <span className='focus'></span>
                                <span><Icon.EmailIcon fontSize='small' /></span>
                            </div>
                            {
                                Object.keys(errMsg.errors).toString() === 'email' && <div style={{ color: 'tomato', margin: '10px 20px' }}>{errMsg.errors.email}</div>
                            }
                        </div>
                        <div className="form-group">
                            <div>
                                <input type="password" placeholder='Password' name='password' onFocus={() => setErrMsg({ errors: '' })} />
                                <span className='focus'></span>
                                <span><Icon.LockIcon fontSize='small' /></span>
                            </div>
                            {
                                Object.keys(errMsg.errors).toString() === 'password' && <div style={{ color: 'tomato', margin: '10px 20px' }}>{errMsg.errors.password}</div>
                            }
                        </div>
                        <div className="btn">
                            <button>Đăng nhập</button>
                        </div>
                        <div className='text-center'>
                            <Link to={'/'}><span>Quên mật khẩu?</span></Link>
                        </div>
                        <div className="text-center">
                            <Link to={REGISTER_PAGE}>Đăng kí tài khoản <span><Icon.ArrowRightAltIcon fontSize='medium' /></span></Link>
                        </div>
                    </div>
                </form>
                {/* <form onSubmit={handleSubmit}>
                    <div>
                        <span>Đăng nhập</span>
                        <div className="form-group">
                            <div>
                                <input type="text" placeholder='Email' name='email' onFocus={() => setErrMsg({ errors: '' })} />
                                <span className='focus'></span>
                                <span><Icon.EmailIcon fontSize='small' /></span>

                            </div>
                        </div>
                        
                        
                    </div>
                </form> */}
            </div>
        </AuthWrap>
    )
}

export default Signin