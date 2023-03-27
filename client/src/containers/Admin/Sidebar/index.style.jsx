import styled from "styled-components";

const SidebarWrap = styled.nav`
    width: 300px;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: auto;
    border-right: 1px solid rgba(0,0,0,0.09);
    background: #111936;
    user-select: none;
    .logo{
        height: 88px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        >div{
            &:first-child{
                flex: 1;
            }
            &:nth-child(2){
                display: none;
                @media (max-width:991px){
                    display: block;
                }
                >button{
                    background: transparent;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
    .nav{
        padding: 20px 5px 10px 5px;
        height: calc(100% - 88px);
        overflow: hidden;
        &-header{
            border-bottom: 1px solid #bdc8f070;
            margin-bottom: 20px;
            padding-bottom: 10px;
            .title{
                margin: 10px 0px 0.35em;
                line-height: 1.66;
                display: block;
                color: rgb(215, 220, 236);
                font-size: 0.875rem;
                font-weight: 600;
                padding: 6px;
                text-transform: capitalize;
            }
            .content{
                .feature{
                    &-title{
                        display: flex;
                        align-items: center;
                        height: 48px;
                        border-radius: 8px;
                        padding: 10px 16px 10px 24px;
                        transition: all 0.2s ease-in-out 0s;
                        color: rgb(215, 220, 236);
                        cursor: pointer;
                        text-transform: capitalize;
                        &:hover{
                            background-color: rgba(124, 77, 255, 0.082);
                            >div{
                                >div{
                                    color: rgb(124, 77, 255);
                                }
                            }
                            >span{
                                color: rgb(124, 77, 255);
                            }
                        }
                        >div{
                            display: flex;
                            align-items: center;
                            flex: 1;
                            gap: .5rem;
                        }
                    }
                    &-content{
                        .item{
                            height: 48px;
                            padding: 8px 16px 8px 48px;
                            a{
                                display: flex;
                                height: 100%;
                                align-items: center;
                                color: rgb(215, 220, 236);
                                margin: auto;
                                &:hover{
                                    color: rgb(124, 77, 255);
                                }
                            }
                        }
                    }
                }
            }
            &:first-child{
                .content{
                    .feature{
                        &-title{
                            >div{
                                span{
                                    svg{
                                        font-size: 1.5rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &:last-child{
                border-bottom: 0;
                padding-bottom: 0;
            }
        }
    }
`

export default SidebarWrap