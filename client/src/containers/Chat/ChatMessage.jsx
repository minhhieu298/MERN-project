import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import ChatContainer from './index.style'
import * as Icon from '../../library/icons/index'
import useStore from '../../library/hooks/useStore'
import { callAPI } from '../../api/callApi'


const ChatMessage = () => {
    const [open, setOpen] = useState(false)
    const { auth, token, dispatch } = useStore()
    const socket = useRef()
    const [newMes, setNewMes] = useState('')
    const [messages, setMessages] = useState([])
    const scrollRef = useRef(null)
    const [arrivalMsg, setArrivalMsg] = useState([])

    useEffect(() => {
        socket.current = io('http://localhost:5000')
        socket.current.on('getMessage', data => {
            // console.log(data);
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
                const res = await callAPI.post("/v2/messages", {
                    receiverId: '6407212e846f39d923e210e0'
                }, {
                    headers: {
                        Authorization: token,
                    },
                });
                setMessages(res.data.messages);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [token, messages]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [messages])

    const handleSubmit = async e => {
        e.preventDefault()
        const message = {
            sender: auth._id,
            text: newMes,
            recipient: '6407212e846f39d923e210e0'
        }
        try {
            await callAPI.post('/v2/new-message', message, {
                headers: {
                    Authorization: token,
                },
            })
            socket.current.emit("sendMessage", {
                senderId: auth._id,
                receiverId: '6407212e846f39d923e210e0',
                text: newMes,
            });
            setNewMes('')
            setMessages(prev => [
                ...prev, {
                    sender: {
                        _id: auth?._id
                    },
                    text: newMes,
                    recipient: {
                        _id: '6407212e846f39d923e210e0'
                    }
                }
            ])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ChatContainer open={open} >
            <div className="container">
                <div className="title__chat">
                    <h3 onClick={() => setOpen(true)}>Nhắn tin với cửa hàng</h3>
                    {
                        open && <button onClick={() => setOpen(false)}>
                            <span><Icon.CloseOutlinedIcon /></span>
                        </button>
                    }
                </div>
                {
                    open && <div className="container__chat">
                        <div className="message">
                            <div className="message__container">
                                <div className="message__container__scroll">
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
                                    <button><span><Icon.AiOutlineSend /></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </ChatContainer>
    )
}

export default ChatMessage