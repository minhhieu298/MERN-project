import React, { useEffect, useRef, useState } from 'react'
import { createSearchParams, Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import * as Icon from '../../../library/icons/index'
import Container from '../../../components/UI/container/Container'
import useStore from '../../../library/hooks/useStore'
import { getAllProducts } from '../../../redux/actions/product.action'
import { numberWithCommas } from '../../../library/helper/numberComas'
import { Checkbox, FormControlLabel, FormGroup, Pagination, Stack } from '@mui/material';
import useOnClickOutside from '../../../library/hooks/useOnClickOutside';
import useWindowSize from '../../../library/hooks/useWindowSize'
import ProductWrap, { Box, Div, Grid, Item } from '../index.style'
import { colors, getGender, sizes } from '../Search/SearchParams'
import { getDataAdmin } from '../../../redux/actions/initData.action'
import { getStateFromUrl, setStateToUrl } from '../Search/url_handler'

const MenCategoryPage = () => {
    const { products, dispatch, meta, categories } = useStore()
    let location = useLocation()
    let pageSize = 5;
    let navigate = useNavigate()
    const [searchParam] = useSearchParams()
    const { width } = useWindowSize()
    const [page, setPage] = useState(1);
    const [drop, setDrop] = useState(false)
    const [filter, setFiter] = useState(false)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        let q = Object.fromEntries(new FormData(e.target))
        navigate(`${location.pathname}?q=${q.keyword}&page=${page}`);
    }

    const onSearchReset = () => {
        const search = setStateToUrl({ reset: '' });
        navigate({
            pathname: location.pathname,
            search: `?${createSearchParams(search)}`,
        });
    };

    useEffect(() => {
        dispatch(getAllProducts({
            page: searchParam.get('page') || 1,
            pageSize: pageSize,
            gender: location.pathname.split('/')[1][0].toUpperCase() + location.pathname.split('/')[1].slice(1) || '',
            cp: searchParam.get('cp') || '',
            cc: searchParam.get('cc') || '',
            sort: searchParam.get('sort') || '',
            color: searchParam.get('color') || '',
            size: searchParam.get('size') || ''
        }))
    }, [dispatch, location.pathname, page, searchParam])

    useEffect(() => {
        dispatch(getDataAdmin())
    }, [dispatch])
    return <ProductWrap>
        <Container fluid={true}>
            <Box>
                <Grid left={true}>
                    {
                        width > 991 ? <>
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
                                <div className={`box ${location.search ? 'active' : ''}`}>
                                    <div className="filter">
                                        {
                                            !searchParam.get('cp') && <FormGroup>
                                                {
                                                    categories?.map(item => (
                                                        <FormControlLabel
                                                            key={item?._id} control={<Checkbox />}
                                                            value={item?.slug}
                                                            label={item?.name}
                                                            onChange={(e) => onChange(e, 'cp')}
                                                            checked={searchParam.get('cp') === item?.slug ? true : false}
                                                        />
                                                    ))
                                                }
                                            </FormGroup>
                                        }
                                        {
                                            categories?.filter(e => e?.slug === searchParam.get('cp')) &&
                                            <FormGroup>
                                                {
                                                    categories?.filter(e => e?.slug === searchParam.get('cp')).map(c => (
                                                        <React.Fragment key={c?._id}>
                                                            {
                                                                c?.children?.map(item => (
                                                                    <FormControlLabel
                                                                        key={item?._id} control={<Checkbox />}
                                                                        value={item?.slug}
                                                                        label={item?.name}
                                                                        onChange={(e) => onChange(e, 'cc')}
                                                                        checked={searchParam.get('cc') === item?.slug ? true : false}
                                                                    />
                                                                ))
                                                            }
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </FormGroup>
                                        }
                                    </div>
                                    <div className="color">
                                        <h3>Color</h3>
                                        <div>
                                            {
                                                colors.map(item => (
                                                    <FormGroup key={item.type}>
                                                        <FormControlLabel
                                                            control={<Checkbox />}
                                                            value={item.type}
                                                            label={<Div c={true} b={item.type} className={`${searchParam.get('color') === item.type ? 'active' : ''}`} />}
                                                            onChange={(e) => onChange(e, 'color')}
                                                            checked={searchParam.get('color') === item.type ? true : false}
                                                        />
                                                    </FormGroup>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="size">
                                        <h3>size</h3>
                                        <div>
                                            {
                                                sizes.filter(s => s.name.toLowerCase() === categories?.filter(e => e.slug === searchParam.get('cp'))[0]?.name.toLowerCase()).map((x => (
                                                    <React.Fragment key={x.name}>
                                                        {
                                                            x.options.map(item => (
                                                                <FormGroup key={item.type}>
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        value={item.type}
                                                                        label={<Div s={true} className={`${searchParam.get('size') === item.type ? 'active' : ''}`}>{item.type}</Div>}
                                                                        onChange={(e) => onChange(e, 'size')}
                                                                        checked={searchParam.get('size') === item.type ? true : false}
                                                                    />
                                                                </FormGroup>
                                                            ))
                                                        }
                                                    </React.Fragment>
                                                )))
                                                // sizes.map(item => (

                                                // ))
                                            }
                                        </div>
                                    </div>
                                    <div className="clear-filter">
                                        <button onClick={onSearchReset}>Clear Filter</button>
                                    </div>
                                </div>
                            </div>
                        </> : <>
                            <div className="mobile">
                                <button onClick={() => setFiter(true)}>Filter</button>
                                <div className={`content ${filter ? 'active' : ''}`}>
                                    {
                                        filter && <div className="content-filter">
                                            <div className="title">
                                                <h3>Filter</h3>
                                                <button onClick={() => setFiter(false)}><span><Icon.CancelIcon /></span></button>
                                            </div>
                                            <div className="inner-content">
                                                <div className="sort">
                                                    <h3>Sort</h3>
                                                    <div>
                                                        <FormGroup>
                                                            <FormControlLabel
                                                                control={<Checkbox />}
                                                                value={'asc'}
                                                                label={'Price: Low to High'}
                                                                onChange={(e) => onChange(e, 'sort')}
                                                                checked={searchParam.get('sort') === 'asc' ? true : false}
                                                                onClick={() => setDrop(false)}
                                                            />
                                                            <FormControlLabel
                                                                control={<Checkbox />}
                                                                value={'desc'}
                                                                label={'Price: High to Low'}
                                                                onChange={(e) => onChange(e, 'sort')}
                                                                checked={searchParam.get('sort') === 'desc' ? true : false}
                                                                onClick={() => setDrop(false)}
                                                            />
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="filter">
                                                    <h3>Categories</h3>
                                                    <div>
                                                        {
                                                            !searchParam.get('cp') && <FormGroup>
                                                                {
                                                                    categories?.map(item => (
                                                                        <FormControlLabel
                                                                            key={item?._id} control={<Checkbox />}
                                                                            value={item?.slug}
                                                                            label={item?.name}
                                                                            onChange={(e) => onChange(e, 'cp')}
                                                                            checked={searchParam.get('cp') === item?.slug ? true : false}
                                                                        />
                                                                    ))
                                                                }
                                                            </FormGroup>
                                                        }
                                                        {
                                                            categories?.filter(e => e?.slug === searchParam.get('cp')) &&
                                                            <FormGroup>
                                                                {
                                                                    categories?.filter(e => e?.slug === searchParam.get('cp')).map(c => (
                                                                        <React.Fragment key={c?._id}>
                                                                            {
                                                                                c?.children?.map(item => (
                                                                                    <FormControlLabel
                                                                                        key={item?._id} control={<Checkbox />}
                                                                                        value={item?.slug}
                                                                                        label={item?.name}
                                                                                        onChange={(e) => onChange(e, 'cc')}
                                                                                        checked={searchParam.get('cc') === item?.slug ? true : false}
                                                                                    />
                                                                                ))
                                                                            }
                                                                        </React.Fragment>
                                                                    ))
                                                                }
                                                            </FormGroup>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="color">dsadas</div>
                                                {
                                                    location.search && <div className="clear">
                                                        <button onClick={onSearchReset}>Clear</button>
                                                        <button onClick={() => setFiter(false)}>Cancel</button>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </>
                    }
                </Grid>
                <Grid right={true}>
                    <div className="filter">
                        {
                            width > 991 && <div className="drop-select">
                                <div className="select" ref={refDrop}>
                                    <div className='select-item' onClick={() => setDrop(!drop)}>
                                        <div className="inner-content">{searchParam.get('sort') === 'asc' ?
                                            `Price: Low to High` : searchParam.get('sort') === 'desc' ?
                                                `Price: High to Low` : 'Sort'}
                                        </div>
                                        <div className={`arrow ${drop ? 'active' : ''}`}></div>
                                    </div>
                                    <div className={`item ${drop ? 'active' : ''}`}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'asc'}
                                                label={'Price: Low to High'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'asc' ? true : false}
                                                onClick={() => setDrop(false)}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'desc'}
                                                label={'Price: High to Low'}
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
                    <div className='products'>
                        {
                            products?.map(product => (
                                <Item key={product?._id} className={`${sessionStorage.getItem('view') ? sessionStorage.getItem('view') : ''}`}>
                                    <div className="product-img">
                                        {
                                            sessionStorage.getItem('view') === 'col-1' ? <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg" alt="" /> : <Link to={`/product/${product?._id}`}>
                                                <img src={product?.image} alt="" />
                                            </Link>
                                        }
                                    </div>
                                    <div className="product-content">
                                        <h3>{product?.name}</h3>
                                        <div className="price">
                                            <span>{numberWithCommas(Number(product?.price))}</span>
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
                    {
                        products?.length > 0 && <div className="page">
                            <Stack spacing={2}>
                                <Pagination count={meta?.totalPage || 1} page={Number(searchParam.get('page') || page)} defaultPage={1} onChange={handleChange} siblingCount={0} color="primary" />
                            </Stack>
                        </div>
                    }
                </Grid>
            </Box>
        </Container>
    </ProductWrap>
}

export default MenCategoryPage