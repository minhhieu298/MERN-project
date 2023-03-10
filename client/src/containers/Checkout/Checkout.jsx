import React, { useEffect, useState } from 'react'
import Container from '../../components/UI/container/Container'
import CheckoutWrap, { Modal } from './index.style'
import * as Icon from '../../library/icons/index'
import { getSteps } from '../../components/UI/Address/getStepComponents'
import useStore from '../../library/hooks/useStore'
import { getAdr } from '../../redux/actions/address.action'
import { numberWithCommas } from '../../library/helper/numberComas'
import { Link, useNavigate } from 'react-router-dom'
import { CART_PAGE, PROFILE_PAGE, ORDER_PAGE } from '../../setting/constants'
import { createOrder } from '../../redux/actions/order.action'
import CreateAddress from '../Agent/AccountSetting/Address/CreateAddress'

const Checkout = () => {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(0)
    let navigate = useNavigate()
    const [address, setAddress] = useState({})
    const { dispatch, token, addresses, cartItems } = useStore()
    const [updateAdrs, setUpdateAdr] = useState({})
    let total = cartItems?.reduce((a, b) => a + b.price * b.quantity, 0)
    let shipping = 30000
    const handleOrder = () => {
        let payload = {
            totalAmount: Number(total + shipping),
            addressId: address?._id,
            orderItems: cartItems?.map(item => ({
                productId: item?.product?._id,
                payablePrice: Number(item?.price * item?.quantity),
                purchaseQty: Number(item?.quantity),
                size: item?.size,
                color: item?.color
            }))
        }
        dispatch(createOrder(payload, token))
        navigate(`${PROFILE_PAGE}/${ORDER_PAGE}`)
    }
    useEffect(() => {
        dispatch(getAdr(token))
    }, [dispatch, token])

    useEffect(() => {
        const obj = addresses?.filter(item => item.is_delivery === true)[0]
        setAddress(obj)
    }, [addresses])
    return (
        <React.Fragment>
            <CheckoutWrap>
                <div className="header-checkout">
                    <Container fluid={true}>
                        <h1>Thanh toán</h1>
                    </Container>
                </div>
                <div className="body-checkout">
                    <Container fluid={true}>
                        <div className='address'>
                            <div>
                                <div>
                                    <span><Icon.LocationOnIcon fontSize='medium' /></span>
                                    <div>Địa chỉ nhận hàng</div>
                                </div>
                            </div>
                            <div>
                                {
                                    addresses?.length > 0 ? <>
                                        <div>
                                            <div>{address?.name} - {address?.phone}</div>
                                            <div>{address?.address},{address?.city},{address?.district},{address?.state}</div>
                                            {
                                                address?.isSelected && <div>Mặc định</div>
                                            }
                                        </div>
                                        <div onClick={() => setOpen(true)}>Thay đổi</div>
                                    </> : <div className="empty_adr">
                                        <CreateAddress newOrder={false} />
                                    </div>
                                }

                            </div>
                        </div>
                        <div className="product">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Đơn giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems?.map(item => (
                                            <tr key={item?._id}>
                                                <td>
                                                    <div>
                                                        <div><img src={item?.product?.image} alt="" /></div>
                                                        <div>
                                                            <span>{item?.product?.name}</span>
                                                            <span>Size: <span>{item?.size}</span></span>
                                                            <span>Color: <span>{item?.color}</span></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>{`₫${numberWithCommas(item?.price)}`}</div>
                                                </td>
                                                <td>
                                                    <div>{item?.quantity}</div>
                                                </td>
                                                <td>
                                                    <div>{`₫${numberWithCommas(Number(item?.price * item?.quantity))}`}</div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="total">
                            <div>Tổng số tiền ({cartItems?.length} sản phẩm):</div>
                            <div>{`₫${numberWithCommas(Number(total))}`}</div>
                        </div>
                        <div className="payment">
                            <div className="payment-heading">
                                <div>Phương thức thanh toán</div>
                                <div>Thay đổi</div>
                            </div>
                            <div className="payment-content">
                                <div>
                                    <div>
                                        <div>Tổng tiền hàng</div>
                                        <div>{`₫${numberWithCommas(total)}`}</div>
                                    </div>
                                    <div>
                                        <div>Phí vận chuyển</div>
                                        <div>{`₫${numberWithCommas(shipping)}`}</div>
                                    </div>
                                    <div>
                                        <div>Tổng thanh toán:</div>
                                        <div>{`₫${numberWithCommas(total + shipping)}`}</div>
                                    </div>
                                </div>
                                <div>
                                    <Link to={CART_PAGE}>Quay lại</Link>
                                    <button onClick={handleOrder}>Đặt hàng</button>
                                </div>
                            </div>

                        </div>
                    </Container>
                </div>
            </CheckoutWrap>
            {
                open && <Modal className='modal'>
                    {getSteps(step, setStep, setOpen, updateAdrs, setUpdateAdr)}
                </Modal>
            }
        </React.Fragment>
    )
}

export default Checkout