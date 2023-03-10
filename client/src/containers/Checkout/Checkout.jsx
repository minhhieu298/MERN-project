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
                color: item?.color,
                name: item?.product?.name
            }))
        }
        // console.log(payload);
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
                        <h1>Thanh to??n</h1>
                    </Container>
                </div>
                <div className="body-checkout">
                    <Container fluid={true}>
                        <div className='address'>
                            <div>
                                <div>
                                    <span><Icon.LocationOnIcon fontSize='medium' /></span>
                                    <div>?????a ch??? nh???n h??ng</div>
                                </div>
                            </div>
                            <div>
                                {
                                    addresses?.length > 0 ? <>
                                        <div>
                                            <div>{address?.name} - {address?.phone}</div>
                                            <div>{address?.address},{address?.city},{address?.district},{address?.state}</div>
                                            {
                                                address?.isSelected && <div>M???c ?????nh</div>
                                            }
                                        </div>
                                        <div onClick={() => setOpen(true)}>Thay ?????i</div>
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
                                        <th>S???n ph???m</th>
                                        <th>????n gi??</th>
                                        <th>S??? l?????ng</th>
                                        <th>Th??nh ti???n</th>
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
                                                    <div>{`???${numberWithCommas(item?.price)}`}</div>
                                                </td>
                                                <td>
                                                    <div>{item?.quantity}</div>
                                                </td>
                                                <td>
                                                    <div>{`???${numberWithCommas(Number(item?.price * item?.quantity))}`}</div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="total">
                            <div>T???ng s??? ti???n ({cartItems?.length} s???n ph???m):</div>
                            <div>{`???${numberWithCommas(Number(total))}`}</div>
                        </div>
                        <div className="payment">
                            <div className="payment-heading">
                                <div>Ph????ng th???c thanh to??n</div>
                                <div>Thay ?????i</div>
                            </div>
                            <div className="payment-content">
                                <div>
                                    <div>
                                        <div>T???ng ti???n h??ng</div>
                                        <div>{`???${numberWithCommas(total)}`}</div>
                                    </div>
                                    <div>
                                        <div>Ph?? v???n chuy???n</div>
                                        <div>{`???${numberWithCommas(shipping)}`}</div>
                                    </div>
                                    <div>
                                        <div>T???ng thanh to??n:</div>
                                        <div>{`???${numberWithCommas(total + shipping)}`}</div>
                                    </div>
                                </div>
                                <div>
                                    <Link to={CART_PAGE}>Quay l???i</Link>
                                    <button onClick={handleOrder} disabled={address === undefined ? true : false}>?????t h??ng</button>
                                </div>
                            </div>

                        </div>
                    </Container>
                </div>
            </CheckoutWrap>
            {
                open && <Modal className='modal'>
                    {getSteps(step, setStep, setOpen, addresses, setUpdateAdr, updateAdrs)}
                </Modal>
            }
        </React.Fragment>
    )
}

export default Checkout