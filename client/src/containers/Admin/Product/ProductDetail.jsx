import React, { useEffect, useRef, useState } from 'react'
import Container from '../../../components/UI/container/Container'
import { DetailWrap, Grid } from './index.style'
import { useParams } from 'react-router-dom'
import useStore from '../../../library/hooks/useStore'
import { getSingleProduct, updateProduct } from '../../../redux/actions/product.action'
import * as Icon from '../../../library/icons/index'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { getCates } from '../../../redux/actions/category.action'

const DropItem = ({ label, data, setData, cate, array, dataId, child }) => {
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
                  <span>{data?.name ? data?.name : array?.filter(item => item._id === dataId)[0]?.name}</span>
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
                  <span>{
                    data?.name ? data?.name :
                      array?.filter(item => item?._id === dataId)[0]?.children?.filter(item => item._id === child)[0]?.name ?
                        array?.filter(item => item?._id === dataId)[0]?.children?.filter(item => item._id === child)[0]?.name : 'Select'
                  }
                  </span>
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
    </React.Fragment >
  )
}

const ProductDetail = () => {
  const { product, dispatch, token, categories } = useStore()
  const [open, setOpen] = useState(false)
  const { id } = useParams()
  const [image, setImage] = useState("")
  const [thumbnail, setThumbnail] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDesciption] = useState('')
  const [cateParent, setCateParent] = useState({ id: '', name: '' })
  const [cateChild, setCateChild] = useState({ id: '', name: '' })
  const [stock, setStock] = useState(0)
  const [size, setSize] = useState([{ size: '', sold: false }])
  const [color, setColor] = useState([{ color: '', sold: false }])
  const handleImage = async (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file);
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
    if (thumbnail.length > 0) {
      setOpen(false)
    }
  }
  const handleUpdateImage = e => {
    const payload = {
      image: image ? image : product?.image,
      thumbnails: thumbnail.length > 0 ? thumbnail : product?.thumbnails,
    }
    dispatch(updateProduct(id, payload, token))
  }
  const handleCheckSize = (e, index) => {
    const { name, checked } = e.target
    const list = [...size]
    list[index][name] = checked
    setSize(list)
  }
  const handleCheckColor = (e, index) => {
    const { name, checked } = e.target
    const list = [...color]
    list[index][name] = checked
    setColor(list)
  }
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
  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      name, price, description, stock,
      sizes: size,
      colors: color,
      category_id: cateChild.id,
      category_parent: cateParent.id
    }
    dispatch(updateProduct(id, data, token))
    // console.log(data);
  }
  useEffect(() => {
    dispatch(getSingleProduct(id))

  }, [dispatch, id])
  useEffect(() => {
    dispatch(getCates())
  }, [dispatch])
  useEffect(() => {
    setName(product?.name || '')
    setPrice(product?.price || 0)
    setDesciption(product?.description || '')
    setStock(product?.stock || 0)
    setImage(product?.image)
    setThumbnail(product?.thumbnails || [])
    setSize(product?.sizes?.map(item => ({ size: item.size, sold: item.sold })) || [{ size: '', sold: false }])
    setColor(product?.colors?.map(item => ({ color: item.color, sold: item.sold })) || [{ color: '', sold: false }])
    setCateParent({ id: product?.category_parent, name: '' } || { id: '', name: ' ' })
    setCateChild({ id: product?.category_id, name: '' } || { id: '', name: ' ' })
  }, [product])

  if (product._id !== id) {
    return <p>ko thay</p>
  }
  return (
    <DetailWrap>
      <Container fluid={true}>
        <div className="row">
          <div className="col-4">
            <img src={product?.image} alt="" />
            <div role='button' onClick={() => setOpen(true)}>
              <Icon.EditIcon />
            </div>
          </div>
          <div className="col-8">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Tên sản phẩm</label>
                <div>
                  <input type="text" placeholder='Tên sản phẩm' value={name} onChange={e => setName(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Mô tả</label>
                <div>
                  <textarea type="text" placeholder='Mô tả sản phẩm' value={description} onChange={e => setDesciption(e.target.value)} rows={5} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Giá</label>
                <div>
                  <input type="number" placeholder='Giá' value={price} onChange={e => setPrice(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Số lượng</label>
                <div>
                  <input type="number" placeholder='Số lượng' value={stock} onChange={e => setStock(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Kích thước</label>
                <div>
                  {
                    size.map((x, i) => (
                      <div key={i} className='item'>
                        <div>
                          <div className='btn'>
                            {
                              size.length <= 1 ? null : <button type='button' onClick={() => {
                                const list = [...size]
                                console.log(i)
                                list.splice(i, 1)
                                setSize(list)
                              }} disabled={size.length !== 1 ? false : true}>-</button>
                            }
                          </div>
                          <div className='input'>
                            <input type="text" name='size' value={x.size} placeholder='Size' onChange={(e) => handleSize(e, i)} />
                          </div>
                          <div className='btn'>
                            <button type='button' onClick={() => setSize([...size, { size: '', sold: false }])}>+</button>
                          </div>
                        </div>
                        <div>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox />}
                              label={'Disable'}
                              onChange={e => handleCheckSize(e, i)}
                            />
                          </FormGroup>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Màu sắc</label>
                <div>
                  {
                    color.map((x, i) => (
                      <div key={i} className='item'>
                        <div>
                          <div className='btn'>
                            <button type='button' onClick={() => {
                              const list = [...color]
                              console.log(i)
                              list.splice(i, 1)
                              setColor(list)
                            }} disabled={color.length !== 1 ? false : true}>-</button>
                          </div>
                          <div className='input'>
                            <input type="text" name='color' value={x.color} placeholder='Color' onChange={(e) => handleColor(e, i)} />
                          </div>
                          <div className="btn">
                            <button type='button' onClick={() => setColor([...color, { color: '', sold: false }])}>+</button>
                          </div>
                        </div>
                        <div>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox />}
                              label={'Disable'}
                              onChange={e => handleCheckColor(e, i)}
                            />
                          </FormGroup>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Đã bán</label>
                <div>
                  <input type="number" placeholder='Giá' value={product?.sold} readOnly />
                </div>
              </div>
              <div className="form-group">
                <DropItem label={'Danh mục cha'} cate='parent' data={cateParent} setData={setCateParent} array={categories} dataId={product?.category_parent} />
              </div>
              {
                cateParent.id && <DropItem cate='child' label={'Danh mục con'} array={categories} data={cateChild} setData={setCateChild} child={product?.category_id} dataId={cateParent.id} />
              }
              <div className="btn">
                <button>Update</button>
              </div>
            </form>
            {/* <span>{}</span> */}
          </div>
        </div>
      </Container>
      <div className={`modal ${open ? 'active' : ''}`}>
        {
          open && <div>
            <span onClick={() => setOpen(false)}><Icon.CloseOutlinedIcon fontSize='large' /></span>
            <div>
              <div>
                <div>Ảnh chính</div>
                <div>
                  <input type="file" onChange={handleImage} accept='.jpeg, .png, .jpg' />
                </div>
                {
                  image ? <div>
                    <img src={image} alt="" />
                  </div> : <div>
                    <img src={product?.image} alt="" />
                  </div>
                }
              </div>
              <div>
                <div>Thumbnails</div>
                <div>
                  <input type="file" accept='.jpeg, .png, .jpg' multiple onChange={handleMultipleImage} />
                </div>
                {
                  product?.thumbnails && <div>
                    {
                      product?.thumbnails?.map(item => (
                        <div key={item?.public_id}>
                          <img src={item?.url} alt="" />
                        </div>
                      ))
                    }
                  </div>
                }
                {/* {
                  thumbnail?.length > 0 ? <div>
                    {
                      thumbnail?.map((item, index) => (
                        <div key={index}>
                          <img src={item} alt="" />
                        </div>
                      ))
                    }
                  </div> : 
                } */}
              </div>
            </div>
            {/* <button onClick={() => updateImg()}>Submit</button> */}
          </div>
        }
      </div>
    </DetailWrap>
  )
}

export default ProductDetail