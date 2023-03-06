import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import AddressWrap, { DropDown } from './style'
import * as Icon from '../../../library/icons/index'
import { getStepContentDrop } from './getStepComponents'
import useStore from '../../../library/hooks/useStore'
import { createAdr, getAdr } from '../../../redux/actions/address.action'

const NewAddress = (props) => {
  const { setOpen, setStep, open } = props
  const { dispatch, addresses, token } = useStore()
  const [drop, setDrop] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  const [stepDrop, setStepDrop] = useState(0)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setDrop(false));

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddres] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')
  const [state, setState] = useState('')
  const [cityArr, setCityArr] = useState([])
  const [districtArr, setDistrictArr] = useState([])
  const [stateArr, setStateArr] = useState([])


  const handleSubmit = e => {
    e.preventDefault()
    // setStep(0)
    const payload = {
      name, phone, address,
      district: district?.target?.alt,
      city: city?.target?.alt,
      state: state?.target?.alt,
      isSelected: isCheck
    }
    dispatch(createAdr(payload, token))
    setOpen(false)
  }

  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await axios.get('https://provinces.open-api.vn/api/')
      setStateArr(data)
      if (state) {
        const res = await axios.get(`https://provinces.open-api.vn/api/p/${state?.target?.value}?depth=2`)
        setDistrictArr(res.data)
        if (district) {
          const res = await axios.get(`https://provinces.open-api.vn/api/d/${district?.target?.value}?depth=2`)
          setCityArr(res.data)
        }
      }
    }
    fetchAPI()
  }, [state?.target?.value, district?.target?.value])

  useEffect(() => {
    if (addresses.length <= 0) {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
    dispatch(getAdr(token))
  }, [dispatch])
  return (
    <AddressWrap>
      <div className="address">
        <div>Địa chỉ mới</div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <div className="form-group">
                <div>
                  <div><input type="text" placeholder='Họ và tên' value={name} onChange={e => setName(e.target.value)} required /></div>
                  <div><input type="text" placeholder='Số điện thoại' value={phone} onChange={e => setPhone(e.target.value)} required /></div>
                </div>
              </div>
              <div className="form-group">
                <DropDown ref={ref}>
                  <div className="label" onClick={() => setDrop(!drop)} data-placeholder='Tỉnh/Thành phố, Quận/Huyện, Phường/Xã'>
                    {state?.target?.alt ? `${state?.target?.alt},` : ``}
                    {district?.target?.alt ? `${district?.target?.alt},` : ``}
                    {city?.target?.alt ? `${city?.target?.alt}` : ``}

                    {
                      (state?.target?.alt || district?.target?.alt || city?.target?.alt) ? <span onClick={() => {
                        setState('')
                        setDistrict('')
                        setCity('')
                      }}><Icon.CancelIcon fontSize='small' /></span> : <></>
                    }
                  </div>
                  {
                    drop && <div className="dropdown">
                      <div className="dropdown-title">
                        <div onClick={() => setStepDrop(0)}>Tỉnh/Thành phố</div>
                        <div onClick={() => {
                          if (state) {
                            setStepDrop(1)
                          }
                        }}>Quận/Huyện</div>
                        <div onClick={() => {
                          if (state && district) {
                            setStepDrop(2)
                          }
                        }}>Phường/Xã</div>
                      </div>
                      <div className="dropdown-content">
                        {getStepContentDrop(stepDrop, setStepDrop, stateArr, districtArr, cityArr, setState, setDistrict, setCity, setDrop)}
                      </div>
                    </div>
                  }
                </DropDown>
              </div>
              <div className="form-group">
                <div>
                  <textarea type="text"
                    placeholder='Địa chỉ cụ thể'
                    maxLength={128}
                    disabled={(!state?.target?.alt && !district?.target?.alt && !city?.target?.alt) ? true : false}
                    value={address}
                    onChange={e => setAddres(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <div>Loại địa chỉ:</div>
                  <div>
                    <span>Nhà riêng</span>
                    <span>Văn phòng</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" checked={isCheck} disabled={!addresses.length ? true : false} onChange={e => setIsCheck(e.target.checked)} />
                  Đặt làm địa chỉ mặc định
                </label>
              </div>
            </div>
            <div>
              <button type='button' onClick={() => {
                if (open) {
                  setOpen(false)
                } else {
                  setStep(0)
                }
              }}>Trở lại</button>
              <button type='submit'>Hoàn Thành</button>
            </div>
          </div>
        </form>
      </div>
    </AddressWrap>
  )
}

export default NewAddress