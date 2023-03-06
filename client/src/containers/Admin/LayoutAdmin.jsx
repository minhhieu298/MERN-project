import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import useWindowSize from '../../library/hooks/useWindowSize'
import Sidebar from './Sidebar/Sidebar'
import * as Icon from '../../library/icons/index'
import useStore from '../../library/hooks/useStore'

const LayoutWrap = styled.div`
    min-height: 100vh;
    background: #111936;
    display: flex;
    color: #fff;
    
    @media (max-width: 991px){
        .navbar{
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 999999;
            left: 0;
            opacity: 0;
            background: rgba(0,0,0,0.65);
            transition: all 0.4s ease-in-out;
            pointer-events: none;
            &.active{
                opacity: 1;
                pointer-events: auto;
                nav{
                    transform: translateX(0);
                }
            }
            
            nav{
                position: relative;
                transform: translateX(-100%);
                transition: all 0.4s ease-in-out;
                @media (max-width: 575px){
                    width: 100%;
                }
            }
            /* nav{
                    position: relative;
                } */
        }
    }
`
const ContentLayout = styled.div`
    overflow: hidden;
    flex: 1;
    header{
       background-color: rgb(33, 41, 70);
       padding: 16px;
       position: fixed;
       top: 0;
       left: auto;
       right: 0;
       width: 100%;
       height: 88px;
       z-index: 99999;
       overflow: hidden;
       .container{
            /* position: relative; */
            display: flex;
            align-items: center;
            min-height: 48px;
            padding: 16px;
            justify-content: space-between;
            .logo{
                display: flex;
                align-items: center;
                width:  300px;
                >div{
                    &:first-child{
                        flex: 1;
                        @media (max-width:991px){
                            display: none;
                        }
                    }
                    &:nth-child(2){
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
                        background: rgb(41, 49, 79);
                        color: rgb(124, 77, 255);
                        &:hover{
                            background: rgb(124, 77, 255);
                            color: rgb(209, 196, 233);
                        }
                    }
                }
            }
            .avatar{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                >div{
                    overflow: hidden;
                    flex-shrink: 0;
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    cursor: pointer;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
`
const ContentOulet = styled.div`
    float: right;
    width: calc(100% - 300px);
    margin-top: 100px;
    /* height: 100vh; */
    @media (max-width:991px){
        width: 100%;
    }
`

const LayoutAdmin = () => {
    const { width } = useWindowSize()
    const [open, setOpen] = useState(false)
    const { auth } = useStore()
    return (
        <>
            <LayoutWrap>
                {
                    width > 991 ? <Sidebar open={open} setOpen={setOpen} /> : <div className={`navbar ${open ? 'active' : ''}`}>
                        <Sidebar open={open} setOpen={setOpen} />
                    </div>
                }
                <ContentLayout>
                    <header>
                        <div className="container">
                            <div className='logo'>
                                <div>logo</div>
                                {
                                    width < 1024 && <div onClick={() => setOpen(true)}><span><Icon.MenuOutlinedIcon /></span></div>
                                }
                            </div>
                            <div className="avatar">
                                <div>
                                    <img src={auth.avatar} alt="" />
                                </div>
                            </div>
                        </div>
                    </header>
                    <ContentOulet>
                        <Outlet />
                    </ContentOulet>
                </ContentLayout>
            </LayoutWrap>
        </>
    )
}

export default LayoutAdmin