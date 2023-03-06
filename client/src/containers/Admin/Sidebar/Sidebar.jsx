import React, { useRef, useState } from 'react'
import SidebarWrap from './index.style'
import * as Icon from '../../../library/icons/index'
import { Link } from 'react-router-dom'
import { ACCESSORIES_PAGE, CATEGORY_PAGE, DISCOUNT_PAGE, ORDER_PAGE_ADMIN, PRODUCT_ADMIN_PAGE } from '../../../setting/constants'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import useWindowSize from '../../../library/hooks/useWindowSize'
import { SideData } from './SidebarData'

const Item = ({ item }) => {
  const [drop, setDrop] = useState(false)
  const showNav = () => setDrop(!drop)
  return (
    <div className='feature'>
      {
        item?.path ? <Link to={item?.path}>
          <div className='feature-title'>
            <div>
              {item?.icon}
              {item?.title}
            </div>
          </div>
        </Link> : <div className='feature-title' onClick={item?.children && showNav}>
          <div>
            {item?.icon}
            {item?.title}
          </div>
          {
            item?.children && drop ? item.iconUp : item.iconDown
          }
        </div>
      }
      {
        drop && item?.children && item?.children?.map((c, ind) => (
          <div key={ind} className="feature-content">
            <div className="item">
              <Link to={c.path}>{c.title}</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const Sidebar = ({ open, setOpen }) => {
  const ref = useRef(null)
  useOnClickOutside(ref, () => setOpen(false))
  return (
    <SidebarWrap className={`${open ? 'active' : ''}`} ref={ref}>
      <div className="logo">
        <div>logo</div>
        <div>
          <button onClick={() => setOpen(false)}><Icon.CloseOutlinedIcon fontSize='medium' /></button>
        </div>
      </div>
      <div className='nav'>
        <div className="nav-header">
          <div className="title">
            Dashboard
          </div>
        </div>
        <div className="nav-header">
          <div className="title">
            Applications
          </div>
          <div className="content">
            {
              SideData.map((item, index) => (
                <Item key={index} item={item} />
              ))
            }
            {/* <div className='feature'>
              <div className='feature-title'>
                <div>
                  <span><Icon.PeopleRoundedIcon /></span>
                  <div>User</div>
                </div>
                <span><Icon.KeyboardArrowDownSharpIcon /></span>
              </div>
              <div className="feature-content">
                <div className="item">
                  <Link to='/admin'>Danh sách người dùng</Link>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className='feature-title'>
                <div>
                  <span><Icon.LocalMallOutlinedIcon /></span>
                  <div>E-commerce</div>
                </div>
                <span><Icon.KeyboardArrowDownSharpIcon /></span>
              </div>
              <div className="feature-content">
                <div className="item">
                  <Link to={PRODUCT_ADMIN_PAGE}>Danh sách sản phẩm</Link>
                </div>
                <div className="item">
                  <Link to={CATEGORY_PAGE}>Categories</Link>
                </div>
                <div className="item">
                  <Link to={ORDER_PAGE_ADMIN}>Đơn hàng</Link>
                </div>
                <div className="item">
                </div>
              </div>
            </div>
            <div className="feature">
              <Link to={DISCOUNT_PAGE}>
                <div className='feature-title'>
                  <div>
                    <span><Icon.DiscountIcon /></span>
                    <div>Discount</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="feature">
              <div className='feature-title'>
                <div>
                  <span><Icon.PersonIcon /></span>
                  <div>Admin</div>
                </div>
              </div>
            </div>
            <div className='feature'>
              <Link to={ACCESSORIES_PAGE}>
                <div className='feature-title'>
                  <div>
                    <span><Icon.LogoutRoundedIcon /></span>
                    <div>Accessories</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className='feature'>
              <div className='feature-title'>
                <div>
                  <span><Icon.LogoutRoundedIcon /></span>
                  <div>Logout</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </SidebarWrap>
  )
}

export default Sidebar