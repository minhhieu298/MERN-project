import React from 'react'
import { ResetWrap } from './index.style'
import Container from '../../components/UI/container/Container'
import * as Icon from '../../library/icons/index'

const ResetPassword = () => {
    return (
        <ResetWrap>
            <div className="header-reset">
                <Container fluid={true}>
                    <div>ResetPassword</div>
                </Container>
            </div>
            <div className="body-reset">
                <Container fluid={true}>
                    <form>
                        <div>
                            <div className="form-group">
                                <div><span><Icon.KeyboardBackspaceIcon fontSize='large' /></span></div>
                                <h4>Đặt lại mật khẩu</h4>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input type="text" />
                                </div>
                                {/* <div>eoradsas</div> */}
                                <button disabled>check</button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
        </ResetWrap>
    )
}

export default ResetPassword