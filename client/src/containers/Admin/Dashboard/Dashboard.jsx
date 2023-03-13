import React from 'react'
import DashboardWrap from './index.style'
import * as Icon from '../../../library/icons/index'

const Dashboard = () => {
  return (
    <DashboardWrap>
      {/* <Container fluid={true}> */}
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
        </div>
      </div>
      {/* </Container> */}
    </DashboardWrap>
  )
}

export default Dashboard