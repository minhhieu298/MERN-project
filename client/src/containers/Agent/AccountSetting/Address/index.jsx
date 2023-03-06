import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;

    .container{
        width: 500px;
        box-sizing: border-box;
        padding: 30px 30px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgb(0 0 0 / 54%);
        border-radius: 3px;
        @media (max-width:576px){
            width: 100%;
        }
        .box{
            display: flex;
            flex-direction: column;

            >div{
                align-items: center;
                display: flex;
                font-size: 20px;
            }
        }
        form{
            >div{
                position: relative;
                padding-top: 15px;
                height: 480px;
                box-sizing: border-box;
                >div{
                    &:first-child{
                        flex: 1;
                        padding-bottom: 66px;
                        .form-group{
                            margin-bottom: 20px;
                            &:first-child{
                                display: flex;
                                align-items: center;
                                gap: 0 15px;
                                >div{
                                    width: 100%;
                                    box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                    border-radius: 2px;
                                    height: 40px;
                                    box-sizing: border-box;
                                    border: 1px solid rgba(0,0,0,.14);
                                    transition: border-color .3s ease-in-out, box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                    &:hover {
                                        box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                    }
                                    &:focus-within {
                                        border: 1px solid rgba(0, 0, 0, 0.54);
                                    }
                                    input{
                                        width: 100%;
                                        height: 38px;
                                        padding: 10px;
                                        background-color: transparent;
                                        font-size: 14px;
                                        color: #222;
                                        border: 0;
                                    }
                                }
                            }
                            &:nth-child(2){
                                position: relative;
                                >div{
                                    &:first-child{
                                        position: relative;
                                        width: 100%;
                                        box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                        border-radius: 2px;
                                        height: 40px;
                                        box-sizing: border-box;
                                        border: 1px solid rgba(0,0,0,.14);
                                        transition: border-color .3s ease-in-out, box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                        
                                        &:focus-within {
                                            border: 1px solid rgba(0, 0, 0, 0.54);
                                        }
                                        input{
                                            /* text-align: left; */
                                            width: 100%;
                                            height: 38px;
                                            padding: 10px;
                                            background-color: transparent;
                                            font-size: 14px;
                                            color: #222;
                                            border: 0;
                                            position: absolute;
                                            opacity: 0;
                                        }
                                        >div{
                                            position: relative;
                                            display: flex;
                                            padding: 10px;
                                            align-items: center;
                                            background: #fff;
                                            width: 100%;
                                            height: 100%;
                                            &:empty::before {
                                                content: attr(data-placeholder);
                                                color: #939393;
                                            }
                                            span{
                                                position: absolute;
                                                top: 50%;
                                                right: 0;
                                                transform: translateY(-50%);
                                                padding-right: 10px;
                                                color: #b5b5b5;
                                            }
                                        }
                                    }
                                    &:nth-child(2){
                                        position: absolute;
                                        transition: all 0.5s ease 0s;
                                        top: 120%;
                                        left: 0;
                                        width: 100%;
                                        background: #fff;
                                        transform: rotateX(90deg);
                                        transform-origin: center top 0;
                                        visibility: hidden;
                                        opacity: 0;
                                        z-index: 5;
                                        transition: all 0.5 ease-in-out 0s;
                                        &.visible{
                                            transform: rotateX(0);
                                            opacity: 1;
                                            visibility: visible;
                                        }
                                        .dropdown{
                                            border: 1px solid rgba(0,0,0,0.14);
                                            height: 270px !important;
                                            overflow: hidden;
                                            .title{
                                                display: grid;
                                                grid-template-columns: repeat(3,1fr);
                                                grid-template-rows: repeat(1,40px);
                                                border-bottom: 1px solid rgba(0,0,0,0.14);
                                                >div{
                                                    text-align: center;
                                                    height: 100%;
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: center;
                                                    /* &:first-child{
                                                        border-bottom: 2px solid orange;
                                                    } */
                                                }
                                            }
                                            .content{
                                                width: 100%;
                                                overflow: hidden;
                                                height: calc(270px - 40px);
                                                overflow-y: scroll;
                                                >div{
                                                    height: calc(100% / 6);
                                                    input{
                                                        width: 100%;
                                                        height: 100%;
                                                        border: none;
                                                        outline: none;
                                                        border-radius: 0;
                                                        padding: 0 10px;
                                                        line-height: 40px;
                                                        cursor: pointer;
                                                        background: transparent;

                                                        &:hover{
                                                            background: rgba(0,0,0,0.05);
                                                        }
                                                    }
                                                    /* line-height: 40px;
                                                     */
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            &:nth-child(3){
                                >div{
                                    width: 100%;
                                    box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                    border-radius: 2px;
                                    height: 40px;
                                    box-sizing: border-box;
                                    border: 1px solid rgba(0,0,0,.14);
                                    transition: border-color .3s ease-in-out, box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                    height: 60px;
                                    &:hover {
                                        box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                    }
                                    &:focus-within {
                                        border: 1px solid rgba(0, 0, 0, 0.54);
                                    }
                                    >textarea{
                                        width: 100%;
                                        padding: 10px;
                                        background-color: transparent;
                                        font-size: 14px;
                                        color: #222;
                                        border: 0;
                                        height: 100%;
                                        &:disabled {
                                            cursor: not-allowed;
                                            opacity: 0.7;
                                        }
                                    }
                                }
                            }
                            &:nth-child(4){
                                >div{
                                    >div{
                                        &:first-child{
                                            margin-right: 10px;
                                            margin-bottom: 8px;
                                            color: #555;
                                            /* height: 0; */
                                        }
                                        &:last-child{
                                            display: flex;
                                            align-items: center;
                                            gap: 10px;
                                            span{
                                                /* width: 88px;
                                                height: 40px; */
                                                padding: 10px 15px;
                                                border-radius: 2px;
                                                cursor: pointer;
                                                border: 1px solid rgba(0,0,0,0.1);
                                            }
                                        }
                                    }
                                }
                            }
                            &:nth-child(5){
                                >div{
                                    label{
                                        display: inline-block;
                                        vertical-align: middle;
                                        font-size: 16px;
                                        input{
                                            margin-right: 5px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &:last-child{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(hsla(0,0%,100%,.7),#fff);
                        height: 66px;
                        display: flex;
                        align-items: flex-end;
                        justify-content: flex-end;
                        >button{
                            align-items: center;
                            display: flex;
                            justify-content: center;
                            outline: none;
                            padding: 10px;
                            border: 0;
                            background: none;
                            border-radius: 2px;
                            min-width: 140px;
                            font-size: 14px;
                            cursor: pointer;
                            color: #555;
                            
                            &:last-child{
                                color: #fff;
                                background-color: #ee4d2d;
                            }
                        }
                    }
                }
            }
        }
    }
`