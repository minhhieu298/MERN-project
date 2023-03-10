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

  const hanldeAddtoCart = (item) => {
    const payload = {
      product: item?._id,
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
              {
                product?.stock <= 0 ? <React.Fragment>
                  <div className="out-stock">
                    <h3>Sản phẩm hiện không còn tài cửa hàng</h3>
                  </div>
                </React.Fragment> : <React.Fragment>
                  <div className="size-color">
                    <div className="color-wrap">
                      <span>Color</span>
                      <div className='color-content'>
                        {
                          product?.colors?.length > 0 && product?.colors?.map((item) => (
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
                    <div className="cart-btn">
                      <button onClick={() => hanldeAddtoCart(product)}>Add to cart</button>
                    </div>
                  </div>
                </React.Fragment>
              }
            </div>
          </div>
        </div>
      </Container>
    </DetailWrap>
  )
}

export default ProductDetail