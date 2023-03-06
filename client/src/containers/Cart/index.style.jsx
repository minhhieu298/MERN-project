import styled from "styled-components"

const CartWrap = styled.div`
    padding-top: 120px;
    padding-bottom: 100px;
    padding-left: 10px;
    padding-right: 10px;
    .box{
        width: 100%;
        /* border: 1px solid rgba(0,0,0,0.14); */
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 20px;
        grid-template-rows: auto;
        .col-top{
            grid-column: span 12 / span 12;
            padding: 10px;
            display: grid;
            grid-template-columns: auto;
            gap: 20px;
            @media (min-width: 992px){
                /* grid-column: span 8 / span 8; */
            }
            .row{
                display: grid;
                grid-template-columns: repeat(12,1fr);
                grid-column: span 12 / span 12;
                position: relative;
                
                .col-2{
                    grid-column: span 2 / span 2;
                    padding: 20px 0;
                    justify-content: center;
                    display: grid;
                    align-items: center;
                    .price{
                        >span{
                            &:last-child{
                                margin-left: 8px;
                            }
                        }
                    }
                    .cart-btn{
                        display: flex;
                        align-items: center;
                        button{
                            height: 40px;
                            width: 40px;
                            /* border-color: rgba(0,0,0,0.14); */
                            border-top: 1px solid rgba(0,0,0,0.14);
                            border-left: 1px solid rgba(0,0,0,0.14);
                            border-bottom: 1px solid rgba(0,0,0,0.14);
                            &:last-child{
                                border-right: 1px solid rgba(0,0,0,0.14);
                                border-left: 0;
                            }
                        }
                        input{
                            width: 40px;
                            height: 40px;
                            border: 1px solid rgba(0,0,0,0.14);
                            text-align: center;
                            pointer-events: none;
                            cursor: pointer;
                        }
                    }
                }
                .col-3{
                    grid-column: span 3 / span 3;
                    .image{
                        width: 100%;
                        /* max-height: 200px; */
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }

                .col-4{
                    grid-column: span 4 / span 4;
                    justify-content: center;
                    display: grid;
                    align-items: center;
                    
                    .content{
                        padding: 0 15px;
                        .name{
                            margin-bottom: 5px;
                            h3{
                                color: #333;
                                font-size: 16px;
                                font-weight: 500;
                            }
                        }
                        .variants{
                            >div{
                                margin-bottom: 5px;
                                >span{
                                    &:last-child{
                                        margin-left: 8px;
                                    }
                                }
                            }
                        }
                        
                    }
                }

                .col-1{
                    grid-column: span 1 /span 1;
                    display: grid;
                    align-items: center;
                    justify-content: center;
                    .delete-btn{
                        button{
                            color: rgba(0,0,0,0.4);
                            span{
                                svg{
                                    font-size: 1.75em;
                                }
                            }
                        }
                    }
                }
            }
        }
        .col-bottom{
            grid-column: span 12 / span 12;
            .checkout{
                display: flex;
                justify-content: flex-end;
                button{
                    background: orange;
                    text-transform: uppercase;
                    a{
                        display: block;
                        color: #fff;
                        padding: 20px 38px;
                        span{
                            margin: 0 5px;
                            font-weight:600;
                            font-size: 17px;
                            letter-spacing: 0.5px;
                            
                            &:first-child{
                                margin-left: 0;
                            }
                            &:last-child{
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
            /* @media (min-width: 768px){
                grid-column-start: 7;
                grid-column-end: 13;
            }
            @media (min-width: 992px){
                grid-column-start: 8;
                grid-column-end: 13;
            }
            @media (min-width: 1200px){
                grid-column-start: 9;
                grid-column-end: 13;
            } */
          
            
        }
        
    }
    .empty_cart{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 21rem;
        flex-direction: column;
        .bg{
            background-position: 50% center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 12.5rem;
            height: 11.1875rem;
            /* background-image: url('../../assets/empty_cart.png'); */
            width: 6.75rem;
            height: 6.125rem;
        }
        .text{
            color: rgba(0, 0, 0, 0.4);
            font-size: 0.875rem;
            font-weight: 700;
            line-height: 1rem;
            margin-top: 1.125rem;
        }
        button{
            text-transform: uppercase;
            margin-top: 1.0625rem;
            background: rgb(238, 77, 45);
            padding: 10px 40px;
            &:hover{
                opacity: 0.9;
            }
            a{
                display: block;
                color: #fff;
                font-size: 17px;
            }
        }
    }
    >div{
        /* .empty-cart{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 21rem;
            flex-direction: column;
            .bg{
                background-position: 50% center;
                background-size: cover;
                background-repeat: no-repeat;
                width: 12.5rem;
                height: 11.1875rem;
                background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd804….png);
                width: 6.75rem;
                height: 6.125rem;
            }
        } */
    }
`
export const MobileCart = styled.div`
    .box{
        /* margin-top: 20px; */
        display: block;
        .row{
            display: flex;
            margin-bottom: 20px;
            align-items: flex-start;
            gap: 10px;
            .col-4{
                flex-shrink: 0;
                flex-basis: 33%;
                display: flex;
                justify-content: center;
                .image{
                    width: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
            .col-8{
                flex: 1;
                .content{
                    >div{
                        margin-bottom: 6px;
                        &.name{
                            margin-bottom: 5px;
                            h3{
                                color: #333;
                                font-size: 16px;
                                font-weight: 500;
                            }
                        }
                        &.variants{
                            >div{
                                margin-bottom: 5px;
                                >span{
                                    &:last-child{
                                        margin-left: 8px;
                                    }
                                }
                            }
                        }
                        &.cart-btn{
                            display: flex;
                            align-items: center;
                            margin: 6px 0 8px;
                            button{
                                height: 40px;
                                width: 40px;
                                /* border-color: rgba(0,0,0,0.14); */
                                border-top: 1px solid rgba(0,0,0,0.14);
                                border-left: 1px solid rgba(0,0,0,0.14);
                                border-bottom: 1px solid rgba(0,0,0,0.14);
                                &:last-child{
                                    border-right: 1px solid rgba(0,0,0,0.14);
                                    border-left: 0;
                                }
                            }
                            input{
                                width: 40px;
                                height: 40px;
                                border: 1px solid rgba(0,0,0,0.14);
                                text-align: center;
                                pointer-events: none;
                                cursor: pointer;
                            }
                        }
                        &.delete-btn{
                            button{
                                color: rgba(0,0,0,0.4);
                                span{
                                    svg{
                                        font-size: 1.75em;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        &:nth-child(2){
            h3{
                color: #000;
                font-size: 20px;
                font-weight: 500;
            }
            .total{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 0 18px;
                >div{
                    font-weight:600;
                    font-size: 17px;
                }
            }
            .checkout{
                display: flex;
                @media (min-width: 480px){
                    justify-content: flex-end;
                }
                button{
                    width: 100%;
                    background: orange;
                    text-transform: uppercase;
                    padding: 10px 20px;
                    @media (min-width: 480px){
                        width: 180px;
                    }
                    a{
                        display: block;
                        color: #fff;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                        line-height: 20px;
                    }
                }
            }
        }
    }
`

export const Container = styled.div`
    margin: 0 auto;

    /* @media (min-width: 1400px){
        max-width: 1400px;
    } */
    
    @media (min-width: 768px){
        max-width: 767px;
    }
    
    @media (min-width: 992px){
        max-width: 991px;
    }

    @media (min-width: 1400px){
        max-width: 1400px;
    }
`

export default CartWrap