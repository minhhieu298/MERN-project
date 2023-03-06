import styled from 'styled-components'

const WomenContainer = styled.div`
    margin: 40px 40px;
    >nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 26px 0 34px;
        @media (max-width:991px){
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;
        }
        h1{
            font-size: 1.75rem;
            font-weight: 500;
        }
        ul{
            display: block;
            li{
                display: inline-block;
                margin-right: 20px;
                line-height: 25px;
                &:last-child{
                    margin-right: 0;
                }
                a{
                    font-size: 17px;
                }
            }
        }
    }
    section{
        margin-top: 40px;
        .banner{
            position: relative;
            &-image{
                width: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &-title{
                position: absolute;
                bottom: 15px;
                left: 10px;
                @media (min-width: 576px){
                    bottom: 40px;
                    left: 20px;
                }
                h3{
                    margin-bottom: 4px;
                    font-family: "Nike Futura","Helvetica Neue",Helvetica,Arial,sans-serif;
                    margin-bottom: 20px;
                    font-size: 40px;
                    line-height: 30px;
                    text-transform: uppercase;
                    margin-top: 5px;
                    color: #fff;
                    @media (max-width: 576px){
                        font-size: 20px;
                        margin-bottom: 2px;
                        /* margin-top: 2px; */
                    }
                    @media (min-width: 992px){
                        font-size: 50px;
                        line-height: 45px;
                    }
                    @media (min-width: 1400px){
                        font-size: 72px;
                        line-height: 60px;
                    }
                }
                p{
                    color: #fff;
                }
                div{
                    margin: 8px 0;
                    border-radius: 50px;
                    max-width: 120px;
                    height: 40px;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    @media (max-width: 992px){
                        margin: 10px 0 0;
                    }
                    &:hover{
                        opacity: 0.9;
                    }
                    a{
                        display: block;
                        font-weight: 500;
                        color: #000;
                    }
                }
            }
        }
        .image{
            display: grid;
            grid-template-columns: repeat(8,1fr);
            grid-template-rows: repeat(8,5vw);
            gap: 15px;
            >div{
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                &:first-child{
                    grid-column: span 8 / span 8;
                    grid-row: span 8 / span 8;
                    
                   @media (min-width: 600px){
                        grid-column-start: 1;
                        grid-column-end: 5;
                        grid-row-start: 1;
                        grid-row-end: 8;
                   }
                }
                &:nth-child(2){
                    grid-column: span 8 / span 8;
                    grid-row: span 8 / span 8;

                    @media (min-width: 600px){
                        grid-column-start: 5;
                        grid-column-end: 9;
                        grid-row-start: 1;
                        grid-row-end: 6;
                    }
                }
                &:nth-child(3){
                    grid-column: span 8 / span 8;
                    grid-row: span 8 / span 8;

                    @media (min-width: 600px){
                        grid-column-start: 1;
                        grid-column-end: 5;
                        grid-row-start: 8;
                        grid-row-end: 10;
                    }
                }
                &:last-child{
                    grid-column: span 8 / span 8;
                    grid-row: span 8 / span 8;

                    @media (min-width: 600px){
                        grid-column-start: 5;
                        grid-column-end: 9;
                        grid-row-start: 6;
                        grid-row-end: 10;
                    }
                }
               >div{
                    position: absolute;
                    bottom: 20px;
                    left: 10px;
                    @media (min-width: 600px){
                        left: 20px;
                    }
                    h3{
                        color: #fff;
                    }
                    >div{
                        background: #fff;
                        margin: 8px 0;
                        height: 30px;
                        border-radius: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        max-width: 150px;
                        a{
                            text-transform: capitalize;
                            color: #000;
                            display: block;
                        }
                    } 
               }
            }
        }
    }
`

export default WomenContainer