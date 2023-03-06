import styled from "styled-components";

const LoadWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.65);
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    .loader{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-top: 5px solid;
        animation: load 1s linear infinite; 
    }
    @keyframes load{
        0%{
            transform: rotate(0deg);
            border-color: red;
        }
        50%{
            transform: rotate(180deg);
            border-color: pink;
        }
        100%{
            transform: rotate(360deg);
            border-color: green;
        }
    }
`

export default LoadWrap