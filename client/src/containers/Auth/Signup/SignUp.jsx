import React, { useEffect, useState } from 'react'
import AuthWrap from '../index.style'
import * as Icon from '../../../library/icons/index'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PAGE, REGISTER_PAGE } from '../../../setting/constants'
import { callAPI } from '../../../api/callApi'
import { validate } from '../../../library/helper/validateForm'

const SignUp = () => {
  let navigate = useNavigate();
  const [errMsg, setErrMsg] = useState({ errors: '', errorSer: '' })
  const handleSubmit = async e => {
    e.preventDefault()
    const user = Object.fromEntries(new FormData(e.target));
    try {
      await callAPI.post("/v2/register", user);
      if (errMsg.errorSer) return
      else {
        // dispatch(getMail(user))
        // navigate('/', { replace: true })
      }
      setErrMsg({ errors: '', errorSer: '' })
    } catch (error) {
      setErrMsg({ ...errMsg, errors: validate(user), errorSer: error.response.data.message })
    }
  }
  useEffect(() => {
    return () => {
      setErrMsg({ errors: '', errorSer: '' })
    }
  }, [])
  return (
    <AuthWrap>
      <div>
        <div className="image-form">
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <h1>Đăng kí tài khoản</h1>
              <div className="form-group">
                <div>
                  <input type="text" placeholder='Tên người dùng' name='username' />
                </div>
                {
                  errMsg.errors && <span style={{ color: 'tomato' }}>{errMsg.errors.username}</span >
                }
              </div>
              <div className="form-group">
                <div>
                  <input type="email" placeholder='Email' name='email' />
                </div>
                {
                  errMsg.errors && <span style={{ color: 'tomato' }}>{errMsg.errors.email}</span >
                }
              </div>
              <div className="form-group">
                <div>
                  <input type="password" placeholder='Password' name='password' />
                </div>
                {
                  errMsg.errors && <span style={{ color: 'tomato' }}>{errMsg.errors.password}</span >
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