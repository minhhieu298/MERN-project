import React, { useRef, useState } from 'react'
import SidebarWrap from './index.style'
import * as Icon from '../../../library/icons/index'
import { Link } from 'react-router-dom'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { SideData } from './SidebarData'
import useStore from '../../../library/hooks/useStore'
import { logOut } from '../../../redux/actions/auth.action'

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
  const { dispatch } = useStore()
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
            <div className='feature'>
              <div className='feature-title' onClick={() => dispatch(logOut())}>
                <div>
                  <span><Icon.LogoutRoundedIcon /></span>
                  <div>Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarWrap>
  )
}

export default Sidebar