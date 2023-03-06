import React, { useState } from 'react'
import { CreateWrap } from './index.style'
import { callAPI } from '../../../api/callApi'
import useStore from '../../../library/hooks/useStore'

const Price = ({ price, setPrice }) => {
    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...price]
        list[index][name] = value
        setPrice(list)
    }
    return (
        <div className="form-filter">
            <h1>Table price</h1>
            {
                price.map((item, ind) => (
                    <div key={ind} className="form-group">
                        <div>
                            <input type="text" name='price' onChange={e => handleInputChange(e, ind)} />
                        </div>
                        <div>
                            {
                                price.length > 1 && <button type='button' onClick={() => {
                                    const list = [...price]
                                    list.splice(ind, 1)
                                    setPrice(list)
                                }} disabled={price.length !== 1 ? false : true}>-</button>
                            }
                            <button type='button' onClick={() => setPrice([...price, { price: '' }])}>+</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const Size = () => {
    const { token } = useStore()
    const [size, setSize] = useState([{ size: '' }])
    const [title, setTitle] = useState('')
    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...size]
        list[index][name] = value
        setSize(list)
    }

    const handleSubmit = async e => {
        // e.preventDefault()

        await callAPI.post('/v1/create-new-accessory', {
            title,
            sizes: size
        }, {
            headers: {
                Authorization: token
            }
        })
    }
    return (
        <div className="form-filter">
            <h1>Table size</h1>
            <div className="form-group">
                <div>
                    <input type="text" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} />
                </div>
            </div>
            {
                size.map((item, ind) => (
                    <div key={ind} className="form-group">
                        <div>
                            <input type="text" name='size' placeholder='Size' onChange={e => handleInputChange(e, ind)} />
                        </div>
                        <div>
                            {
                                size.length > 1 && <button type='button' onClick={() => {
                                    const list = [...size]
                                    list.splice(ind, 1)
                                    setSize(list)
                                }} disabled={size.length !== 1 ? false : true}>-</button>
                            }
                            <button type='button' onClick={() => setSize([...size, { size: '' }])}>+</button>
                        </div>
                    </div>
                ))
            }
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

const Color = () => {
    const { token } = useStore()
    const [color, setColor] = useState([{ color: '' }])
    const [title, setTitle] = useState('')
    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...color]
        list[index][name] = value
        setColor(list)
    }
    const handleSubmit = async e => {
        // e.preventDefault()

        await callAPI.post('/v1/create-new-accessory', {
            title,
            colors: color
        }, {
            headers: {
                Authorization: token
            }
        })
    }
    return (
        <div className="form-filter">
            <h1>Table color</h1>
            <div className="form-group">
                <div>
                    <input type="text" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} />
                </div>
            </div>
            {
                color.map((item, ind) => (
                    <div key={ind} className="form-group">
                        <div>
                            <input type="text" name='color' placeholder='Color' onChange={e => handleInputChange(e, ind)} />
                        </div>
                        <div>
                            {
                                color.length > 1 && <button type='button' onClick={() => {
                                    const list = [...color]
                                    list.splice(ind, 1)
                                    setColor(list)
                                }} disabled={color.length !== 1 ? false : true}>-</button>
                            }
                            <button type='button' onClick={() => setColor([...color, { color: '' }])}>+</button>
                        </div>
                    </div>
                ))
            }
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

const CreateAccessory = () => {
    const [price, setPrice] = useState([{ price: '' }])



    return (
        <CreateWrap>
            {/* <div>
                <div className='form'>
                    <Size />
                    <Color />

                </div>
            </div> */}
        </CreateWrap>
    )
}

export default CreateAccessory