import styled, { css } from "styled-components";

const AgentWrap = styled.div`
    margin: 0 10px;
    padding-top: 120px;
    padding-bottom: 100px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    width: calc(100% - 20px);
    background: #f5f5f5;
`

export const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(12,minmax(0,1fr));
`

export const Grid = styled.div`
    ${props => props.left && css`
            grid-column: span 12 / span 12;
            @media (min-width: 992px){
                grid-column: span 3 /span 3;
            }
        `
    }
    ${props => props.right && css`
            grid-column: span 12 / span 12;
            /* background-color: #fff; */
            border-radius: 4px;
            @media (min-width:992px){
                grid-column: span 9 /span 9;
            }
        `
    }
`

export const AvatarWrap = styled.div`
    display: flex;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    .avatar{
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        overflow: hidden;
        border-radius: 50%;
        a{
            display: block;
            img{
                width: 100%;
                height: 100%;
                aspect-ratio: 1 / 1;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }
    .name{
        flex: 1;
        padding-left: 15px;
        &-title{
            font-weight: 700;
            margin-bottom: 5px;
        }
        &-edit{
            a{
                display: flex;
                align-items: center;
                color: gray;
                text-transform: capitalize;
                span{
                    margin-left: 2px;
                }
            }
        }
    }
`

export const ItemWrap = styled.div`
    
`

export const Item = styled.div`
    position: relative;
    a{
        display: flex;
        align-items: center;
        color: rgb(59 130 246);
        margin-bottom: 1rem;
        text-transform: capitalize;
        span{
            color: #000;
            margin-left: 5px;
            transition: all 0.15s linear;
            &:hover{
                color: #ee4d2d;
            }
        }
    }
    .drop-link{
        padding-left: 28px;
        overflow: hidden;
        height: 0;
        opacity: 0;
        transition: height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1);
        &.active{
            height: auto;
            opacity: 1;
            transition: height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1);
        }
        ul{
            li{
                margin-bottom: 1rem;
                a{
                    display: block;
                    color: #000;
                    transition: all 0.15s linear;
                    text-transform: capitalize;
                    &:hover{
                            color: #ee4d2d;
                    }
                }
            }
        }
    }
`

export const AgentProfileWrap = styled.div`
    background: #fff;
    .title-profile{
        padding: 22px 30px;
        height: 80px;
        div{
            padding-bottom: 18px;
            border-bottom: 1px solid rgba(0,0,0,0.14);
            h4{
                font-size: 1.125rem;
                font-weight: 600;
                line-height: 1.5rem;
                text-transform: capitalize;
                color: #333;
                margin-bottom: 0.15rem;
            }
            span{
                font-size: .975rem;
                line-height: 1.0625rem;
                color: #555;
            }
        }
    }
    .content-profile{
        padding-top: 30px;
        form{
            padding: 0 30px;
            >div{
                display: flex;
                gap: 1rem;
                @media (max-width: 768px){
                    flex-direction: column-reverse;
                    align-items: flex-start;
                }
                
                .infor{
                    flex: 1;
                    .form-group{
                        display: grid;
                        grid-template-columns: repeat(8,minmax(0,1fr));
                        column-gap: 20px;
                        margin-bottom: 20px;
                        align-items: center;
                        label{
                            grid-column: span 2 / span 2;
                            text-align: right;
                        }
                        >div{
                            grid-column: span 6 / span 6;
                            >input{
                                border: 1px solid rgba(0,0,0,0.2);
                                height: 40px;
                                padding: 5px 10px 5px 10px;
                                width: 100%;
                            }
                            >span{
                                position: relative;
                                top: 5px;
                                color: #ee4d2d;
                            }
                        }
                        >div:last-child{
                            grid-column: 3 / span 6;
                            button{
                                background-color: #ee4d2d;
                                color: #fff;
                                height: 40px;
                                padding-left: 20px;
                                padding-right: 20px;
                                border-radius: 3px;
                                min-width: 70px;
                                max-width: 220px;
                                &:hover{
                                    opacity: 0.9;
                                }
                            }
                        }
                        &:last-child{
                            margin-bottom: 3.75rem;
                        }
                    }
                }
                .avatar{
                    flex-shrink: 0;
                    flex-basis: 30%;
                    @media (max-width: 768px){
                        width: 100%;
                    }
                    >div{
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        overflow: hidden;
                        border-left: 0.0625rem solid #efefef;
                        @media (max-width: 768px){
                            border-left: 0;
                        }
                        .avatar-img{
                            position: relative;
                            width: 100px;
                            height: 100px;
                            overflow: hidden;
                            border-radius: 50%;
                            margin: 1.25rem 0;
                            img{
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                aspect-ratio: 1 / 1;
                                border-radius: 50%;
                            }
                            input{
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                cursor: pointer;
                                background-color: transparent;
                                top: 0;
                                left: 0;
                                border-radius: 50%;
                                z-index: 4;
                            }
                        }
                        >div:nth-child(2){
                            >button{
                                height: 40px;
                                padding: 0px 20px;
                                min-width: 70px;
                                max-width: 220px;
                                color: rgb(85, 85, 85);
                                border: 1px solid rgba(0, 0, 0, 0.09);
                                box-shadow: rgb(0 0 0 / 3%) 0px 1px 1px 0px;
                            }
                        }
                        >div:last-child{
                            margin-top: .75rem;
                            color: #999;
                            font-size: .875rem;
                            line-height: 1.25rem;
                        }
                    }
                }
            }
        }
    }
