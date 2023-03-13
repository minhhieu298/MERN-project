import React, { useEffect, useState } from 'react'
import { ListWrap } from './style'
import * as Icon from '../../../library/icons/index'
import useStore from '../../../library/hooks/useStore'
import { getAdr, getDeliveryAdr } from '../../../redux/actions/address.action'


const ListAddress = (props) => {
    const { addresses, setOpen, setUpdateAdr, setStep } = props
    const { dispatch, token } = useStore()
    const [adrs, setAdrs] = useState([])
    const [adrSelect, setAdrSelect] = useState({})

    const handleDelivery = () => {
        dispatch(getDeliveryAdr(adrSelect?._id, token))
        setOpen(false)
    }

    // const handleChangeAdr = (adr) => {
    //     const item = addresses?.map(add => add?._id === adr?._id ? { ...add, isCheck: true } : { ...add, isCheck: false })
    //     setAdrs(item)
    // }

    const handleSelectAdr = (adr) => {
        const item = addresses?.map(add => add?._id === adr?._id ? { ...add, isCheck: true } : { ...add, isCheck: false })
        const add = item?.filter(add => add.isCheck == true)[0]
        setAdrs(item)
        setAdrSelect(add)
    }

    const handleUpdateSingleAdr = (adr) => {
        setUpdateAdr(adr)
        setStep(2)
    }
    useEffect(() => {
        const adrs = addresses?.map(item => ({ ...item, isCheck: item?.is_delivery ? true : false }))
        const adr = adrs?.filter(adr => adr.isCheck == true)[0]
        setAdrs(adrs)
        setAdrSelect(adr)
    }, [addresses])
    return (
        <ListWrap>
            <div className="my-address">
                <div className='heading-form'>
                    <div>Địa chỉ của tôi</div>
                </div>
                <div className="body-form">
                    {
                        adrs?.map(adr => (
                            <div key={adr?._id} className="list-address">
                                <div className="list-address-item">
                                    <div>
                                        <input type="radio" checked={adr?.isCheck} onClick={() => handleSelectAdr(adr)} onChange={() => { }} />
                                    </div>
                                    <div>
                                        <div className='heading'>
                                            <div>
                                                <div>{adr?.name}</div>
                                                <div></div>
                                                <div>{adr?.phone}</div>
                                            </div>
                                            <div onClick={() => handleUpdateSingleAdr(adr)}>cập nhật</div>
                                        </div>
                                        <div className='heading'>
                                            <div>
                                                <div>{adr?.address}</div>
                                                <div>{`${adr?.city},${adr?.district},${adr?.state}`}</div>
                                            </div>
                                            <div></div>
                                        </div>
                                        {
                                            adr?.isSelected && <div className="row"><span>Mặc định</span></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='create'>
                        <button onClick={() => setStep(1)}> <span><Icon.AddIcon fontSize='medium' /></span> Thêm địa chỉ mới</button>
                    </div>
                </div>
                <div className='foot-form'>
                    <button type='button' onClick={() => setOpen(false)}>Hủy</button>
                    <button onClick={handleDelivery}>Xác nhận</button>
                </div>
            </div>
        </ListWrap >
    )
}

export default ListAddress