import React, { useEffect, useRef, useState } from 'react'
import CateWrap, { Box } from './index.style'
import { createCate, deleteCate, getCates, updateCate } from '../../../redux/actions/category.action'
import useStore from '../../../library/hooks/useStore'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import * as Icon from '../../../library/icons/index'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const Children = ({ c, token, dispatch }) => {
    const [form, setForm] = useState(false)
    const [data, setData] = useState({})
    const ref = useRef(null)
    useOnClickOutside(ref, () => setForm(false))
    const handleSubmit = e => {
        e.preventDefault()
        const value = Object.fromEntries(new FormData(e.target))
        let payload = {
            _id: data?._id,
            name: value.name,
        }
        dispatch(updateCate(payload, token))
        setForm(false)
    }
    const handleDelete = (id) => {
        const payload = {
            _id: id
        }
        dispatch(deleteCate(payload, token))
    }
    return (
        <div className="children">
            {
                form ? <React.Fragment>
                    <form onSubmit={handleSubmit} ref={ref}>
                        <div>
                            <input type="text" name='name' placeholder='Tên danh mục con' />
                            <button>Cập nhật</button>
                        </div>
                    </form>
                </React.Fragment> : <React.Fragment>
                    <div>{c?.name}</div>
                    <div>
                        <button onClick={() => { setForm(true), setData({ id: cate?._id, name: cate?.name }) }}><span><Icon.EditIcon /></span></button>
                        <button onClick={() => handleDelete(c?._id)}><span><Icon.AiOutlineDelete /></span></button>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

const Parent = ({ cate, handleSelect, dispatch, token }) => {
    const [form, setForm] = useState(false)
    const [data, setData] = useState({})
    const ref = useRef(null)
    useOnClickOutside(ref, () => setForm(false))
    const handleSubmit = e => {
        e.preventDefault()
        const value = Object.fromEntries(new FormData(e.target))
        let payload = {
            _id: data?._id,
            name: value.name,
        }
        dispatch(updateCate(payload, token))
        setForm(false)
    }

    const handleDelete = (id) => {
        const payload = {
            _id: id
        }
        dispatch(deleteCate(payload, token))
    }
    return (
        <div className="parent">
            <div className='label_parent'>
                {
                    form ? <React.Fragment>
                        <form onSubmit={handleSubmit} ref={ref}>
                            <div>
                                <input type="text" name='name' placeholder='Tên danh mục cha' />
                                <button>Cập nhật</button>
                            </div>
                        </form>
                    </React.Fragment> : <React.Fragment>
                        <div>
                            <FormGroup>
                                < FormControlLabel
                                    control={<Checkbox />}
                                    label={cate?.name}
                                    onClick={() => handleSelect(cate?._id)}
                                    checked={cate?.isSelected}
                                />
                            </FormGroup>
                        </div>
                        {
                            cate?.isSelected &&
                            <div>
                                <button onClick={() => { setForm(true), setData({ _id: cate?._id, name: cate?.name }) }}><span><Icon.EditIcon /></span></button>
                                <button onClick={() => handleDelete(cate?._id)}><span><Icon.AiOutlineDelete /></span></button>
                            </div>
                        }
                    </React.Fragment>
                }
            </div>
            {
                cate?.isSelected && <>
                    {
                        cate?.children?.map(c => (
                            <Children key={c?._id} c={c} dispatch={dispatch} token={token} />
                        ))
                    }
                </>
            }
        </div>
    )
}

const UpdateCate = () => {
    const [data, setData] = useState([])
    const { dispatch, categories, token } = useStore()

    const handleSelect = (cate) => {
        const arr = categories?.map(item => item._id === cate ? { ...item, isSelected: true } : { ...item, isSelected: false })
        setData(arr)
    }

    const cancelSelect = () => {
        const arr = categories?.map((item) => ({ ...item, isSelected: false }))
        setData(arr)
    }

    useEffect(() => {
        const arr = categories?.map((item) => ({ ...item, isSelected: false }))
        setData(arr)
    }, [categories])
    return <div className="update">
        <div className='head'>
            <h1>Cập  nhật Danh mục</h1>
            <div>
                <button onClick={cancelSelect}>Hủy chọn mục</button>
            </div>
        </div>
        <div className="container">
            {
                data?.map(cate => (
                    <Parent key={cate?._id} cate={cate} handleSelect={handleSelect} dispatch={dispatch} token={token} />
                ))
            }
        </div>
    </div>
}

const Category = () => {
    const { dispatch, categories, token, error } = useStore()
    const [cate, setCate] = useState('')
    const [parentCateId, setParentCateId] = useState('')
    const [label, setLabel] = useState('')
    const [drop, setDrop] = useState(false)
    const ref = useRef(null)
    useOnClickOutside(ref, () => setDrop(false))

    const handleSubmit = e => {
        e.preventDefault()
        let data = {
            name: cate,
            parent_id: parentCateId
        }
        console.log(data);
        dispatch(createCate(data, token))
        setCate('')
        setParentCateId('')
        setLabel('')
    }
    useEffect(() => {
        dispatch(getCates())
    }, [dispatch])
    return (
        <CateWrap>
            <Box>
                <h1>Danh mục</h1>
            </Box>
            <Box form='true'>
                <div className="create">
                    <h1>Tạo danh mục</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            {
                                categories?.length > 0 && <div className="form-group">
                                    <div className="dropdown" ref={ref}>
                                        <div className='wrap' onClick={() => setDrop(!drop)}>
                                            <div className="label">{label ? label : 'Chọn danh mục'}</div>
                                            <div className="arrow"></div>
                                        </div>
                                        <div className={`content ${drop ? 'active' : ''}`}>
                                            {
                                                categories?.map(item => (
                                                    <div key={item?._id} onClick={() => {
                                                        setParentCateId(item?._id)
                                                        setLabel(item?.name)
                                                        setDrop(false)
                                                    }}>{item?.name}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="form-group">
                                <div>
                                    <input type="text" name='cate' value={cate} onChange={e => setCate(e.target.value)} placeholder='Category' required />
                                </div>
                                {
                                    error && <span style={{ color: 'tomato' }}>{error}</span>
                                }
                            </div>
                            <div className="form-group">
                                <button>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
                <UpdateCate />
            </Box>

        </CateWrap>
    )
}

export default Category