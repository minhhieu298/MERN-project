import styled from "styled-components";

const AuthWrap = styled.div`
    height: 100vh;
    width: 100%;
    >div{
        min-height: 100vh;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        .form{
            width: 100%;
            padding: 0 20px;
            @media (min-width: 768px){
               width: 500px;
               padding: 0;
            }
            .head{
                margin-bottom: 20px;
                a{
                    span{
                        vertical-align: middle;
                        display: inline-flex;
                        margin-right: 5px;
                        font-size: 16px;
                        color: #014fff;
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
                        font-weight: 600;
                        margin-bottom: 20px;
                        font-size: 20px;
                        color: #fff;
                        @media (min-width: 768px){
                            font-size: 2.75em;
                        }
                    }
                    .form-group{
                        width: 100%;
                        margin-bottom: 20px;
                        display: flex;
                        flex-direction: column;
                        gap: 10px 0;
                        >div{
                            border: 1px solid;
                            border-color: #80808024;
                            border-radius: 30px;
                            padding: 5px;
                            position: relative;
                            background: rgba(255,255,255,0.2);
                            transition: all 0.5s ease 0s;
                            /* &:focus-within{
                                border: 1px solid #c7b4b4;
                            } */
                            >input{
                                width: 100%;
                                border: none;
                                outline: none;
                                height: 38px;
                                color: #fff;
                                background: transparent;
                                padding-left: 20px;
                                border-radius: 30px;
                                font-size: 17px;
                                &::placeholder{
                                    color: #ffffffb5;
                                }
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
                                border-radius: 30px;
                                background: rgba(255,255,255,0.5);
                                >button{
                                    width: 100%;
                                    border-radius: 30px;
                                    padding: 12px 20px;
                                    color: #000;
                                    text-transform: uppercase;
                                }
                            }
                        }
                        >span{
                            color: #fff !important;
                            margin-left: 10px;
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
                            color: #fff;
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
                        color: #fff;
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
                    font-weight: 600;
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
        >div{
            display: flex;
            align-items: center;
            h1{
                font-size: 1.5rem;
            }
        }
    }
    .body-reset{
        >div{
            display: flex;
            align-items: center;
            justify-content: center;
            >div{
                width: 500px;
                margin: 170px auto;
                background-color: #fff;
                box-sizing: border-box;
                box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
                border-radius: 4px;
                form{
                    @media (max-width:576px){
                        width: calc(100% - 10px);
                    }
                    >div{
                        .form-group{
                            margin-bottom: 20px;
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
                            &:nth-child(2),&:nth-child(3){
                                padding: 0 40px;
                                >div{
                                    width: 100%;
                                    border: 1px solid;
                                    border: 1px solid rgba(0,0,0,.14);
                                    border-radius: 2px;
                                    transition: all .4s;
                                    padding: 5px;
                                    margin-bottom: 10px;
                                    &:hover{
                                        box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                    }
                                    &:focus-within{
                                        border-color: rgba(0,0,0,0.5);
                                    }
                                    >input{
                                        width: 100%;
                                        height: 30px;
                                        padding-left: 10px;
                                        border: none;
                                        outline: none;
                                    }
                                }
                                >span{
                                    color: tomato;
                                }
                            }
                            &:nth-child(4){
                                padding: 0 40px;
                                button{
                                    color: #fff;
                                    background-color: #ee4d2d;
                                    width: 100%;
                                    margin-top: 10px;
                                    height: 40px;
                                    text-transform: uppercase;
                                    border-radius: .125rem;
                                    &:hover{
                                        opacity: 0.9;
                                    }
                                    &:disabled{
                                        opacity: 0.7;
                                        cursor: not-allowed;
                                    }
                                }
                            }
                        }
                        
                    }
                }
                .reset{
                    display: flex;
                    justify-content: center;
                    padding: 0 40px;
                    margin-bottom: 20px;
                }
            }
        }
    }
`
export const OTPWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    form{
        width: 100%;
        border-radius: 5px;
        padding: 20px 10px;
        border: 1px solid #dfdfdf;
        @media (min-width: 768px){
            width: 500px;
        }
        h1{
            font-size: 1.5em;
            margin-bottom: 20px;
            font-weight: 500;
        }
        >div{
            width: 100%;
            >div{
                width: 100%;
                padding: 5px;
                border: 1px solid #dfdfdf;
                border-radius: 4px;
                margin-bottom: 10px;
                >input{
                    width: 100%;
                    border: none;
                    outline: none;
                    padding-left: 10px;
                    height: 30px;
                    font-size: 16px;
                }
            }
            >span{
                color: tomato;
            }
            &:last-child{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 0;
                >a{
                    /* margin-top: 10px; */
                    /* text-align: center; */
                    /* display: block; */
                    &:hover{
                        text-decoration: underline;
                        color: #1877f2;
                    }
                }
                >button{
                    &:hover{
                        color: #1877f2;
                    }
                }
            }
        }
        >button{
            margin-top: 10px;
            width: 100%;
            padding: 10px 20px;
            background: #1877f2;
            color: #fff;
            text-transform: uppercase;
            border-radius: 4px;
            &:hover{
                opacity: 0.9;
            }
        }
        
    }
`

export const ForgotWrap = styled.div`
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
        >div{
            display: flex;
            align-items: center;
            h1{
                font-size: 1.5rem;
            }
        }
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
                        margin-bottom: 20px;
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
                        &:nth-child(2){
                            padding: 0 40px;
                            >div{
                                width: 100%;
                                border: 1px solid;
                                border: 1px solid rgba(0,0,0,.14);
                                border-radius: 2px;
                                transition: all .4s;
                                padding: 5px;
                                margin-bottom: 10px;
                                &:hover{
                                    box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                }
                                &:focus-within{
                                    border-color: rgba(0,0,0,0.5);
                                }
                                >input{
                                    width: 100%;
                                    height: 30px;
                                    padding-left: 10px;
                                    border: none;
                                    outline: none;
                                }
                            }
                            >span{
                                color: tomato;
                            }
                        }
                        &:last-child{
                            padding: 0 40px;
                            button{
                                color: #fff;
                                background-color: #ee4d2d;
                                width: 100%;
                                margin-top: 10px;
                                height: 40px;
                                text-transform: uppercase;
                                border-radius: .125rem;
                                &:hover{
                                    opacity: 0.9;
                                }
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