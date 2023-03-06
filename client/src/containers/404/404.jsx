import Container from "../../components/UI/container/Container"
import NotFoundWrap from "./index.style"
import image from '../../assets/404@2x.png'
import { Link } from 'react-router-dom'
import { HOME_PAGE } from "../../setting/constants"

const NotFoundpage = () => {
    return (
        <NotFoundWrap>
            <Container fluid={true}>
                <div className="container">
                    <img src={image} alt="" />
                    <div className="text">
                        <Link to={HOME_PAGE}>Quay lại trang chủ</Link>
                    </div>
                </div>
            </Container>
        </NotFoundWrap>
    )
}

export default NotFoundpage