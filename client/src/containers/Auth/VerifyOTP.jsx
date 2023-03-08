import React, { useEffect, useState } from 'react'
import { OTPWrap } from './index.style'
import { Link, useNavigate } from 'react-router-dom'
import { HOME_PAGE, LOGIN_PAGE } from '../../setting/constants'
import { callAPI } from '../../api/callApi'
import useStore from '../../library/hooks/useStore'
import bg from '../../assets/banner_login.jpg'

const VerifyOTP = () => {
  const [otp, setOtp] = useState('')
  const { dispatch, auth } = useStore()
  const [err, setError] = useState('');
  let navigate = useNavigate()
  const handleSubmitt = async e => {
    e.preventDefault()
    try {
      await callAPI.post('/v2/verify-account', {
        otp: otp,
        email: JSON.parse(sessionStorage.getItem('auth'))?.email
      })
      sessionStorage.removeItem('auth')
      navigate(`${LOGIN_PAGE}`, { replace: true })
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  const sendOTP = async () => {
    await callAPI.post("/v2/register", JSON.parse(sessionStorage.getItem('auth')));
  }

  useEffect(() => {
    // dispatch(getMail())
  }, [dispatch])
  return (
    <OTPWrap style={{ backgroundImage: `url(${bg})` }}>
      {/* <div > */}
      <form onSubmit={handleSubmitt}>
        <h1>Xác thực OTP</h1>
        <div>
          <div>
            <input type="text" value={otp} maxLength='6' onChange={e => setOtp(e.target.value)} placeholder='Mã OTP' />
          </div>
          {
            err && <span>{err}</span>
          }
        </div>
        <button>Xác thực OTP</button>
        <div>
          <Link to={HOME_PAGE}>Quay về trang chủ</Link>
          <button type='button' onClick={sendOTP}>Gửi lại mã</button>
        </div>
      </form>
      {/* </div> */}
    </OTPWrap>
  )
}

export default VerifyOTP