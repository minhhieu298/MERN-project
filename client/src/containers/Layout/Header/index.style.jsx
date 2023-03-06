import styled, { css } from 'styled-components'

const HeaderContainer = styled.header`
    width: 100%;
    /* z-index: 10001; */
    /* transform: translate3d(0px, 0px, 0px); */
    &.is_sticky{
        position: fixed;
        z-index: 10001;
        top: 0px;
        /* bottom: 0; */
        width: 100%;
        /* transform: translate3d(0px, -1px, 0px); */
        >nav{
            &.is_transparent,&.transparent{
                background: #fff;
                box-shadow: 0 0 20px rgb(0 0 0 / 10%);
            }
            &.is_default,&.default{
                background: #fff;
                box-shadow: 0 0 20px rgb(0 0 0 / 10%);
            }
            >div{
                color: #000;
                >div{
                    &:last-child{
                        .menu-wrap{
                            >div{
                                >ul{
                                    >li{
                                        >a{
                                            color: #000;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &.transparent{
                .menu-wrap{
                    .btn{
                        >button{
                            color: #000;
                        }
                    }
                }
            }
            &.is_transparent{
                >div{
                    >div{
                        &:last-child{
                            >div{
                                &:last-child{
                                    >div{
                                        ul{
                                            li{
                                                span{
                                                    a{
                                                        color: #000;
                                                    }
                                                }
                                                &:last-child{
                                                    span {
                                                        a{
                                                            color: #fff;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    >nav{
        &.is_default{
            background: #fff;
            >div{
                color: #000;
                >div{
                    &:last-child{
                        .menu-wrap{
                            >div{
                                ul{
                                    li{
                                        a{
                                            color: #000;
                                        }
                                    }
                                }
                            }
                        }
                        >div{
                            &:last-child{
                                >div{
                                    ul{
                                        li{
                                            span{
                                                a{
                                                    color: #000;
                                                }
                                            }
                                            &:last-child{
                                                span {
                                                    a{
                                                        color: #fff;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        >div{
            color: #fff;
            >div{
                &:last-child{
                    .menu-wrap{
                        >div{
                            >ul{
                                >li{
                                    >a{
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        &.default{
            .logo{
                color: #000;
            }
            .menu-wrap{
                .btn{
                    >button{
                        color: #000;
                    }
                }
            }
            
        }
    }
`

export const Sticky = styled.div``

export const MobileNav = styled.nav`
    display: flex;
    padding: 0 25px;
    align-items: center;
    justify-content: space-between;
    min-height: 82px;
    width: 100%;
    position: relative;
    border-bottom: 0;

    &.transparent {
        position: fixed;
        z-index: 9999;
        transition: all 0.3s ease-out;
        left: 0;
        top: 0;
        border-bottom: 0;
    }

    &.default {
        position: fixed;
        border-bottom: 1px solid #E6E6E6;
        background-color: #ffffff;
        transition: all 0.3s ease-out;
        left: 0;
        top: 0;
        z-index: 9999;
    }
    .menu-wrap{
        .btn{
            .search-content{
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                width: 100%;
                background: rgba(0,0,0,0.5);
                backdrop-filter: blur(10px);
                pointer-events: none;
                visibility: hidden;
                opacity: 0;
                transition: all 0.5s ease 0s;
                &.active{
                    visibility: visible;
                    opacity: 1;
                    pointer-events: auto;
                    /* .search-box{
                        top: 0;
                        opacity: 1;
                        visibility: visible;
                    } */
                }
                .search-box{
                    width: 100%;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    background: #fff;
                    padding: 10px;
                    position: absolute;
                    form{
                        flex: 1;
                        position: relative;
                        div{
                            width: 100%;
                            padding: 5px;
                            input{
                                width: 100%;
                                height: 38px;
                                border-radius: 50px;
                                border: 1px solid rgba(0,0,0,0.14);
                                padding: 0 40px 0 20px;
                            }
                        }
                        >button{
                            position: absolute;
                            top: 50%;
                            right: 20px;
                            transform: translateY(-50%);
                        }
                    }
                }
            }
            >button{
                margin: 0 5px;
                color: #fff;
                &:first-child{
                    margin-left: 0;
                }
                &:last-child{
                    margin-right: 0;
                }
            }
        }
        .mobile-layout{
            position: fixed;
            width: 100%;
            height: 100%;
            background: none;
            top: 0;
            right: 0;
            pointer-events: none;
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s ease 0s;
            z-index: 9999999;

            &.active{
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                background: rgba(0,0,0,0.5);
                >div{
                    visibility: visible;
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            .close-btn{
                display: flex;
                justify-content: flex-end;
                padding: 20px 15px 12px;
                height: 70px;
                >button{
                    border: 0;
                    padding: 0;
                    background-color: transparent;
                    font-size: 38px;
                    line-height: 1;
                    height: auto;
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    color: #909090;
                    transition: all 0.3s ease;
                    span{
                        color: #000;
                    }
                }
            }
            >div{
                position: absolute;
                width: 285px;
                /* height: 100%; */
                background: #fff;
                top: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                visibility: hidden;
                transform: translateX(100%);
                transition: all 0.5s ease 0s;
                .avatar{
                    border: 0;
                    display: flex;
                    margin: 0 0 30px;
                    padding: 25px 20px;
                    align-items: center;
                    background-color: #F7F7F7;
                    >a{
                        display: block;
                        width: 100%;
                        >div{
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            img{
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                                object-fit: cover;
                            }
                            h3{
                                flex: 1;
                                font-weight: 500;
                                font-size: 15px;
                            }
                        }
                    }
                }
                .form{
                    border: 0;
                    display: flex;
                    margin: 0 0 30px;
                    padding: 25px 20px;
                    align-items: center;
                    background-color: #F7F7F7;
                    li{
                        line-height: 1;
                        span{
                            a{
                                display: inline-flex;
                                align-items: center;
                                justify-content: center;
                                padding: 12px 15px;
                                border-radius: 3px;
                                font-size: 15px;
                                font-weight: 700;
                                color: #2C2C2C;
                            }
                        }
                        &:last-child{
                            span{
                                a{
                                    color: #ffffff;
                                    background-color: #008489;
                                    transition: opacity 0.2s ease;
                                }
                            }
                        }
                    }
                }
                .main-menu{
                    padding-top: 30px;
                    li{
                        display: block;
                        height: 40px;
                        line-height: 40px;
                        cursor: pointer;
                        margin: 4px 0 8px;
                        a{
                            display: block;
                            padding: 0 40px;
                        }
                        span{
                            display: block;
                            color: #000;
                            padding: 0 40px;
                        }
                    }
                }
            }
        }
    }
`

