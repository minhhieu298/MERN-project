import styled, { css } from "styled-components";

const DiscountWrap = styled.div`
    background-color: #1a223f;
    margin-left: 20px;
    margin-right: 20px;
    color: rgb(189, 200, 240); 
    height:100%;
    margin-top: 50px;
    margin-bottom: 40px;
    user-select: none;
    padding: 24px;
    border-radius: 4px;
    @media (min-width: 992px){
        margin-left: 90px;
        margin-right: 90px;
    }
    @media (min-width: 1024px){
        margin-left: 100px;
        margin-right: 100px;
    }
    @media (min-width: 1024px){
        margin-left: 120px;
        margin-right: 120px;
    }
    >.modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        >.form{
            background: #fff;
            width: 100%;
            padding: 10px;
            border-radius: 2px;
            @media (min-width: 992px){
                width: 450px;
            }
            h1{
                font-size: 20px;
                color: #000;
            }
            form{
                >div{
                    >div{
                        margin: 10px 0 20px;
                        border: 1px solid rgba(0,0,0,0.14);
                        border-radius: 4px;
                        padding: 15px 15px;
                        input{
                            border: none;
                            outline: none;
                            background: transparent;
                            width: 100%;
                            padding-left: 10px;
                        }
                    }
                    button{
                        width: 100px;
                        height: 40px;
                        background: blueviolet;
                        border-radius: 4px;
                        color: #fff;
                    }
                }
            }
        }
    }
`
export const Box = styled.div`
    ${props => props.feature && css`
        width: 100%;
        height: 60px;
        margin: 15px 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 480px){
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 10px;
            height: auto;
        }
        .search{
            max-width: 300px;
            min-width: 250px;
            height: 48px;
            position: relative;
            @media (max-width: 480px){
                max-width: 100%;
                width: 100%;
            }
            >div{
                width: 100%;
                padding: 5px 45px 5px 5px;
                border-radius: 4px;
                border: 1px solid rgb(71 85 105);
                transition: all 0.4s ease-in-out;
                &:focus-within{
                    border-color: rgb(248 250 252);
                }
                input{
                    width: 100%;
                    height: 38px;
                    border: none;
                    background: transparent;
                    padding-left: 10px;
                    color: rgb(215,220,236);
                }
            }
            >button{
                position: absolute;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                top: 60%;
                right: 10px;
                transform: translateY(-60%);
                color: rgb(215,220,236);
                display: flex;
                align-items: center;
                justify-content: center;
                span{
                    display: block;
                    line-height: 1px;
                }
                &:hover{
                    background: rgba(0,0,0,0.14);
                }
            }
        }
        .filter{
            .desktop{
                font-size: 16px;
                .dropdown{
                    position: relative;
                    max-width: 300px;
                    .btn{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        >button{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            border-radius: 8px;
                            width: 34px;
                            height: 34px;
                            font-size: 1.2rem;
                            overflow: hidden;
                            transition: all 0.2s ease-in-out 0s;
                            background: rgb(41, 49, 79);
                            color: rgb(124, 77, 255);
                            &:hover{
                                background: rgb(124, 77, 255);
                                color: rgb(209, 196, 233);
                            }
                        }
                    }
                    .drop-item{
                        position: absolute;
                        background: #fff;
                        width: 200px;
                        height: 250px;
                        right: 0;
                        padding: 10px;
                        top: 40px;
                        overflow: hidden;
                        z-index: 2;
                        visibility: hidden;
                        opacity: 0;
                        transform: rotateX(90deg);
                        transform-origin:  top center 0;
                        transition: all 0.4s ease-in-out;
                        pointer-events: none;
                        box-shadow: 0 0px 1px 0px rgba(0,0,0,0.2);
                        overflow-y: scroll;
                        &::-webkit-scrollbar{
                            width: 5px;
                        }
                        &::-webkit-scrollbar-thumb{
                            border-radius: 10px;
                        }
                        &::-webkit-scrollbar-track{
                            border-radius: 10px;
                        }
                        &.active{
                            opacity: 1;
                            transform: rotateX(0);
                            visibility: visible;
                            pointer-events: auto;
                        }
                        .item{
                            width: 100%;
                            height: 30px;
                            line-height: 20px;
                            border-radius: 10px;
                            padding: 5px 10px;
                            cursor: pointer;
                            color: #000;
                        }
                        >div{
                            color: #000;
                            &.btn-reset{
                                >button{
                                    background: #000;
                                    color: #fff;
                                    padding: 10px 20px;
                                    border-radius: 4px;
                                }
                            }
                        }
                    }
                }
            }
            .mobile{
                .btn{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    >button{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 8px;
                        width: 34px;
                        height: 34px;
                        font-size: 1.2rem;
                        overflow: hidden;
                        transition: all 0.2s ease-in-out 0s;
                        background: rgb(41, 49, 79);
                        color: rgb(124, 77, 255);
                        &:hover{
                            background: rgb(124, 77, 255);
                            color: rgb(209, 196, 233);
                        }
                    }
                }
                .tab-filter{
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    bottom: 0;
                    left: 0;
                    z-index: 99999;
                    transform: translateY(100%);
                    /* opacity: 0; */
                    visibility: hidden;
                    transition: all 0.4s ease-in-out;
                    &.show{
                        /* opacity: 1; */
                        visibility: visible;
                        transform: translateY(0);
                    }
                    >button{
                        margin: 5px 5px 0 0;
                        float: right;
                        width: 34px;
                        height: 34px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        color: #fff;
                        background: #000;
                        >span{
                            line-height: 14px;
                        }
                    }
                    >div{
                        padding: 10px;
                        color: #000;
                        h3{
                            font-size: 17px;
                            font-weight: 500;
                            color: #000;
                        }
                        &.categories{
                            margin-top: 60px;
                        }
                        &.btn-reset{
                            >button{
                                padding: 10px 20px;
                                background: #000;
                                color: #fff;
                                border-radius: 4px;
                            }
                        }
                    }
                }
            }
        }
    `}
    ${props => props.modal && css`
            padding: 0 10px;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.5);
            z-index: 99999;
            pointer-events: none;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease-in-out;
            &.open{
                pointer-events: auto;
                opacity: 1;
                visibility: visible;
                .modal{
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            .modal{
                width: 400px;
                /* height: 400px; */
                border-radius: 2px;
                background: #fff;
                color: #000;
                opacity: 0;
                position: relative;
                transform: translateY(1000%);
                transition: all 0.5s ease-in-out 0s;
                @media (max-width: 640px){
                    width: 100%;
                }
                >button{
                    float: right;
                    width: 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: 0.35s linear;
                   
                    &:hover{
                        background: rgba(0,0,0,0.05);
                    }
                }
                >div{
                    margin-top: 40px;
                    padding: 10px;
                    h1{
                        font-size: 18px;
                        font-weight: 500;
                    }
                    >div{
                        width: 100%;
                        border: 1px solid rgba(0,0,0,0.14);
                        padding: 5px;
                        margin: 10px 0 8px;
                        border-radius: 4px;
                        transition: all 0.5s;
                        
                        &:focus-within{
                            border-color: rgba(0,0,0,0.2);
                        }
                        >input{
                            border: none;
                            outline: none;
                            width: 100%;
                            height: 38px;
                            padding-left: 10px;
                        }
                    }
                    button{
                        float: right;
                        width: 100px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #111936;
                        margin-bottom: 20px;
                        border-radius: 4px;
                        color: #fff;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-weight: 500;
                        font-family: Verdana, Geneva, Tahoma, sans-serif;
                        &:hover{
                            opacity: 0.9;
                        }
                    }
                }
            }
    `}
    ${props => props.page && css`
        display: flex;
        align-items: center;
        height: 50px;
        justify-content: flex-end;
        .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root{
            color: rgb(189, 200, 240); 
        }
        @media screen and (max-width:512px) {
            .css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root{
                margin: 0 0;
                min-width: 35px;
                height: 35px;
            }
        }  
    `}
    ${props => props.product && css`
        display: grid;
        grid-template-columns: repeat(1,minmax(0,1fr));
        gap: 10px;

        @media (min-width: 576px){
            grid-template-columns: repeat(2,minmax(0,1fr));
        }
        @media (min-width: 768px){
            grid-template-columns: repeat(3,minmax(0,1fr));
        }
        @media (min-width: 992px){
            grid-template-columns: repeat(4,minmax(0,1fr));
        }
        @media (min-width: 1024px){
            grid-template-columns: repeat(4,minmax(0,1fr));
        }
        @media (min-width: 1280px){
            grid-template-columns: repeat(5,minmax(0,1fr));
        }
    `}
`

export const Grid = styled.div`
    border: 1px solid #4c4f52;
    display: flex;
    gap: 10px;
    padding: 10px;
    border-radius: 4px;
    flex-direction: column;
    position: relative;
    .image{
        flex-shrink: 0;
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        h3{
            font-weight: 500;
            font-size: 17px;
            flex: 1;
        }
        .price{
            display: flex;
            align-items: center;
            >span.price_after{
                text-decoration: line-through;
                margin-right: 10px;
            }
            >span{
                &.discount{
                    font-size: 17px;
                }
            }
        }
        .pos{
            width: 35px;
            height: 35px;
            position: absolute;
            top: 0;
            right: 0;
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
            /* &::after{
                transform: rotate(180deg);
            } */
            >span{
                color: #fff;
                z-index: 5;
            }
        }
        .form{
            position: relative;
            >div{
                padding: 0.25em 0.75em;
                border: 1px solid #4c4f52;
                border-radius: 4px;
                &:focus-within{
                    border-color: #707275;
                }
                >input{
                    width: 100%;
                    height: 3rem;
                    background: transparent;
                    border: none;
                    outline: none;
                    color: rgb(189, 200, 240);
                    font-size: 16px;
                    padding-left: 10px;
                    padding-right: 40px;
                    &::placeholder{
                        color: rgba(189, 200, 240, 0.418);
                    }
                }
                >button{
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    position: absolute;
                    top: 50%;
                    justify-content: center;
                    right: 0;
                    transform: translateY(-50%);
                    >span{
                        color: rgb(189, 200, 240);
                        >svg{
                            font-size: 1.5em;
                        }
                    }
                }
            }
        }
    }
`

export const Title = styled.div`
    margin-top: 15px;
    position: relative;
    /* height: 50px; */
    h3{
        font-size: 18px;
        font-weight: 500;
        font-family: Helvetica,Arial,sans-serif;
        color: rgb(189, 200, 240); 
    }
    >div{
        margin: 10px 0;
        display: flex;
        align-items: center;
        gap: 10px;
        p{
            color: rgb(189, 200, 240); 
            font-size: 15px;
            &.discount{
                text-decoration: line-through;
            }
        }
    }
    button{
        position: absolute;
        top: 0;
        right: 0;
        color: rgb(189, 200, 240); 
        cursor: pointer;
        z-index: 1;
    }
`


export default DiscountWrap