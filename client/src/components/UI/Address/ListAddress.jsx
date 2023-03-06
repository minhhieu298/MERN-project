import React, { useEffect, useState } from 'react'
import { ListWrap } from './style'
import * as Icon from '../../../library/icons/index'
import useStore from '../../../library/hooks/useStore'
import { getDeliveryAdr } from '../../../redux/actions/address.action'

const ListAddress = (props) => {
    const { setOpen, setStep, setUpdateAdr } = props
    const [data, setData] = useState([])
    const { addresses, dispatch, token } = useStore()
    const [obj, setObj] = useState({})

    const handleUpdate = () => {
        setStep(2)
    }

    const choseAdr = (addr) => {
        const adrs = addresses.map(item => item?._id === addr?._id ? { ...item, isCheck: true } : { ...item, isCheck: false })
        const adr = adrs.filter(item => item.isCheck === true)[0]
        setData(adrs)
        setObj(adr)
    }

    const handleDelivery = () => {
        dispatch(getDeliveryAdr(obj?._id, token))
        setOpen(false)
    }

    const selectAdr = (addr) => {
        const adrs = addresses.map(item => item?._id === addr?._id ? { ...item, isCheck: true } : { ...item, isCheck: false })
        setData(adrs)
    }
    useEffect(() => {
        const adr = addresses.map(item => ({ ...item, isCheck: item?.is_delivery === true ? true : false }))
        const upAdr = adr.filter(item => item.isCheck === true)[0]
        setUpdateAdr(upAdr)
        setData(adr)
    }, [addresses])
    return (
        <ListWrap>
            <div className="my-address">
                <div className='heading-form'>
                    <div>Địa chỉ của tôi</div>
                </div>
                <div className="body-form">
                    {
                        data?.map(item => (
                            <div key={item?._id} className="list-address">
                                <div className="list-address-item">
                                    <div>
                                        <input type="radio" checked={item?.isCheck} onClick={() => choseAdr(item)} onChange={() => selectAdr(item)} />
                                    </div>
                                    <div>
                                        <div className='heading'>
                                            <div>
                                                <div>{item?.name}</div>
                                                <div></div>
                                                <div>{item?.phone}</div>
                                            </div>
                                            <div onClick={() => handleUpdate()}>cập nhật</div>
                                        </div>
                                        <div className='heading'>
                                            <div>
                                                <div>{item?.address}</div>
                                                <div>{`${item?.city},${item?.district},${item?.state}`}</div>
                                            </div>
                                            <div></div>
                                        </div>
                                        {
                                            item?.isSelected && <div className="row"><span>Mặc định</span></div>
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