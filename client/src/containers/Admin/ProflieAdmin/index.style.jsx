import styled, { css } from 'styled-components'

const AdminWrap = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    color: rgb(189, 200, 240); 
    height:100%;
    margin-top: 50px;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #1a223f;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;

    >h1{
        font-size: 18px;
        font-weight: 500;
    }
    >form{
        display: block;
        >div{
            .form-group{
                display: grid;
                grid-template-columns: repeat(8,minmax(0,1fr));
                column-gap: 20px;
                row-gap: 20px;
                margin-bottom: 20px;
                /* align-items: center; */
                label{
                    grid-column: span 8 / span 8;
                    @media (min-width: 992px){
                        grid-column: span 2 / span 2;
                    }
                }
                >div{
                    grid-column: span 8 / span 8;
                    border: 1px solid #4c4f52;
                    padding: 0.25rem 0.75rem;
                    border-radius: 4px;
                    transition: all 0.5s ease 0s;
                    @media (min-width: 992px){
                        grid-column: span 6 / span 6;
                    }
                    &:focus-within{
                        border-color: #707275;
                    }
                    >input{
                        height: 40px;
                        border: none;
                        padding: 5px 10px 5px 10px;
                        width: 100%;
                        background: transparent;
                        color: rgb(189, 200, 240); 
                    }
                    >span{
                        position: relative;
                        top: 5px;
                        color: #ee4d2d;
                    }
                }
                &:first-child{
                    >div{
                        border: none;
                        padding: 0;
                        >div{
                            position: relative;
                            border: 1px dashed #4c4f52;
                            padding: 1.5rem 1.5rem 1.25rem;
                            text-align: center;
                            border-radius: 4px;
                            margin-bottom: 1rem;
                            >input{
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                            }
                            >p{
                                margin-top: 0.5rem;
                                margin-bottom: 0.25rem;
                            }
                            >em{
                                font-size: .75rem;
                            }
                        }
                        >aside{
                            img{
                                width: 80px;
                                height: 80px;
                                object-fit: cover;
                            }
                        }
                    }
                }
                &:last-child{
                    margin-bottom: 3.75rem;
                    >div:last-child{
                        grid-column-start: 1;
                        border: none;
                        padding: 0;
                        border-radius: 0;
                        @media (min-width: 992px){
                            grid-column-start: 3;
                        }
                        button{
                            background-color: #1dac1d;
                            color: #fff;
                            height: 40px;
                            padding-left: 20px;
                            padding-right: 20px;
                            border-radius: 3px;
                            min-width: 70px;
                            max-width: 220px;
                            text-transform: uppercase;
                            &:hover{
                                opacity: 0.9;
                            }
                        }
                    }
                }
            }
        }
    }
    &:last-child{
        >form{
            >div{
                .form-group{
                    &:first-child{
                        >div{
                            padding: 0;
                            >div{
                                border: 1px solid #4c4f52;
                                transition: all 0.5s ease 0s;
                                height: 50px;
                                padding: 0;
                                &:focus-within{
                                    border-color: #707275;
                                }
                                >input{
                                    border: none;
                                    padding: 5px 10px 5px 10px;
                                    width: 100%;
                                    background: transparent;
                                    color: rgb(189, 200, 240); 
                                }
                            }
                            >span{
                                margin-bottom: 10px;
                            }
                        }
                    }
                    &:nth-child(2){
                        >div{
                            padding: 0;
                            border: none;
                            >div{
                                border: 1px solid #4c4f52;
                                transition: all 0.5s ease 0s;
                                height: 50px;
                                padding: 0;
                                border-radius: 4px;
                                &:focus-within{
                                    border-color: #707275;
                                }
                                >input{
                                    border: none;
                                    padding: 5px 10px 5px 10px;
                                    width: 100%;
                                    background: transparent;
                                    height: 100%;
                                    color: rgb(189, 200, 240); 
                                }
                            }
                        }
                    }
                    &:last-child{
                        margin-bottom: 3.75rem;
                        >div:last-child{
                            grid-column-start: 1;
                            border: none;
                            padding: 0;
                            border-radius: 0;
                            @media (min-width: 992px){
                                grid-column-start: 3;
                            }
                            button{
                                background-color: #1dac1d;
                                color: #fff;
                                height: 40px;
                                padding-left: 20px;
                                padding-right: 20px;
                                border-radius: 3px;
                                min-width: 70px;
                                max-width: 220px;
                                text-transform: uppercase;
                                &:hover{
                                    opacity: 0.9;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export const Grid = styled.div`
    
`

export default AdminWrap