import React, { useEffect, useState } from 'react'
import Container from '../../components/UI/container/Container'
import CheckoutWrap, { Modal } from './index.style'
import * as Icon from '../../library/icons/index'
import { getSteps } from '../../components/UI/Address/getStepComponents'
import useStore from '../../library/hooks/useStore'
import { getAdr } from '../../redux/actions/address.action'
import { numberWithCommas } from '../../library/helper/numberComas'
import { createSearchParams, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { CART_PAGE, PROFILE_PAGE, ORDER_PAGE } from '../../setting/constants'
import { createOrder } from '../../redux/actions/order.action'
import CreateAddress from '../Agent/AccountSetting/Address/CreateAddress'
import useWindowSize from '../../library/hooks/useWindowSize'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { setStateToUrl } from './url_handler'
import { callAPI } from '../../api/callApi'

const PaymentButton = ({ payload, token }) => {
    const handlePayment = async () => {
        await callAPI.post('/v2/create-checkout-session', payload, {
            headers: {
                Authorization: token,
            },
        }).then(res => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        }).catch(err => console.log(err.message))
    }
    return (
        <>
            <button onClick={handlePayment}>Đặt hàng</button>
        </>
    )
}
const Checkout = () => {
    let location = useLocation()
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(0)
    const [searchParam] = useSearchParams()
    let navigate = useNavigate()
    const [address, setAddress] = useState({})
    const { dispatch, token, addresses, cartItems } = useStore()
    const [updateAdrs, setUpdateAdr] = useState({})
    const [modalMethod, setModalMethod] = useState(false)
    let total = cartItems?.reduce((a, b) => a + b.price * b.quantity, 0)
    let shipping = 30000
    const { width } = useWindowSize()
    let data = {
        totalAmount: Number(total + shipping),
        addressId: address?._id,
        orderItems: cartItems?.map(item => ({
            productId: item?.product?._id,
            payablePrice: Number(item?.price * item?.quantity),
            purchaseQty: Number(item?.quantity),
            size: item?.size,
            color: item?.color,
            name: item?.product?.name
        })),
        payment_method: searchParam.get('payment_method') !== null ? 'Thanh toán qua thẻ' : 'Thanh toán khi nhận hàng'
    }
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
            })),
            payment_method: searchParam.get('payment_method') !== null ? 'Thanh toán qua thẻ' : 'Thanh toán khi nhận hàng'
        }
        dispatch(createOrder(payload, token))
        navigate(`${PROFILE_PAGE}/${ORDER_PAGE}`)
        // alert('done')
    }

    const onClick = (type) => {
        let query = {}
        query = {
            payment_method: type
        }
        const search = setStateToUrl(query);
        navigate({
            pathname: location.pathname,
            search: `?${createSearchParams(search)}`,
        });
    }
    const onChange = (e, type) => {
        if (e.target.checked) {
            let query = {}
            query = {
                [type]: e.target.value
            }
            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });
        } else {
            let query = {}
            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });
        }
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
                                {
                                    width > 768 ? <div>
                                        <div>
                                            <span><button className={`product-variation ${searchParam.get('payment_method') === null ? 'product-variation-selected' : ''}`} onClick={() => onClick('')}>Thanh toán khi nhận hàng</button></span>
                                            <span><button className={`product-variation ${searchParam.get('payment_method') !== null ? 'product-variation-selected' : ''}`} onClick={() => onClick('card')}>Thanh toán qua thẻ</button></span>
                                        </div>
                                    </div> : <div className="mobile">
                                        <div onClick={() => setModalMethod(true)}>Thay đổi</div>
                                        {
                                            modalMethod && <div>
                                                <div>
                                                    <div>
                                                        <FormGroup>
                                                            <FormControlLabel
                                                                control={<Checkbox />}
                                                                value=''
                                                                label='Thanh toán khi nhận hàng'
                                                                onChange={e => onChange(e, 'payment_method')}
                                                                checked={searchParam.get('payment_method') === null ? true : false}
                                                            />
                                                            <FormControlLabel
                                                                control={<Checkbox />}
                                                                value='card'
                                                                label='Thanh toán qua thẻ'
                                                                onChange={e => onChange(e, 'payment_method')}
                                                                checked={searchParam.get('payment_method') !== null ? true : false}
                                                            />
                                                        </FormGroup>
                                                    </div>
                                                    <div>
                                                        <button type='button' onClick={() => setModalMethod(false)}>đóng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                }
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
                                    {
                                        searchParam.get('payment_method') === null ? <button onClick={handleOrder} disabled={address === undefined ? true : false}>Đặt hàng</button> :
                                            <PaymentButton payload={data} token={token} />
                                    }
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