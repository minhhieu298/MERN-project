import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .container{
        width: 500px;
        box-sizing: border-box;
        padding: 30px 30px;
        margin: 0 20px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgb(0 0 0 / 54%);
        border-radius: 3px;
        @media (max-width:576px){
            width: 100%;
        }
        .box{
            display: flex;
            flex-direction: column;

            >div{
                align-items: center;
                display: flex;
                font-size: 20px;
            }
        }
        form{
            >div{
                position: relative;
                padding-top: 15px;
                height: 480px;
                box-sizing: border-box;
                >div{
                    &:first-child{
                        flex: 1;
                        padding-bottom: 66px;
                        .form-group{
                            margin-bottom: 20px;
                            &:first-child{
                                display: flex;
                                /* align-items: center; */
                                gap: 0 15px;
                                >div{
                                    width: 100%;
                                    >span{
                                        font-size: 14px;
                                        text-transform: none;
                                        color: tomato;
                                    }
                                    >div{
                                        width: 100%;
                                        box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                        border-radius: 2px;
                                        height: 40px;
                                        box-sizing: border-box;
                                        border: 1px solid rgba(0,0,0,.14);
                                        margin-bottom: 5px;
                                        transition: border-color .3s ease-in-out, box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                        &:hover {
                                            box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                        }
                                        &:focus-within {
                                            border: 1px solid rgba(0, 0, 0, 0.54);
                                        }
                                        input{
                                            width: 100%;
                                            height: 38px;
                                            padding: 10px;
                                            background-color: transparent;
                                            font-size: 14px;
                                            color: #222;
                                            border: 0;
                                        }
                                    }
                                }
                            }
                            &:nth-child(2){
                                >div{
                                    >span{
                                        font-size: 14px;
                                        text-transform: none;
                                        color: tomato;
                                    }
                                    >div{
                                        position: relative;
                                        grid-template-columns: repeat(1,minmax(0,1fr));
                                        border: 1px solid rgba(0,0,0,.14);  
                                        box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                        border-radius: 2px;
                                        height: 40px;
                                        box-sizing: border-box;
                                        margin-bottom: 5px;
                                        transition: border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                        &:hover {
                                            box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                        }
                                        &:focus-within {
                                            border: 1px solid rgba(0, 0, 0, 0.54);
                                        }
                                    }
                                }
                            }
                            &:nth-child(3){
                                >div{
                                    >span{
                                        text-transform: none;
                                        color: tomato;
                                        font-size: 14px;
                                    }
                                    >div{
                                        width: 100%;
                                        box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                        border-radius: 2px;
                                        height: 40px;
                                        box-sizing: border-box;
                                        border: 1px solid rgba(0,0,0,.14);
                                        transition: border-color .3s ease-in-out, box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                        height: 60px;
                                        margin-bottom: 5px;
                                        &:hover {
                                            box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                        }
                                        &:focus-within {
                                            border: 1px solid rgba(0, 0, 0, 0.54);
                                        }
                                        >textarea{
                                            width: 100%;
                                            padding: 10px;
                                            background-color: transparent;
                                            font-size: 14px;
                                            color: #222;
                                            border: 0;
                                            height: 100%;
                                            &:disabled {
                                                cursor: not-allowed;
                                                opacity: 0.7;
                                            }
                                        }
                                    }
                                }
                            }
                            &:nth-child(4){
                                >div{
                                    >div{
                                        &:first-child{
                                            margin-right: 10px;
                                            margin-bottom: 8px;
                                            color: #555;
                                        }
                                        &:last-child{
                                            display: flex;
                                            gap: 10px;
                                            flex-direction: column;
                                            align-items: flex-start;
                                            @media (min-width: 480px){
                                                align-items: center;
                                                flex-direction: row;
                                            }
                                            span{
                                                padding: 10px 15px;
                                                border-radius: 2px;
                                                cursor: pointer;
                                                border: 1px solid rgba(0,0,0,0.1);
                                            }
                                        }
                                    }
                                }
                            }
                            &:nth-child(5){
                                >div{
                                    label{
                                        display: inline-block;
                                        vertical-align: middle;
                                        font-size: 16px;
                                        input{
                                            margin-right: 5px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &:last-child{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(hsla(0,0%,100%,.7),#fff);
                        height: 66px;
                        display: flex;
                        align-items: flex-end;
                        justify-content: flex-end;
                        gap: 5px;
                        /* flex-wrap: wrap; */
                        flex-direction: column;
                        @media (min-width: 480px){
                            flex-direction: row;
                        }
                        >button{
                            align-items: center;
                            display: flex;
                            justify-content: center;
                            outline: none;
                            padding: 15px 10px;
                            border: 0;
                            background: none;
                            border-radius: 2px;
                            width: 100%;
                            font-size: 14px;
                            cursor: pointer;
                            color: #555;
                            @media (min-width: 480px){
                                width: 140px;
                            }
                            &:first-child{
                                border: 1px solid rgba(0,0,0,0.14);
                            }
                            &:last-child{
                                color: #fff;
                                border: 1px solid rgba(0,0,0,0.14);
                                background-color: #ee4d2d;
                            }
                        }
                    }
                }
            }
        }
    }
`

export const DropDown = styled.div`
    .label{
        position: relative;
        border: none !important;
        display: flex;
        align-items: center;
        padding: 10px;
        height: 100%;
        &:empty::before {
          content: attr(data-placeholder);
          color: #939393;
          top: 50%;
          left: 3%;
          transform: translateY(-50%);
          position: absolute;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          @media (max-width: 768px) {
            width: 95%;
          }
        }
        span{
            position: absolute;
            right: 10px;
            cursor: pointer;
            color: #939393;
        }
    }
    .dropdown{
        position: absolute !important;
        width: 100%;
        height: 270px !important;
        background-color: #fff;
        top: 120%;
        left: 0;
        z-index: 9999;
        border: 1px solid rgba(0,0,0,0.15) !important;
        display: block !important;
        padding: 0 !important;
        &:hover{
            box-shadow: none !important;
        }
        &-title{
            display: grid;
            grid-template-columns: repeat(3,minmax(0,1fr));
            border-bottom: 1px solid rgba(0,0,0,0.14) ;
            >div{
                text-align: center;
                height: 40px;
                display: grid;
                align-items: center;
            }
        }
        &-content{
            width: 100%;
            overflow: hidden;
            height: calc(270px - 43px);
            overflow-y:scroll;
            .list-item{
                position: relative;
                height: 40px;
                transition: background 0.15s ease-in-out;
                &:hover{
                    background-color: rgba(0,0,0,0.14);
                }
                input{
                    width: 100%;
                    border: none;
                    padding: 10px;
                    cursor: auto;
                    height: inherit;
                    background-color: transparent;
                    opacity: 0;
                    &:hover{
                       
                    }
                }
                div{
                    position: absolute;
                    width: 100%;
                    height: inherit;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    padding-left: 10px;
                    pointer-events: none;
                    cursor: auto;
                }
            }
        }
    }
`