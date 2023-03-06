import React, { useEffect, useState } from 'react'
import AuthWrap from '../index.style'
import * as Icon from '../../../library/icons/index'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PAGE } from '../../../setting/constants'
// import image from '../../../assets/banner-form.png'
import { callAPI } from '../../../api/callApi'
import { validate } from '../../../library/helper/validateForm'

const SignUp = () => {
  let navigate = useNavigate();
  const [errMsg, setErrMsg] = useState({ errors: '', errorSer: '' })
  // const { dispatch } = useStore()
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
          {/* <img src={image} alt="" /> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Đăng kí tài khoản</span>
            <div className="form-group">
              <div>
                <input type="text" placeholder='Tên người dùng' name='username' />
                <span className='focus'></span>
                <span><Icon.PersonIcon fontSize='small' /></span>
              </div>
              {
                errMsg.errors && <div style={{ color: 'tomato', margin: '10px 20px' }}>{errMsg.errors.username}</div >
              }
            </div>
            <div className="form-group">
              <div>
                <input type="email" placeholder='Email' name='email' />
                <span className='focus'></span>
                <span><Icon.EmailIcon fontSize='small' /></span>
              </div>
              {
                errMsg.errors && <div style={{ color: 'tomato', margin: '10px 20px' }}>{errMsg.errors.email}</div >
              }
            </div>
            <div className="form-group">
              <div>
                <input type="password" placeholder='Password' name='password' />
                <span className='focus'></span>
                <span><Icon.LockIcon fontSize='small' /></span>
              </div>
              {
                errMsg.errors && <div style={{ color: 'tomato', margin: '10px 20px' }}>{errMsg.errors.password}</div >
              }
            </div>
            <div className="btn">
              <button>Đăng kí tài khoản</button>
            </div>
            <div className='text-center'>
              <Link to={LOGIN_PAGE}><span>Đăng nhập</span></Link>
            </div>
            <div className="text-center">
              {/* <Link to={REGISTER_PAGE}>Đăng kí tài khoản <span><Icon.ArrowRightAltIcon fontSize='medium' /></span></Link> */}
            </div>
          </div>
        </form>
      </div>
    </AuthWrap>
  )
}

export default SignUp