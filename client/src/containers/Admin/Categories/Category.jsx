import React, { useEffect, useState } from 'react'
import CateWrap, { Box } from './index.style'
import { createCate, getCates } from '../../../redux/actions/category.action'
import useStore from '../../../library/hooks/useStore'

const Category = () => {
    const { dispatch, categories, error } = useStore()
    const [cate, setCate] = useState('')
    const [parentCateId, setParentCateId] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        try {
            const slug = Object.fromEntries(new FormData(e.target))
            let data = {
                name: cate,
                slug: slug.slug.toLowerCase(),
                parent_id: parentCateId
            }
            // console.log(data);
            dispatch(createCate(data))
            setCate('')
            setParentCateId('')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(getCates())
    }, [dispatch])
    return (
        <CateWrap>
            {/* {error} */}
            <Box>
                <h1>List Categories</h1>
            </Box>
            <Box form='true'>
                <h1>Create category</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        {
                            categories?.length > 0 && <div className="form-group select">
                                <select value={parentCateId} onChange={e => setParentCateId(e.target.value)}>
                                    <option value="">Chose category</option>
                                    {
                                        categories?.map(item => (
                                            <option key={item?._id} value={item?._id}>{item?.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        }
                        <div className="form-group">
                            <input type="text" name='cate' value={cate} onChange={e => setCate(e.target.value)} placeholder='Category' required />
                        </div>
                        <div className="form-group">
                            <input type="" name='slug' placeholder='slug' value={cate ? cate + `-` + Math.random().toString(36).slice(2, 7) : ''} readOnly />
                        </div>
                        <div className="form-group">
                            <button>Create</button>
                        </div>
                    </div>
                </form>
            </Box>

        </CateWrap>
    )
}

export default Category