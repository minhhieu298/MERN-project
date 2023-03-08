import React, { useState } from 'react'
import { ResetWrap } from './index.style'
import Container from '../../components/UI/container/Container'
import * as Icon from '../../library/icons/index'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PAGE } from '../../setting/constants'
import { callAPI } from '../../api/callApi'
import { resetValidate } from '../../library/helper/validateForm'

const ResetPassword = () => {
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState({ errors: '', errorSer: '' })
    let navigate = useNavigate()

    // console.log(err);
    const handleSubmit = async e => {
        e.preventDefault()
        const payload = {
            email: JSON.parse(sessionStorage.getItem('auth'))?.email, otp, password
        }

        try {
            if (password.length < 8) {
                setErr({ ...err, errors: 'Mật khẩu tối thiểu 8 kí tự', errorSer: '' })
                return
            }
            else {
                await callAPI.post('/v2/change-password', payload)
                navigate(`${LOGIN_PAGE}`, { replace: true })
                sessionStorage.removeItem('auth')
                if (!err.errorSer) return
            }
        } catch (error) {
            setErr({ ...err, errors: '', errorSer: error.response.data.message })
        }
    }

    const sendOTP = async () => {
        await callAPI.post('/v2/forgot-password', {
            email: JSON.parse(sessionStorage.getItem('auth'))?.email
        })
    }
    return (
        <ResetWrap>
            <div className="header-reset">
                <Container fluid={true}>
                    <h1>ResetPassword</h1>
                </Container>
            </div>
            <div className="body-reset">
                <Container fluid={true}>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="form-group">
                                    <div><Link to={LOGIN_PAGE}><span><Icon.KeyboardBackspaceIcon fontSize='large' /></span></Link></div>
                                    <h4>Đặt lại mật khẩu</h4>
                                </div>
                                <div className='form-group'>
                                    <div>
                                        <input type="text" maxLength={'6'} placeholder='Mã OTP' value={otp} onChange={e => setOtp(e.target.value)} onFocus={() => setErr({ errors: '', errorSer: '' })} />
                                    </div>
                                    {
                                        err.errorSer && <span>{err.errorSer}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <div>
                                        <input type="password" placeholder='Nhập mật khẩu mới' value={password} onChange={e => setPassword(e.target.value)} onFocus={() => setErr({ errors: '', errorSer: '' })} />
                                    </div>
                                    {
                                        err.errors && <span>{err.errors}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <button disabled={otp && password ? false : true}>Đặt lại mật khẩu</button>
                                </div>

                            </div>
                        </form>
                        <div className='reset'>
                            <button type='button' onClick={sendOTP}>Gửi lại mã OTP</button>
                        </div>
                    </div>
                </Container>
            </div>
        </ResetWrap>
    )
}

export default ResetPassword