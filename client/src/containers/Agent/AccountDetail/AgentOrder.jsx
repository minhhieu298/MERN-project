import React, { useEffect } from 'react'
import { numberWithCommas } from '../../../library/helper/numberComas'
import useStore from '../../../library/hooks/useStore'
import { getOrderUser, updateStatusPayment } from '../../../redux/actions/order.action'
import { Container } from './index.style'
import * as Icon from '../../../library/icons/index'
import { createSearchParams, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { ORDER_PAGE, PROFILE_PAGE } from '../../../setting/constants'
import { getStateFromUrl, setStateToUrl } from '../../Products/Search/url_handler'

const AgentOrder = () => {
  const { dispatch, orders, token, auth } = useStore()
  const [searchParams] = useSearchParams()
  let location = useLocation()
  let navigate = useNavigate()

  const handleUpdateStatus = async (orderId) => {
    dispatch(updateStatusPayment(orderId, token))
  }

  // const params = getStateFromUrl(location)
  // const state = {
  //   type: params.type || ''
  // }
  const onChange = (e, type) => {
    console.log(e, type);
    let query = {}
    // let data = {}
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
        {
          searchParams.get('type') === null && <div className="order-search">
            <div>
              <form onSubmit={handleSubmit}>
                <button><span><Icon.SearchOutlinedIcon /></span></button>
                <input type="text" placeholder='Tìm kiếm sản phẩm theo ID' name='keyword' />
              </form>
            </div>
          </div>
        }
        <div className="order-middle">
          <div className="list-order">
            {
              orders?.map(order => (
                <div key={order?._id} className="list-order-item">
                  <div className="list-order-item-top">
                    <div>
                      <div>ID:<span>{order?._id}</span></div>
                      <div>
                        {
                          order?.paymentStatus?.status === 'cancel' ? <div className='cancel'>Đã hủy</div> :
                            order?.paymentStatus?.status === 'refund' ? <div className="refund">Trả lại</div> :
                              (order?.paymentStatus?.status === 'completed' && order?.orderStatus[3].isCompleted) ? <div className='delivered'>
                                <Link to={`/profile/order/${order?._id}`}>
                                  {/* <span><Icon.MdOutlineLocalShipping /></span> */}
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
                                <span>{item?.productId?.name}</span>
                                <span>da</span>
                                <span>{`x${item?.purchaseQty}`}</span>
                              </div>
                            </div>
                            <div className="price">
                              <span>{`₫${numberWithCommas(Number(item?.payablePrice))}`}</span>
                            </div>
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
                              <button className='repurchase'>Mua lại</button>
                              <button className='infor-repurchase' onClick={() => navigate(`/profile/order/${order?._id}`, { replace: true })}>Chi Tiết Đơn Hủy</button>
                            </div> : order?.paymentStatus?.status === 'completed' && order?.orderStatus[3]?.isCompleted ? <div>
                              <button className='repurchase'>Mua lại</button>
                            </div>
                              : ''
                      }
                      {/* <button>Mua lại</button> */}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AgentOrder