import React, { useEffect, useRef, useState } from 'react'
import DiscountWrap, { Box, Grid } from './index.style'
import useStore from '../../../library/hooks/useStore'
import { createDiscount, getAllProducts } from '../../../redux/actions/product.action'
import { createSearchParams, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { numberWithCommas } from '../../../library/helper/numberComas'
import * as Icon from '../../../library/icons/index'
import useWindowSize from '../../../library/hooks/useWindowSize'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { getStateFromUrl, setStateToUrl } from '../Product/Seach/url_handler'
import { Checkbox, FormControlLabel, FormGroup, Pagination, Stack } from '@mui/material';
import { getDataAdmin } from '../../../redux/actions/initData.action'
import { colors, getGender } from '../Product/Seach/SearchParams'
import { ADMIN_PAGE } from '../../../setting/constants'

const Item = ({ product, id, pageSize }) => {
  const [discount, setDiscount] = useState(0)
  const { dispatch, token } = useStore()
  const [searchParam] = useSearchParams()

  const handleDiscount = () => {
    let data = {
      _id: product?._id,
      discount: discount
    }
    dispatch(createDiscount(data, {
      cp: searchParam.get('cp') || '',
      keyword: searchParam.get('q') || '',
      page: Number(searchParam.get('page')) || 1,
      pageSize: pageSize,
      price: searchParam.get('price') || '',
      gender: searchParam.get('gender') || '',
      cc: searchParam.get('cc') || '',
      color: searchParam.get('color') || '',
      size: searchParam.get('size') || '',
    }, token))
    setDiscount(0)
  }
  return (
    <Grid>
      <div className="image">
        <Link to={`${ADMIN_PAGE}/product/${product?._id}`}>
          <img src={product?.image} alt="" />
        </Link>
      </div>
      <div className="content">
        <h3>{product?.name}</h3>
        <div className="price">
          <span className={`${product?.discount > 0 ? 'price_after' : 'price_before'}`}>{numberWithCommas(Number(product?.price))}</span>
          {
            product?.discount > 0 && <span className='discount'>{numberWithCommas(Number(product?.price_after_discount))}</span>
          }
        </div>
        {
          product?.discount > 0 && <div className="pos">
            <span>{product?.discount}%</span>
          </div>
        }
        <div className="form">
          <div>
            <input type="number" value={discount} placeholder='Giảm giá' onChange={e => setDiscount(e.target.value)} />
            <button onClick={handleDiscount}><span><Icon.TbDiscount /></span></button>
          </div>
        </div>
      </div>
    </Grid>
  )
}
const Discount = () => {
  let pageSize = 10
  let navigate = useNavigate()
  let location = useLocation()
  const [searchParam] = useSearchParams()
  const { width } = useWindowSize()
  const { dispatch, products, meta, token, categories } = useStore()
  const [page, setPage] = useState(1)
  const [drop, setDrop] = useState(false)
  const [modal, setModal] = useState(false)
  const [id, setId] = useState('')
  const ref = useRef(null)
  useOnClickOutside(ref, () => setDrop(false))

  const params = getStateFromUrl(location)
  const state = {
    cp: params.cp || '',
    cc: params.cc || '',
    sort: params.sort || '',
    size: params.size || '',
    color: params.color || '',
    gender: params.gender || '',
    q: params.q || '',
    page: 1
  }

  const onChange = (e, type) => {
    if (e.target.checked) {
      let query = {}
      if (type === 'cp') {
        query = {
          ...state,
          cp: e.target.value,
          q: searchParam.get('q'),
          cc: '',
          sort: '',
          size: '',
          color: '',
          page: 1,
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
      if (type === 'cp') {
        query = {
          ...state,
          cp: '',
          cc: '',
        }
      }
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
      if (type === 'gender') {
        query = {
          ...state,
          gender: ''
        }
      }
      const search = setStateToUrl(query);
      navigate({
        pathname: location.pathname,
        search: `?${createSearchParams(search)}`,
      });

    }
  }

  const onSearchReset = () => {
    const search = setStateToUrl({ reset: '' });
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams(search)}`,
    });
  };

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
    setPage(p);
  };



  useEffect(() => {
    dispatch(getDataAdmin())
  }, [dispatch])
  const handleSearch = (e) => {
    e.preventDefault()
    let q = Object.fromEntries(new FormData(e.target))
    navigate(`${location.pathname}?q=${q.keyword}&page=${Number(searchParam.get('page')) || 1}`);
  }

  useEffect(() => {
    dispatch(getAllProducts({
      cp: searchParam.get('cp') || '',
      keyword: searchParam.get('q') || '',
      page: Number(searchParam.get('page')) || 1,
      pageSize: pageSize,
      price: searchParam.get('price') || '',
      gender: searchParam.get('gender') || '',
      cc: searchParam.get('cc') || '',
      color: searchParam.get('color') || '',
      size: searchParam.get('size') || '',
    }))
  }, [dispatch, page, pageSize, searchParam])

  return (
    <DiscountWrap>
      <Box feature={true}>
        <form onSubmit={handleSearch} className="search">
          <div>
            <input type="text" placeholder='Search' name='keyword' />
          </div>
          <button><span><Icon.SearchOutlinedIcon /></span></button>
        </form>
        <div className="filter">
          {
            width > 992 ? <div className='desktop'>
              <div className="filter" ref={ref} >
                <div className="dropdown">
                  <button onClick={() => setDrop(!drop)}><span><Icon.FilterAltIcon /></span></button>
                  {/* <div className={`arrow ${drop ? 'active' : ''}`}></div> */}
                  <div className={`drop-item ${drop ? 'active' : ''}`}>
                    <div className="categories">
                      <h2>Categories</h2>
                      <FormGroup>
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
                    <div className="gender">
                      <h2>Gender</h2>
                      <FormGroup>
                        {
                          getGender.options.map(item => (
                            <FormControlLabel
                              key={item?.label} control={<Checkbox />}
                              value={item?.label}
                              label={item?.label}
                              onChange={(e) => onChange(e, 'gender')}
                              checked={searchParam.get('gender') === item?.label ? true : false}
                            />
                          ))
                        }
                      </FormGroup>
                    </div>
                    <div className="color">
                      <h2>Color</h2>
                      <div>
                        {
                          colors.map(item => (
                            <FormGroup key={item.type}>
                              <FormControlLabel
                                control={<Checkbox />}
                                value={item.type}
                                label={item.type}
                                onChange={(e) => onChange(e, 'color')}
                                checked={searchParam.get('color') === item.type ? true : false}
                              />
                            </FormGroup>
                          ))
                        }
                      </div>
                    </div>
                    <div className="btn-reset">
                      <button onClick={onSearchReset}>Clear filter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> : <div className='mobile'>
              <button onClick={() => setDrop(true)}><span><Icon.FilterAltIcon /></span></button>
              <div className={`tab-filter ${drop ? 'show' : ''}`}>
                <button onClick={() => setDrop(false)}><span><Icon.CloseOutlinedIcon /></span></button>
                <div className='categories'>
                  <h3>Categories</h3>
                  <FormGroup>
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
                <div className="gender">
                  <h2>Gender</h2>
                  <FormGroup>
                    {
                      getGender.options.map(item => (
                        <FormControlLabel
                          key={item?.label} control={<Checkbox />}
                          value={item?.label}
                          label={item?.label}
                          onChange={(e) => onChange(e, 'gender')}
                          checked={searchParam.get('gender') === item?.label ? true : false}
                        />
                      ))
                    }
                  </FormGroup>
                </div>
                <div className="color">
                  <h2>Color</h2>
                  <div>
                    {
                      colors.map(item => (
                        <FormGroup key={item.type}>
                          <FormControlLabel
                            control={<Checkbox />}
                            value={item.type}
                            label={item.type}
                            onChange={(e) => onChange(e, 'color')}
                            checked={searchParam.get('color') === item.type ? true : false}
                          />
                        </FormGroup>
                      ))
                    }
                  </div>
                </div>
                <div className="btn-reset">
                  <button onClick={onSearchReset}>Clear filter</button>
                </div>
              </div>
            </div>
          }
        </div>
      </Box>
      <Box product={true}>
        {
          products?.map((product, ind) => (
            <Item key={product?._id} product={product} id={ind} pageSize={pageSize} />
          ))
        }
      </Box>
      <Box page={true}>
        {
          products?.length > 0 && <Stack spacing={2}>
            <Pagination
              count={meta?.totalPage || 1}
              page={Number(searchParam.get('page')) || 1}
              defaultPage={1}
              onChange={handleChange}
              siblingCount={0} />
          </Stack>
        }
      </Box>
    </DiscountWrap>
  )
}

export default Discount