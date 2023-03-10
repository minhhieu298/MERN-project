import React, { useEffect, useRef, useState } from 'react'
import { numberWithCommas } from '../../../library/helper/numberComas'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import useStore from '../../../library/hooks/useStore'
import { getOrderAdmin, updateOrderAdmin } from '../../../redux/actions/order.action'
import OrderWrap from './index.style'
import * as Icon from '../../../library/icons/index'
import { createSearchParams, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { ADMIN_PAGE } from '../../../setting/constants'
import { convertUTCDateToLocalDate, } from '../../../library/helper/getTime'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { getStateFromUrl, setStateToUrl } from './url_handler'

const Item = ({ order, ind, url }) => {
    const [drop, setDrop] = useState(false)
    const ref = useRef(null)
    const { dispatch, token } = useStore()
    useOnClickOutside(ref, () => setDrop(false))
    const handleUpdateStatus = (orderId, type) => {
        dispatch(updateOrderAdmin(orderId, type, token, url))
        setDrop(false)
    }

    return (
        <tr>
            <td>{ind + 1}</td>
            <td>
                <span>{`${convertUTCDateToLocalDate(new Date(order?.createdAt))}`}</span>
            </td>
            <td>
                <span>{order?.addressId.name}</span>
            </td>
            <td>
                <span>{`${order?.addressId.address},${order?.addressId.city},${order?.addressId.district},${order?.addressId.state}`}</span>
            </td>
            <td>
                <span>{order?.addressId.phone}</span>
            </td>
            <td>
                <span>{numberWithCommas(Number(order?.totalAmount))}</span>
            </td>
            <td>
                {
                    order?.paymentStatus.status === 'pending' && <span>Đơn hàng đang chờ được xác thực</span>
                }
                {
                    order?.paymentStatus.status === 'cancel' && <span>Đơn hàng bị hủy</span>
                }
                {
                    order?.orderStatus[1].isCompleted && !order?.orderStatus[2].isCompleted && <span>Đơn hàng đang được đóng gói</span>
                }
                {
                    order?.orderStatus[2].isCompleted && !order?.orderStatus[3].isCompleted && <span>Đơn hàng đang được vận chuyển</span>
                }
                {
                    order?.orderStatus[3].isCompleted && <span>Giao hàng thành công</span>
                }
            </td>
            <td>
                <div className='update_order'>
                    {
                        order?.paymentStatus.status === 'cancel' ? <div></div> : <React.Fragment>
                            <div className='drop-down' ref={ref}>
                                <div className="label" onClick={() => setDrop(!drop)}>
                                    {
                                        order?.paymentStatus.status === 'pending' && <span>{order?.orderStatus[0].type}</span>
                                    }
                                    {
                                        order?.orderStatus[1].isCompleted && !order?.orderStatus[2].isCompleted && <span>{order?.orderStatus[1].type}</span>
                                    }
                                    {
                                        order?.orderStatus[2].isCompleted && !order?.orderStatus[3].isCompleted && <span>{order?.orderStatus[2].type}</span>
                                    }
                                    {
                                        order?.orderStatus[3].isCompleted && <span style={{ width: order?.orderStatus[3].isCompleted ? '100%' : 'auto' }}>{order?.orderStatus[3].type}</span>
                                    }
                                    {!order?.orderStatus[3].isCompleted && <span className={`arrow ${drop ? 'active' : ''}`}></span>}
                                </div>
                                <div className={`drop-item ${drop ? 'active' : ''}`}>
                                    {
                                        order?.paymentStatus.status === 'pending' && !order?.orderStatus[1].isCompleted && <div onClick={() => handleUpdateStatus(order?._id, order?.orderStatus[1].type)}>{order?.orderStatus[1].type}</div>
                                    }
                                    {
                                        order?.orderStatus[1].isCompleted && !order?.orderStatus[2].isCompleted && <div onClick={() => handleUpdateStatus(order?._id, order?.orderStatus[2].type)}>{order?.orderStatus[2].type}</div>
                                    }
                                    {
                                        order?.orderStatus[2].isCompleted && !order?.orderStatus[3].isCompleted && <div onClick={() => handleUpdateStatus(order?._id, order?.orderStatus[3].type)}>{order?.orderStatus[3].type}</div>
                                    }
                                </div>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </td>
            <td>
                <Link to={`${ADMIN_PAGE}/order/${order?._id}`}><span><Icon.AiOutlineEye /></span></Link>
            </td>
        </tr>
    )
}
const Order = () => {
    const { dispatch, token, orders } = useStore()
    let navigate = useNavigate()
    let location = useLocation()
    let pageSize = 10;
    const [page, setPage] = useState(1)
    const [drop, setDrop] = useState(false)
    const [searchParam] = useSearchParams()
    const params = getStateFromUrl(location)
    const ref = useRef(null)
    useOnClickOutside(ref, () => setDrop(false))
    const state = {
        status: params.status || '',
        sort: params.sort || '',
        q: params.q || '',
        page: 1
    }

    let data = {
        pageSize,
        page: Number(searchParam.get('page')) || 1,
        keyword: searchParam.get('q') || '',
        status: searchParam.get('status') || '',
        sort: searchParam.get('sort') || ''
    }
    const onChange = (e, type) => {
        if (e.target.checked) {
            let query = {}
            if (type) {
                query = {
                    ...state,
                    [type]: e.target.value
                }
            }
            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });
        } else {
            let query = {}
            if (type === 'status') {
                query = {
                    ...state,
                    status: ''
                }
            }
            if (type === 'sort') {
                query = {
                    ...state,
                    sort: ''
                }
            }
            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });
        }
    }

    const onSearchReset = () => {
        const search = setStateToUrl({ reset: '' });
        navigate({
            pathname: location.pathname,
            search: `?${createSearchParams(search)}`,
        });
    };
    useEffect(() => {
        dispatch(getOrderAdmin({
            url: {
                pageSize,
                page: Number(searchParam.get('page')) || 1,
                keyword: searchParam.get('q') || '',
                status: searchParam.get('status') || '',
                sort: searchParam.get('sort') || ''
            }, token
        }))
    }, [dispatch, token, searchParam])
    return (
        <OrderWrap>
            <div>
                <div className="title-order">
                    <div>List Order</div>
                </div>
                <div className="feature-order">
                    <div className='form'>
                        <form>
                            <div>
                                <input type="text" placeholder='Tìm kiếm' name='keyword' />
                                <button><span><Icon.SearchOutlinedIcon /></span></button>
                            </div>
                        </form>
                    </div>
                    <div className="filter" ref={ref}>
                        <button onClick={() => setDrop(!drop)}><span><Icon.FilterAltIcon /></span></button>
                        <div className={`dropdown ${drop ? 'active' : ''}`}>
                            <div>
                                <h4>Sắp xếp</h4>
                                <div>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value={'price'}
                                            label={'Giá'}
                                            onChange={(e) => onChange(e, 'sort')}
                                            checked={searchParam.get('sort') === 'price' ? true : false}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value={'createdAt'}
                                            label={'Thời gian'}
                                            onChange={(e) => onChange(e, 'sort')}
                                            checked={searchParam.get('sort') === 'createdAt' ? true : false}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div>
                                <h4>Trạng thái đơn hàng</h4>
                                <div>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value={'pending'}
                                            label={'Đang xử lí'}
                                            onChange={(e) => onChange(e, 'status')}
                                            checked={searchParam.get('status') === 'pending' ? true : false}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value={'delivered'}
                                            label={'Giao thành công'}
                                            onChange={(e) => onChange(e, 'status')}
                                            checked={searchParam.get('status') === 'delivered' ? true : false}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value={'cancel'}
                                            label={'Đã bị hủy'}
                                            onChange={(e) => onChange(e, 'status')}
                                            checked={searchParam.get('status') === 'cancel' ? true : false}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value={'refund'}
                                            label={'Trả hàng / Hoàn tiền'}
                                            onChange={(e) => onChange(e, 'status')}
                                            checked={searchParam.get('status') === 'refund' ? true : false}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div>
                                <button onClick={onSearchReset}>Xóa bộ lọc</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-order">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Thời gian</th>
                                <th>Tên khách hàng</th>
                                <th>Địa chỉ</th>
                                <th>Số điện thoại</th>
                                <th>Tổng hóa đơn</th>
                                <th>Trạng thái đơn hàng</th>
                                <th>Cập nhật đơn hàng</th>
                                <th>Chi tiết đơn hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, ind) => (
                                    <Item key={order?._id} order={order} ind={ind} url={data} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </OrderWrap>
    )
}

export default Order