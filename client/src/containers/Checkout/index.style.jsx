import styled from "styled-components";

const CheckoutWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f5f5f5;
    
    .empty_adr{
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        .container{
            .box{
                color: #000;
                font-weight: 500;
            }
        }
        .form-group{
            color: #000;
            font-weight: 500;
        }
    }
    .header-checkout{
        background-color: #fff;
        padding: 10px;
        height: 6.25rem;
        border-bottom: 1px solid rgba(0,0,0,.09);
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding-left: 10px;
        padding-right: 10px;
        >div{
            display: flex;
            align-items: center;
            h1{
                font-size: 1.5rem;
                font-weight: 500;
            }
        }
    }
    .body-checkout{
        padding-left: 10px;
        padding-right: 10px;
        .address{
            padding: 28px 20px 24px;
            background-color: #fff;
            >div{
                &:first-child{
                    >div{
                        display: flex;
                        align-items: center;
                        color: #ee4d2d;
                        margin-bottom: 20px;
                        text-transform: capitalize;
                        >div{
                            flex: 1;
                            font-size: 1.25rem;
                            margin-left: 5px;
                        }
                    }
                }
                &:last-child{
                    display: flex;
                    align-items: center;
                    @media (max-width:992px){
                        align-items: flex-start;
                    }
                    >div{
                        &:first-child{
                            display: flex;
                            align-items: center;
                            gap: 1.5rem;
                            flex: 1;
                            @media (max-width:992px){
                                flex-direction: column;
                                align-items: flex-start;
                                gap: .5rem;
                            }
                            >div{
                                &:first-child{
                                    font-weight: 700;
                                    font-size: 1.195rem;
                                    @media (max-width:1200px){
                                        font-size: 16px;
                                    }
                                    @media (max-width:992px){
                                        font-size: 15px;
                                    }
                                }
                                &:nth-child(2){
                                    font-size: 1.195rem;
                                    @media (max-width:1200px){
                                        font-size: 16px;
                                    }
                                    @media (max-width:992px){
                                        font-size: 14px;
                                    }
                                }
                                &:nth-child(3){
                                    color: #ee4d2d;
                                    border: 1px solid #ee4d2d;
                                    padding: 5px;
                                    font-size: 10px;
                                    border-radius: 2px;
                                }
                            }
                        }
                        &:last-child{
                            color: #4080ee;
                            text-transform: capitalize;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .product{
            margin-top: 12px;
            background-color: #fff;
            border-radius: 3px;
            overflow-x: auto;
            width: 100%;
            &::-webkit-scrollbar{
                height: 5px;
            }
            &::-webkit-scrollbar-thumb{
                border-radius: 10px;
            }
            &::-webkit-scrollbar-track{
                border-radius: 10px;
            }
            table{
                width: 100%;
                border-collapse: collapse;
                white-space: nowrap;
                min-width: 750px;
                thead{
                    height: 60px;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    text-align: left;
                    tr,th{
                        color: #000;
                        font-weight: 500;
                    }
                    th{
                        padding: 10px 20px;
                        text-align: center;
                        &:first-child{
                            text-align: left;
                        }
                    }
                }
                tbody{
                    td{
                        padding: 10px 20px;
                        text-align: center;
                        &:first-child{
                            width: 60%;
                            text-align: left;
                            >div{
                                display: flex;
                                align-items: center;
                                >div{
                                    &:first-child{
                                        flex-shrink: 0;
                                        flex-basis: 8%;
                                        img{
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                        }
                                    }
                                    &:last-child{
                                        flex: 1;
                                        margin-left: 20px;
                                        >span{
                                            display: block;
                                            margin-bottom: 5px;
                                        }
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
        }
        .total{
            border-radius: 3px;
            margin-top: 20px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 16px 30px 20px;
            background-color: #fff;
            gap: .5rem;
            >div{
                &:first-child{
                    font-size: 14px;
                    color: #929292;
                }
                &:last-child{
                    font-size: 20px;
                    color: #ee4d2d;
                }
            }
        }
        .payment{
            margin-bottom: 12px;
            border-radius: 3px;
            box-shadow: 0 1px 0 0 rgb(0 0 0 / 5%);
            &-heading{
                margin-top: 20px;
                background: #fff;
                padding-left: 30px;
                padding-right: 30px;
                display: flex;
                align-items: center;
                min-height: 90px;
                gap: 10px;
                >div{
                    &:first-child{
                        font-size: 18px;
                        color: #222;
                        @media (max-width: 767px){
                            flex: 1;
                            font-size: 16px;
                        }
                    }
                    &:last-child{
                        >div{
                            span{
                                .product-variation{
                                    padding: 0.25rem 0.75rem;
                                    border: 1px solid rgba(0,0,0,.09);
                                    font-weight: 500;
                                    border-radius: 2px;
                                    height: 3rem;
                                    margin: 0 8px 8px 0;
                                    margin-bottom: 0;
                                    margin-top: 0.625rem;
                                    background: #fff;
                                }
                                .product-variation-selected{
                                    border-color: #ee4d2d;
                                    color: #ee4d2d;
                                }
                            }
                            .mobile{

                            }
                        }
                        &.mobile{
                            >div{
                                color: #05a;
                                text-transform: uppercase;
                                font-weight: 500;
                                cursor: pointer;
                                &:nth-child(2){
                                    position: fixed;
                                    width: 100%;
                                    height: 100%;
                                    background: rgba(0,0,0,0.5);
                                    top: 0;
                                    left: 0;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    z-index: 99999;
                                    >div{
                                        width: 100%;
                                        background: #fff;
                                        padding: 10px;
                                        margin: 0 10px;
                                        border-radius: 2px;
                                        >div{
                                            &:nth-child(2){
                                                display: flex;
                                                justify-content: flex-end;
                                                margin: 20px 0 10px;
                                                button{
                                                    border: 1px solid rgba(0,0,0,0.14);
                                                    min-width: 80px;
                                                    height: 3rem;
                                                    padding: .25rem .75rem;
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: center;
                                                    text-transform: uppercase;
                                                    border-radius: 2px;
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
            &-content{
                background: #fffefb;
                box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
                border-top: 1px solid #f1f0ed;
                padding-top: 15px;
                display: flex;
                flex-direction: column;
                >div{
                    display: flex;
                    
                    &:first-child{
                        padding: 0 20px;
                        display: flex;
                        flex-direction: column;
                        >div{
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            >div{
                                font-size: 14px;
                                color: rgba(0,0,0,.54);
                                &:first-child{
                                    /* grid-column-start: 1;
                                    grid-column-end: 5;
                                    padding-left: 20px; */
                                    /* text-align: center; */
                                }
                                &:last-child{
                                    /* grid-column-start: 11;
                                    grid-column-end: 13;
                                    text-align: right;
                                    padding-right: 20px; */
                                }
                            }
                            &:last-child{
                                height: 50px;
                                >div{
                                    &:last-child{
                                        font-size: 28px;
                                        color: #ee4d2d;
                                        @media (max-width: 480px){
                                            font-size: 18px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &:last-child{
                        min-height: 95px;
                        padding: 10px 20px;
                        margin: 10px 0 0;
                        justify-content: flex-end;
                        align-items: center;
                        border-top: 1px dashed rgba(0,0,0,.09);
                        background: #fffefb;
                        flex-wrap: wrap;
                        gap: 10px;
                        a{
                            padding: 15px 30px;
                            border: 1px solid rgba(0,0,0,0.14);
                            text-align: center;
                            border-radius: 2px;
                            @media (max-width:575px){
                                width: 100%;
                                
                            }
                        }
                        button{
                            background: #ee4d2d;
                            color: #fff;
                            text-align: center;
                            padding: 15px 50px;
                            border: 0;
                            border-radius: 2px;
                            &:hover{
                                opacity: 0.9;
                            }
                            @media (max-width:575px){
                                width: 100%;
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
    padding-left: 10px;
    padding-right: 10px;
`


export default CheckoutWrap