`

export const AgentAddressWrap = styled.div`
    height: 100%;
    background: #fff;
    .empty_address{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        >div{
            span{
                display: block;
                text-align: center;
                >svg{
                    font-size: 2.5em;
                }
            }
            p{
                margin-top: 16px;
                text-align: center;
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.5rem;
                color: rgba(0,0,0,.65);
            }
        }
    }
    .title-address{
        border-bottom: 1px solid rgb(239, 239, 239);
        padding: 22px 30px;
        height: 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        h4{
            font-size: 1.125rem;
            font-weight: 600;
            line-height: 1.5rem;
            text-transform: capitalize;
            color: #333;
            margin-bottom: 0.15rem;
            flex: 1;
        }
        div{
            button{
                height: 40px;
                padding: 0px 20px;
                font-weight: 400;
                position: relative;
                overflow: visible;
                outline: 0px;
                background: rgb(238, 77, 45);
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                span{
                    font-size: 16px;
                }
                @media (max-width:576px){
                    width: 165px;
                }
            }
        }
    }
    .content-address{
        padding: 12px 30px 80px;
        h5{
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
        .list-address{
            display: grid;
            grid-template-columns: repeat(1,minmax(0,1fr));
            &-item{
                padding: 18px 0px 20px;
                border-bottom: 1px solid rgba(0,0,0,0.2);
                display: grid;
                grid-template-columns: repeat(1,minmax(0,1fr));
                row-gap: 1px;
                &:last-child{
                    border: 0;
                }
                .heading{
                    margin-bottom: 4px;
                    align-items: center;
                    display: flex;
                    color: rgba(0, 0, 0, 0.54);
                    &:first-child{
                        @media (max-width:480px){
                            flex-direction: column;
                            align-items: flex-start;
                        }
                        .title{
                            display: flex;
                            align-items: center;
                            flex: 1;
                            >div{
                                &:first-child{
                                    color: rgba(0,0,0,.87);
                                    font-size: 1.15rem;
                                    line-height: 1.5rem;
                                    overflow-x: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                                &:nth-child(2){
                                    width: 1px;
                                    height: 25px;
                                    margin-right: 8px;
                                    margin-left: 8px;
                                    border-left: .5px solid rgba(0,0,0,.26);
                                }
                                &:nth-child(3){
                                    color: rgba(0,0,0,.54);
                                    line-height: 1.5rem;
                                }
                            }
                        }
                        .btn{
                                button{
                                    border: 0px;
                                    background: none;
                                    outline: none;
                                    padding: 4px;
                                    color: rgb(0, 136, 255);
                                    &:last-child{
                                        float: right;
                                    }
                                }
                            }
                    }
                    &:nth-child(2){
                        .title{
                            flex: 1;
                        }
                        .btn{
                            button{
                                font-size: .875rem;
                                line-height: 1.25rem;
                                padding: 4px 12px;
                                height: 28px;
                                min-width: 0;
                                color: rgba(0,0,0,.87);
                                border: 1px solid rgba(0,0,0,.26);
                                box-shadow: 0 1px 1px rgb(0 0 0 / 3%);
                                white-space: nowrap;
                                align-items: center;
                                display: flex;
                                justify-content: center;
                                outline: none;
                                background: none;
                                border-radius: 2px;
                                &:hover{
                                    opacity: 0.9;
                                }
                                &:disabled {
                                    cursor: not-allowed;
                                    opacity: 0.7;
                                }
                            }
                        }
                    }
                }
                .footer{
                    margin-top: 4px;
                    span{
                        color: rgb(238, 77, 45);
                        padding: 2px 4px;
                        border: 1px solid rgb(238, 77, 45);
                        border-radius: 1px;
                    }
                }
                >.btn{
                    margin-top: 10px;
                    button{
                        font-size: .875rem;
                        line-height: 1.25rem;
                        padding: 4px 12px;
                        height: 28px;
                        min-width: 0;
                        color: rgba(0,0,0,.87);
                        border: 1px solid rgba(0,0,0,.26);
                        box-shadow: 0 1px 1px rgb(0 0 0 / 3%);
                        white-space: nowrap;
                        align-items: center;
                        display: flex;
                        justify-content: center;
                        outline: none;
                        background: none;
                        border-radius: 2px;
                        &:hover{
                            opacity: 0.9;
                        }
                        &:disabled {
                            cursor: not-allowed;
                            opacity: 0.7;
                        }
                    }
                }
            }
        }
    }
`

export const AgentPasswordWrap = styled.div`
    background: #fff;
    .title-password{
        padding: 22px 30px;
        height: 80px;
        div{
            padding-bottom: 18px;
            border-bottom: 1px solid rgba(0,0,0,0.14);
            h4{
                font-size: 1.125rem;
                font-weight: 600;
                line-height: 1.5rem;
                text-transform: capitalize;
                color: #333;
                margin-bottom: 0.15rem;
            }
            span{
                font-size: .975rem;
                line-height: 1.0625rem;
                color: #555;
            }
        }
    }
    .content-password{
        padding-top: 30px;
        form{
            >div{
                .form-group{
                    display: grid;
                    grid-template-columns: repeat(8,minmax(0,1fr));
                    column-gap: 20px;
                    margin-bottom: 20px;
                    /* align-items: center; */
                    label{
                        grid-column: span 2 / span 2;
                        text-align: right;
                    }
                    >div{
                        grid-column: span 3 / span 3;
                        >input{
                            width: 100%;
                            border: 1px solid rgba(0,0,0,0.2);
                            height: 40px;
                            padding: 5px 10px 5px 10px;
                           }
                        >span{
                            position: relative;
                            top: 5px;
                            color: #ee4d2d;
                        }
                    }
                    &:last-child{
                        >div{
                            grid-column: 3 / span 3;
                            button{
                                background-color: #ee4d2d;
                                color: #fff;
                                height: 40px;
                                padding-left: 20px;
                                padding-right: 20px;
                                border-radius: 3px;
                                min-width: 70px;
                                max-width: 220px;
                                margin-bottom: 30px;
                                &:hover{
                                    opacity: 0.9;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.65);
    width: 100%;
    height: 100%;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default AgentWrap