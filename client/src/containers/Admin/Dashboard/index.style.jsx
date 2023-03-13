import styled from "styled-components";

const DashboardWrap = styled.div`
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
    /* @media (min-width: 992px){
        margin-left: 90px;
        margin-right: 90px;
    } */
    @media (min-width: 1024px){
        margin-left: 50px;
        margin-right: 50px;
    }
    .content{
        &_head{
            h1{
                color: rgb(189, 200, 240); 
                font-size: 18px;
                font-weight: 500;
            }
        }
        &_body{
            .row{
                display: grid;
                grid-template-columns: repeat(3,minmax(0,1fr));
                gap: 20px;
                margin-bottom: 40px;
                .col-3{
                    grid-column: span 3 / span 3;
                    border-radius: 0.5rem;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                    &:first-child{
                        background: #0694a2;
                    }
                    &:nth-child(2){
                        background: #3f83f8;
                    }
                    &:last-child{
                        background: #0e9f6e;
                    }
                    @media (min-width: 768px){
                        grid-column: span 1 / span 1;
                    }
                    >div{
                        padding: 1.5rem;
                        p{
                            color: #fff;
                            font-size: 1rem;
                        }
                        span{
                            font-size: 1.875rem;
                        }
                    }
                }
                &:nth-child(2){
                    display: grid;
                    grid-template-columns: repeat(1,minmax(0,1fr));
                    gap: 20px;
                    @media (min-width: 768px){
                        grid-template-columns: repeat(2,minmax(0,1fr));
                    }
                    @media (min-width: 1280px){
                        grid-template-columns: repeat(4,minmax(0,1fr));
                    }
                    .col-4{
                        background-color: #111936;
                        padding: 1.5rem;
                        border-radius: 0.5rem;

                        >div{
                            display: flex;
                            align-items: center;
                            gap: 5px;
                            .left{
                                width: 45px;
                                height: 45px;
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                >span{
                                    color: #fff; 
                                }
                            }
                            .right{
                                flex: 1;
                            }
                        }
                        &:first-child{
                            >div{
                                .left{
                                    background: #ff5a1f;
                                }
                            }
                        }
                        &:nth-child(2){
                            >div{
                                .left{
                                    background: #3f83f8;
                                }
                            }
                        }
                        &:nth-child(3){
                            >div{
                                .left{
                                    background: #0694a2;
                                }
                            }
                        }
                        &:last-child{
                            >div{
                                .left{
                                    background: #0e9f6e;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default DashboardWrap