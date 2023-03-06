import styled from "styled-components";

const NavWrap = styled.nav`
    display: none;
    width: 100%;
    padding: 0 25px;
    min-height: 82px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E6E6E6;
    background-color: #ffffff;
    @media (min-width: 991px) {
        display: flex;
    }
    &.is_transparent{
        background: transparent;
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 999;
        border-bottom: 0;
        background-color: transparent;
        transition: all 0.3s ease-out;
    }
    &.is_default{
        background: transparent;
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 999;
        background-color: transparent;
        transition: all 0.3s ease-out;
    }
`

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 48px;
  @media (min-width: 991px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MenuArea = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

export const MenuWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const AuthWrapper = styled.div`
    margin-left: 74px;
    height: 100%;
    display: flex;
    align-items: center;
`

export const AvatarWrapper = styled.div`
    margin-left: 46px;
    height: 100%;
    display: flex;
    align-items: center;
    .avatar-dropdown{
        position: relative;
        .avatar{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(0,0,0,0.14);
            overflow: hidden;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        .content-dropdown{
            position: absolute;
            background: #fff;
            min-width: 180px;
            right: 0;
            /* overflow: ; */
            top: 45px;
            border-radius: 2px;
            border: 1px solid rgba(0,0,0,0.14);
            transform: rotateX(90deg);
            visibility: hidden;
            opacity: 0;
            transform-origin: center top 0;
            transition: all 0.5s ease 0s;
            z-index: 999;
            &.active{
                transform: rotateX(0);
                visibility: visible;
                opacity: 1;
            }
            ul{
                display: block;
                li{
                    color: #2C2C2C;
                    font-size: 15px;
                    line-height: 18px;
                    margin: 4px 0 8px;
                    font-weight: 400;
                    height: auto;
                    /* >span{
                        display: inline-block;
                    } */
                    a,span{
                        display: block;
                        padding: 8px 16px;
                        transition: all 0.5s ease 0s;
                        cursor: pointer;
                    }
                    >a{
                        &:hover{
                            color: #008489;
                        }
                        span{
                            display: inline-block;
                            padding: 0;
                        }
                    }
                }
            }
        }
    }
`

export default NavWrap