import React, { useState } from 'react'
import { callAPI } from '../../../api/callApi'
import { convertToBase64 } from '../../../library/helper/convertImage'
import useStore from '../../../library/hooks/useStore'
import { updateUser } from '../../../redux/actions/auth.action'
import AdminWrap, { Box, Grid } from './index.style'

const ProfileAdmin = () => {
  const { auth, dispatch, token } = useStore()
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState({ password: '', confirmPassword: '' })
  const [errMsg, setErrMsg] = useState({ password: '', confirmPassword: '' });

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setImage(base64)
  }
  const handleUpdateInfor = () => {
    let data = {
      username: name,
      avatar: image
    }
    dispatch(updateUser(data, token))
    setName('')
    setImage('')
  }

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
        let payload = {
          password: data.password

        }
        await callAPI.post(`/v2/update-user`, payload, {
          headers: {
            Authorization: token
          }
        })
      }
    }

    setData({ password: '', confirmPassword: '' })
    setErrMsg({ password: '', confirmPassword: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (name || image) handleUpdateInfor()
    if (data.password) handleUpdate()
  }
  return (
    <AdminWrap>
      <Box>
        <h1>Chỉnh sửa thông tin</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-group">
              <label htmlFor="">Ảnh đại diện</label>
              <div>
                <div>
                  <input type="file" name='avatar' onChange={e => handleUpload(e)} />
                  <span></span>
                  <p>Drag your image here</p>
                  <em>(Only *.jpeg and *.png images will be accepted)</em>
                </div>
                <aside>
                  <img src={image ? image : auth?.avatar} alt="" />
                </aside>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Tên người dùng</label>
              <div>
                <input type="text" name='username' value={name} placeholder={auth?.username} onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <div>
                <input type="email" name='email' value={email} readOnly onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <div>
                <button>Lưu</button>
              </div>
            </div>
          </div>
        </form>
      </Box>
      <Box>
        <h1>Cập nhật mật khẩu</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-group">
              <label htmlFor="">Mật khẩu mới</label>
              <div>
                <div>
                  <input type="password" name='password' value={data.password} onChange={handleChange} onFocus={() => setErrMsg({ password: '', confirmPassword: '' })} />
                </div>
                {
                  errMsg.password && <span>{errMsg.password}</span>
                }
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Xác nhận mật khẩu</label>
              <div>
                <div>
                  <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={handleChange} onFocus={() => setErrMsg({ password: '', confirmPassword: '' })} />
                </div>
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
      </Box>
    </AdminWrap>
  )
}

export default ProfileAdmin