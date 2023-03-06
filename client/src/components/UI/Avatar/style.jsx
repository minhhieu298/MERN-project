import styled from "styled-components";

const AvatarWrap = styled.div`
    >a{
        /* color: #000; */
        /* transition: 150ms cubic-bezier(.4,0,.2,1); */
        color: #fff;
        /* &:hover{
            color: rgb(220 ,177 ,74);
        } */
    }
    >div{
        width: 40px;
        height: 40px;
        border-radius:50%;
        overflow: hidden;
        cursor: pointer;
        border: 1px solid rgba(0,0,0,0.14);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        position: relative;
        >a{
            position:absolute;
            top: 0;
            width: 100%;
            height: inherit;
            >img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }
    /* >div{
        
    } */
    /* 
    >a{
        
    } */
`

export default AvatarWrap