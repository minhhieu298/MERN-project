import React, { useEffect, useRef, useState } from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import * as Icon from '../../../library/icons/index'
import Container from '../../../components/UI/container/Container'
import useStore from '../../../library/hooks/useStore'
import { getAllProducts } from '../../../redux/actions/product.action'
import { Checkbox, FormControlLabel, FormGroup, Pagination, Stack } from '@mui/material';
import useOnClickOutside from '../../../library/hooks/useOnClickOutside';
import useWindowSize from '../../../library/hooks/useWindowSize'
import ProductWrap, { BoxWrap, Grid } from '../index.style'
import { getStateFromUrl, setStateToUrl } from '../Search/url_handler'
import Category from '../Search/Category/Category'
import CategoryMobile from '../Search/Category/CategoryMobile'
import ProductItem from '../Search/ProductItem'
import { getCates } from '../../../redux/actions/category.action'

const MenCategoryPage = () => {
    const { products, dispatch, meta, categories } = useStore()
    let location = useLocation()
    let pageSize = 2;
    let navigate = useNavigate()
    const [searchParam] = useSearchParams()
    const { width } = useWindowSize()
    const [page, setPage] = useState(1);
    const [drop, setDrop] = useState(false)
    const [_, setView] = useState('')
    const refDrop = useRef(null)
    useOnClickOutside(refDrop, () => setDrop(false))

    const params = getStateFromUrl(location)
    const state = {
        cp: params.cp || '',
        cc: params.cc || '',
        sort: params.sort || '',
        size: params.size || '',
        color: params.color || '',
        q: searchParam.get('q') || '',
        page: 1
    }

    const onChange = (e, type) => {
        if (e.target.checked) {
            let query = {}
            if (type === 'cp') {
                query = {
                    // ...state,
                    cp: e.target.value,
                    cc: '',
                    sort: '',
                    size: '',
                    color: '',
                    page: 1
                }
            } else {
                query = {
                    ...state,
                    [type]: e.target.value
                }
            }

            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });
        } else {
            let query = {}
            if (type === 'cc') {
                query = {
                    ...state,
                    cc: ''
                }
            }
            if (type === 'sort') {
                query = {
                    ...state,
                    sort: ''
                }
            }
            if (type === 'color') {
                query = {
                    ...state,
                    color: ''
                }
            }
            if (type === 'size') {
                query = {
                    ...state,
                    size: ''
                }
            }
            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });

        }
    }

    const handleView = (type) => {
        sessionStorage.setItem('view', type)
        setView(type)
    }

    const handleChange = (e, p) => {
        function createUrl(urlData) {
            const keys = Object.keys(urlData);
            let search = '?';
            keys.forEach((key) => {
                if (urlData[key] !== null && urlData[key] !== '') {
                    search += `${key}=${urlData[key]}&`;
                }
            });
            return search.substring(0, search.length - 1);
        }

        let query = {
            cp: searchParam.get('cp') || '',
            cc: searchParam.get('cc') || '',
            sort: searchParam.get('sort') || '',
            color: searchParam.get('color') || '',
            size: searchParam.get('size') || '',
            q: searchParam.get('q') || '',
            page: p || 1,
        }
        const search = setStateToUrl(query);
        navigate({
            pathname: location.pathname,
            search: `?${createSearchParams(search)}`,
        });
        createUrl(query)
        setPage(p)
    }

    useEffect(() => {
        dispatch(getAllProducts({
            page: searchParam.get('page') || 1,
            pageSize: pageSize,
            gender: location.pathname.split('/')[1],
            cp: searchParam.get('cp') || '',
            cc: searchParam.get('cc') || '',
            sort: searchParam.get('sort') || '',
            color: searchParam.get('color') || '',
            size: searchParam.get('size') || '',
            keyword: searchParam.get('q') || ''
        }))
    }, [dispatch, location.pathname, page, searchParam])

    useEffect(() => {
        dispatch(getCates())
    }, [dispatch])
    return <ProductWrap>
        <Container fluid={true}>
            <BoxWrap>
                <Grid left={true}>
                    {
                        width > 991 ? <Category page={page} categories={categories} /> : <CategoryMobile categories={categories} />
                    }
                </Grid>
                <Grid right={true}>
                    <div className="filter">
                        {
                            width > 991 && <div className="drop-select">
                                <div className="select" ref={refDrop}>
                                    <div className='select-item' onClick={() => setDrop(!drop)}>
                                        <div className="inner-content">{searchParam.get('sort') === 'asc' ?
                                            `Giá: Thấp tới cao` : searchParam.get('sort') === 'desc' ?
                                                `Giá: Cao tới thấp` : searchParam.get('sort') === 'createdAt' ? 'Gần đây nhất' : 'Sắp xếp'}
                                        </div>
                                        <div className={`arrow ${drop ? 'active' : ''}`}></div>
                                    </div>
                                    <div className={`item ${drop ? 'active' : ''}`}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'createdAt'}
                                                label={'Gần đây nhất'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'createdAt' ? true : false}
                                                onClick={() => setDrop(false)}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'asc'}
                                                label={'Giá: Cao tới thấp'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'asc' ? true : false}
                                                onClick={() => setDrop(false)}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'desc'}
                                                label={'Giá: Thấp tới cao'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'desc' ? true : false}
                                                onClick={() => setDrop(false)}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            width > 991 ? <div className='result'>{!products?.length ? `Not found` : `Showing ${pageSize} of ${meta?.total} results`}</div> :
                                <div className='result'>{!products?.length ? `Not found` : `${meta?.total} results`}</div>
                        }
                        <div className='view'>
                            <button onClick={() => handleView('col-2')}>
                                <span><Icon.FaThLarge /></span>
                            </button>
                            <button onClick={() => handleView('col-3')}><span><Icon.ViewModuleIcon /></span></button>
                            <button onClick={() => handleView('col-1')}><span><Icon.BsListUl /></span></button>
                        </div>
                    </div>
                    <ProductItem products={products} />
                    {
                        meta?.total > pageSize && <div className="page">
                            <Stack spacing={2}>
                                <Pagination count={meta?.totalPage || 1} page={Number(searchParam.get('page') || 1)} defaultPage={1} onChange={handleChange} siblingCount={0} color="primary" />
                            </Stack>
                        </div>
                    }
                </Grid>
            </BoxWrap>
        </Container>
    </ProductWrap>
}

export default MenCategoryPage