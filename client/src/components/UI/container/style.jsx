import styled, { css } from "styled-components";

const ContainerWrap = styled.div`
    margin-left: auto;
    margin-right: auto;
    height: 100%;

    ${props => props.fullWidth &&
        css`
            max-width: none !important;
            width: 100%;
        `}
    
    ${(props) =>
        props.fluid &&
        css`
        width: 100% !important;
        --bs-gutter-x: 0.5rem;
        --bs-gutter-y: 0;
        /* margin-left: auto;
        margin-right: auto; */
        padding-left: calc(var(--bs-gutter-x)*.5);
        padding-right: calc(var(--bs-gutter-x)*.5);
    `}
    
    @media (min-width:575px){
        max-width: 540px;
    }
    @media (min-width:768px){
        max-width: 767px;
    }
    @media (min-width:992px){
        max-width: 960px;
    }
    /* @media (min-width: 1024px){
        max-width:  1024px;
    } */
    @media (min-width: 1200px){
        max-width:  1200px;
    }
    /* @media (min-width: 1650px){
        max-width:  1650px;
    } */
`

export default ContainerWrap