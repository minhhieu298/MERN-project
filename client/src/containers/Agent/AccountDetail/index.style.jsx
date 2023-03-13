import styled from 'styled-components'

export const Container = styled.div`
    .order{
        &-top{
            font-size: 16px;
            line-height: 19px;
            color: rgba(0,0,0,.8);
            background: #fff;
            border-bottom: 2px solid rgba(0,0,0,.09);
            text-align: center;
            
            display: flex;
            padding-inline-start: 0;
            scroll-padding: 0;
            scroll-snap-type: x mandatory;
            margin-bottom: 25px;
            overflow-x: auto;
            position: relative;
            gap: 10px;
            @media (min-width: 992px){
                display: grid;
                grid-template-columns: repeat(6,minmax(0,1fr));
                >div{
                    grid-column: span 1 / span 1;
                }
            }
            &::-webkit-scrollbar{
                height: 0px;
            }
            &::-webkit-scrollbar-track {
                background: none;
                border-radius: 10px;
                transition: all 0.5s ease 0s;

            }

            &::-webkit-scrollbar-thumb {
                background: none;
                border-radius: 10px;
                transition: all 0.5s ease 0s;

            }
            > *{
                --column-offset: 0px;
                --column-gap: 12px;
                flex: 0 0 calc(40% - var(--column-offset));

                @media (min-width: 640px){
                    flex: 0 0 calc(25% - var(--column-offset));
                }
                @media (min-width: 768px){
                    flex: 0 0 calc(20% - var(--column-offset));
                }
            }
            >div{
                height: 100%;
                padding: 16px 0;
                cursor: pointer;
                &:hover{
                    color: #ee4d2d !important;
                }
            }
        }
        &-search{
            padding: 12px 0;
            margin: 12px 0;
            display: flex;
            align-items: center;
            box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
            color: #212121;
            background: #eaeaea;
            border-radius: 2px;
            >div{
                width: 100%;
                form{
                    display: flex;
                    align-items: center;
                    button{
                        margin: 0 15px;
                        color: #b2b2b2;
                    }
                    >input{
                        width: 100%;
                        outline: none;
                        border: none;
                        background: transparent;
                    }
                }
            }
        }
        &-middle{
            .list-order{
                &-item{
                    margin: 12px 0;
                    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
                    border-radius: 0.125rem;
                    &-top{
                        padding: 24px 24px 12px;
                        background: #fff;
                        >div{
                            &:first-child{
                                display: flex;
                                padding: 0 0 12px;
                                flex-direction: column;
                                align-items: flex-start;
                                gap: 5px;
                                @media (min-width: 768px){
                                    align-items: center;
                                    justify-content: space-between;
                                    flex-direction: row;
                                }
                                >div{
                                    &:first-child{
                                        font-weight: 600;
                                        >span{
                                            font-size: 0.875rem;
                                            @media (min-width: 640px){
                                                font-size: 15px;
                                            }                  
                                        }
                                    }
                                    &:nth-child(2){
                                        >div{
                                            &.pending,
                                            &.refund,
                                            &.cancel {
                                                line-height: 24px;
                                                color: #ee4d2d;
                                                text-align: right;
                                                text-transform: uppercase;
                                                white-space: nowrap;
                                                text-overflow: ellipsis;
                                                overflow: hidden;
                                                font-size: 0.875rem;
                                                @media (min-width: 640px){
                                                    font-size: 15px;
                                                }
                                            }
                                            &.delivered {
                                                display: flex;
                                                align-items: center;
                                                > a {
                                                    display: flex;
                                                    align-items: center;
                                                    margin: 0 10px 0 0;
                                                    padding: 0 5px 0 0;
                                                    border-right: 1px solid rgba(0, 0, 0, 0.12);
                                                    &:hover {
                                                        text-decoration: none !important;
                                                    }
                                                    > span {
                                                        color: #26aa99;
                                                        &:first-child {
                                                            margin: 0 4px 0 0;
                                                            font-size: 1rem;
                                                        }
                                                    }
                                                }
                                                > div {
                                                    line-height: 24px;
                                                    color: #ee4d2d;
                                                    text-align: right;
                                                    text-transform: uppercase;
                                                    white-space: nowrap;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            &:nth-child(2){
                                border-bottom: 1px solid rgba(0,0,0,.09);
                            }
                            &:nth-child(3){
                                >div{
                                    display: flex;
                                    align-items: center;
                                    padding: 12px 0 0;
                                    gap: 12px;
                                    .infor{
                                        display: flex;
                                        align-items: center;
                                        flex: 1;
                                        gap: 12px;
                                        img{
                                            width: 80px;
                                            height: 80px;
                                            object-fit: cover;
                                            flex-shrink: 0;
                                        }
                                        >div{
                                            flex: 1;
                                            span{
                                                display: block;
                                                margin-bottom: 3px;
                                            }
                                            p{
                                                color: #ee4d2d;
                                            }
                                        }
                                    }
                                    .price{
                                        span{
                                            color: #ee4d2d;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &-middle{
                        width: 100%;
                        height: 0;
                        border-bottom: 1px dotted rgba(0,0,0,.09);
                        position: relative;
                        >div{
                            box-sizing: border-box;
                            background: #f5f5f5;
                            width: 0.4375rem;
                            height: 0.4375rem;
                            border-radius: 50%;
                            z-index: 1;
                            position: absolute;
                            top: 0;
                            &:first-child{
                                left: 0;
                                transform: translate(-50%,-50%);
                            }
                            &:last-child{
                                right: 0;
                                transform: translate(50%,-50%);
                            }
                        }
                    }
                    &-bottom{
                        padding: 24px 24px 12px;
                        background: #fffefb;
                        >div{
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            >div{
                                &:first-child{
                                    margin: 0 10px 0 0;
                                    font-size: 14px;
                                    line-height: 20px;
                                    color: rgba(0,0,0,.8);
                                }
                                &:last-child{
                                    color: #ee4d2d;
                                    line-height: 30px;
                                    font-size: 18px;
                                    @media (min-width: 640px){
                                        font-size: 24px;
                                    }
                                }
                            }
                        }
                    }
                    &-btn{
                        padding: 12px 24px 24px;
                        display: flex;
                        background: #fffefb;
                        flex-direction: column;
                        gap: 10px;
                        @media (min-width: 768px){
                            gap: 0;
                            justify-content: space-between;
                            flex-direction: row;
                        }
                        >div{
                            display: flex;
                            justify-content: flex-end;
                            >span{
                                font-size: 12px;
                                line-height: 16px;
                                color: rgba(0,0,0,.54);
                            }
                            >div{
                                display: flex;
                                gap: 10px;
                                flex-direction: column;
                                width: 100%;
                                @media (min-width: 640px){
                                    flex-direction: row;
                                }
                                .repurchase{
                                    background-color: #ee4d2d;
                                    border: 1px solid #ba2b0f;
                                    color: #fff;
                                    &:hover{
                                        background-color: #d73211;
                                        border-color: #ba2b0f;
                                    }
                                }
                                .cancel,.infor-repurchase{
                                    color: #555;
                                    border: 1px solid rgba(0,0,0,.09);
                                    background-color: #fff;
                                    &:hover{
                                        background-color: rgba(0,0,0,.02);
                                        border: 1px solid rgba(0,0,0,.09);
                                    }
                                }
                                button{
                                    min-height: 40px;
                                    width: 100%;
                                    padding: 8px 10px;
                                    outline: none;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    text-transform: capitalize;
                                    border-radius: 2px;
                                    font-weight: 400;
                                    font-size: 14px;
                                    border-radius: 4px;
                                    @media (min-width: 480px){
                                        width: 150px;
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