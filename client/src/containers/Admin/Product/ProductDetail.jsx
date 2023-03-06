import React, { useEffect, useRef, useState } from 'react'
import Container from '../../../components/UI/container/Container'
import { DetailWrap, Grid } from './index.style'
import { useParams } from 'react-router-dom'
import useStore from '../../../library/hooks/useStore'
import { getSingleProduct, updateProduct } from '../../../redux/actions/product.action'
import * as Icon from '../../../library/icons/index'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { getDataAdmin } from '../../../redux/actions/initData.action'

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
                <div className={`${drop ? 'active' : 'hidden'}`}>
                  {
                    array?.map(item => (
                      <div key={item?._id} onClick={() => setData({ id: item?._id, name: item?.name })}>
                        <span>{item?.name}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="arrow"></div>
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
                <div className={`${drop ? 'active overflow' : 'hidden'}`}
                  style={{
                    height: `${array?.filter(item => item?._id === dataId)[0]?.children?.length > 4 ? '12rem' : '3rem'}`,
                    overflowY: `${array?.filter(item => item?._id === dataId)[0]?.children?.length > 4 ? 'auto' : 'hidden'}`
                  }}>
                  {
                    array?.filter(item => item?._id === dataId)[0]?.children?.map(item => (
                      <div key={item?._id} onClick={() => setData({ id: item?._id, name: item?.name })}>
                        <span>{item?.name}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="arrow"></div>
            </div>
          </div>
        </div> : <>
          <label htmlFor="">{label}</label>
          <div onClick={() => setDrop(!drop)} >
            <div className="dropdown" ref={refDrop}>
              <div className="item">
                <div className='label'>
                  <span>{data ? data : `Select type size`}</span>
                </div>
                <div className={`${drop ? 'active' : 'hidden'}`}>
                  <div onClick={() => setData('Clothings')}>
                    <span>Clothing</span>
                  </div>
                  <div onClick={() => setData('Shoes')}>
                    <span>Shoes</span>
                  </div>
                </div>
              </div>
              <div className="arrow"></div>
            </div>
          </div>
        </>
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
    let data = {
      name, price, description, stock,
      image,
      thumbnails: thumbnail.length > 0 ? thumbnail : product?.thumbnails,
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
    dispatch(getDataAdmin())
  }, [dispatch])
  useEffect(() => {
    setName(product?.name || '')
    setPrice(product?.price || 0)
    setDesciption(product?.description || '')
    setStock(product?.stock || 0)
    // setImage(product?.image)
    // setThumbnail(product?.thumbnails || [])
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
        <Grid left={true}>
          <img src={product?.image} alt="" />
          <div onClick={() => setOpen(true)}>
            <Icon.EditIcon />
          </div>
        </Grid>
        <Grid right={true}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Product name</label>
              <div>
                <input type="text" placeholder='Tên sản phẩm' value={name} onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Description</label>
              <div>
                <textarea type="text" placeholder='Mô tả sản phẩm' value={description} onChange={e => setDesciption(e.target.value)} rows={5} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Price</label>
              <div>
                <input type="number" placeholder='Giá' value={price} onChange={e => setPrice(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Quantity</label>
              <div>
                <input type="number" placeholder='Số lượng' value={stock} onChange={e => setStock(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <DropItem label={'Category Parent'} cate='parent' data={cateParent} setData={setCateParent} array={categories} dataId={product?.category_parent} />
            </div>
            {
              cateParent.id && <DropItem cate='child' label={'Child Category'} array={categories} data={cateChild} setData={setCateChild} child={product?.category_id} dataId={cateParent.id} />
            }
            <div className="form-group">
              <label htmlFor="">Size</label>
              <div>
                {
                  size.map((x, i) => (
                    <div key={i}>
                      <div>
                        <div>
                          <input type="text" name='size' value={x.size} placeholder='Size' onChange={(e) => handleSize(e, i)} />
                        </div>
                        <div>
                          {
                            size.length <= 1 ? null : <button type='button' onClick={() => {
                              const list = [...size]
                              console.log(i)
                              list.splice(i, 1)
                              setSize(list)
                            }} disabled={size.length !== 1 ? false : true}>-</button>
                          }
                          <button type='button' onClick={() => setSize([...size, { size: '', sold: false }])}>+</button>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">
                          <input type="checkbox" name='sold' onChange={e => handleCheckSize(e, i)} /> Disable
                        </label>
                      </div>

                    </div>
                  ))
                }
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Color</label>
              <div style={{
                height: `${color.length >= 4 ? '400px ' : 'auto'}`,
                overflowY: `${color.length >= 4 ? 'scroll' : 'hidden !important'}`
              }}>
                {
                  color.map((x, i) => (
                    <div key={i}>
                      <div>
                        <div>
                          <input type="text" name='color' value={x.color} placeholder='Color' onChange={(e) => handleColor(e, i)} />
                        </div>
                        <div>
                          {
                            color.length <= 1 ? null : <button type='button' onClick={() => {
                              const list = [...color]
                              console.log(i)
                              list.splice(i, 1)
                              setColor(list)
                            }} disabled={color.length !== 1 ? false : true}>-</button>
                          }
                          <button type='button' onClick={() => setColor([...color, { color: '', sold: false }])}>+</button>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">
                          <input type="checkbox" name='sold' onChange={e => handleCheckColor(e, i)} /> Disabled
                        </label>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="form-group">
              <button>Update</button>
            </div>
          </form>
        </Grid>
      </Container>
      <div className={`modal ${open ? 'active' : ''}`}>
        {
          open && <div>
            <span onClick={() => setOpen(false)}><Icon.CloseOutlinedIcon fontSize='large' /></span>
            <div>
              <div>
                <div>Ảnh</div>
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
                {/* <div>
                  {
                    thumbnail?.map((item, index) => (
                      <img key={index} src={item?.url} alt="" />
                    ))
                  }
                </div> */}
                {
                  thumbnail?.length > 0 ? <div>
                    {
                      thumbnail?.map((item, index) => (
                        <img key={index} src={item} alt="" />
                      ))
                    }
                  </div> : product?.thumbnails && <div>
                    {
                      product?.thumbnails?.map(item => (
                        <img key={item?.public_id} src={item?.url} alt="" />
                      ))
                    }
                  </div>
                }
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