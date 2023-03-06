import styled from "styled-components";

const OrderWrap = styled.div`
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
    >div{
        background-color: rgb(33, 41, 70);
        border-radius: 8px;
        border: 1px solid rgb(17, 25, 54);
        .title-order{
            display: flex;
            align-items: center;
            color: rgb(189, 200, 240);
            padding: 24px;
            border-bottom: 1px solid #bdc8f070;
        }
        .feature-order{
            padding: 20px 10px;
            display: flex;
            align-items: center;
            .form{
                form{
                    width: 100%;
                    >div{
                        position: relative;
                        width: 100%;
                        color: rgb(189, 200, 240);
                        border: 1px solid #4c4f52;
                        padding: 0.25rem 0.75rem;
                        border-radius: 4px;
                        transition: all 0.5s ease 0s;
                        &:focus-within{
                            border-color: #707275;
                        }
                        >button{
                            position: absolute;
                            top: 50%;
                            right: 1px;
                            transform: translateY(-50%);
                            padding: 10px;
                            color: rgb(189, 200, 240);
                        }
                        >input{
                            width: 100%;
                            height: 3rem;
                            background: transparent;
                            border: none;
                            outline: none;
                            color: rgb(189, 200, 240);
                            font-size: 16px;
                            padding-right: 40px;
                            &::placeholder{
                                color: rgba(189, 200, 240, 0.418);
                            }
                        }
                    }
                }
            }
            .filter{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                position: relative;
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
                    background: rgb(41,49,79);
                    color: rgb(124,77,255);
                }
                .dropdown{
                    position: absolute;
                    top: 120%;
                    right: 0;
                    width: 200px;
                    height: 250px;
                    overflow: auto;
                    background: white;
                    border-radius: 4px;
                    padding: 10px;
                    transform-origin: center top 0;
                    transform: rotateX(90deg);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.5s ease 0s;
                    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 10%);
                    z-index: 999;
                    &.active{
                        opacity: 1;
                        transform: rotateX(0deg);
                        visibility: visible;
                    }
                    .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label {
                        color: #000;
                    }
                    >div{
                        margin-bottom: 20px;
                        h4{
                            font-weight: 600;
                            font-size: 16px;
                            color: #000;
                        }
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
        .content-order{
            padding: 20px 10px;
            overflow-x: auto;
            overflow-y: hidden;
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
                border: 1px solid #3a4570;
                border-collapse: collapse;
                margin-bottom: 20px;
                th,td{ 
                    padding: 15px 30px;
                    text-align: center;
                    vertical-align: middle;
                    white-space: nowrap;
                }
                tbody{
                    tr{
                        border-top: 1px solid #3a4570;
                    }
                    td{
                        .update_order{
                            /* position: relative; */
                            .drop-down{
                                border: 1px solid #bdc8f070;
                                width: 135px;
                                position: relative;
                                height: 40px;
                                padding: 0 5px;
                                cursor: pointer;
                                .label{
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    height: 100%;
                                    >span{
                                        &.arrow{
                                            display: inline-block;
                                            top: 2px;
                                            width: 14px;
                                            height: 14px;
                                            position: relative;
                                            transform: rotate(0);
                                            transition: all 0.4s ease;
                                            &.active{
                                                transform: rotate(180deg);
                                            }
                                            &::after,&::before{
                                                content: "";
                                                width: 9px;
                                                height: 2px;
                                                background: rgb(189, 200, 240);
                                                display: block;
                                                position: absolute;
                                                top: 50%;
                                            }
                                            &::before{
                                                border-top-left-radius: 1px;
                                                border-bottom-left-radius: 1px;
                                                left: 0px;
                                                transform: translateY(-50%) rotate(46deg);
                                            }
                                            &::after{
                                                border-top-left-radius: 1px;
                                                border-bottom-left-radius: 1px;
                                                left: 5px;
                                                top: 5px;
                                                transform: translateY(50%) rotate(-46deg);
                                            }
                                        }
                                    }
                                }
                                .drop-item{
                                    position: absolute;
                                    background: #fff;
                                    width: 100%;
                                    height: auto;
                                    left: 0;
                                    top: 115%;
                                    transform: rotateX(90deg);
                                    transform-origin: center top 0;
                                    transition: all .5s ease 0s;
                                    visibility: hidden;
                                    z-index: 99;
                                    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 10%);
                                    &.active{
                                        visibility: visible;
                                        opacity: 1;
                                        transform: rotateX(0deg);
                                    }
                                    >div{
                                        height: 40px;
                                        display: flex;
                                        align-items: center;
                                        color: #000;
                                        padding: 0 10px;
                                        &:hover{
                                            background: rgba(0,0,0,0.15);
                                        }
                                    }
                                }
                            }
                        }
                        a{
                            span{
                                color: rgb(189, 200, 240);
                                svg{
                                    font-size: 1.5rem;
                                }
                            }
                        }
                    }
                }
            }
            /* .row{
                display: grid;
                grid-template-columns: repeat(4,1fr);
                height: auto;
                
                gap: 15px;
                .col-3{
                    border: 1px solid #bdc8f070;
                    border-radius: 4px;
                    padding: 5px 10px;
                    user-select: none;
                    grid-column: span 4 / span 4;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    @media (min-width: 576px){
                        grid-column: span 2 / span 2;
                    }
                    @media (min-width: 992px){
                        grid-column: span 2 / span 2;
                    }
                    @media (min-width: 1024px){
                        grid-column: span 2 / span 2;
                    }
                    @media (min-width: 1680px){
                        grid-column: span 1 / span 1;
                    }
                    
                    >div{
                        &:first-child{
                            font-weight: 600;
                            text-transform: uppercase;
                            font-size: 1.15em;
                            margin-top: 5px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            >span{
                                font-size: 16px;
                                
                            }
                        }
                        &:nth-child(2){
                            font-size: 1.15em;
                            line-height: 25px;
                            >span{
                                font-size: 1em;
                            }
                        }
                        &:nth-child(3){
                            font-size: 1.15em;
                            line-height: 25px;
                            >span{
                                font-size: 1em;
                            }
                        }
                        &:nth-child(4){
                            >span{
                                font-size: 1.15em;
                                line-height: 25px;
                            }
                        }
                        &:nth-child(5){
                            >span{
                                font-size: 1.15em;
                                line-height: 25px;
                                &:last-child{
                                    margin-left: 5px;
                                }
                            }
                        }
                        &:nth-child(6){
                            display: flex;
                            align-items: center;
                            gap: 5px;
                            @media (max-width: 767px){
                                flex-direction: column;
                                align-items: flex-start;
                                gap: 10px;
                            }
                            .drop-down{
                                border: 1px solid #bdc8f070;
                                width: 135px;
                                position: relative;
                                height: 40px;
                                padding: 0 5px;
                                cursor: pointer;
                                .label{
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    height: 100%;
                                    >span{
                                        &.arrow{
                                            display: inline-block;
                                            top: 2px;
                                            width: 14px;
                                            height: 14px;
                                            position: relative;
                                            transform: rotate(0);
                                            transition: all 0.4s ease;
                                            &.active{
                                                transform: rotate(180deg);
                                            }
                                            &::after,&::before{
                                                content: "";
                                                width: 9px;
                                                height: 2px;
                                                background: rgb(189, 200, 240);
                                                display: block;
                                                position: absolute;
                                                top: 50%;
                                            }
                                            &::before{
                                                border-top-left-radius: 1px;
                                                border-bottom-left-radius: 1px;
                                                left: 0px;
                                                transform: translateY(-50%) rotate(46deg);
                                            }
                                            &::after{
                                                border-top-left-radius: 1px;
                                                border-bottom-left-radius: 1px;
                                                left: 5px;
                                                top: 5px;
                                                transform: translateY(50%) rotate(-46deg);
                                            }
                                        }
                                    }
                                }
                                .drop-item{
                                    position: absolute;
                                    background: #fff;
                                    width: 100%;
                                    height: auto;
                                    left: 0;
                                    top: 115%;
                                    transform: rotateX(90deg);
                                    transform-origin: center top 0;
                                    transition: all .5s ease 0s;
                                    visibility: hidden;
                                    z-index: 99;
                                    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 10%);
                                    &.active{
                                        visibility: visible;
                                        opacity: 1;
                                        transform: rotateX(0deg);
                                    }
                                    >div{
                                        height: 40px;
                                        display: flex;
                                        align-items: center;
                                        color: #000;
                                        padding: 0 10px;
                                        &:hover{
                                            background: rgba(0,0,0,0.15);
                                        }
                                    }
                                }
                            }
                        }
                        &:nth-child(7){
                            >span{
                                &:last-child{
                                    margin-left: 5px;
                                }
                            }
                        }
                        &:nth-child(8){
                            height: 40px;
                            width: 150px;
                            display: flex;
                            align-items: center;
                            margin-top: auto;
                            margin-bottom: 10px;
                            @media (max-width: 480px){
                                width: 100%;
                            }
                            a{
                                width: 100%;
                                border-radius: 4px;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: rgb(189, 200, 240);
                                border: 1px solid #bdc8f070;
                            }
                        }
                    }
                }
            } */
        }
    }
`

export default OrderWrap