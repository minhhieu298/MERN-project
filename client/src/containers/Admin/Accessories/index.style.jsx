import styled from 'styled-components'

const AccessoriesWrap = styled.div`
    background-color: #1a223f;
    margin-right: 20px;
    margin-left: 0;
    padding: 20px;
    color: rgb(189, 200, 240); 
    height:100%;
    @media (max-width:991px){
        margin-left: 20px;
    }
    >div{
        background-color: rgb(33, 41, 70);
        border-radius: 8px;
        height: auto;
        /* border: 1px solid rgb(17, 25, 54); */
        .row{
            --bs-gutter-x: 1.5rem;
            --bs-gutter-y: 0;
            display: flex;
            flex-wrap: wrap;
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
            .col-8{
                grid-column: span 12 /span 12;
                margin: 20px;
                @media (min-width: 991px){
                    grid-column: span 8 / span 8;
                }
                h2{
                    margin-bottom: 20px;
                }
                > .row{
                    display: grid;
                    grid-template-columns: repeat(8,1fr);
                    grid-template-rows: repeat(8,auto);
                    gap: 15px;
                    .col-4{
                        /* background: pink; */
                        /* margin-bottom: 10px; */
                        &:first-child{
                            grid-column: span 8 / span 8;
                            grid-row: span 8 / span 8;
                                
                            @media (min-width: 600px){
                                grid-column-start: 1;
                                grid-column-end: 5;
                                grid-row-start: 1;
                                grid-row-end: 5;
                            }
                        }
                        &:nth-child(2){
                            grid-column: span 8 / span 8;
                            grid-row: span 9 / span 9;

                            @media (min-width: 600px){
                                grid-column-start: 5;
                                grid-column-end: 9;
                                grid-row-start: 1;
                                grid-row-end: 9;
                            }
                        }
                        &:nth-child(3){
                            grid-column: span 8 / span 8;
                            grid-row: span 8 / span 8;

                            @media (min-width: 600px){
                                grid-column-start: 1;
                                grid-column-end: 5;
                                grid-row-start: 5;
                                grid-row-end: 9;
                            }
                        }
                        h3{
                            margin-bottom: 20px;
                        }
                        .table{
                            display: grid;
                            grid-template-columns: repeat(4,1fr);
                            border: 1px solid rgb(189, 200, 240);
                            >div{
                                grid-column: span 4 / span 4;
                                display: grid;
                                grid-template-columns: repeat(4,1fr);
                                border-bottom: 1px solid rgb(189, 200, 240);
                                height: 40px;
                                &:last-child{
                                    border-bottom: 0;
                                }
                                >div{
                                    &:first-child{
                                        grid-column: span 3 /span 3;
                                        border-right: 1px solid rgb(189, 200, 240);
                                        &.form{
                                            padding: 5px;
                                            form{
                                                position: relative;
                                                height: 100%;
                                                input{
                                                    width: 100%;
                                                    height: 100%;
                                                    background: transparent;
                                                    border: 1px solid #f9fafb45;
                                                    border-radius: 3px;
                                                    padding-right: 50px;
                                                    padding-left: 10px;
                                                    color: rgb(189, 200, 240);
                                                }
                                                >button{
                                                    position: absolute;
                                                    top: 50%;
                                                    transform: translateY(-50%);
                                                    right: 10px;
                                                    color: rgb(189, 200, 240);
                                                }
                                            }
                                        }
                                    }
                                    &:nth-child(2){
                                        grid-column: span 1 /span 1;
                                        display: grid;
                                        grid-template-columns: repeat(2,1fr);
                                        >button{
                                            grid-column: span 1 / span 1;
                                            color: rgb(189, 200, 240);
                                        }
                                    }
                                    text-align: center;
                                    align-items: center;
                                    display: grid;
                                    
                                }
                            }
                        }
                    }
                }
                
            }
            .col-4{
                grid-column: span 12 /span 12;
                @media (min-width: 991px){
                    margin: 20px;
                    grid-column: span 4 / span 4;
                }
                h2{
                    margin-bottom: 20px;
                }
                >div{
                    /* margin-right: 20px; */
                    form{
                        .form-group{
                            width: 100%;
                            padding: 5px;
                            border: 1px solid #f9fafb45;
                            border-radius: 4px;
                            margin: 20px 0;
                            transition: all 0.5s ease;
                            &:focus-within{
                                border-color: rgb(248 250 252);
                            }
                            input{
                                width: 100%;
                                height: 38px;
                                padding-left: 10px;
                                background: transparent;
                                border: none;
                                color: rgb(189, 200, 240); 
                            }
                            &:last-child{
                                border: none;
                                border-radius: 0;
                                display: flex;
                                justify-content: flex-end;
                                button{
                                    color: #fff;
                                    text-transform: uppercase;
                                    font-size: 16px;
                                    font-weight: 500;
                                    letter-spacing: 0.5px;
                                    background-color: rgb(34 197 94);
                                    padding: 10px 18px;
                                    border-radius: 2px;
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
    }
`

export const CreateWrap = styled.div`
    background-color: #1a223f;
    margin-right: 20px;
    margin-left: 0;
    padding: 20px;
    color: rgb(189, 200, 240); 
    height:100%;
    @media (max-width:991px){
        margin-left: 20px;
    }
    >div{
        background-color: rgb(33, 41, 70);
        border-radius: 8px;
        height: auto;
        border: 1px solid rgb(17, 25, 54);
        padding: 24px;
        .form{
            display: grid;
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 15px;
            >div{
                grid-column: span 2 / span 2;
                @media (min-width: 991px){
                    grid-column: span 1 / span 1;
                }
                &.form-filter{
                    .form-group{
                        margin: 10px 0 15px;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        >div{
                            &:first-child{
                                width: 100%;
                                padding: 5px;
                                border-radius: 4px;
                                border: 1px solid #f9fafb45;
                                input{
                                    width: 100%;
                                    height: 28px;
                                    background: transparent;
                                    border: none;
                                    color: rgb(189, 200, 240);
                                    padding-left: 5px;
                                    @media (min-width: 600px){
                                        height: 38px;
                                        padding-left: 10px;
                                    }
                                }
                            }
                            &:last-child{
                                display: flex;
                                align-items: center;
                                gap: 5px;
                                >button{
                                    width: 38px;
                                    height: 38px;
                                    border: 1px solid #f9fafb45;
                                    border-radius: 4px;
                                    @media (min-width: 600px){
                                        width: 48px;
                                        height: 48px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        /* .title-accessory{
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: rgb(189, 200, 240);
            padding: 24px;
            border-bottom: 1px solid #bdc8f070;
            >div{
                &:first-child{
                    display: flex;
                    align-items: center;
                    font-size: 1.125rem;
                }
            }
        }
        .content-accessory{
            padding: 24px;
        } */
    }
`

export default AccessoriesWrap