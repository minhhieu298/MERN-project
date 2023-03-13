import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import AddressWrap, { DropDown } from './style'
import * as Icon from '../../../library/icons/index'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { getStepContentDrop } from './getStepComponents'
import useStore from '../../../library/hooks/useStore'
import { updateAdr } from '../../../redux/actions/address.action'
import { validateAdr } from './validateAdr'

const UpdateAddress = (props) => {
    const { step, setStep, updateAdrs } = props
    const [drop, setDrop] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [stepDrop, setStepDrop] = useState(0)
    const { dispatch, token } = useStore()
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
    const [error, setError] = useState({ err: '' })


    const handleSubmit = e => {
        e.preventDefault()
        const payload = {
            _id: updateAdrs?._id,
            name, phone, address,
            district: district?.target?.alt ? district?.target?.alt : updateAdrs?.district,
            city: city?.target?.alt ? city?.target?.alt : updateAdrs?.city,
            state: state?.target?.alt ? state?.target?.alt : updateAdrs?.state,
            isSelected: isCheck ? isCheck : updateAdrs?.isSelected
        }

        if (!name || !phone || !address || !city || !district || !state) {
            setError({ ...error, err: validateAdr(payload) })
        } else {
            if (step) {
                setStep(0)
            }
            dispatch(updateAdr(payload, token))
            setUpdate(false)
        }
        // console.log(payload);
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
        setName(updateAdrs?.name || '')
        setPhone(updateAdrs?.phone || '')
        setAddres(updateAdrs?.address || '')
        setCity(updateAdrs?.city || '')
        setDistrict(updateAdrs?.district || '')
        setState(updateAdrs?.state || '')
        setIsCheck(updateAdrs?.isSelected || false)
    }, [])
    return (
        <AddressWrap>
            <div className="address">
                <div>Cập nhật địa chỉ</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <div className="form-group">
                                <div>
                                    <div>
                                        <div><input type="text" placeholder='Họ và tên' value={name} onChange={e => setName(e.target.value)} /></div>
                                        {error.err.name && <span>{error.err.name}</span>}
                                    </div>
                                    <div>
                                        <div><input type="text" placeholder='Số điện thoại' value={phone} onChange={e => setPhone(e.target.value)} /></div>
                                        {error.err.phone && <span>{error.err.phone}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <DropDown ref={ref}>
                                        <div className="label" onClick={() => setDrop(!drop)} data-placeholder='Tỉnh/Thành phố, Quận/Huyện, Phường/Xã'>
                                            {
                                                state?.target?.alt ? <>
                                                    {state?.target?.alt ? `${state?.target?.alt},` : ``}
                                                    {district?.target?.alt ? `${district?.target?.alt},` : ``}
                                                    {city?.target?.alt ? `${city?.target?.alt}` : ``}
                                                </> : <>
                                                    {`${updateAdrs?.state},${updateAdrs?.district},${updateAdrs?.city}`}
                                                </>
                                            }
                                            {
                                                state?.target?.alt && <span onClick={() => {
                                                    setState('')
                                                    setDistrict('')
                                                    setCity('')
                                                }}><Icon.CancelIcon fontSize='small' /></span>
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
                                    {error.err.adrs && <span>{error.err.adrs}</span>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <div>
                                        <textarea type="text" placeholder='Địa chỉ cụ thể' maxLength={128}
                                            // disabled={(state?.target?.alt && district?.target?.alt && city?.target?.alt) || address ? false : true}
                                            value={address}
                                            onChange={e => setAddres(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error.err.address && <span>{error.err.address}</span>}
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
                                        <input type="checkbox" checked={isCheck} disabled={updateAdrs?.isSelected ? true : false} onChange={e => setIsCheck(e.target.checked)} />
                                        Đặt làm địa chỉ mặc định
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type='button' onClick={() => {
                                if (step) {
                                    setStep(0)
                                } else {
                                    setUpdate(false)
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

export default UpdateAddress