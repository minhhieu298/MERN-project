import React, { useEffect, useRef, useState } from 'react'
import Container from '../../components/UI/container/Container'
import useStore from '../../library/hooks/useStore'
import { getAllProducts } from '../../redux/actions/product.action'
import ProductWrap, { Box, Grid, Item } from './index.style'
import { createSearchParams, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { Checkbox, FormControlLabel, FormGroup, Pagination, Stack } from '@mui/material'
import * as Icon from '../../library/icons/index'
import useOnClickOutside from '../../library/hooks/useOnClickOutside'
import { getStateFromUrl, setStateUrl } from './Search/url_handler'
import { getGender } from './Search/SearchParams'
import useWindowSize from '../../library/hooks/useWindowSize'

const LayoutProduct = () => {
    let pageSize = 5;
    let location = useLocation()
    let navigate = useNavigate()
    const { products, dispatch, meta } = useStore()
    const { width } = useWindowSize()
    const [searchParam, setSearchParam] = useSearchParams()
    const params = getStateFromUrl(location)
    const [page, setPage] = useState(1);
    const [drop, setDrop] = useState(false)
    const [view, setView] = useState('')
    const refDrop = useRef(null)
    useOnClickOutside(refDrop, () => setDrop(false))
    const state = {
        gender: params.gender || [],
        page: parseInt(params.page) || Number(searchParam.get('page'))
    }
    // const { gender } = state
    const onChange = (value, type) => {
        // console.log(value.target.checked);
        // const query = {
        //     ...state,
        //     [type]: value.target.value
        // }

        // const search = setStateUrl(query)
        // navigate({
        //     pathname: location.pathname,
        //     search: `?${createSearchParams(search)}`
        // })
    }

    const handleView = (type) => {
        sessionStorage.setItem('view', type)
        setView(type)
    }
    const handleChange = (e, p) => {
        // setSearchParam({ page: p })
        setPage(p);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let q = Object.fromEntries(new FormData(e.target))
        navigate(`${location.pathname}?q=${q.keyword}&page=${page}`);
    }
    useEffect(() => {
        dispatch(getAllProducts({
            keyword: searchParam.get('q') || '',
            page: page,
            pageSize: pageSize,
            gender: searchParam.get('gender') || ''
        }))
    }, [dispatch, page, searchParam])

    return <ProductWrap>
        <Container fluid={true}>
            <Box>
                <Grid left={true}>
                    <div className="search">
                        <h4>Search</h4>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder='Search here...' name='keyword' />
                                <button><Icon.SearchOutlinedIcon /></button>
                            </form>
                        </div>
                    </div>
                    <div className="categories">
                        <h4>Categories</h4>
                        <div className="box">
                            <div className="gender">
                                <FormGroup>
                                    {
                                        getGender.options.map(item => (
                                            <FormControlLabel
                                                key={item.label} control={<Checkbox />}
                                                value={item.value}
                                                label={item.label}
                                                onChange={(e) => onChange(e, 'gender')}
                                                checked={searchParam.get('gender') === item.value ? true : item.checked}
                                            />
                                        ))
                                    }
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid right={true}>
                    <div className="filter">
                        <div className="drop-select">
                            <div className="select" ref={refDrop}>
                                <div className='select-item' onClick={() => setDrop(!drop)}>
                                    <div className="inner-content">Price: High to Low</div>
                                    <div className={`arrow ${drop ? 'active' : ''}`}></div>
                                </div>
                                <div className={`item ${drop ? 'active' : ''}`}>
                                    <div className="list-item">Price: High to Low</div>
                                    <div className="list-item">Price: High to Low</div>
                                    <div className="list-item">Price: High to Low</div>
                                </div>
                            </div>
                        </div>
                        <div className='result'>{`Showing ${pageSize} of ${meta?.total} results`}</div>
                        <div className='view'>
                            <button onClick={() => handleView('col-2')}>
                                <span><Icon.FaThLarge /></span>
                            </button>
                            <button onClick={() => handleView('col-3')}><span><Icon.ViewModuleIcon /></span></button>
                            <button onClick={() => handleView('col-1')}><span><Icon.BsListUl /></span></button>
                        </div>
                    </div>
                    <div className='products'>
                        {
                            products?.map(product => (
                                <Item key={product?._id} className={`${sessionStorage.getItem('view') ? sessionStorage.getItem('view') : ''}`}>
                                    <div className="product-img">
                                        {
                                            sessionStorage.getItem('view') === 'col-1' ? <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg" alt="" /> : <Link to={`/product/${product?._id}`}>
                                                <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg" alt="" />
                                            </Link>
                                        }
                                    </div>
                                    <div className="product-content">
                                        <h3>{product?.name}</h3>
                                        <div className="price">
                                            <span>{product?.price}</span>
                                        </div>
                                        <div className="rating"></div>
                                        {
                                            sessionStorage.getItem('view') === 'col-1' && <>

                                                <p>{product?.description}</p>
                                                <div className="btn-cart">
                                                    <div>
                                                        <Link to={`/product/${product?._id}`}>Select option</Link>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </Item>
                            ))
                        }
                    </div>
                    <div className="page">
                        <Stack spacing={2}>
                            <Pagination count={meta?.totalPage || 1} page={Number(searchParam.get('page') || page)} defaultPage={1} onChange={handleChange} siblingCount={0} color="primary" />
                        </Stack>
                    </div>
                </Grid>
            </Box>
        </Container>
    </ProductWrap>
}

export default LayoutProduct