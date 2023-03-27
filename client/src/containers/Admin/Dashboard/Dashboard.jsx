import React, { useEffect, useState } from 'react'
import DashboardWrap from './index.style'
import * as Icon from '../../../library/icons/index'
import { CChart } from '@coreui/react-chartjs'
import useStore from '../../../library/hooks/useStore'
import { getChartData, getOrderAdmin } from '../../../redux/actions/order.action'
import { numberWithCommas } from '../../../library/helper/numberComas'
import { convertUTCDateToLocalDate } from '../../../library/helper/getTime'
import { Pagination, Stack } from '@mui/material'

const Dashboard = () => {
  const { dispatch, token, chart, orders, totalOrder } = useStore()
  let pageSize = 10;
  const [page, setPage] = useState(1)

  const handleChange = (e, p) => {
    setPage(p)
  }
  useEffect(() => {
    dispatch(getChartData(token))
  }, [dispatch, token])

  useEffect(() => {
    dispatch(getOrderAdmin({
      url: {
        pageSize,
        page: page,
      }, token
    }))
  }, [dispatch, page, pageSize, token])
  return (
    <DashboardWrap>
      <div className="content">
        <div className="content_head">
          <h1>Dashboard</h1>
        </div>
        <div className="content_body">
          <div className="row">
            <div className="col-3">
              <div>
                <p>Tổng số đơn hàng</p>
                <span></span>
              </div>
            </div>
            <div className="col-3">
              <div>
                <p>Tổng số sản phẩm</p>
                <span></span>
              </div>
            </div>
            <div className="col-3">
              <div>
                <p>Doanh thu</p>
                <span></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div>
                <div className="left">
                  <span><Icon.LocalMallOutlinedIcon /></span>
                </div>
                <div className="right">
                  <p>Tổng số đơn hàng</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <div className="left">
                  <span><Icon.AutorenewIcon /></span>
                </div>
                <div className="right">
                  <p>Đơn hàng đang chờ xác thực</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <div className="left">
                  <span><Icon.LocalShippingIcon /></span>
                </div>
                <div className="right">
                  <p>Đơn hàng đang vận chuyển</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <div className="left">
                  <span><Icon.DoneIcon /></span>
                </div>
                <div className="right">
                  <p>Đơn hàng giao thành công</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <CChart
                type="doughnut"
                data={{
                  labels: ['Đơn hàng đang chờ xác thực', 'Đơn hàng đang vận chuyển', 'Đơn hàng giao thành công'],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                      data: [chart?.pending, chart?.shipped, chart?.delivered],
                    },
                  ],
                }}
              />
            </div>
            <div className="col-8">
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Thời gian</th>
                      <th>Địa chỉ giao hàng</th>
                      <th>Số điện thoại</th>
                      <th>Phương thức thanh toán</th>
                      <th>Tổng giá trị hóa đơn</th>
                      <th>Trạng thái đơn hàng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders?.map(order => (
                        <tr key={order?._id}>
                          <td>
                            <span>{`${convertUTCDateToLocalDate(new Date(order?.createdAt))}`}</span>
                          </td>
                          <td>
                            <span>{`${order?.addressId.address},${order?.addressId.city},${order?.addressId.district},${order?.addressId.state}`}</span>
                          </td>
                          <td>
                            <span>{order?.addressId.phone}</span>
                          </td>
                          <td>
                            <span>{order?.payment_method}</span>
                          </td>
                          <td>
                            <span>{numberWithCommas(Number(order?.totalAmount))}</span>
                          </td>
                          <td>
                            <span>{order?.paymentStatus.status}</span>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className="pagination">
                {
                  orders?.length > 0 && <div className="page">
                    <Stack>
                      <Pagination count={totalOrder?.totalPage || 1} page={page} defaultPage={1} onChange={handleChange} siblingCount={0} color="primary" />
                    </Stack>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrap>
  )
}

export default Dashboard