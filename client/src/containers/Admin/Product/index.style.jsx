import styled, { css } from "styled-components";

const ProductWrap = styled.div`
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
        &_header{
            display: flex;
            align-items: center;
            color: rgb(189,200,240);
            /* border-bottom: 1px solid #bdc8f070; */
            margin-bottom: 20px;
            h1{
                font-size: 18px;
                font-weight: 500;
                margin-bottom: 5px;
            }
        }
        &_tool{
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            gap: 15px;
            flex-wrap: wrap;
            .search{
                flex-basis: 100%;
                /* min-width: 400px; */
                flex-shrink: 0;
                @media (min-width: 640px){
                    flex-basis: 40%;
                }
                form{
                    width: 100%;
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
            .filter{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                button{
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
                    background: rgb(41,49,79);
                    color: rgb(124,77,255);
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
                }
                thead{
                    height: 60px;
                    th{
                        &:nth-child(2){
                            width: 35%;
                            text-align: left;
                        }
                        &:nth-child(3){
                            text-align: center;
                        }
                    }
                }
                tbody{
                    tr{
                        border-top: 1px solid #3a4570;
                    }
                    .product{
                        display: flex;
                        align-items: center;
                        gap: 0 10px;
                        img{
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            object-fit: cover;
                            flex-shrink: 0;
                        }
                    }
                    td{
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
        .page{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            height: 60px;
            margin-top: 20px;
            .css-nen11g-MuiStack-root{
                >nav{
                    >ul{
                        >li{
                            button{
                                color: rgb(189, 200, 240) !important; 
                            }
                        }
                    }
                }
            }
        }
    }
`

