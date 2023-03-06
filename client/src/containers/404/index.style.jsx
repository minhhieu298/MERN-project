import styled from 'styled-components'

const NotFoundWrap = styled.div`
    padding-bottom: 100px;
    padding-top: 120px;
    .container{
        width: 100%;
        /* display: flex; */
        /* flex-direction: column; */
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin-top: 20px;

        }
        .text{
            width: 100%;
            text-align: center;
            margin-top: 40px;
            a{
                padding: 15px 20px;
                background: #008489;
                color: #fff;
                &:hover{
                    opacity: 0.9;
                }
            }
        }
    }
`

export default NotFoundWrap