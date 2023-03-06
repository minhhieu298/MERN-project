import styled, { css } from 'styled-components'

const CateWrap = styled.div`
    background-color: #1a223f;
    margin-right: 20px;
    margin-left: 0;
    padding: 20px;
    color: rgb(189, 200, 240); 
    height:100%;
    @media (max-width:991px){
        margin-left: 20px;
    }
`

export const Box = styled.div`
    h1{
        font-weight: 500;
        font-size: 1.5em;
    }
    margin-bottom: 20px;
    ${props => props.form && css`
        margin-bottom: 0;
        form{
            >div{
                padding: 15px 5px 10px;
                .form-group{
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
                    &.select{
                        /* border: none;
                        padding: 5px; */
                        select{
                            width: 100%;
                            background: transparent;
                            outline: none;
                            border: none;
                            /* border: 1px solid rgb(71 85 105);
                            padding-left: 10px; */
                            padding-left: 10px;
                            height: 40px;
                            font-size: 17px;
                            color: rgb(189, 200, 240);
                            option{
                                color: #000;
                            }
                        }
                    }
                }
                
            }
        }
    `}
`



export default CateWrap