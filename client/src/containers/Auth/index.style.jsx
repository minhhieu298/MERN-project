import styled from "styled-components";

const AuthWrap = styled.div`
    background: linear-gradient(-135deg,#c850c0,#4158d0);
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 15px;
    /* border: 1px solid rgba(0,0,0,0.5); */
    >div{
        width: 960px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        
        .image-form{
            width: 50%;
            position: relative;
            @media (max-width: 768px){
                display: none;
            }
            @media (max-width: 992px){
                width: 50%;
            }
            img{
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        form{
            width: 50%;
            padding: 177px 35px 33px;
            
            @media (max-width: 992px){
                width: 50%;
                padding: 177px 35px 33px;
            }
            @media (max-width: 768px){
                width: 100%;
                padding: 100px 50px 33px;
            }
            @media (max-width: 576px){
                padding: 100px 15px 33px;
            }
            >div{
                >span{
                    font-size: 24px;
                    color: #333;
                    line-height: 1.2;
                    text-align: center;
                    width: 100%;
                    display: block;
                    padding-bottom: 54px;
                }
                .form-group{
                    width: 100%;
                    margin-bottom: 10px;
                    >div{
                        z-index: 1;
                        position: relative;
                        >input{
                            font-size: 15px;
                            line-height: 1.5;
                            color: #666;
                            display: block;
                            width: 100%;
                            background: #e6e6e6;
                            height: 50px;
                            border-radius: 25px;
                            padding: 0 30px 0 68px;
                            border: none;
                            &:focus {
                                & + span.focus{
                                    animation: anim-shadow 0.5s ease-in-out forwards;
                                }
                                & ~ span:last-child{
                                    color: rgba(87,184,70,.8);
                                    left: -5px;
                                }
                            }
                        }
                        span{
                            &.focus{
                                display: block;
                                position: absolute;
                                border-radius: 25px;
                                bottom: 0;
                                left: 0;
                                z-index: -1;
                                width: 100%;
                                height: 100%;
                                box-shadow: 0 0;
                                
                                color: rgba(87,184,70,.8);
                            
                            }
                            &:last-child{
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                border-radius: 25px;
                                transition: all .4s;
                                padding-left: 35px;
                                pointer-events: none;
                                color: #666;
                            }
                        }
                    }
                }
                .btn{
                    padding-top: 20px;
                    button{
                        font-size: 15px;
                        line-height: 1.5;
                        padding: 0 25px;
                        color: #fff;
                        text-transform: uppercase;
                        width: 100%;
                        height: 50px;
                        border-radius: 25px;
                        background: #57b846;
                        transition: all .4s;
                        font-weight: 600;
                        &:hover{
                            background-color: #333;
                        }
                    }
                }
                .text-center{
                    text-align: center;
                    padding-top: 12px;
                    >a{
                        display: block;
                        transition: all .4s;
                        font-size: 13px;
                        line-height: 1.5;
                        color: #999;
                        &:hover{
                            color: #57b846;;
                        }
                    }
                    &:last-child{
                        padding-top: 136px;
                        >a{
                            span{
                                position: relative;
                                vertical-align: middle;
                                margin-left: 5px;
                                top: 2px;
                            }
                        }
                    }
                }
            }
            }
        .content-form{
            
            
        }
        @keyframes anim-shadow {
            to {
                box-shadow: 0px 0px 70px 25px;
                opacity: 0;
            }
        }
    }
    /* form{
        >div{
            width: 960px;
            background-color: #fff;
            border-radius: 10px;
            padding: 177px 130px 33px 95px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (min-width: 992px){
                padding: 177px 90px 33px 85px;
            }
            .banner-form{
                width: 316px;
                @media (max-width: 992px){
                    width: 35%;
                }
                img{
                    width: 100%;
                    object-fit: cover;
                    aspect-ratio: 1 / 1;
                }
            }
            .form{
                width: 290px;
                >span{
                    
                }
                .form-group{
                    
                    
                    
                }
                
            }
            
        }
    } */
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