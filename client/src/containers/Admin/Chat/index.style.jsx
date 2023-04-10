import styled from "styled-components";

const ChatContainer = styled.div`
    background-color: #1a223f;
    margin-left: 20px;
    margin-right: 20px;
    color: rgb(189, 200, 240); 
    height:100%;
    margin-top: 50px;
    margin-bottom: 40px;
    user-select: none;
    /* padding: 24px; */
    border-radius: 4px; 
    /* max-height: 500px; */
    height: 75vh;
    position: relative;
    .container{
        height: 100%;
        display: flex;
        /* gap: 10px; */
        &__contact{
            width: 25%;
            border-right: 1px solid rgb(189, 200, 240);
            display: flex;
            flex-direction: column;
            height: 100%;
            @media (max-width: 991px){
                /* display: none; */
                width: 0;
                opacity: 0;
                visibility: hidden;
                &.active{
                    /* display: block; */
                    opacity: 1;
                    visibility: visible;
                    width: 25%;
                }
            }
            &__title{
                border-bottom: 1px solid rgb(189, 200, 240);
                height:50px;
                display: flex;
                align-items: center;
                padding: 5px 10px;
            }
            &__users{
                /* flex: 1; */
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                padding: 5px 10px;
                margin-top: 20px;
                .wrapper{
                    flex-grow: 1;
                    .list__user{
                        position:relative;
                        height:100%;
                        &__item{
                            position:absolute;
                            top: 0;
                            left:0;
                            bottom:0;
                            right:0;
                            overflow: auto;
                            &::-webkit-scrollbar{
                                width: 5px;
                            }
                            &::-webkit-scrollbar-track{
                                border-radius: 10px;
                            }
                            &::-webkit-scrollbar-thumb{
                                width: 5px;
                                background-color: gray;
                                border-radius: 10px;
                            }
                            .item{
                                display: flex;
                                align-items: center;
                                gap: 10px;
                                margin-bottom: 20px;
                                cursor: pointer;
                                padding: 10px 5px;
                                border-radius: 3px;
                                &:hover{
                                    background: rgba(0,0,0,0.14);
                                }
                                img{
                                    flex-shrink: 0;
                                    width: 40px;
                                    height: 40px;
                                    object-fit: cover;
                                    border-radius: 9999px;
                                }
                                h4{
                                    flex: 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        &__chat{
            flex: 1;
            display: flex;
            flex-direction: column;
            &__head{
                display: flex;
                align-items: center;
                height: 50px;
                padding: 5px 10px;
                border-bottom: 1px solid rgb(189, 200, 240);
                >div{
                    display: flex;
                    align-items: center;
                    height: 100%;
                    gap: 10px;
                    img{
                        width: 40px;
                        height: 40px;
                        object-fit: cover;
                        border-radius: 999px;
                    }
                    h5{
                        flex: 1;
                    }
                }
            }
            &__body{
                flex: 1;
                display: flex;
                flex-direction: column;
                height: 100%;
                .message{
                    flex-grow: 1;
                    &__container{
                        position:relative;
                        height:100%;
                        &__scroll{
                            position:absolute;
                            top: 0;
                            left:0;
                            bottom:0;
                            right:0;
                            overflow: auto;
                            padding: 10px;
                            &::-webkit-scrollbar{
                                width: 5px;
                            }
                            &::-webkit-scrollbar-track{
                                border-radius: 10px;
                            }
                            &::-webkit-scrollbar-thumb{
                                width: 5px;
                                background-color: gray;
                                border-radius: 10px;
                            }
                            >div{
                                margin-top: 20px;
                                >div{
                                    display: inline-block;
                                    >div{
                                        display: flex;
                                        align-items: center;
                                        gap: 4px;
                                        img{
                                            width: 30px;
                                            height: 30px;
                                            object-fit: cover;
                                            border-radius: 999px;
                                        }
                                        p{
                                            padding: 10px 5px;
                                            border-radius: 50px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .box__message{
                    height:60px;
                    padding: 5px;
                    /* background:#fff; */
                    border-top: 1px solid rgb(189, 200, 240);
                    padding: 5px;
                    form{
                        display:block;
                        height:100%;
                        >div{
                            display:flex;
                            align-items:center;
                            height:100%;
                            gap: 5px;
                            .text{
                                width:100%;
                                padding: .25rem .75rem;
                                border-radius: 9999px;
                                border: 1px solid #4d77c59c;
                                input{
                                    width:100%;
                                    height: 30px;
                                    background: transparent;
                                    outline:none;
                                    border: none;
                                    color: rgb(189, 200, 240);
                                }
                            }
                            button{
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
            }
            &__empty{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100%;
                position: relative;
                button{
                    position: absolute;
                    top: 5px;
                    left: 5px;
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
                    span{
                        color: #fff;
                    }
                }
                img{
                    height: 100%;
                    object-fit: cover;
                }
            }
        }        
    }
`

export default ChatContainer