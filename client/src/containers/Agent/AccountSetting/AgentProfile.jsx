import React, { useState } from 'react'
import { convertToBase64 } from '../../../library/helper/convertImage'
import useStore from '../../../library/hooks/useStore'
import { AgentProfileWrap } from './index.style'
import { callAPI } from '../../../api/callApi'
import { updateUser } from '../../../redux/actions/auth.action'

const AgentProfile = () => {
  const { auth, token, dispatch } = useStore()
  const [image, setImage] = useState(auth.avatar)
  const [name, setName] = useState(auth.username)
  const [email, setEmail] = useState(auth.email)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setImage(base64)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    let data = {
      username: name,
      email: email,
      avatar: image
    }
    dispatch(updateUser(data, token))
  }
  return (
    <AgentProfileWrap>
      <div className="title-profile">
        <div>
          <h4>hồ sơ của tôi</h4>
          <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
        </div>
      </div>
      <div className="content-profile">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="infor">
              <div className="form-group">
                <label htmlFor="">Tên người dùng</label>
                <div>
                  <input type="text" name='username' value={name} onChange={e => setName(e.target.value)} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <div>
                  <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <button>Lưu</button>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div>
                <div className="avatar-img">
                  <img src={image} alt="" />
                  <input type="file" accept='.jpeg, .png, .jpg' onChange={e => handleUpload(e)} />
                </div>
                {/* <div>
                  <button type='button'>Chọn ảnh</button>
                </div> */}
                <div>
                  <div>Dụng lượng file tối đa 1 MB</div>
                  <div>Định dạng:.JPEG, .PNG, .JPG</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AgentProfileWrap>
  )
}

export default AgentProfile