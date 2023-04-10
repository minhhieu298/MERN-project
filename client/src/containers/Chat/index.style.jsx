import styled from 'styled-components'

const ChatContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;
    width: 300px;
    height: ${({ open }) => open ? '400px' : '50px'};
    background: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    user-select:none;
    cursor: pointer;
    .container{
        height: 100%;
        display: flex;
        flex-direction: column;
        .title__chat{
            height: 50px;
            display:flex;
            align-items:center;
            padding: 5px 10px;
            border-bottom: 1px solid rgba(0,0,0,0.14);
            h3{
                flex:1;
            }
        }
        .container__chat{
            flex: 1;
            display:flex;
            flex-direction:column;
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
                        padding: 5px;
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
                height:50px;
                background:#fff;
                border-top: 1px solid rgba(0,0,0,0.14);
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
                            }
                        }
                        button{
                            span{
                                color: blue;
                                svg{
                                    font-size: 1.5rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default ChatContainer