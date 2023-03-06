import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import useOnClickOutside from '../../../../library/hooks/useOnClickOutside'
import { getStepContent } from './getStepContent'
import { Container } from './index'
import * as Icon from '../../../../library/icons/index'
import useStore from '../../../../library/hooks/useStore'
import { createAdr } from '../../../../redux/actions/address.action'
import { useNavigate } from 'react-router-dom'
import { CART_PAGE } from '../../../../setting/constants'

const CreateAddress = (props) => {
    const { open, setOpen, newOrder } = props
    let navigate = useNavigate()
    const { dispatch, token, addresses } = useStore()
    const [drop, setDrop] = useState(false)
    const [step, setStep] = useState(0)
    const [border, setBorder] = useState(0)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddres] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [state, setState] = useState('')
    const [isCheck, setIsCheck] = useState(false)
    const [cityArr, setCityArr] = useState([])
    const [districtArr, setDistrictArr] = useState([])
    const [stateArr, setStateArr] = useState([])
    const ref = useRef(null)
    useOnClickOutside(ref, () => setDrop(false));

    const handleSubmit = e => {
        e.preventDefault()
        // setStep(0)
        const payload = {
            name, phone, address,
            district: district?.target?.value,
            city: city?.target?.value,
            state: state?.target?.value,
            isSelected: isCheck
        }
        dispatch(createAdr(payload, token))
        if (newOrder) {
            setOpen(false)
        }
    }

    useEffect(() => {
        const fetchAPI = async () => {
            const { data } = await axios.get('https://provinces.open-api.vn/api/')
            setStateArr(data)
            if (state) {
                const res = await axios.get(`https://provinces.open-api.vn/api/p/${state?.target?.alt}?depth=2`)
                setDistrictArr(res.data)
                if (district) {
                    const res = await axios.get(`https://provinces.open-api.vn/api/d/${district?.target?.alt}?depth=2`)
                    setCityArr(res.data)
                }
            }
        }
        fetchAPI()
    }, [state?.target?.alt, district?.target?.alt])

    useEffect(() => {
        if (!addresses?.length) {
            setIsCheck(true)
        }

    }, [addresses])
    return (
        <Container>
            <div className="container">
                <div className="box">
                    <div>Địa chỉ mới</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <div className="form-group">
                                <div>
                                    <input type="text" placeholder='Họ tên' value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div>
                                    <input type="number" placeholder='Số điện thoại' value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group" ref={ref}>
                                <div onClick={() => setDrop(true)}>
                                    <input type="text" placeholder='Tỉnh/Thành phố, Quận/Huyện, Phường/Xã' readOnly />
                                    <div data-placeholder='Tỉnh/Thành phố, Quận/Huyện, Phường/Xã'>
                                        {state?.target?.value ? `${state?.target?.value},` : ``}
                                        {district?.target?.value ? `${district?.target?.value},` : ``}
                                        {city?.target?.value ? `${city?.target?.value}` : ``}
                                        {
                                            (state?.target?.alt || district?.target?.alt || city?.target?.alt) ? <span onClick={() => {
                                                setState('')
                                                setDistrict('')
                                                setCity('')
                                                setStep(0)
                                                setBorder(0)
                                            }}><Icon.CancelIcon fontSize='small' /></span> : <></>
                                        }
                                    </div>
                                </div>
                                <div className={`${drop ? 'visible' : 'hidden'}`}>
                                    <div className="dropdown">
                                        <div className="title">
                                            <div onClick={() => { setStep(0), setBorder(0) }} style={{ borderBottom: border === 0 ? '2px solid orange' : 'none' }}>Tỉnh/Thành phố</div>
                                            <div onClick={() => {
                                                if (state) {
                                                    setBorder(1)
                                                    setStep(1)
                                                }
                                            }} style={{ borderBottom: border === 1 ? '2px solid orange' : 'none' }}>Quận/Huyện</div>
                                            <div onClick={() => {
                                                if (state && district) {
                                                    setBorder(2)
                                                    setStep(2)
                                                }
                                            }} style={{ borderBottom: border === 2 ? '2px solid orange' : 'none' }}>Phường/Xã</div>
                                        </div>
                                        <div className="content">
                                            {getStepContent(step, setStep, stateArr, districtArr, cityArr, setState, setDistrict, setCity, setDrop, setBorder)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <textarea type='text'
                                        placeholder='Địa chỉ cụ thể'
                                        value={address}
                                        onChange={e => setAddres(e.target.value)}
                                        disabled={(!state?.target?.value && !district?.target?.value && !city?.target?.value) ? true : false}
                                    ></textarea>
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
                                <div>
                                    <label>
                                        <input type="checkbox" checked={isCheck} disabled={!addresses?.length ? true : false} onChange={e => setIsCheck(e.target.checked)} /> Đặt làm địa chỉ mặc định
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type='button' onClick={() => {
                                if (newOrder) {
                                    setOpen(false)
                                } else {
                                    navigate(`${CART_PAGE}`, { replace: true })
                                }
                            }}> Trở lại</button>
                            <button type='submit'>Hoàn Thành</button>
                        </div>
                    </div>
                </form>
            </div >
        </Container >
    )
}

export default CreateAddress