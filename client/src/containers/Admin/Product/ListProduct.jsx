import React, { useEffect, useRef, useState } from 'react'
import ProductWrap from './index.style'
import * as Icon from '../../../library/icons/index'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { Pagination, Stack } from '@mui/material'
import useStore from '../../../library/hooks/useStore'
import { deleteProduct, getAllProducts } from '../../../redux/actions/product.action'
import { createSearchParams, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { ADMIN_PAGE } from '../../../setting/constants'
import { numberWithCommas } from '../../../library/helper/numberComas'
import CreateProduct from './CreateProduct'
import { getDataAdmin } from '../../../redux/actions/initData.action'
import FilterPage from './FilterPage'
import { setStateToUrl } from './Seach/url_handler'

const ListItem = ({ product, index }) => {
  const { dispatch, token } = useStore()
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setShow(false))

  const handleDelete = (id) => {
    dispatch(deleteProduct(id, token))
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className='product'>
          <img src={product?.image} alt="" />
          <span>{product?.name}</span>
        </div>
      </td>
      <td><span>{numberWithCommas(product?.price)}</span></td>
      <td>12/32/1231</td>
      <td>
        <span>{product?.category_parent?.name}</span>
      </td>
      <td>
        <span>{product?.category_id?.name}</span>
      </td>
      <td>
        <div ref={ref}>
          <button onClick={() => setShow(!show)}><Icon.MoreHorizIcon /></button>
          {
            show && <div>
              <Link to={`${ADMIN_PAGE}/product/${product?._id}`}>Chi tiết</Link>
              <p onClick={() => handleDelete(product?._id, token)}>Xóa</p>
            </div>
          }
        </div>
      </td>
    </tr>
  )
}


const ListProduct = () => {
  let pageSize = 10;
  let navigate = useNavigate()
  let location = useLocation()
  const [searchParam, setSearchParam] = useSearchParams()
  const { dispatch, products, meta, categories } = useStore()
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState(false)
  const [page, setPage] = useState(1)

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
    setPage(p);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    let q = Object.fromEntries(new FormData(e.target))
    if (searchParam.get('cp')) {
      navigate(`${location.pathname}?cp=${searchParam.get('cp')}&q=${q.keyword}&page=1`);
    } else {
      navigate(`${location.pathname}?q=${q.keyword}&page=1`);
    }
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

  useEffect(() => {
    dispatch(getDataAdmin())
  }, [dispatch])

  return (
    <>
      <ProductWrap>
        <div className="container">
          <div className="container_header">
            <h1>Danh sách sản phẩm</h1>
          </div>
          <div className="container_tool">
            <div className='search'>
              <form onSubmit={handleSearch}>
                <div>
                  <input type="text" placeholder='Tìm kiếm' name='keyword' />
                  <button><span><Icon.SearchOutlinedIcon /></span></button>
                </div>
              </form>
            </div>
            <div className="filter">
              <button onClick={() => setFilter(true)}><span><Icon.FilterAltIcon /></span></button>
            </div>
          </div>
          <div className="container_body">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Ngày</th>
                  <th>Danh mục cha</th>
                  <th>Danh mục con</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {
                  products?.map((product, index) => (
                    <ListItem key={product?._id} index={index} product={product} />
                  ))
                }
              </tbody>
            </table>
          </div>
          {
            products?.length > 0 && <div className="page">
              <Stack>
                <Pagination count={meta?.totalPage || 1} page={Number(searchParam.get('page') || page)} defaultPage={1} onChange={handleChange} siblingCount={0} color="primary" />
              </Stack>
            </div>
          }
        </div>
      </ProductWrap>
      <CreateProduct show={show} setShow={setShow} categories={categories} />
      <FilterPage filter={filter} setFilter={setFilter} categories={categories} />
    </>
  )
}

export default ListProduct