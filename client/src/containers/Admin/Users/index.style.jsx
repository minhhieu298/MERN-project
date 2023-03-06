import styled from 'styled-components'

const UserWrap = styled.div`
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

    .container{
        &_head{
            margin-bottom: 20px;
            h1{
                font-size: 18px;
                font-weight: 500;
            }
        }
        &_tool{
            width: 100%;
            margin-bottom: 20px;

            @media (min-width: 640px){
                width: 400px;
            }
            form{
                display: block;
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
        &_body{
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
                th,td{ 
                    padding: 15px 30px;
                    text-align: center;
                    vertical-align: middle;
                    white-space: nowrap;
                    span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
                        color: rgb(189, 200, 240) !important; 
                    }
                    
                }
                thead{
                    height: 60px;
                    th{
                        font-weight: 500;
                        &:first-child{
                            width: 50px;
                        }
                        &:nth-child(2){
                            text-align: left;
                        }
                        &:nth-child(3),&:nth-child(4){
                            >div{
                                display: flex;
                                justify-content: center;
                            }
                        }
                    }
                }
                tbody{
                    tr{
                        border-top: 1px solid #3a4570;
                    }
                    .user{
                        display: flex;
                        align-items: center;
                        gap: 0 20px;
                        img{
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            object-fit: cover;
                            flex-shrink: 0;
                        }
                    }
                    .action{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0 15px;
                        button{
                            span{
                                svg{
                                    font-size: 1.5rem;
                                }
                            }
                        }
                    }
                    td{
                        &:nth-child(3){
                            /* text-align: left; */
                        }
                        &:last-child{
                            >div{
                                position: relative;
                                >button{
                                    color:rgb(189, 200, 240);
                                }
                                >div{
                                    position: absolute;
                                    width: 100px;
                                    background: #fff;
                                    border-radius: 4px;
                                    top: 0;
                                    left: -20px;
                                    >*{
                                        padding: 10px 5px;
                                        color: #000;
                                    }
                                    a{
                                        display: block;
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

export default UserWrap