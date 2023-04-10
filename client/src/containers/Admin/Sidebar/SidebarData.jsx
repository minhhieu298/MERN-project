import * as Icon from '../../../library/icons/index'
import { CATEGORY_PAGE, CHAT_USER, DISCOUNT_PAGE, ORDER_PAGE_ADMIN, PASSWORD_ADMIN, PRODUCT_ADMIN_PAGE, PROFILTE_ADMIN, USER_ADMIN_PAGE } from '../../../setting/constants'

export const SideData = [
    {
        title: <div>Thông tin người dùng</div>,
        icon: <span><Icon.PeopleRoundedIcon /></span>,
        path: USER_ADMIN_PAGE
    },
    {
        title: 'E-commerce',
        icon: <Icon.LocalMallOutlinedIcon />,
        iconDown: <Icon.KeyboardArrowDownSharpIcon />,
        iconUp: <Icon.KeyboardArrowUpSharpIcon />,
        children: [
            {
                title: 'Danh sách sản phẩm',
                path: PRODUCT_ADMIN_PAGE
            },
            {
                title: 'Danh mục',
                path: CATEGORY_PAGE
            },
            {
                title: 'Đơn hàng',
                path: ORDER_PAGE_ADMIN
            }
        ]
    },
    {
        title: <div>Nhắn tin</div>,
        icon: <span><Icon.BsFillChatFill /></span>,
        path: CHAT_USER
    },
    {
        title: <div>Giảm giá</div>,
        icon: <span><Icon.PeopleRoundedIcon /></span>,
        path: DISCOUNT_PAGE
    },
    {
        title: <div>Cài đặt</div>,
        icon: <span><Icon.AdminPanelSettingsIcon /></span>,
        path: PROFILTE_ADMIN
    },
    // {
    //     title: <div>Logout</div>,
    //     icon: <span> <Icon.LogoutRoundedIcon /></span>,
    // }
]