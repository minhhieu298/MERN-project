import React from 'react'
import { Link } from 'react-router-dom'
import { ADMIN_PAGE, HOME_PAGE, MEN_CATEGORY_PRODUCT_PAGE, PRODUCT_PAGE, WOMEN_CATEGORY_PRODUCT_PAGE } from '../../../setting/constants'
import { MainMenuWrap } from './index.style'

const MainMenu = ({ isAdmin }) => {
    return (
        <MainMenuWrap>
            <ul>
                <li>
                    <Link to={HOME_PAGE}>Home</Link>
                </li>
                {/* <li>
                    <Link to={PRODUCT_PAGE}>Products</Link>
                </li> */}
                <li>
                    <Link to={MEN_CATEGORY_PRODUCT_PAGE}>Men</Link>
                </li>
                <li>
                    <Link to={WOMEN_CATEGORY_PRODUCT_PAGE}>Women</Link>
                </li>
                {
                    isAdmin && <li>
                        <Link to={ADMIN_PAGE}>Dashboard</Link>
                    </li>
                }
            </ul>
        </MainMenuWrap>
    )
}

export default MainMenu