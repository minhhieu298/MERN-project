import styled, { css } from "styled-components";

const FooterWrap = styled.div`
    padding: 0 10px;
    border-top: 1px solid rgba(0,0,0,0.14);
    .footer-top{
        padding-top: 45px;
        padding-bottom: 45px;
        @media (min-width: 768px){
            padding-top: 75px;
            padding-bottom: 75px;
        }
        @media (min-width: 992px){
            padding-top: 95px;
            padding-bottom: 95px;
        }
        @media (min-width: 1200px){
            padding-top: 115px;
            padding-bottom: 115px;
        }
    }
`

export const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(12,minmax(0,1fr));
    row-gap: 30px;
    @media (min-width: 768px){
        row-gap: 0;
    }
`

export const Grid = styled.div`
    grid-column: span 12/span 12;
    @media (min-width: 576px){
        grid-column: span 6/span 6;
    }

    ${props => props.top && css`
        @media (min-width: 768px){
            grid-column: span 4/span 4;
            &:nth-child(2),&:last-child{
                grid-column: span 3/span 3;
            }
            &:nth-child(3){
                grid-column: span 2/span 2;
            }
        }
    `}
    >div{
        h2{
            font-size:18px;
            margin-bottom:15px;
            font-weight:600;
        }
        ul{
            li{
                display:flex;
                align-items:center;
                margin-bottom: 15px;
                font-weight:400;
                &:last-child{
                    margin-bottom:0;
                }
                span{
                    margin-left:10px;
                }
                a{
                    transition: all 0.15s linear;
                    &:hover{
                        color: rgb(220,177 ,74);
                    }
                }
            }
        }
        form{
            >div{
                position: relative;
                max-width: 270px;
                height: 50px;
                border: 0;
                
                >input{
                    padding: 10px 35px 10px 0;
                    width: 100%;
                    border: 0;
                    border-bottom: 1px solid rgba(0,0,0,0.25);
                    background-color: transparent;
                    outline: 2px solid transparent;
                    outline-offset: 2px;
                    height:inherit;
                    &:focus{
                        border-color: rgba(220, 177, 74)
                    }
                }
                >button{
                    position:absolute;
                    top:50%;
                    transform:translateY(-50%);
                    right: 0;
                    opacity: 0.7;
                    background-color:transparent;
                }
            }
        }
    }
    &:nth-child(4){
        >div{
            ul{
                padding-top: 50px;
                display:flex;
                li{
                    margin-bottom: 0;
                    margin-right:20px;
                    @media (min-width: 1200px){
                        margin-right:30px;
                    }
                    &:last-child{
                        margin-right:0;
                    }
                }
            }
        }
    }

`

export default FooterWrap