export const DesktopWrap = styled.nav`
    /* --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: grid;
    margin-left: calc(var(--bs-gutter-x)*-.5);
    margin-right: calc(var(--bs-gutter-x)*-.5);
    margin-top: calc(var(--bs-gutter-y)*-1);
    grid-template-columns: repeat(12,1fr);
    line-height: 27px; */
    
`

export const SidebarWrap = styled.div`
    position: fixed;
    top: 0;
    left: auto;
    right: 0;
    max-width: 100%;
    width: 400px;
    height: 100%;
    pointer-events: none;
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease 0s;
    transform: translateX(100%);
    padding-left: 60px;
    &.active{
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateX(0);
    }
    >button{
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sidebar {
        height: 100%;
        background-color: #fff;
        box-shadow: 0 0 87px 0 rgb(0 0 0 / 9%);
        height: 100%;
        overflow: auto;
        .wrap{
            /* display: flex;
            flex-direction: column; */
            height: 100%;
            padding: 90px 35px 0;
            .search{
                background-color: #e6e6e6;
                left: 0;
                margin-left: 60px;
                padding: 10px;
                position: absolute;
                top: 0;
                width: calc(100% - 60px);
                z-index: 9;
                height: 60px;
                form{
                    position: relative;
                    input{
                        background: #e6e6e6;
                        border: none;
                        color: #222;
                        display: block;
                        font-size: 16px;
                        padding: 9px 50px 9px 25px;
                        width: 100%;
                        height: 40px;
                    } 
                    button{
                        background: none;
                        border: none;
                        color: #aaa;
                        padding: 0;
                        position: absolute;
                        right: 20px;
                        top: 50%;
                        transform: translateY(-50%);
                    }            
                }
            }
            .inner-content{
                .form{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 20px;
                    border-radius: 3px;
                    /* background: rgba(0,0,0,0.05); */
                    
                    .avatar{
                        padding: 5px;
                        background: rgba(0,0,0,0.05);
                        width: 100%;
                        a{
                            >div{
                                display: flex;
                                align-items: center;
                                img{
                                    width: 40px;
                                    height: 40px;
                                    object-fit: cover;
                                    flex-shrink: 0;
                                    border-radius: 50%;
                                    }
                                    .user{
                                        flex: 1;
                                        margin-left: 10px;
                                    }
                            }
                        }
                    }
                }
                .menu-item{
                    margin-bottom: 20px;
                    ul{
                        display: block;
                        li{
                            height: 40px;
                            display: flex;
                            align-items: center;
                            a{
                                width: 100%;
                            }
                        }
                    }
                }
                .logout{
                    height: 40px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    span{
                        width: 100%;
                    }
                }
            }
        }
    }
`

export const MainMenuWrap = styled.div`
    height: 100%;
    ul{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        li{
            margin: 0 14px;
            padding: 0;
            height: inherit;
            margin-bottom: 0 !important;
            color: #2C2C2C;
            font-size: 15px;
            line-height: 48px;
            font-weight: 400;
            transition: color 0.2s ease-in-out;
            &:first-child{
                margin-left: 0;
            }
            &:last-child{
                margin-right: 0;
            }
            >a{
                padding: 16px 30px;
            }
        }
    }
`

export const AuthMenuWrap = styled.div`
    height: 100%;
    ul{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        li{
            margin: 0;
            margin-right: 10px;
            padding: 0;
            height: auto;
            margin-bottom: 0 !important;
            color: #2C2C2C;
            font-size: 15px;
            line-height: 18px;
            font-weight: 400;
            transition: color 0.2s ease-in-out;
            span{
                a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 78px;
                    min-height: 38px;
                    border-radius: 3px;
                    color: #fff;
                    transition: color 0.2s ease-in-out;
                }
            }
            &:last-child{
                margin-right: 0;
                span{
                    a{
                        color: #ffffff;
                        background-color: #008489;
                        transition: opacity 0.2s ease;
                    }
                }
            }
        }
    }
`

export const Div = styled.div`
    position: relative;
    z-index: 10001;
    transform: translate3d(0px, 0px, 0px);
    >nav{
        >div{
            color: #fff;
            >div{
                &:last-child{
                    .menu-wrap{
                        >div{
                            >ul{
                                >li{
                                    >a{
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        &.is_default,&.default{
            >div{
                color: #000;
                >div{
                    &:last-child{
                        .menu-wrap{
                            >div{
                                >ul{
                                    >li{
                                        >a{
                                            color: #000;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
   
`

export default HeaderContainer