import styled from "styled-components";

const AuthWrap = styled.div`
    height: 100vh;
    width: 100%;
    /* overflow: hidden; */
    >div{
        display: flex;
        align-items: center;
        height: 100%;
        .image-form{
           /* width: 50%; */
           flex-basis: 50%;
           background: red;
           display: none;
           height: 100%;
           @media (min-width: 768px){
            display: block;
           }
        }
        .form{
            /* float: right; */
            display: block;
            margin: 0 auto;
            flex: 1;
            width: 100%;
            padding: 0 20px;
            @media (min-width: 768px){
                max-width: 500px;
            }
            .head{
                margin-bottom: 20px;
                a{
                    span{
                        vertical-align: middle;
                        display: inline-flex;
                        margin-right: 5px;
                        font-size: 16px;
                        >svg{
                            font-size: 1.15em;
                        }
                        &:last-child{
                            text-decoration: underline;
                        }
                    }
                    &:hover{
                        color: #0162e8;
                    }
                }
            }
            form{
                >div{
                    h1{
                        font-size: 2.75em;
                        font-weight: 600;
                        margin-bottom: 20px;
                    }
                    .form-group{
                        width: 100%;
                        margin-bottom: 20px;
                        display: flex;
                        flex-direction: column;
                        gap: 10px 0;
                        >div{
                            border: 1px solid gray;
                            border-radius: 4px;
                            padding: 5px;
                            position: relative;
                            >input{
                                width: 100%;
                                border: none;
                                outline: none;
                                height: 30px;
                                padding-left: 10px;
                            }
                            >span{
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                right: 15px;
                            }
                            &.btn{
                                border: none;
                                padding: 0;
                                border-radius: 0;
                                >button{
                                    width: 100%;
                                    padding: 12px 20px;
                                    color: #fff;
                                    background: #0162e8;
                                    border-radius: 2px;
                                    text-transform: uppercase;
                                    &:hover{
                                        opacity: 0.9;
                                    }
                                }
                            }
                        }
                        >span{
                        }
                    }
                }
            }
            .footer{
                margin-top: 3rem;
                .forgot{
                    font-weight: 600;
                    color: #000;
                    a{
                        span{
                            font-size: 16px;
                        }
                    }
                }
                .register,.login{
                    display: flex;
                    align-items: center;
                    gap: 0 5px;
                    margin-top: 8px;
                    p{
                        font-size: 17px;
                        &:last-child{
                        }
                        a{
                            margin-left: 2px;
                            color: #0162e8;
                            text-decoration: underline;
                            span{
                                font-size: 16px;
                                font-weight: 600;
                            }
                        }
                    }
                }
                .login{
                    margin-top: 0;
                }
            }
        }
    }    
`
export const ResetWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    .header-reset{
        padding: 10px;
        height: 6.25rem;
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding-left: 10px;
        padding-right: 10px;
        box-shadow: 0 6px 6px rgb(0 0 0 / 6%);
    }
    .body-reset{
        >div{
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            form{
                background-color: #fff;
                box-sizing: border-box;
                box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
                border-radius: 4px;
                overflow: hidden;
                width: 500px;
                @media (max-width:576px){
                    width: calc(100% - 10px);
                }
                >div{
                    .form-group{
                        &:first-child{
                            display: grid;
                            grid-template-columns: 20% 80%;
                            align-items: center;
                            min-height: 80px;
                            >div{
                                display: flex;
                                justify-content: center;
                                color: #ee4d2d;
                            }
                            h4{
                                font-size: 1.25rem;
                                color: #222;
                                padding-right: 80px;
                                display: flex;
                                justify-content: center;
                            }
                        }
                        &:last-child{
                            padding: 0 80px 64px;
                            >div:first-child{
                                width: 100%;
                                height: 40px;
                                overflow: hidden;
                                border: 1px solid rgba(0,0,0,.14);
                                border-radius: 2px;
                                transition: all .4s;
                                margin: 1.25rem auto .3125rem;
                                &:hover{
                                    box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                }
                                &:focus-within{
                                    border-color: rgba(0,0,0,0.5);
                                }
                                input{
                                    width: 100%;
                                    padding: 0.75rem;
                                    outline: none;
                                    border: 0;
                                    flex: 1;
                                    flex-shrink: 0;
                                    filter: none;
                                }
                            }
                            div{
                                margin: 0;
                                padding: 0.25rem 0 0;
                                font-size: 13px;
                                color: #ff424f;
                                min-height: 1rem;
                            }
                            button{
                                color: #fff;
                                background-color: #ee4d2d;
                                width: 100%;
                                margin-top: 10px;
                                height: 40px;
                                text-transform: uppercase;
                                border-radius: .125rem;
                                &:disabled{
                                    opacity: 0.7;
                                    cursor: not-allowed;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default AuthWrap