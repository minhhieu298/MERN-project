import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import useOnClickOutside from '../../../../library/hooks/useOnClickOutside'
import { getStepContent } from './getStepContent'
import { Container, DropDown } from './index'
import * as Icon from '../../../../library/icons/index'
import useStore from '../../../../library/hooks/useStore'
import { createAdr } from '../../../../redux/actions/address.action'
import { useNavigate } from 'react-router-dom'
import { CART_PAGE } from '../../../../setting/constants'
import { validateAdr } from './validateAdr'

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
    const [error, setError] = useState({ err: '' })
    const ref = useRef(null)
    useOnClickOutside(ref, () => setDrop(false));



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
        if (!name || !phone || !address || !city || !district || !state) {
            setError({ ...error, err: validateAdr(payload) })

        } else {
            dispatch(createAdr(payload, token))
            if (newOrder) {
                setOpen(false)
            }
        }
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
                                    <div>
                                        <input type="text" placeholder='Họ tên' value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    {
                                        error.err.name && <span>{error.err.name}</span>
                                    }
                                </div>
                                <div>
                                    <div>
                                        <input type="number" placeholder='Số điện thoại' value={phone} onChange={e => setPhone(e.target.value)} />
                                    </div>
                                    {
                                        error.err.phone && <span>{error.err.phone}</span>
                                    }
                                </div>
                            </div>
                            <div className="form-group" ref={ref}>
                                <div>
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
                                                            setStep(1)
                                                        }
                                                    }}>Quận/Huyện</div>
                                                    <div onClick={() => {
                                                        if (state && district) {
                                                            setStep(2)
                                                        }
                                                    }}>Phường/Xã</div>
                                                </div>
                                                <div className="dropdown-content">
                                                    {getStepContent(step, setStep, stateArr, districtArr, cityArr, setState, setDistrict, setCity, setDrop)}
                                                </div>
                                            </div>
                                        }
                                    </DropDown>
                                    {
                                        error.err.adrs && <span>{error.err.adrs}</span>
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <div>
                                        <textarea type='text'
                                            placeholder='Địa chỉ cụ thể'
                                            value={address}
                                            onChange={e => setAddres(e.target.value)}
                                            disabled={(!state?.target?.value && !district?.target?.value && !city?.target?.value) ? true : false}
                                        ></textarea>
                                    </div>
                                    {
                                        error.err.address && <span>{error.err.address}</span>
                                    }
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
                            <button type='submit' >Hoàn Thành</button>
                        </div>
                    </div>
                </form>
            </div >
        </Container >
    )
}

export default CreateAddress