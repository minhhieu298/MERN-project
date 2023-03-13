import styled from "styled-components";

const AddressWrap = styled.div`
    width: 500px;
    padding: 0 10px;
    @media (max-width:576px){
        width: 100%;
    }
    .address{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 30px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgb(0 0 0 / 54%);
        border-radius: 3px;
        >div{
            align-items: center;
            display: flex;
            font-size: 20px;
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
                                >div{
                                    display: flex;
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
                            /* position: relative;
                            >div{
                                display: grid;
                                grid-template-columns: repeat(4,minmax(0,1fr));
                                column-gap: 20px;
                                margin-bottom: 25px;
                                >div{
                                    grid-column: span 2 / span 2;
                                    box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                    border-radius: 2px;
                                    height: 40px;
                                    box-sizing: border-box;
                                    border: 1px solid rgba(0,0,0,.14);
                                    transition: border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                    &:hover {
                                        box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                    }
                                    &:focus-within {
                                        border: 1px solid rgba(0, 0, 0, 0.54);
                                    }
                                    >input{
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
                            &:nth-child(2){
                                >div{
                                    >span{
                                        font-size: 14px;
                                        color: tomato;
                                        text-transform: none;
                                    }
                                    >div{
                                        grid-template-columns: repeat(1,minmax(0,1fr));
                                        border: 1px solid rgba(0,0,0,.14);  
                                        box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                        border-radius: 2px;
                                        height: 40px;
                                        box-sizing: border-box;
                                        transition: border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                        &:hover {
                                            box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                        }
                                        &:focus-within {
                                            border: 1px solid rgba(0, 0, 0, 0.54);
                                        }
                                        >input{
                                            width: 100%;
                                            height: 38px;
                                            padding: 10px;
                                            background-color: transparent;
                                            font-size: 14px;
                                            color: #222;
                                            border: 0;
                                            cursor: auto;
                                        }
                                    }
                                }
                            }
                            &:nth-child(3){
                                >div{
                                    grid-template-columns: repeat(1,minmax(0,1fr));
                                    border: 1px solid rgba(0,0,0,.14);  
                                    box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
                                    border-radius: 2px;
                                    height: 60px;
                                    box-sizing: border-box;
                                    transition: border-color .3s ease-in-out,box-shadow .3s ease-in-out,background-color .3s ease-in-out;
                                    &:hover {
                                        box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 5%);
                                    }
                                    &:focus-within {
                                        border: 1px solid rgba(0, 0, 0, 0.54);
                                    }
                                    >textarea{
                                        width: 100%;
                                        height: 38px;
                                        padding: 10px;
                                        background-color: transparent;
                                        font-size: 14px;
                                        color: #222;
                                        border: 0;
                                        &:disabled {
                                            cursor: not-allowed;
                                            opacity: 0.7;
                                        }
                                    }
                                }
                            }
                            &:nth-child(4){
                                >div{
                                    grid-template-columns: repeat(1,minmax(0,1fr));
                                    column-gap: 0;
                                    row-gap: 20px;
                                    >div{
                                        border: none;
                                        box-shadow: none;
                                        &:first-child{
                                            margin-right: 10px;
                                            margin-bottom: 8px;
                                            color: #555;
                                            height: 0;
                                        }
                                        &:last-child{
                                            display: flex;
                                            gap: 10px;
                                            span{
                                                width: 80px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                cursor: pointer;
                                                height: inherit;
                                                border-radius: 3px;
                                                border: 1px solid rgba(0,0,0,0.14);
                                                &.check{
                                                    color: #ee4d2d;
                                                    border-color: #ee4d2d;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            &:nth-child(5){
                                >label{
                                    display: inline-block;
                                    vertical-align: middle;
                                    font-size: 16px;
                                    >input{
                                        margin-right: 5px;
                                    }
                                }
                            } */
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
                        >button{
                            align-items: center;
                            display: flex;
                            justify-content: center;
                            outline: none;
                            padding: 10px;
                            border: 0;
                            background: none;
                            border-radius: 2px;
                            min-width: 140px;
                            font-size: 14px;
                            cursor: pointer;
                            color: #555;
                            
                            &:last-child{
                                color: #fff;
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
        position: absolute;
        width: 100%;
        height: 270px !important;
        background-color: #fff;
        top: 120%;
        left: 0;
        z-index: 9999;
        border: 1px solid rgba(0,0,0,0.15) !important;
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
export const ListWrap = styled.div`
    width: 500px;
    @media (max-width:576px){
        width: 100%;
    }
    .my-address{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 2px 4px rgb(0 0 0 / 54%);
        border-radius: 3px;
        position: relative;
        
        .heading-form{
            border-bottom: 1px solid rgba(0,0,0,.09);
            height: 56px;
            padding: 16px 24px;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5rem;
            >div{
                font-size: 20px;
            }
        }
        .body-form{
            padding: 0 24px 88px;
            height: calc(480px - 64px);
            overflow: hidden;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 5px;
            }
            .list-address{
                &-item{
                    padding: 16px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.14);
                    display: grid;
                    grid-template-columns: 5% 95%;
                    >div{
                        &:last-child{
                            
                            .heading{
                                display: grid;
                                grid-template-columns: 80% 20%;
                                margin-bottom: 4px;
                                color: rgba(0,0,0,.54);
                                &:first-child{
                                    >div{
                                        display: grid;
                                        &:first-child{
                                            grid-template-columns: 1fr 3fr;
                                            position: relative;
                                            @media (max-width: 480px){
                                                grid-template-columns: 1fr;
                                                row-gap: 5px;
                                            }
                                            >div{
                                                &:first-child{
                                                    color: #000;
                                                }
                                                &:nth-child(2){
                                                    width: 1px;
                                                    height: 100%;
                                                    top: 0;
                                                    position: absolute;
                                                    left: 22%;
                                                    background-color: rgba(0,0,0,0.3);
                                                    @media (max-width: 480px){
                                                        display: none;
                                                    }
                                                }
                                            }
                                        }
                                        &:last-child{
                                            background: none;
                                            outline: none;
                                            padding: 4px;
                                            color: #08f;
                                            white-space: nowrap;
                                            cursor: pointer;
                                        }
                                    }
                                }
                            }
                            .row{
                                margin-top: 4px;
                                span{
                                    color: #ee4d2d;
                                    border: 1px solid #ee4d2d;
                                    margin: 0 4px 4px 0;
                                    border-radius: 1px;
                                    padding: 2px 4px;
                                    border: 0.5px solid;
                                }
                            }
                        }
                    }
                &:last-child{
                    border-bottom: 0;
                }
                }
                &-item:last-child{
                    border-bottom: 0;
                }
            }
            .create{
                margin-top: 20px;
                button{
                    color: rgba(0,0,0,.65);
                    border: 1px solid rgba(0,0,0,.09);
                    background-color: #fff;
                    box-shadow: 0 1px 1px rgb(0 0 0 / 3%);
                    height: 40px;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    border-radius: 2px;
                    min-width: 140px;
                    gap: .25rem;
                }
            }
        }
        .foot-form{
            background-color: #fff;
            border-top: 1px solid rgba(0,0,0,.09);
            padding: 0 24px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            button{
                align-items: center;
                display: flex;
                justify-content: center;
                outline: none;
                padding: 10px;
                border: 0;
                background: none;
                border-radius: 2px;
                min-width: 140px;
                font-size: 14px;
                cursor: pointer;
                &:first-child{
                    color: rgba(0,0,0,.65);
                    border: 1px solid rgba(0,0,0,.09);
                    box-shadow: 0 1px 1px rgb(0 0 0 / 3%);
                    height: 40px;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    margin-right: 8px;
                }
                &:last-child{
                    height: 40px;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    color: #fff;
                    background-color: #ee4d2d;
                }
            }
        }
    }
`
export default AddressWrap