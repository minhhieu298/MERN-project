import React, { useEffect, useRef, useState } from 'react'
import useStore from '../../../library/hooks/useStore'
import { io } from 'socket.io-client'
import ChatContainer from './index.style'
import { callAPI } from '../../../api/callApi'
import Contact from './Contact'
import { getListUser } from '../../../redux/actions/auth.action'
import * as Icon from '../../../library/icons/index'
import Robot from '../../../assets/robot.gif'
import useWindowSize from '../../../library/hooks/useWindowSize'


const ChatUser = () => {
    const { auth, dispatch, token, users } = useStore()
    const scrollRef = useRef(null)
    const socket = useRef()
    const [messages, setMessages] = useState([])
    const [arrivalMsg, setArrivalMsg] = useState([])
    const [userSelect, setUserSelect] = useState(null)
    const [newMes, setNewMes] = useState('')
    const [open, setOpen] = useState(false)
    const { width } = useWindowSize()

    useEffect(() => {
        socket.current = io('http://localhost:5000')
        socket.current.on('getMessage', data => {
            setArrivalMsg({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    })

    useEffect(() => {
        arrivalMsg && setMessages(prev => [...prev, arrivalMsg])
    }, [arrivalMsg])

    useEffect(() => {
        socket.current.emit("addUser", auth._id);
        socket.current.on('getUsers', (users) => {
            // console.log(users);
        })
    }, [auth])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await callAPI.post('/v2/messages', {
                    receiverId: userSelect?._id
                }, {
                    headers: {
                        Authorization: token,
                    }
                })
                // console.log(res.data);
                setMessages(res.data.messages)
            } catch (error) {
                console.log(error);
            }
        }
        getMessages()
    }, [token, userSelect, messages])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [messages])

    const handleSubmit = async e => {
        e.preventDefault()
        let mes = {
            sender: auth?._id,
            recipient: userSelect?._id,
            text: newMes
        }
        try {
            await callAPI.post('/v2/new-message', mes, {
                headers: {
                    Authorization: token,
                }
            })
            socket.current.emit('sendMessage', {
                senderId: auth?._id,
                text: newMes,
                receiverId: userSelect?._id
            })
            setMessages(prev => [...prev, {
                sender: {
                    _id: auth?._id
                },
                text: newMes,
                recipient: {
                    _id: userSelect?._id
                }
            }])
            setNewMes('')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(getListUser({
            page: 1,
            pageSize: 10
        }, token))
    }, [dispatch, token])

    // console.log(messages);
    return (
        <ChatContainer>
            <div className="container">
                <Contact setUserSelect={setUserSelect} open={open} setOpen={setOpen} />
                <div className="container__chat">
                    {
                        userSelect ? <>
                            <div className="container__chat__head">
                                {
                                    users?.filter(user => user._id === userSelect)?.map(item => (
                                        <div key={item?._id}>
                                            <img src={item?.avatar} alt="" />
                                            <h5>{item?.username}</h5>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="container__chat__body">
                                <div className="message">
                                    <div className="message__container">
                                        <div className="message__container__scroll" >
                                            {
                                                messages?.map((mes, index) => (
                                                    <div key={index} style={{ textAlign: `${mes.sender?._id === auth?._id ? 'right' : 'left'}`, marginBottom: '10px' }}>
                                                        <div>
                                                            <div>
                                                                {
                                                                    mes.sender?._id !== auth._id && <img src={mes.sender?.avatar} alt="" />
                                                                }
                                                                <p style={{
                                                                    background: `${mes.sender?._id === auth?._id ? 'rgb(59 130 246)' : '#e4e6eb'}`,
                                                                    color: `${mes.sender?._id === auth?._id ? '#fff' : '#000'}`
                                                                }}>{mes.text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <div ref={scrollRef}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box__message">
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <div className='text'>
                                                <input type="text" value={newMes} onChange={e => setNewMes(e.target.value)} />
                                            </div>
                                            <button onClick={() => setOpen(true)}><span><Icon.AiOutlineSend /></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </> : <div className="container__chat__empty">
                            {
                                width < 992 && <button onClick={() => setOpen(!open)}><span><Icon.BsFillChatFill /></span></button>
                            }
                            <img src={Robot} alt="" />
                        </div>
                    }
                </div>
            </div>
        </ChatContainer>
    )
}

export default ChatUser