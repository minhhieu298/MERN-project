import React, { useEffect, useRef, useState } from 'react'
import { numberWithCommas } from '../../../library/helper/numberComas'
import useStore from '../../../library/hooks/useStore'
import { getOrderUser, updateStatusPayment } from '../../../redux/actions/order.action'
import { Container } from './index.style'
import * as Icon from '../../../library/icons/index'
import { createSearchParams, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { getStateFromUrl, setStateToUrl } from '../../Products/Search/url_handler'
import useWindowSize from '../../../library/hooks/useWindowSize'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import emptyOrder from '../../../assets/emty_order.png'

const AgentOrder = () => {
  const { dispatch, orders, token, auth } = useStore()
  const [searchParams] = useSearchParams()
  let location = useLocation()
  let navigate = useNavigate()
  const { width } = useWindowSize()
  const [drop, setDrop] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setDrop(false))

  const params = getStateFromUrl(location)
  const state = {
    type: params.type || ''
  }
  const handleUpdateStatus = async (orderId) => {
    dispatch(updateStatusPayment(orderId, token))
  }

  const onChange = (e, type) => {
    let query = {}
    if (type) {
      query = {
        type: e
      }
    }
    const search = setStateToUrl(query);
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams(search)}`,
    });
  }

  const onChangeMoble = (e, type) => {
    if (e.target.checked) {
      let query = {}
      if (type === 'type') {
        query = {
          type: e.target.value
        }
      } else {
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
      if (type === 'type') {
        query = {
          type: ''
        }
      }
      const search = setStateToUrl(query);
      navigate({
        pathname: location.pathname,
        search: `?${createSearchParams(search)}`,
      });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    const search = setStateToUrl({
      keyword: data.keyword
    });
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams(search)}`,
    });
  }

  useEffect(() => {
    dispatch(getOrderUser({
      url: {
        type: searchParams.get('type') || '',
        keyword: searchParams.get('keyword') || ''
      },
      token
    }))
  }, [dispatch, token, searchParams])
  return (
    <Container>
      <div className="order">
        <div className="order-top">
          <div onClick={() => onChange(0, 'type')}
            style={{ borderBottom: searchParams.get('type') === null ? '2px solid #ee4d2d' : 'none', color: searchParams.get('type') === null ? '#ee4d2d' : '#000' }}
          >Tất cả</div>
          <div onClick={() => onChange(1, 'type')}
            style={{ borderBottom: searchParams.get('type') === '1' ? '2px solid #ee4d2d' : 'none', color: searchParams.get('type') === '1' ? '#ee4d2d' : '#000' }}>Đang xử lí</div>
          <div onClick={() => onChange(2, 'type')}
            style={{ borderBottom: searchParams.get('type') === '2' ? '2px solid #ee4d2d' : 'none', color: searchParams.get('type') === '2' ? '#ee4d2d' : '#000' }}
          >Vận chuyển</div>
          <div onClick={() => onChange(3, 'type')}
            style={{ borderBottom: searchParams.get('type') === '3' ? '2px solid #ee4d2d' : 'none', color: searchParams.get('type') === '3' ? '#ee4d2d' : '#000' }}
          >Đang giao</div>
          <div onClick={() => onChange(4, 'type')}
            style={{ borderBottom: searchParams.get('type') === '4' ? '2px solid #ee4d2d' : 'none', color: searchParams.get('type') === '4' ? '#ee4d2d' : '#000' }}
          >Hoàn Thành</div>
          <div onClick={() => onChange(5, 'type')}
            style={{ borderBottom: searchParams.get('type') === '5' ? '2px solid #ee4d2d' : 'none', color: searchParams.get('type') === '5' ? '#ee4d2d' : '#000' }}
          >Đã hủy</div>
        </div>
        {/* <div className="order-mobile" ref={ref}>
            <div className="label" onClick={() => setDrop(!drop)}>
              <div className="text">heh</div>
              <div className="arrow"></div>
            </div>
            <div className={`content ${drop ? 'active' : ''}`}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  value='1'
                  label='Đang xử lí'
                  checked={searchParams.get('type') === '1' ? true : false}
                  onChange={(e) => onChangeMoble(e, 'type')}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value='2'
                  label='Vận chuyển'
                  checked={searchParams.get('type') === '2' ? true : false}
                  onChange={(e) => onChangeMoble(e, 'type')}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value='3'
                  label='Đang giao'
                  checked={searchParams.get('type') === '3' ? true : false}
                  onChange={(e) => onChangeMoble(e, 'type')}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value='4'
                  label='Hoàn Thành'
                  checked={searchParams.get('type') === '4' ? true : false}
                  onChange={(e) => onChangeMoble(e, 'type')}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value='5'
                  label='Đã hủy'
                  checked={searchParams.get('type') === '5' ? true : false}
                  onChange={(e) => onChangeMoble(e, 'type')}
                />
              </FormGroup>
            </div>
          </div> */}
        {
          searchParams.get('type') === null && <div className="order-search">
            <div>
              <form onSubmit={handleSubmit}>
                <button><span><Icon.SearchOutlinedIcon /></span></button>
                <input type="text" placeholder='Tìm kiếm theo tên sản phẩm' name='keyword' />
              </form>
            </div>
          </div>
        }
        <div className="order-middle">
          <div className="list-order">
            {
              orders.length === 0 ? <div className="container-empty">
                <div className="list-order-empty" style={{ backgroundImage: `url(${emptyOrder})` }}></div>
                <div className="text">Chưa có đơn hàng</div>
              </div> : <>
                {
                  orders?.map(order => (
                    <div key={order?._id} className="list-order-item">
                      <div className="list-order-item-top">
                        <div>
                          <div><span>ID:{order?._id}</span></div>
                          <div>
                            {
                              order?.paymentStatus?.status === 'cancel' ? <div className='cancel'>Đã hủy</div> :
                                order?.paymentStatus?.status === 'refund' ? <div className="refund">Trả lại</div> :
                                  (order?.paymentStatus?.status === 'completed' && order?.orderStatus[3].isCompleted) ? <div className='delivered'>
                                    <Link to={`/profile/order/${order?._id}`}>
                                      <span>Đơn giao hàng thành công</span>
                                    </Link>
                                    <div>Hoàn thành</div>
                                  </div> : (order?.orderStatus[1].isCompleted || order?.orderStatus[2].isCompleted) && <div className="pending">Đơn hàng đang được vận chuyển</div>

                            }
                            {
                              order?.paymentStatus?.status === 'pending' && <div className="pending">Đăng chờ xác thực đơn hàng</div>
                            }
                          </div>
                        </div>
                        <div></div>
                        <div>
                          {
                            order?.orderItems?.map(item => (
                              <div key={item?._id}>
                                <div className='infor'>
                                  <img src={item?.productId?.image} alt="" />
                                  <div>
                                    <span>{item?.name} - {item.size} - {item.color}</span>
                                    <span>da</span>
                                    <span>{`x${item?.purchaseQty}`}</span>
                                    {width < 576 && <p className="price">{`₫${numberWithCommas(Number(item?.payablePrice))}`}</p>}
                                  </div>
                                </div>
                                {
                                  width > 576 && <div className="price">
                                    <span>{`₫${numberWithCommas(Number(item?.payablePrice))}`}</span>
                                  </div>
                                }
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div className="list-order-item-middle">
                        <div></div>
                        <div></div>
                      </div>
                      <div className="list-order-item-bottom">
                        <div>
                          <div>Thành tiền:</div>
                          <div>{`₫${numberWithCommas(order?.totalAmount)}`}</div>
                        </div>
                      </div>
                      <div className="list-order-item-btn">
                        <div>
                          {
                            order?.paymentStatus?.status === 'cancel' && <span>{order?.paymentStatus?.user === auth?._id ? 'Đã hủy bởi bạn' : 'Đã hủy bởi của hàng'}</span>
                          }
                        </div>
                        <div>
                          {
                            order?.paymentStatus?.status === 'pending' ? <div>
                              <button className='cancel' onClick={() => handleUpdateStatus(order?._id)}>Hủy đơn hàng</button>
                            </div> :
                              order?.paymentStatus?.status === 'refund' ? <div>
                                <button className='repurchase'>Mua lại</button>
                                <button className='infor-repurchase' onClick={() => navigate(`/profile/order/${order?._id}`, { replace: true })}>Chi Tiết Đơn Hủy</button>
                              </div>
                                : order?.paymentStatus?.status === 'cancel' ? <div>
                                  <button className='infor-repurchase' onClick={() => navigate(`/profile/order/${order?._id}`, { replace: true })}>Chi Tiết Đơn Hủy</button>
                                </div> : order?.paymentStatus?.status === 'completed' && order?.orderStatus[3]?.isCompleted ? <div>
                                  <button className='repurchase'>Mua lại</button>
                                </div>
                                  : ''
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
              </>
            }
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AgentOrder