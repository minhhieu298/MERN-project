import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Container from '../../../components/UI/container/Container'
import AgentWrap, { AvatarWrap, Box, Grid, Item, ItemWrap } from './index.style'
import * as Icon from '../../../library/icons/index'
import { ADDRESS_PAGE, ORDER_PAGE, PASSWORD_PAGE, PROFILE_PAGE } from '../../../setting/constants'
import useStore from '../../../library/hooks/useStore'

const data = [
  {
    label: 'Tài khoản của tôi',
    path: PROFILE_PAGE,
    icon: <Icon.PersonIcon />,
    children: [
      {
        label: 'Hồ sơ',
        path: PROFILE_PAGE
      },
      {
        label: 'Địa chỉ',
        path: ADDRESS_PAGE
      },
      {
        label: 'Đổi Mật khẩu',
        path: PASSWORD_PAGE
      }
    ]
  },
  {
    label: 'Đơn mua',
    path: ORDER_PAGE,
    icon: <Icon.ListAltIcon />,
  }
]
const ItemLink = () => {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      {
        data.map(item => (
          <Item key={item.label}>
            <Link to={item.path} onClick={() => setOpen(!open)}>{item.icon}<span>{item.label}</span></Link>
            {
              item?.children && <div className={`drop-link ${open ? 'active' : ''}`}>
                <ul>
                  {
                    item?.children?.map(c => (
                      <li key={c.label}><Link to={c.path}>{c.label}</Link></li>
                    ))
                  }
                </ul>
              </div>
            }
          </Item>
        ))
      }
    </React.Fragment>
  )
}
const AgentSetting = () => {
  const { auth } = useStore()
  return (
    <AgentWrap>
      <Container fluid={true}>
        <Box>
          <Grid left={true}>
            <AvatarWrap>
              <div className='avatar'>
                <Link to={PROFILE_PAGE}><img src={auth.avatar} alt="" /></Link>
              </div>
              <div className='name'>
                <div className="name-title">{auth.username}</div>
                <div className="name-edit">
                  <Link to={PROFILE_PAGE}><Icon.EditIcon fontSize='small' /><span>sửa hồ sơ</span></Link>
                </div>
              </div>
            </AvatarWrap>
            <ItemWrap>
              <ItemLink />
            </ItemWrap>
          </Grid>
          <Grid right={true}>
            <Outlet />
          </Grid>
        </Box>
      </Container>
    </AgentWrap>
  )
}

export default AgentSetting