export const CreateWrap = styled.div`
    position: fixed;
    top: 0;
    left: auto;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    background: rgba(0,0,0,0.5);
    z-index: 999999;
    transition: all 0.5s ease-in-out;
    pointer-events: none;
    
    &.active{
        pointer-events: auto;
        visibility: visible;
        opacity: 1;
        .form-create{
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .form-create{
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        position: fixed;
        background: #111936;
        transition: all 500ms ease-in-out;
        transform: translateX(100%);
        opacity: 0;
        z-index: 50;
        @media (max-width:992px){
            width: 100%;
        }
        .title-create{
            height: 88px;
            border-bottom: 1px solid rgba(0,0,0,0.14);
            width: 100%;
            display: flex;
            align-items: center;
            color: rgb(189, 200, 240);
            padding: 20px 20px;
            justify-content: space-between;
            h1{
                font-size: 1.575rem;
                text-transform: capitalize;
                @media (max-width: 768px){
                    font-size: 1.25rem;
                }
            }
            span{
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 1px 1px rgba(0,0,0,0.2);
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.4s linear;
                &:hover{
                    background: rgba(0,0,0,0.175);
                }
            }
        }
        .content-create{
            width: 100%;
            height: calc(100% - 185px);
            overflow-y: scroll;
            /* background: green; */
            background: rgb(33,41,70);
            form{
                display: block;
               >div{
                    &:first-child{
                        padding-top: 2rem;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                        width: 100%;
                        height: 100%;
                        &::-webkit-scrollbar{
                            width: 1px;
                        }
                        @media (min-width: 768px){
                            padding-bottom: 8rem;
                        }
                        @media (min-width: 1024px){
                            padding-bottom: 8rem;
                        }
                        @media (min-width: 1280px){
                            padding-bottom: 8rem;
                        }
                        .form-group{
                            display: grid;
                            grid-template-columns: repeat(6,minmax(0,1fr));
                            gap: 0.75rem;
                            margin-bottom: 1.5rem;
                            @media (min-width: 768px){
                                gap: 1.25rem;
                            }
                            @media (min-width: 1024px){
                                gap: 1.5rem;
                            }
                            @media (min-width: 1280px){
                                gap: 1.5rem;
                            }
                            >label{
                                grid-column: span 6 / span 6;
                                color: rgb(189, 200, 240);
                                font-size: .875rem;
                                font-weight: 500;
                                @media (min-width: 640px){
                                    font-size: 1.15rem;
                                    grid-column: span 2 / span 2;
                                }
                            }
                            >div{
                                grid-column: span 6 / span 6;
                                color: rgb(189, 200, 240);
                                border: 1px solid #4c4f52;
                                padding: 0.25rem 0.75rem;
                                border-radius: 4px;
                                &:focus-within{
                                    border-color: #707275;
                                }
                                @media (min-width: 640px){
                                    grid-column: span 4 / span 4;
                                }
                                >input{
                                    width: 100%;
                                    height: 3rem;
                                    background: transparent;
                                    border: none;
                                    outline: none;
                                    color: rgb(189, 200, 240);
                                    font-size: 16px;
                                    &::placeholder{
                                        color: rgba(189, 200, 240, 0.418);
                                    }
                                }
                            }
                            &:nth-child(2){
                                >div{
                                    textarea{
                                        width: 100%;
                                        background: transparent;
                                        border: none;
                                        outline: none;
                                        color: rgb(189, 200, 240);
                                        font-size: 16px;
                                        &::placeholder{
                                            color: rgba(189, 200, 240, 0.418);
                                        }
                                    }
                                }
                            }
                            &:nth-child(4),&:nth-child(5){
                                >div{
                                    /* padding: 0; */
                                    cursor: pointer;
                                    position: relative;
                                    .dropdown{
                                        height: 3rem;
                                        display: flex;
                                        align-items: center;
                                        /* height: 100%; */
                                        overflow: hidden;
                                        .item{
                                            flex: 1;
                                            >div{
                                                &.label{
                                                }
                                                &:nth-child(2){
                                                    position: absolute;
                                                    width: 100%;
                                                    background: white;
                                                    color: #000;
                                                    left: 0;
                                                    top: 110%;
                                                    border-radius: 2px;
                                                    opacity: 0;
                                                    visibility: hidden;
                                                    transform: rotateX(90deg);
                                                    transform-origin: center top 0;
                                                    transition: all 0.5s ease 0s;
                                                    z-index: 999;
                                                    height: 0;
                                                    overflow: hidden;
                                                    &.active{
                                                        visibility: visible;
                                                        opacity: 1;
                                                        transform: rotateX(0deg);
                                                        height: 7rem;
                                                    }
                                                    &.overflow{
                                                        height: 12rem;
                                                        overflow-x: hidden;
                                                        overflow-y: scroll;
                                                        >div{
                                                            height: calc(100% / 4);
                                                        }
                                                    }
                                                    >div{
                                                        height: calc(100% / 2);
                                                        width: 100%;
                                                        display: flex;
                                                        align-items: center;
                                                        &:hover{
                                                            background: rgba(0,0,0,0.14);
                                                        }
                                                        >span{
                                                            padding: 0.25rem 0.75rem;
                                                        }
                                                    }
                                                }
                                            }
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
                                }
                            }
                            &:nth-child(6),&:nth-child(7){
                                >div{
                                    &:nth-child(2){
                                        position: relative;
                                        cursor: pointer;
                                        .dropdown{
                                            height: 3rem;
                                            display: flex;
                                            align-items: center;
                                            /* height: 100%; */
                                            overflow: hidden;
                                            .item{
                                                flex: 1;
                                                >div{
                                                    &.label{
                                                    }
                                                    &:nth-child(2){
                                                        position: absolute;
                                                        width: 100%;
                                                        background: white;
                                                        color: #000;
                                                        left: 0;
                                                        top: 110%;
                                                        border-radius: 2px;
                                                        opacity: 0;
                                                        visibility: hidden;
                                                        transform: rotateX(90deg);
                                                        transform-origin: center top 0;
                                                        transition: all 0.5s ease 0s;
                                                        z-index: 999;
                                                        height: 0;
                                                        overflow: hidden;
                                                        &.active{
                                                            visibility: visible;
                                                            opacity: 1;
                                                            transform: rotateX(0deg);
                                                            height: 7rem;
                                                        }
                                                        &.overflow{
                                                            height: 12rem;
                                                            overflow-x: hidden;
                                                            overflow-y: scroll;
                                                            >div{
                                                                height: calc(100% / 4);
                                                            }
                                                        }
                                                        >div{
                                                            height: calc(100% / 2);
                                                            width: 100%;
                                                            display: flex;
                                                            align-items: center;
                                                            &:hover{
                                                                background: rgba(0,0,0,0.14);
                                                            }
                                                            >span{
                                                                padding: 0.25rem 0.75rem;
                                                            }
                                                        }
                                                    }
                                                }
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
                                    }
                                    &:nth-child(3){
                                        border: none;
                                        @media (min-width: 640px){
                                            grid-column-start: 3;
                                        }
                                    }
                                }
                            }
                            &:last-child{
                                >div{
                                    padding: 0;
                                    border: none;
                                    display: grid;
                                    grid-template-columns: repeat(1,minmax(0,1fr));
                                    gap: 20px;
                                    >div{
                                        gap: 0.75rem;
                                        position: relative;
                                        >div{
                                            display: flex;
                                            flex-direction: column;
                                            align-items: center;
                                            border: 1px solid #4c4f52;
                                            padding: 1.25rem 1.5rem 1.5rem;
                                            border-radius: 4px;
                                            margin-bottom: 20px;
                                            >span{
                                                color: #0e9f6e;
                                            }
                                            >p{
                                                margin: 5px 0 6px;
                                                text-align: center;
                                            }
                                            >em{
                                                color: gray;
                                                text-align: center;
                                            }
                                            >input{
                                                position: absolute;
                                                width: 100%;
                                                height: 100%;
                                                left: 0;
                                                top: 0;
                                            }
                                        }
                                        aside{
                                            img{
                                                width: 50px;
                                                height: 50px;
                                                object-fit: cover;
                                            }
                                        }
                                        &:last-child{
                                            /* margin-bottom: 0; */
                                            aside{
                                                img{
                                                    margin-right: 10px;
                                                    &:last-child{
                                                        margin-right: 0;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    
                    }
                    &:nth-child(2){
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                        background: #111936;
                        z-index: 99999;
                        padding: 1rem 1.5rem;
                        display: grid;
                        grid-template-columns: repeat(2,1fr);
                        border-top: 1px solid rgba(0,0,0,0.14);
                        gap: 1rem;
                        @media (min-width: 1024px){
                            padding-top: 2rem;
                            padding-bottom: 2rem;
                            gap: 1.5rem;
                        }
                        @media (min-width: 1280px){
                            gap: 1.5rem;
                        }
                        >button{
                            height: 3rem;
                            padding: 0.5rem 1rem;
                            line-height: 1.25rem;
                            border-radius: 4px;
                            color: rgb(189, 200, 240);
                            width: 100%;
                            grid-column: span 2 / span 2;
                            @media (min-width: 640px){
                                width: auto;
                                grid-column: span 1 / span 1;
                            }
                            &:last-child{
                                background: #0e9f6e;
                            }
                            &:first-child{
                                background: rgb(33,41,70);
                                margin-right: 0.75rem;
                            }
                        }
                    }
               }
            }
        }
    }
`
export const DetailWrap = styled.div`
    background-color: #1a223f;
    margin-right: 20px;
    margin-left: 0;
    padding: 20px;
    color: rgb(189, 200, 240); 
    height:100%;
    margin-bottom: 20px;
    @media (max-width:991px){
        margin-left: 20px;
    }
    >div{
        display: grid;
        grid-template-columns: repeat(12,minmax(0,1fr));
        column-gap: 20px;
        row-gap: 20px;
        align-items: flex-start;
        &.modal{
            /* display: block; */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            /* background: transparent; */
            z-index: 9999999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            &.active{
                opacity: 1;
                visibility: visible;
                background: rgba(0,0,0,0.65);
                pointer-events: auto;
            }
            >div{
                width: 600px;
                border-radius: 4px;
                /* height: 300px; */
                background: #fff;
                transition: all 0.4s ease-in-out 450ms;
                color: #000;
                position: relative;
                >span{
                    position: absolute;
                    top: 0;
                    right: 0;
                    cursor: pointer;
                    z-index: 5;
                }
                >div{
                    margin-top: 25px;
                    padding: 20px 10px;
                    display: grid;
                    grid-template-columns: auto;
                    >div{
                        &:first-child{
                            >div{
                                &:first-child{
                                    line-height: 40px;
                                    font-size: 20px;
                                }
                                &:nth-child(2){
                                    border: 1px solid rgb(71 85 105);
                                    padding: 0;
                                    border-radius: 4px;
                                    >input{
                                        width: 100%;
                                        height: 60px;
                                    }
                                }
                                &:nth-child(3){
                                    width: 50px;
                                    height: 50px;
                                    margin-top: 10px;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                        aspect-ratio: 1 / 1;
                                    }
                                }
                            }
                        }
                        &:last-child{
                            >div{
                                &:first-child{
                                    line-height: 40px;
                                    font-size: 20px;
                                }
                                &:nth-child(2){
                                    border: 1px solid rgb(71 85 105);
                                    padding: 0;
                                    border-radius: 4px;
                                    >input{
                                        width: 100%;
                                        height: 60px;
                                    }
                                }
                                &:nth-child(3){
                                    display: flex;
                                    margin-top: 10px;
                                    gap: 10px;
                                    img{
                                        width: 50px;
                                        height: 50px;
                                        object-fit: cover;
                                        aspect-ratio: 1 / 1;
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

export const FilterWrap = styled.div`
    position: fixed;
    top: 0;
    left: auto;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    opacity:0;
    visibility: hidden;
    pointer-events: none;
    z-index: 999999;
    transition: all 0.5s ease-in-out;
    &.active{
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        .modal-filter{
            opacity: 1;
            transform: translateX(0);
        }
    }
   
    .modal-filter{
        top: 0;
        right: 0;
        width: calc(100% - 200px);
        height: 100%;
        position: fixed;
        background-color: #1a223f;
        transition: all 500ms ease-in-out;
        transform: translateX(100%);
        opacity: 0;
        z-index: 50;
        @media (min-width: 768px){
            width: calc(450px - 20px);
        }
        >div{
            &:first-child{
                height: 88px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: 10px;
                border-bottom: 1px solid #bdc8f070;
                >button{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    &:hover{
                        background: rgba(0,0,0,0.14);
                    }
                    >span{
                        display: block;
                        line-height: 10px;
                        color: rgb(189, 200, 240); 
                    }
                }
            }
            &:nth-child(2){
                padding: 15px 20px 10px;
                height: calc(100% - 147px);
                overflow-y: scroll;
                &::-webkit-scrollbar{
                    width: 5px;
                }
                &::-webkit-scrollbar-thumb{
                    border-radius: 10px;
                    background: transparent;
                }
                &::-webkit-scrollbar-track{
                    border-radius: 10px;
                    background: transparent;
                }
                span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{
                    color: #fff !important;
                }
                >div{
                    margin-bottom: 15px;
                    h2{
                        font-size: 1.275em;
                        font-weight: 500;
                        color: rgb(189, 200, 240);
                    }
                    &.size{
                        margin-bottom: 10px;
                    }
                    
                }
            }
            &.btn{
                width: 100%;
                color: rgb(189, 200, 240); 
                border-top: 1px solid #bdc8f070;
                display: grid;
                grid-template-columns: repeat(2,1fr);
                gap: 10px;
                align-items: center;
                margin: 0;
                padding: 10px 20px;

                >button{
                    flex: 1;
                    border-radius: 4px;
                    border: 1px solid #bdc8f070;
                    padding: 10px 20px;
                    grid-column: span 2 / span 2;
                    color: rgb(189, 200, 240); 
                    @media (min-width: 768px){
                        grid-column: span 1 / span 1;
                    }
                }
            }
        }
    }
