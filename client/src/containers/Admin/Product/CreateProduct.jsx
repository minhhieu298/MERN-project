import React, { useEffect, useRef, useState } from 'react'
import { CreateWrap } from './index.style'
import * as Icon from '../../../library/icons/index'
import useStore from '../../../library/hooks/useStore'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { createProduct } from '../../../redux/actions/product.action'

const DropItem = ({ label, data, setData, cate, array, dataId }) => {
    const [drop, setDrop] = useState(false)
    const refDrop = useRef(null)
    useOnClickOutside(refDrop, () => setDrop(false))
    return (
        <React.Fragment>
            {
                cate === 'parent' ? <>
                    <label htmlFor="">{label}</label>
                    <div onClick={() => setDrop(!drop)} >
                        <div className="dropdown" ref={refDrop}>
                            <div className="item">
                                <div className='label'>
                                    <span>{data.name ? data.name : `Select category`}</span>
                                </div>
                                <div className="arrow"></div>
                            </div>
                            <div className={`drop-select ${drop ? 'active' : ''}`}>
                                {
                                    array?.map(item => (
                                        <div key={item?._id} onClick={() => setData({ id: item?._id, name: item?.name })}>
                                            <span>{item?.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </> : cate === 'child' ? <div className="form-group">
                    <label htmlFor="">{label}</label>
                    <div onClick={() => setDrop(!drop)} >
                        <div className="dropdown" ref={refDrop}>
                            <div className="item">
                                <div className='label'>
                                    <span>{data?.name ? data?.name : `Select category`}</span>
                                </div>
                                <div className="arrow"></div>
                            </div>
                            <div className={`drop-select ${drop ? 'active' : ''}`}>
                                {
                                    array?.filter(item => item?._id === dataId)[0]?.children?.map(item => (
                                        <div key={item?._id} onClick={() => setData({ id: item?._id, name: item?.name })}>
                                            <span>{item?.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> : <></>
            }
        </React.Fragment>
    )
}

const CreateProduct = ({ show, setShow, categories }) => {
    const [drop, setDrop] = useState(false)
    const { dispatch, token, accessories } = useStore()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDesciption] = useState('')
    const [stock, setStock] = useState(0)
    const [cateParent, setCateParent] = useState({ id: '', name: '' })
    const [cateChild, setCateChild] = useState({ id: '', name: '' })
    const [gender, setGender] = useState('')
    const [image, setImage] = useState('')
    const [thumbnail, setThumbnail] = useState([])
    const ref = useRef(null)
    const refDrop = useRef(null)
    useOnClickOutside(ref, () => setShow(false))
    useOnClickOutside(refDrop, () => setDrop(false))

    const [color, setColor] = useState([{ color: '' }])
    const [size, setSize] = useState([{ size: '' }])

    const handleSize = (e, index) => {
        const { name, value } = e.target
        const list = [...size]
        list[index][name] = value
        setSize(list)
    }
    const handleColor = (e, index) => {
        const { name, value } = e.target
        const list = [...color]
        list[index][name] = value
        setColor(list)
    }

    const handleImage = async (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        await reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result)
        }
    }
    const handleMultipleImage = e => {
        const files = Array.from(e.target.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                setThumbnail(old => [...old, reader.result])
            };

            reader.readAsDataURL(file);
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            colors: color,
            sizes: size,
            category_id: cateChild.id,
            category_parent: cateParent.id,
            thumbnails: thumbnail,
            gender, name, description, price, stock, image
        }
        dispatch(createProduct(payload, token))
        setName('')
        setPrice('')
        setDesciption('')
        setStock('')
        setCateParent('')
        setCateChild('')
        setGender('')
        setImage('')
        setThumbnail([])
        setColor([...color, { color: '' }])
        setSize([...size, { size: '' }])
        setShow(false)
    }

    return (
        <CreateWrap className={`${show ? 'active' : ''}`}>
            <div ref={ref} className={`form-create ${show ? 'active' : ''}`}>
                <div className="title-create">
                    <h1>Tao san pham</h1>
                    <span onClick={() => setShow(false)}><Icon.CloseOutlinedIcon /></span>
                </div>
                <div className="content-create">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="form-group">
                                <label htmlFor="">Tên sản phẩm</label>
                                <div>
                                    <input type="text" name='name' placeholder='Tên sản phẩm' value={name} onChange={e => setName(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mô tả</label>
                                <div>
                                    <textarea type="text" name='description' placeholder='Mô tả sản phẩm' value={description} onChange={e => setDesciption(e.target.value)} rows={5} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Giá</label>
                                <div>
                                    <input type="number" name='price' placeholder='Giá tiền' value={price} onChange={e => setPrice(e.target.value)} required />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Gender</label>
                                <div onClick={() => setDrop(!drop)} >
                                    <div className="dropdown" ref={refDrop}>
                                        <div className="item">
                                            <div className='label'>
                                                <span>{gender ? gender : `Select gender`}</span>
                                            </div>
                                            <div className="arrow"></div>
                                        </div>
                                        <div className={`drop-select ${drop ? 'active' : ''}`}>
                                            <div onClick={() => setGender('Men')}>
                                                <span>Men</span>
                                            </div>
                                            <div onClick={() => setGender('Women')}>
                                                <span>Women</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Size</label>
                                <div>
                                    {
                                        size.map((x, i) => (
                                            <div key={i} className='item'>
                                                <div className="btn">
                                                    <button type='button' onClick={() => {
                                                        const list = [...size]
                                                        console.log(i)
                                                        list.splice(i, 1)
                                                        setSize(list)
                                                    }} disabled={size.length !== 1 ? false : true}>-</button>
                                                </div>
                                                <div className='input'>
                                                    <input type="text" name='size' placeholder='Size' onChange={(e) => handleSize(e, i)} required />
                                                </div>
                                                <div className='btn'>
                                                    <button type='button' onClick={() => setSize([...size, { size: '' }])}>+</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Color</label>
                                <div>
                                    {
                                        color.map((x, i) => (
                                            <div key={i} className='item'>
                                                <div className="btn">
                                                    <button type='button' onClick={() => {
                                                        const list = [...color]
                                                        list.splice(i, 1)
                                                        setColor(list)
                                                    }} disabled={color.length !== 1 ? false : true}>-</button>
                                                </div>
                                                <div className='input'>
                                                    <input type="text" name='color' placeholder='Color' onChange={(e) => handleColor(e, i)} />
                                                </div>
                                                <div className='btn'>
                                                    <button type='button' onClick={() => setColor([...color, { color: '' }])}>+</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Số lượng</label>
                                <div>
                                    <input type="number" name='stock' placeholder='Số lượng' value={stock} onChange={e => setStock(e.target.value)} />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Anh</label>
                                <div>
                                    <div>
                                        <div>
                                            <input type="file" onChange={handleImage} />
                                            <span><Icon.AiOutlineCloudUpload /></span>
                                            <p>Drag your image here</p>
                                            <em>(Only *.jpeg and *.png images will be accepted)</em>
                                        </div>
                                        {
                                            image && <aside>
                                                <img src={image} alt="" />
                                            </aside>
                                        }
                                    </div>
                                    <div>
                                        <div>
                                            <input type="file" multiple onChange={handleMultipleImage} />
                                            <span><Icon.AiOutlineCloudUpload /></span>
                                            <p>Drag your image here</p>
                                            <em>(Only *.jpeg and *.png images will be accepted)</em>
                                        </div>
                                        {
                                            thumbnail && <aside> {
                                                thumbnail?.map((item, ind) => (
                                                    <img src={item} key={ind} alt="" />
                                                ))
                                            }
                                            </aside>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <DropItem label={'Category Parent'} cate='parent' data={cateParent} setData={setCateParent} array={categories} />
                            </div>
                            {
                                cateParent.id && <DropItem cate='child' label={'Child Category'} array={categories} data={cateChild} setData={setCateChild} dataId={cateParent?.id} />
                            }
                        </div>
                        <div>
                            <button type='button' onClick={() => setShow(false)}>Huỷ</button>
                            <button type='submit'>Tạo sản phẩm</button>
                        </div>
                    </form>
                </div>
            </div >
        </CreateWrap >
    )
}

export default CreateProduct