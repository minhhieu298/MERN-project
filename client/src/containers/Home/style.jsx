import styled from "styled-components";

const HomeWrap = styled.div`
    width: 100%;
    /* height: 100vh; */
    section{
        margin-top: 80px;
        padding: 0 25px;
        h1{
            font-size: 1.75rem;
            font-weight: 500;
            color: #000;
            line-height: 1;
            margin-bottom: 20px;
        }
        &.trending{
            .banner{
                margin-bottom: 25px;
                .row{
                    display: grid;
                    grid-template-columns: repeat(12,1fr);
                    gap: 15px;
                    .col-6{
                        grid-column: span 12 / span 12;
                        position: relative;
                        @media (min-width: 640px){
                            grid-column: span 6 / span 6;
                        }
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                        >div{
                            position: absolute;
                            bottom: 25px;
                            left: 20px;
                            h3{
                                color: #fff;
                                margin-bottom: 20px;
                                font-size: 16px;
                                @media (min-width: 640px){
                                    font-size: 1.5rem;
                                }
                            }
                            a{
                                padding: 10px 20px;
                                background: #fff;
                                border-radius: 50px;
                            }
                        }
                    }
                }
            }
        }
        &.products{
            .slider{
                display: flex;
                padding-inline-start: 0;
                scroll-padding: 0;
                scroll-snap-type: x mandatory;
                padding-bottom: 30px;
                margin-bottom: 25px;
                overflow-x: auto;
                position: relative;
                &:hover{
                    &::-webkit-scrollbar-track {
                        background: #f1f1f1;
                        border-radius: 10px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: rgba(0,0,0,0.14);
                        border-radius: 10px;
                    }
                }
                &::-webkit-scrollbar{
                    height: 10px;
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
                    margin: 0 var(--column-gap) 0 0;
                    flex: 0 0 100%;

                    @media (min-width: 640px){
                        flex: 0 0 calc(50% - var(--column-offset));
                    }
                    @media (min-width: 768px){
                        flex: 0 0 calc(33% - var(--column-offset));
                    }
                    @media (min-width: 991px){
                        flex: 0 0 calc(33% - var(--column-offset));
                    }
                }
                .slide-item{
                    position: relative;
                    a{
                        display: block;
                        >.discount{
                            position: absolute;
                            top: 0;
                            right: 0;
                            >span{
                                width: 30px;
                                height: 30px;
                                position: absolute;
                                top: 7px;
                                right: 7px;
                                background: red;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                transform: rotate(0deg);
                                &::before,&::after{
                                    width: 100%;
                                    height: 100%;
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    background: red;
                                    content: '';
                                    z-index: 1;
                                }
                                &::before{
                                    transform: rotate(135deg);
                                }
                                >span{
                                    color: #fff;
                                    z-index: 5;
                                }
                            }
                        }
                        .image{
                            img{
                                width: 100%;
                                object-fit: cover;
                            }
                        }
                        .content{
                            margin: 12px 16px 0 0;
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 10px 0;
                            @media (min-width: 992px){
                                align-items: center;
                                justify-content: space-between;
                                flex-direction: row;
                            }
                            .title{
                                h4{
                                    color: #111;
                                    font-weight: 500;
                                    font-size: 18px;
                                    line-height: 24px;
                                    /* text-overflow: ellipsis; */
                                    /* white-space: nowrap; */
                                }
                            }
                            .price{
                                line-height: 24px;
                                >span.price_after{
                                    text-decoration: line-through;
                                    margin-right: 10px;
                                }
                                >span{
                                    &.discount{
                                        font-size: 17px;
                                    }
                                }
                                span{
                                    display: inline-block;
                                    font-size: 18px;
                                    color: #000;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export const SlideWrap = styled.div`
    width: 100%;
    position: relative;
    min-height: 100vh;
    .slider{
        overflow: hidden;
        transition: ease 1000ms;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        white-space: nowrap;
        img{
            display: inline-block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export default HomeWrap