`

export const Grid = styled.div`
    ${props => props.left && css`
            grid-column: span 12 / span 12;
            background-color: #111936;
            height: auto;
            position: relative;
            /* &::before{
                position: absolute;
            } */
            &:hover{
                >div{
                    opacity: 1;
                }
            }
            >div{
                cursor: pointer;
                position: absolute;
                top: 5px;
                right: 5px;
                z-index: 5;
                width: 40px;
                height: 40px;
                background: rgba(0,0,0,0.5);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: all 0.4s ease-in-out;
            }
            >img{
                height: 100%;
                object-fit: cover;
                width: 100%;;
                aspect-ratio: 1 / 1;
            }
            @media (min-width: 992px){
                grid-column: span 4 /span 4;
            }
        `
    }
    ${props => props.right && css`
            grid-column: span 12 / span 12;
            background-color: #111936;
            padding: 10px 15px;
            border-radius: 4px;
            @media (min-width: 992px){
                grid-column: span 8 /span 8;
            }
            form{
                .form-group{
                    display: grid;
                    grid-template-columns: repeat(8,minmax(0,1fr));
                    row-gap: 15px;
                    margin: 10px 0 20px;
                    >label{
                        grid-column: span 8 / span 8;
                        font-size: 18px;
                    }
                    >div{
                        grid-column: span 8 / span 8;
                        border: 1px solid rgb(71 85 105);
                        padding: 5px;
                        border-radius: 4px;
                        transition: all 0.4s ease-in-out;
                        &:focus-within{
                            border-color: rgb(248 250 252);
                        }
                        >input{
                            width: 100%;
                            height: 38px;
                            background: transparent;
                            padding-left: 10px;
                            color: rgb(189, 200, 240);
                            border: none;
                        }
                        >textarea{
                            width: 100%;
                            background: transparent;
                            border: none;
                            color: rgb(189, 200, 240);
                            padding-left: 10px;
                            font-size: 16px;
                        }
                    }
                    &:nth-child(7),&:nth-child(8){
                        >div{
                            padding: 0;
                            border: none;
                            height: 400px;
                            overflow-x: hidden;
                            overflow-y: scroll;
                            &::-webkit-scrollbar{
                                width: 5px;
                            }
                            &::-webkit-scrollbar-track {
                                /* background: rgb(248 250 252);  */
                            }
                            &::-webkit-scrollbar-thumb {
                                background: rgb(248 250 252); 
                            }
                            >div{
                                margin-bottom: 20px;
                                display: grid;
                                grid-template-columns: repeat(2,minmax(0,1fr));
                                gap: 20px;
                                &:last-child{
                                    margin-bottom: 0;
                                }
                                >div{
                                    grid-column: span 2 / span 2;
                                    &:first-child{
                                        display: flex;
                                        align-items: center;
                                        gap: 10px;
                                        >div{
                                            &:first-child{
                                                flex: 1;
                                                border: 1px solid rgb(71 85 105);
                                                padding: 5px;
                                                border-radius: 4px;
                                                transition: all 0.4s ease-in-out;
                                                &:focus-within{
                                                    border-color: rgb(248 250 252);
                                                }
                                                input{
                                                    width: 100%;
                                                    height: 38px;
                                                    background: transparent;
                                                    padding-left: 10px;
                                                    color: rgb(189, 200, 240);
                                                    border: none;
                                                }
                                            }
                                            &:nth-child(2){
                                                flex-shrink: 0;
                                                /* flex-basis: 20%; */
                                                display: flex;
                                                gap: 10px;
                                                button{
                                                    /* padding: 16px; */
                                                    width: 50px;
                                                    height: 50px;
                                                    border: 1px solid rgb(71 85 105);
                                                    border-radius: 4px;
                                                    color: rgb(189, 200, 240);
                                                    font-size: 14px;
                                                    /* margin-right: 5px;
                                                    &:last-child{
                                                        margin-right: 0;
                                                    } */
                                                }
                                            }
                                        }
                                    }
                                    &:nth-child(2){
                                        >label{
                                            display: inline-block;
                                            vertical-align: middle;
                                            input{
                                                margin-right: 2px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &:nth-child(5){
                        >div{
                            cursor: pointer;
                            position: relative;
                            .dropdown{
                                height: 3rem;
                                display: flex;
                                align-items: center;
                                /* height: 100%; */
                                overflow: hidden;
                                .item{
                                    flex: 1;
                                    >div{
                                        &.label{
                                        }
                                        &:nth-child(2){
                                            position: absolute;
                                            width: 100%;
                                            background: white;
                                            color: #000;
                                            left: 0;
                                            top: 110%;
                                            border-radius: 2px;
                                            opacity: 0;
                                            visibility: hidden;
                                            transform: rotateX(90deg);
                                            transform-origin: center top 0;
                                            transition: all 0.5s ease 0s;
                                            z-index: 999;
                                            height: 0;
                                            overflow: hidden;
                                            &.active{
                                                visibility: visible;
                                                opacity: 1;
                                                transform: rotateX(0deg);
                                                height: 7rem;
                                            }
                                            &.overflow{
                                                height: 12rem;
                                                overflow-x: hidden;
                                                overflow-y: scroll;
                                                >div{
                                                    height: calc(100% / 4);
                                                }
                                            }
                                            >div{
                                                height: calc(100% / 2);
                                                width: 100%;
                                                display: flex;
                                                align-items: center;
                                                &:hover{
                                                    background: rgba(0,0,0,0.14);
                                                }
                                                >span{
                                                    padding: 0.25rem 0.75rem;
                                                }
                                            }
                                        }
                                    }
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
                        }
                    }
                    &:nth-child(6){
                        >div{
                            cursor: pointer;
                            position: relative;
                            .dropdown{
                                height: 3rem;
                                display: flex;
                                align-items: center;
                                /* height: 100%; */
                                overflow: hidden;
                                .item{
                                    flex: 1;
                                    >div{
                                        &.label{
                                        }
                                        &:nth-child(2){
                                            position: absolute;
                                            width: 100%;
                                            background: white;
                                            color: #000;
                                            left: 0;
                                            top: 110%;
                                            border-radius: 2px;
                                            opacity: 0;
                                            visibility: hidden;
                                            transform: rotateX(90deg);
                                            transform-origin: center top 0;
                                            transition: all 0.5s ease 0s;
                                            z-index: 999;
                                            height: 0;
                                            overflow: hidden;
                                            &.active{
                                                visibility: visible;
                                                opacity: 1;
                                                transform: rotateX(0deg);
                                                /* min-height: 12rem; */
                                            }
                                            &.overflow{
                                                overflow-x: hidden;
                                                overflow-y: scroll;
                                                /* max-height: 12rem; */
                                            }
                                            >div{
                                                height: 3rem;
                                                width: 100%;
                                                display: flex;
                                                align-items: center;
                                                &:hover{
                                                    background: rgba(0,0,0,0.14);
                                                }
                                                >span{
                                                    padding: 0.25rem 0.75rem;
                                                }
                                            }
                                        }
                                    }
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
                        }
                    }
                    &:last-child{
                        display: flex;
                        justify-content: end;
                        >button{
                            width: 80px;
                            height: 38px;
                            border-radius: 4px;
                            color: rgb(189, 200, 240);
                            background: rgb(22 163 74);
                            &:hover{
                                opacity: 0.9;
                            }
                        }
                    }
                }
            }
        `
    }
`

// export const Div = styled.div`
//     ${props => props.c && css`
//         position: absolute;
//         width: 60%;
//         height: 60%;
//         background: ${props => props.b};
//         left: -3px;
//         top: 8px;
//         border: 1px solid rgba(0,0,0,0.14);
//         border-radius: 50%;
//         &.active{
//             border: 2px solid rgb(167, 73, 255);
//         }
//     `}
//     ${props => props.s && css`
//         font-size: 17px;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         border: 1px solid rgba(0,0,0,0.14);
//         border-radius: 4px;
//         &:hover{
//             border-color: #000;
//         }
//         &.active{
//             border: 1px solid rgb(167, 73, 255);
//         }
//     `}
// `
export default ProductWrap