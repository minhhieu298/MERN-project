import React, { useEffect, useState } from 'react'
import AuthWrap from '../index.style'
import * as Icon from '../../../library/icons/index'
import { Link, useNavigate } from 'react-router-dom'
import { HOME_PAGE, LOGIN_PAGE, OTP_PAGE } from '../../../setting/constants'
import { callAPI } from '../../../api/callApi'
import { validate } from '../../../library/helper/validateForm'
import useStore from '../../../library/hooks/useStore'
import bg from '../../../assets/banner_login.jpg'


const SignUp = () => {
  let navigate = useNavigate();
  const { dispatch } = useStore()
  const [errMsg, setErrMsg] = useState({ errors: '', errorSer: '' })
  const handleSubmit = async e => {
    e.preventDefault()
    const user = Object.fromEntries(new FormData(e.target));
    try {
      if (errMsg.errors) {
        return
      } else {
        await callAPI.post("/v2/register", user);
        sessionStorage.setItem('auth', JSON.stringify(user))
        navigate(`${OTP_PAGE}`, { replace: true })
        setErrMsg({ errors: '', errorSer: '' })
      }
    } catch (error) {
      setErrMsg({ ...errMsg, errors: validate(user) })
    }
  }
  useEffect(() => {
    return () => {
      setErrMsg({ errors: '', errorSer: '' })
    }
  }, [])
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
              <h1>Đăng kí tài khoản</h1>
              <div className="form-group">
                <div style={{ borderColor: errMsg.errors ? 'red' : '#80808024' }}>
                  <input type="text" placeholder='Tên người dùng' name='username' />
                </div>
                {
                  errMsg.errors && <span style={{ color: '#fff' }}>{errMsg.errors.username}</span >
                }
              </div>
              <div className="form-group">
                <div style={{ borderColor: errMsg.errors ? 'red' : '#80808024' }}>
                  <input type="email" placeholder='Email' name='email' />
                </div>
                {
                  errMsg.errors && <span style={{ color: '#fff' }}>{errMsg.errors.email}</span >
                }
              </div>
              <div className="form-group">
                <div style={{ borderColor: errMsg.errors ? 'red' : '#80808024' }}>
                  <input type="password" placeholder='Password' name='password' />
                </div>
                {
                  errMsg.errors && <span style={{ color: '#fff' }}>{errMsg.errors.password}</span >
                }
              </div>
              <div className="form-group">
                <div className="btn">
                  <button>Đăng kí tài khoản</button>
                </div>
              </div>
            </div>
          </form>
          <div className="footer">
            <div className='login'>
              <p>Bạn đã có tài khoản?</p>
              <p>
                Đăng nhập <Link to={LOGIN_PAGE}><span>tại đây</span></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthWrap>
  )
}

export default SignUp