import React, { useEffect, useState } from 'react'
import useStore from '../../library/hooks/useStore'
import { json, useParams } from 'react-router-dom'
import { getSingleProduct } from '../../redux/actions/product.action'
import { Box, DetailWrap, Grid } from './index.style'
import Container from '../../components/UI/container/Container'
import { numberWithCommas } from '../../library/helper/numberComas'
import { addToCart } from '../../redux/actions/cart.action'

const ProductDetail = () => {
  let { id } = useParams()
  const { dispatch, product, token } = useStore()
  const [thumb, setThumb] = useState('')

  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  // const [arrColor, setArrColor] = useState([])
  // const [obj, setObj] = useState({})
  const [qty, setQty] = useState(1)

  // const handleColor = (item) => {
  //   const arr = arrColor?.map(e => e.color === item.color ? { ...e, isSelected: true } : { ...e, isSelected: false })
  //   const arrFilter = arr?.filter(e => e.isSelected === true)[0]
  //   setArrColor(arr)
  //   setObj(arrFilter)
  //   setSize('')
  //   setQty(1)
  // }

  const handleSize = (item) => {
    console.log(obj.sizes);
    const arr = obj?.sizes?.map(e => e.size === item.size ? { ...e, isSelected: true } : { ...e, isSelected: false })
    // setArrSize(arr)
  }
  const hanldeAddtoCart = (item) => {
    const payload = {
      product: item?._id,
      // quantity: qty,
      size,
      color,
      price: item?.discount > 0 ? item.price_after_discount : item.price,
      token
    }
    dispatch(addToCart(payload))
  }
  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [id, dispatch])

  useEffect(() => {

  }, [product])

  // useEffect
  return (
    <DetailWrap>
      <Container fluid={true}>
        <div className="row">
          <div className="col-6">
            <div className="product-large-img">
              <div className="image">
                <img src={thumb ? thumb : product?.image} alt="" />
              </div>
            </div>
            <div className="product-small-img">
              {
                product?.thumbnails?.map(item => (
                  <div key={item?.public_id} className="item-image" onClick={() => setThumb(item?.url)}>
                    <img src={item?.url} alt="" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-6">
            <div className="wrap-content">
              <h2>{product?.name}</h2>
              <div className="price">
                {Number(product?.discount) > 0 && <span>₫{numberWithCommas(Number(product?.price_after_discount))}</span>}
                <span className={`${Number(product?.discount) > 0 ? 'old' : ''}`}>₫{numberWithCommas(Number(product?.price))}</span>
              </div>
              <div className="rating"></div>
              <div className="description">
                <p>{product?.description}</p>
              </div>
              <div className="size-color">
                <div className="color-wrap">
                  <span>Color</span>
                  <div className='color-content'>
                    {
                      product?.colors?.map((item) => (
                        <button key={item?._id} style={{ background: `${item.color}`, border: `${color === item?.color ? '2px solid #a749ff' : ''}` }} onClick={() => { setColor(item?.color), setSize('') }}></button>
                      ))
                    }
                  </div>
                </div>
                <div className="size-wrap">
                  <span>Size</span>
                  <div className='size-content'>
                    {
                      product?.sizes?.map(item => (
                        <button disabled={color ? false : true} key={item?._id} onClick={() => setSize(item?.size)} style={{
                          background: `${size === item?.size ? '#a749ff' : '#f1f2f6'}`,
                          color: `${size === item?.size ? '#FFF' : '#000'}`
                        }}>{item?.size}</button>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="quantity">
                {/* <div className="cart-plus-minus">
                  <button onClick={() => setQty(prev => prev - 1 <= 1 ? 1 : prev - 1)}>-</button>
                  <input type="text" readOnly value={qty} />
                  <button onClick={() => setQty(next => next + 1)}>+</button>
                </div> */}
                <div className="cart-btn">
                  <button onClick={() => hanldeAddtoCart(product)}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </DetailWrap>
  )
}

export default ProductDetail