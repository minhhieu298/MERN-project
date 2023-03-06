import React, { useState } from 'react'
import { AgentPasswordWrap } from './index.style'
import useStore from '../../../library/hooks/useStore'
import { callAPI } from '../../../api/callApi'

const AgentPassword = () => {
  const { token } = useStore()
  const [data, setData] = useState({ password: '', confirmPassword: '' })
  const [errMsg, setErrMsg] = useState({ password: '', confirmPassword: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  const handleUpdate = async () => {
    if (data.password.length < 8) {
      return setErrMsg({ ...errMsg, password: 'Mật khẩu tối thiếu 8 kí tự', confirmPassword: '' })
    } else {
      if (data.password !== data.confirmPassword) {
        return setErrMsg({ ...errMsg, confirmPassword: 'Mật khẩu không trùng khớp', password: '', })
      } else {
        await callAPI.post(`/v2/update-user`, {
          password: data.password
        }, {
          headers: {
            Authorization: token
          }
        })
      }
    }

    setData({ password: '', confirmPassword: '' })
    setErrMsg({ password: '', confirmPassword: '' })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (data.password) handleUpdate()
  }

  return (
    <AgentPasswordWrap>
      <div className="title-password">
        <div>
          <h4>Thêm Mật Khẩu</h4>
          <span>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
        </div>
      </div>
      <div className="content-password">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-group">
              <label htmlFor="">Mật khẩu mới</label>
              <div>
                <input type="password" name='password' value={data.password} onChange={handleChange} onFocus={() => setErrMsg({ password: '', confirmPassword: '' })} />
                {
                  errMsg.password && <span>{errMsg.password}</span>
                }
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Xác nhận mật khẩu</label>
              <div>
                <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={handleChange} onFocus={() => setErrMsg({ password: '', confirmPassword: '' })} />
                {
                  errMsg.confirmPassword && <span>{errMsg.confirmPassword}</span>
                }
              </div>
            </div>
            <div className="form-group">
              <div>
                <button>Xác nhận</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AgentPasswordWrap>
  )
}

export default AgentPassword