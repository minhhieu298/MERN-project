import styled, { css } from 'styled-components'

const CateWrap = styled.div`
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
`

export const Box = styled.div`
    h1{
        font-weight: 500;
        font-size: 1.25em;
    }
    margin-bottom: 20px;
    ${props => props.form && css`
        margin-bottom: 0;
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 20px;
        .create{
            grid-column: span 2 / span 2;
            @media (min-width: 1280px){
                grid-column: span 1 /span 1;
            }
            form{
                >div{
                    padding: 15px 5px 10px;
                    .form-group{
                        margin-bottom: 20px;
                        >div{
                            width: 100%;
                            padding: 5px;
                            border: 1px solid rgb(71 85 105);
                            border-radius: 4px;
                            transition: all 0.4s;
                            margin-bottom: 15px;
                            &:focus-within{
                                border-color: rgb(248 250 252);
                            }
                            >input{
                                width: 100%;
                                background: transparent;
                                outline: none;
                                border: none;
                                padding-left: 10px;
                                height: 40px;
                                font-size: 17px;
                                color: rgb(189, 200, 240);
                                &:read-only{
                                    text-transform: lowercase;
                                    cursor: not-allowed;
                                    pointer-events: none;
                                }
                            }
                        }
                        &:last-child{
                            border: none;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            padding: 0;
                            >button{
                                color: rgb(189, 200, 240);
                                border: 1px solid rgb(71 85 105);
                                height: 40px;
                                border-radius: 4px;
                                font-size: 17px;
                                text-transform: uppercase;
                                width: 100%;
                                @media (min-width: 576px){
                                    width: 100px;
                                }
                            }
                        }
                        &:first-child{
                            /* background: red; */
                            padding: 0;
                            .dropdown{
                                position: relative;
                                cursor: pointer;
                                .wrap {
                                    display: flex;
                                    align-items: center;
                                    padding: 15px 20px;

                                    .label{
                                        flex: 1;
                                    }
                                    .arrow{
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
                                .content{
                                    position: absolute;
                                    top: 120%;
                                    left: 0;
                                    width: 100%;
                                    background: #fff;
                                    transform: rotateX(90deg);
                                    visibility: hidden;
                                    opacity: 0;
                                    transform-origin: top center 0;
                                    transition: all 0.5s ease 0s;
                                    overflow: auto;
                                    max-height: 160px;
                                    border-radius: 3px;
                                    &.active{
                                        opacity: 1;
                                        visibility: visible;
                                        transform: rotateX(0deg);
                                    }
                                    >div{
                                        height: 40px;
                                        color: #000;
                                        display: flex;
                                        align-items: center;
                                        padding: 10px 20px;
                                        &:hover{
                                            background: rgba(0,0,0,0.1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
        }
        .update{
            grid-column: span 2 / span 2;
            @media (min-width: 1280px){
                grid-column: span 1 /span 1;
            }
            .head{
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 20px 0;
                >div{
                    @media (max-width: 575px){
                        width: 100%;
                    }
                    button{
                        color: rgb(189, 200, 240);
                        padding: 10px 20px;
                        border: 1px solid rgb(71 85 105);
                        border-radius: 4px;
                    }
                }
            }
            .container{
                padding: 5px;
                .parent{
                    >*{
                        padding: 10px 0;
                    }
                    .label_parent{
                        display: flex;
                        align-items: center;
                        gap: 0 10px;
                        svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root {
                            color: rgb(189, 200, 240);
                        }
                        form{
                            >div{
                                padding: 5px;
                                border: 1px solid rgb(71 85 105);
                                border-radius: 4px;
                                transition: all 0.4s;
                                position: relative;
                                &:focus-within{
                                    border-color: rgb(248 250 252);
                                }
                                input{
                                    width: 100%;
                                    background: transparent;
                                    outline: none;
                                    border: none;
                                    padding-left: 10px;
                                    height: 30px;
                                    font-size: 17px;
                                    color: rgb(189, 200, 240);
                                    padding-right: 75px;
                                }
                                button{
                                    position: absolute;
                                    width: 70px;
                                    height: 40px;
                                    top: 0;
                                    right: 0;
                                    background: #29314f;
                                    color: rgb(189, 200, 240);
                                    padding: 0 5px;
                                    border-top-right-radius: 4px;
                                    border-bottom-right-radius: 4px;
                                }
                            }
                        }
                        >div{
                            &:last-child{
                                button{
                                    color: rgb(189, 200, 240);
                                    &:last-child{
                                        margin-left: 10px;
                                        span{
                                            svg{
                                                font-size: 1.5em;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .children{
                        margin-left: 20px;
                        display: flex;
                        align-items: center;
                        gap: 0 10px;
                        form{
                            >div{
                                padding: 5px;
                                border: 1px solid rgb(71 85 105);
                                border-radius: 4px;
                                transition: all 0.4s;
                                position: relative;
                                &:focus-within{
                                    border-color: rgb(248 250 252);
                                }
                                input{
                                    width: 100%;
                                    background: transparent;
                                    outline: none;
                                    border: none;
                                    padding-left: 10px;
                                    height: 30px;
                                    font-size: 17px;
                                    color: rgb(189, 200, 240);
                                    padding-right: 75px;
                                }
                                button{
                                    position: absolute;
                                    width: 70px;
                                    height: 40px;
                                    top: 0;
                                    right: 0;
                                    background: #29314f;
                                    color: rgb(189, 200, 240);
                                    padding: 0 5px;
                                    border-top-right-radius: 4px;
                                    border-bottom-right-radius: 4px;
                                }
                            }
                        }
                        >div{
                            &:last-child{
                                button{
                                    color: rgb(189, 200, 240);
                                    &:last-child{
                                        margin-left: 10px;
                                        span{
                                            svg{
                                                font-size: 1.5em;
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
    `}
`



export default CateWrap