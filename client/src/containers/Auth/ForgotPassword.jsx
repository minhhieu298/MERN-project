import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../../components/UI/container/Container'
import { LOGIN_PAGE, RESET_PASSWORD_PAGE } from '../../setting/constants'
import { ForgotWrap } from './index.style'
import * as Icon from '../../library/icons/index'
import { callAPI } from '../../api/callApi'
import useStore from '../../library/hooks/useStore'
import { getMail } from '../../redux/actions/auth.action'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [err, setErr] = useState('')
  let navigate = useNavigate()
  const { dispatch, user } = useStore()

  const handleSubmit = async e => {
    e.preventDefault()
    const payload = {
      email: email
    }
    console.log(payload);
    try {
      await callAPI.post('/v2/forgot-password', {
        email: email
      })
      // dispatch(getMail(payload))
      sessionStorage.setItem('auth', JSON.stringify(payload))
      navigate(`${RESET_PASSWORD_PAGE}`, { replace: true })
      setErr('')
    } catch (error) {
      setErr(error.response.data.message)
    }
  }
  return (
    <ForgotWrap>
      <div className="header-reset">
        <Container fluid={true}>
          <h1>Forgot Password</h1>
        </Container>
      </div>
      <div className="body-reset">
        <Container fluid={true}>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="form-group">
                <div><Link to={LOGIN_PAGE}><span><Icon.KeyboardBackspaceIcon fontSize='large' /></span></Link></div>
                <h4>Đặt lại mật khẩu</h4>
              </div>
              <div className="form-group">
                <div>
                  <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                {
                  err && <span>{err}</span>
                }
              </div>
              <div className="form-group">
                <button disabled={email ? false : true}>check</button>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </ForgotWrap>
  )
}

export default ForgotPassword