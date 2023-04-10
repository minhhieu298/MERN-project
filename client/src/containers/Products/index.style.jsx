import styled, { css } from "styled-components";

const ProductWrap = styled.div`
    padding-bottom: 100px;
    padding-top: 120px;
`
export const BoxWrap = styled.div`
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    margin-left: calc(var(--bs-gutter-x)*-.5);
    margin-right: calc(var(--bs-gutter-x)*-.5);
    margin-top: calc(var(--bs-gutter-y)*-1);
    display: grid;
    grid-template-columns: repeat(12,1fr);
    >*{
        margin-top: var(--bs-gutter-y);
        padding-left: calc(var(--bs-gutter-x)*.5);
        padding-right: calc(var(--bs-gutter-x)*.5);
    }
`

export const Grid = styled.div`
    ${props => props.left && css`
            grid-column: span 12 / span 12;
            @media (min-width: 992px){
                grid-column: span 3 /span 3;
            }
            .mobile{
                margin-bottom: 10px;
                >button{
                    border: 1px solid rgba(0,0,0,0.14);
                    border-radius: 50px;
                    padding: 12px 38px;
                }
                .content{
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    background: #fff;
                    width: 100%;
                    height: 100%;
                    z-index: 999999;
                    pointer-events: none;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(100%);
                    transition: all 0.5s ease 0s;
                    &.active{
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(0);
                        pointer-events: auto;
                    }
                    &-filter{
                        .title{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            min-height: 82px;
                            padding: 0 20px;
                            border-bottom: 1px solid rgba(0,0,0,0.14);
                        }
                        .inner-content{
                            height: calc(570px - 82px);
                            overflow-y: scroll;
                            >div{
                                padding: 20px 20px;
                                /* margin-bottom: 20px; */
                                h3{
                                    margin-bottom: 15px ;
                                }
                                &.clear{
                                    margin-bottom: 0;
                                    padding: 0;
                                    position: fixed;
                                    bottom: 0;
                                    width: 100%;
                                    height: 82px;
                                    border-top: 1px solid rgba(0,0,0,0.14);
                                    background: #fff;
                                    z-index: 1;
                                    display: flex;
                                    align-items: center;
                                    padding: 20px;
                                    justify-content: space-between;
                                    gap: 15px;
                                    >button{
                                        width: 100%;
                                        border: 1px solid rgba(0,0,0,0.1);
                                        padding: 10px 20px;
                                        border-radius: 50px;
                                        &:last-child{
                                            border: 0;
                                            background: #000;
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .search{
                h4{
                    color: #333;
                    font-size: 16px;
                    font-weight: 500;
                    margin: 0;
                }
                .form{
                    margin-bottom: 50px;
                    margin-top: 25px;
                    form{
                        position: relative;
                        input{
                            border: 1px solid #e6e6e6;
                            color: #000;
                            font-size: 14px;
                            height: 43px;
                            padding: 2px 55px 2px 18px;
                            width: 100%;
                        }
                        button{
                            border: #a1a5aa;
                            border-image: none;
                            border-left: 1px solid #a1a5aa;
                            color: #000;
                            cursor: pointer;
                            font-size: 20px;
                            padding: 0 15px;
                            position: absolute;
                            right: 0;
                            top: 50%;
                            transform: translateY(-50%);
                            transition: all .3s ease 0s;
                        }
                    }
                }
            }
            .categories{
                h4{
                    color: #333;
                    font-size: 16px;
                    font-weight: 500;
                    margin: 0;
                }
                .box{
                    /* overflow-y: hidden; */
                    /* height: calc(100% - 20px); */
                    /* max-height: 500px; */
                    max-height: 500px;
                    overflow: auto;
                    &.active{
                        /* overflow-y: scroll; */
                        /* padding-right: 10px; */
                    }
                    &::-webkit-scrollbar{
                        width: 5px;
                    }
                    &::-webkit-scrollbar-thumb{
                        border-radius: 10px;
                    }
                    &::-webkit-scrollbar-track{
                        border-radius: 10px;
                    }
                    >div{
                        margin-bottom: 20px;
                        &.clear-filter{
                            button{
                                width: 100%;
                                background: #000;
                                color: #fff;
                                padding: 10px 20px;
                            }
                        }
                        &.color{
                            h3{
                                font-weight: 500;
                                font-size: 17px;
                                color: #000;
                                margin-bottom: 20px;
                            }
                            >div{
                                margin-left: 10px;
                                display: flex;
                                align-items: center;
                                flex-wrap: wrap;
                                .MuiFormGroup-root.css-dmmspl-MuiFormGroup-root{
                                    position: relative;
                                    >label{
                                        >span{
                                            &:first-child{
                                                &:hover{
                                                    background: none;
                                                }
                                            }
                                            &:last-child{
                                                position: absolute;
                                                left: 0;
                                                width: 39px;
                                                height: 39px;
                                                pointer-events: none;
                                                border-radius: 50%; 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        &.size{
                            h3{
                                font-weight: 500;
                                font-size: 17px;
                                color: #000;
                                margin-bottom: 20px;
                            }
                            >div{
                                display: grid;
                                grid-template-columns: repeat(3,1fr);
                                gap: 5px;
                                .MuiFormGroup-root.css-dmmspl-MuiFormGroup-root{
                                    position: relative;
                                    >label{
                                        >span{
                                            &:first-child{
                                                &:hover{
                                                    background: none;
                                                }
                                            }
                                            &:last-child{
                                                position: absolute;
                                                left: 0;
                                                width: 100%;
                                                height: 39px;
                                                background: #fff;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                border-radius: 4px;
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
    }
    ${props => props.right && css`
            grid-column: span 12 / span 12;
            display: grid;
            grid-template-columns: repeat(1,minmax(0,1fr));
            gap: 20px;

            @media (min-width:992px){
                grid-column: span 9 /span 9;
            }
            .filter{
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 10px;
                width: 100%;
                .view{
                    display: flex;
                    align-items: center;
                    /* gap: 10px; */
                    >button{
                        width: 20px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 10px;
                        >span{
                            display: inline-block;
                        }
                        &:first-child{
                            margin-left: 10px;
                        }
                        &:last-child{
                            margin-right: 10px;
                        }
                    }
                }
                .result{
                    margin-right: auto;
                    color: rgba(0,0,0,0.7);
                }
                .drop-select{
                    position: relative;
                    display: flex;
                    align-items: center;
                    height: 40px;
                    flex-wrap: wrap;
                    @media (max-width: 575px){
                        width: 100%;
                        gap: 10px;
                        /* margin-right: 0; */
                        /* max-width: 100%; */
                    }
                    .select{
                        width: 200px;
                        background-color: rgb(255, 255, 255);
                        border: 1px solid rgba(0,0,0,0.14);
                        display: flex;
                        align-items: center;
                        height: 100%;
                        cursor: pointer;
                        position: relative;
                        margin-right: 40px;
                        @media (max-width: 575px){
                            width: 100%;
                            margin-right: 0;
                            max-width: 100%;
                        }
                        .item{
                            position: absolute;
                            background: #fff;
                            width: 100%;
                            max-height: 150px;
                            left: 0;
                            top: 115%;
                            transform: rotateX(90deg);
                            transform-origin: center top 0;
                            transition: all .5s ease 0s;
                            visibility: hidden;
                            z-index: 99;
                            box-shadow: 0 1px 1px 1px rgb(0 0 0 / 10%);
                            padding: 0 10px;

                            &.active{
                                visibility: visible;
                                opacity: 1;
                                transform: rotateX(0deg);
                            }
                            .list-item{
                                height: calc(100% / 2);
                                display: flex;
                                align-items: center;
                                padding-left: 10px;
                                &:last-child{
                                    margin-bottom: 0;
                                }
                            }
                        }
                        &-item{
                            flex: 1;
                            display: flex;
                            align-items: center;
                            height: 100%;
                            padding: 0 10px;
                            .inner-content{
                                margin-right: 10px;
                                flex: 1;
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
                                    background: rgb(0, 0, 0);
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
            }
            .products{
                display: grid;
                grid-template-columns: repeat(12,1fr);
                gap: 20px 10px;
            }
            .page{
                display: flex;
                justify-content: flex-end;
                margin-top: 20px;
            }
        `
    }
    ${props => props.item && css`
            display: grid;
            grid-template-columns: repeat(1,minmax(0,1fr));
            gap: 20px 10px;
            @media (min-width: 576px){
                grid-template-columns: repeat(2,minmax(0,1fr));
            }
            @media (min-width: 768px){
                grid-template-columns: repeat(2,minmax(0,1fr));
            }
            @media (min-width:992px){
                grid-template-columns: repeat(2,minmax(0,1fr));
            }
            @media (min-width:1024px){
                grid-template-columns: repeat(3,minmax(0,1fr));
            }
            @media (min-width:1650px){
                grid-template-columns: repeat(3,minmax(0,1fr));
            }
    `}
    ${props => props.page && css`
        padding-top: 40px;
        padding-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `}  
    @media screen and (max-width:512px) {
        .css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root{
            margin: 0 0;
            min-width: 35px;
            height: 35px;
        }
    }      
`
export const Item = styled.div`
    grid-column: span 12 / span 12;
    position: relative;
    @media (min-width: 576px){
        grid-column: span 6 / span 6;
    }
    @media (min-width: 992px){
        grid-column: span 4 / span 4;
    }
    >.product-content{
        .price{
            margin: 13px 0 22px;
            display: flex;
            align-items: center;
            >span.price_after{
                text-decoration: line-through;
                margin-right: 10px;
            }
            >span{
                &.discount{
                    font-size: 17px;
                }
            }
        }
    }
    &.col-3{
        @media (min-width: 576px){
            grid-column: span 6 / span 6;
        }
        @media (min-width: 992px){
            grid-column: span 4 / span 4;
        }
    }
    &.col-2{
        grid-column: span 6 / span 6;
    }
    &.col-1{
        grid-column: span 12 / span 12;
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 15px;
        .product-img{
            grid-column: span 12 / span 12;
            @media (min-width: 576px){
                grid-column: span 4 / span 4;
            }
        }
        .product-content{
            grid-column: span 12 / span 12;
            margin: 0;
            @media (min-width: 576px){
                grid-column: span 8 / span 8;
            }
            h3{
                color: #010101;
                font-size: 24px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            >p{
                color: #8f8f8f;
                font-size: 15px;
                line-height: 28px;
                margin: 15px 0 40px;

                @media (max-width: 768px){
                    margin: 12px 0 20px;
                }

                @media screen and (min-width: 768px) and (max-width: 991px){
                    margin: 15px 0 20px;
                }

                @media screen and (min-width: 992px) and (max-width: 1199px){
                    margin: 15px 0 20px;
                }
            }
            .btn-cart{
                >div{
                    a{
                        background-color: #343538;
                        border: 1px solid transparent;
                        color: #fff;
                        display: inline-block;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 1;
                        padding: 14px 32px 15px;
                        text-transform: uppercase;
                        z-index: 1;
                        position: relative;
                        &:hover{
                            border: 1px solid #a749ff;
                            &::after{
                                background: #a749ff;
                                width: 100%;
                            }
                        }
                        &:after{
                            position: absolute;
                            content: '';
                            width: 0;
                            height: 100%;
                            top: 0;
                            left: 0;
                            z-index: -1;
                            transition: all .5s cubic-bezier(.645,.045,.355,1);
                        }
                    }
                }
            }
        }
    }
    .product-img{
        overflow: hidden;
        width: 100%;
        position: relative;
        /* height: 350px; */
        a{
            /* position: absolute; */
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .product-content{
        margin: 20px 0 0;
        h3{
            font-size: 16px;
            line-height: 30px;
            font-weight: 500;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    /* &.col-1{

    } */
`

export const DetailWrap = styled.div`
    padding-bottom: 100px;
    padding-top: 120px;
    .row{
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        /* display: flex; */
        /* flex-wrap: wrap; */
        margin-left: calc(var(--bs-gutter-x)*-.5);
        margin-right: calc(var(--bs-gutter-x)*-.5);
        margin-top: calc(var(--bs-gutter-y)*-1);
        display: grid;
        grid-template-columns: repeat(12,1fr);
        > *{
            margin-top: var(--bs-gutter-y);
            max-width: 100%;
            padding-left: calc(var(--bs-gutter-x)*.5);
            padding-right: calc(var(--bs-gutter-x)*.5);
        }
        .col-6{
            grid-column: span 12 / span 12;
            @media (min-width: 767px){
                grid-column: span 6 / span 6;
            }
            .product-large-img{
                .image{
                    width: 100%;
                    img{
                        width: 100%;
                        object-fit: cover;
                        height: 100%;
                    }
                }
            }
            .product-small-img{
                display: grid;
                grid-template-columns: repeat(12,1fr);
                gap: 10px;
                margin-top: 15px;
                .item-image{
                    grid-column: span 3 / span 3;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
            .wrap-content{
                margin-left: 70px;
                @media (max-width: 767px){
                    margin-left: 0;
                    margin-top: 30px;
                }
                h2{
                    color: #010101;
                    font-size: 24px;
                    line-height: 1;
                    margin: 0;
                }
                .price{
                    align-items: center;
                    display: flex;
                    margin: 15px 0 26px;
                    >span{
                        font-size: 24px;
                        color: #fe5252;
                        &.old{
                            color: #333;
                            font-size: 18px;
                            margin-left: 20px;
                            text-decoration: line-through;
                        }
                    }
                }
                .rating{
                    margin: 0 0 17px;
                }
                .size-color{
                    display: block;
                    @media (min-width: 992px){
                        display: flex;
                    }
                    /* @media screen and (min-width: 576px) and (max-width: 767px){
                        display: flex;
                    } */
                    .color-wrap{
                        margin-right: 20px;
                        margin-bottom: 20px;
                        @media (min-width: 992){
                            margin-right: 0;
                            margin-bottom: 10px;
                        }
                        /* @media (max-width: 767px){
                            margin-bottom: 20px;
                            margin-right: 0;
                        }
                        @media screen and (min-width: 576px) and (max-width: 767px){
                            margin-bottom: 0;
                            margin-right: 20px;
                        } */
                        span{
                            display: block;
                            font-size: 15px;
                            font-weight: 500;
                            margin: 0 0 15px;
                        }
                        .color-content{
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            >button{
                                width: 18px;
                                height: 18px;
                                border-radius: 50%;
                                border: 1px solid rgba(0,0,0,0.14);
                            }
                        }
                    }
                    .size-wrap{
                        flex: 1;
                        span{
                            display: block;
                            font-size: 15px;
                            font-weight: 500;
                            margin: 0 0 15px;
                        }
                        .size-content{
                            display: grid;
                            grid-template-columns: repeat(4,1fr);
                            gap: 10px;
                            @media (min-width: 768px){
                                display: grid;
                                grid-template-columns: repeat(6,1fr);
                                /* display: flex;
                                align-items: center;
                                gap: 10px; */
                            }
                            >button{
                                font-size: 14px;
                                margin: 0 5px 0 0;
                                position: relative;
                                text-transform: uppercase;
                                color: #000;
                                width: 100%;
                                padding: 10px 15px;
                            }
                        }
                    }
                }
                .description{
                    border-bottom: 1px solid #e5e5e5;
                    margin: 20px 0 34px;
                    padding: 0 0 37px;
                    p{
                        color: #333;
                        font-size: 15px;
                        line-height: 28px;
                        margin: 0;
                    }
                }
                .quantity{
                    align-items: center;
                    display: flex;
                    margin-bottom: 34px;
                    margin-top: 40px;
                    /* @media (max-width: 767px){
                        display: block;
                    }
                    @media screen and (min-width: 576px) and (max-width: 767px){
                        display: flex;
                    } */
                    .cart-plus-minus{
                        /* display: flex; */
                        border: 1px solid #e8e8e8;
                        display: inline-block;
                        height: 60px;
                        overflow: hidden;
                        padding: 0;
                        position: relative;
                        width: 80px;
                        >button{
                            background: none;
                            border: none;
                            color: #8f8f8f;
                            cursor: pointer;
                            float: inherit;
                            font-size: 14px;
                            font-weight: 500;
                            line-height: 20px;
                            margin: 0;
                            position: absolute;
                            text-align: center;
                            transition: all .3s ease 0s;
                            width: 24px;
                            height: 60px;
                            top: 0;
                            &:first-child{
                                left: 0;
                            }
                            &:last-child{
                                right: 0;
                            }
                        }
                        input{
                            background: transparent;
                            border: none;
                            color: #8f8f8f;
                            float: left;
                            font-size: 14px;
                            height: 60px;
                            margin: 0;
                            padding: 0;
                            text-align: center;
                            width: 80px;
                            /* pointer-events: none; */
                            cursor: pointer;
                        }
                    }
                    .cart-btn{
                        margin: 0 25px 0 0;
                        /* @media (max-width: 767px){
                            margin: 20px 0;
                        }
                        @media screen and (min-width: 576px) and (max-width: 767px){
                            margin: 0 25px 0 10px;
                        } */
                        button{
                            background-color: #343538;
                            border: none;
                            color: #fff;
                            display: inline-block;
                            font-weight: 700;
                            line-height: 1;
                            padding: 23px 38px;
                            text-transform: uppercase;
                            z-index: 99;
                            position: relative;
                            @media (max-width: 767px){
                                padding: 23px;
                            }
                            /* @media screen and (min-width: 480px) and (max-width: 767px){
                                padding: 23px;
                            } */
                            &:hover{
                                &::before{
                                    left: 0;
                                    right: auto;
                                    width: 0;
                                }
                                &::after{
                                    left: 0;
                                    right: auto;
                                    width: 100%;
                                }
                            }
                            &::after,&::before{
                                bottom: 0;
                                content: "";
                                height: 100%;
                                left: 0;
                                position: absolute;
                                transition: all .5s cubic-bezier(.645,.045,.355,1);
                                width: 100%;
                                z-index: -1;
                            }
                            &::after{
                                background: #a749ff;
                                left: auto;
                                right: 0;
                                width: 0;
                            }
                        }
                    }
                }
            }
        }
    }
    .comments{
        margin-top: 40px;
        max-width: 900px;
        .container{
            width: 100%;
            h3{
                font-size: 1.5rem;
                margin: 20px 0 10px;
            }
            .wrap {
                form{
                    margin: 10px 0;
                    >div{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: 0 10px;
                        margin-bottom: 10px;
                        >div{
                            width: 100%;
                            border: 1px solid rgba(0,0,0,0.14);
                            border-radius: 4px;
                            padding: 1em .75em;
                            input{
                                width: 100%;
                                border: 0;
                                outline: 0;
                                font-size: 16px;
                                padding-left: 10px;
                                padding-right: 15px;
                            }
                        }
                        button{
                            padding: 15px;
                            border-radius: 4px;
                            font-weight: 600;
                            background: #2e84fd;
                            color: #fff;
                            text-transform: uppercase;
                            &:disabled{
                                cursor: not-allowed;
                                background: gray;
                            }
                        }
                    }
                }
            }
            .list-comment{
                display: flex;
                flex-direction: column;
                &-item{
                    display: flex;
                    align-items: flex-start;
                    margin: 20px 0 10px;
                    &-left{
                        .avatar-user{
                            width: 40px;
                            height: 40px;
                            overflow: hidden;
                            border-radius: 100rem;
                            img{
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                    }
                    &-right{
                        flex: 1;
                        padding-left: 15px;
                        .user-name{
                            margin-bottom: 5px;
                        }
                        .comment{
                            margin-top: 8px;
                        }
                        .edit-comment{
                            display: flex;
                            align-items: center;
                            gap: 5px;
                            margin: 10px 0;
                            >div{
                                color: gray;
                                text-transform: capitalize;
                                cursor: pointer;
                            }
                        }
                        form{
                            position: relative;
                            margin: 10px 0;
                            >div{
                                width: 100%;
                                display: flex;
                                align-items: center;
                                gap: 0 10px;
                                margin-bottom: 10px;
                                >div{
                                    width: 100%;
                                    border: 1px solid rgba(0,0,0,0.14);
                                    border-radius: 4px;
                                    padding: 1em .75em;
                                    input{
                                        width: 100%;
                                        border: 0;
                                        outline: 0;
                                        font-size: 16px;
                                        padding-left: 10px;
                                        padding-right: 15px;
                                    }
                                }
                                button{
                                    padding: 15px;
                                    border-radius: 4px;
                                    font-weight: 600;
                                    background: #2e84fd;
                                    color: #fff;
                                    text-transform: uppercase;
                                    &:disabled{
                                        cursor: not-allowed;
                                        background: gray;
                                    }
                                }
                                &:nth-child(2){
                                    .cancel{
                                        border: 0;
                                        border-radius: 0;
                                        padding: 0;
                                        color: gray;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .empty-comment{
                margin-top: 20px;
            }
        }
    }
`

export const Div = styled.div`
    ${props => props.c && css`
        position: absolute;
        width: 60%;
        height: 60%;
        background: ${props => props.b};
        left: -3px;
        top: 8px;
        border: 1px solid rgba(0,0,0,0.14);
        border-radius: 50%;
        &.active{
            border: 2px solid rgb(167, 73, 255);
        }
    `}
    ${props => props.s && css`
        font-size: 17px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0,0,0,0.14);
        border-radius: 4px;
        &:hover{
            border-color: #000;
        }
        &.active{
            border: 1px solid rgb(167, 73, 255);
        }
    `}
`

export default ProductWrap