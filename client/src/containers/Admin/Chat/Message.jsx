import React, { useEffect, useRef, useState } from 'react'
import useStore from '../../../library/hooks/useStore'
import io from 'socket.io-client'
import { callAPI } from '../../../api/callApi'


const Message = ({ userSelect, messages, setMessages }) => {
    const scrollRef = useRef(null)
    const socket = useRef()
    // const [messages, setMessages] = useState([])
    const { auth, token } = useStore()


    useEffect(() => {
        socket.current = io.connect('http://localhost:5000/')
        socket.current.on('getMes', data => {
            console.log(data);
        })
    }, [auth])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await callAPI.post("/v2/messages", {
                    receiverId: userSelect
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
    }, [token, userSelect]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [])
    return (
        <div className="message">
            <div className="message__container">
                <div className="message__container__scroll" >
                    {
                        messages?.map((mes, index) => (
                            <div key={index}>
                                <p>{mes?.text}</p>
                            </div>
                        ))
                    }
                    <div ref={scrollRef}></div>
                </div>
            </div>
        </div>
    )
}

export default Message