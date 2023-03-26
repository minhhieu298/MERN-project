import React, { useEffect, useState } from 'react'
import useStore from '../../library/hooks/useStore'
import { useParams } from 'react-router-dom'
import { createComment, deleteComment, getSingleProduct, updateComment } from '../../redux/actions/product.action'
import { DetailWrap } from './index.style'
import Container from '../../components/UI/container/Container'
import { numberWithCommas } from '../../library/helper/numberComas'
import { addToCart } from '../../redux/actions/cart.action'
import { Rating, Stack } from '@mui/material';
import * as Icon from '../../library/icons/index'
import NotFoundpage from '../404/404'

const Comment = ({ comment }) => {
  let { id } = useParams()
  const { dispatch, token, auth } = useStore()
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState(comment?.comment)
  const [value, setValue] = useState(comment?.rating)

  const handleUpdateComment = e => {
    e.preventDefault()
    const payload = {
      product: id,
      id: comment?._id,
      comment: text,
      rating: value
    }
    dispatch(updateComment(payload, token))
    setEdit(false)
  }
  const handleDeleteComent = (commentId) => {
    const payload = {
      product: id,
      id: commentId
    }
    dispatch(deleteComment(payload, token))
  }
  return (
    <div className="list-comment-item" key={comment?._id}>
      <div className="list-comment-item-left">
        <div className="avatar-user">
          <img src={comment?.user.avatar} alt="" />
        </div>
      </div>
      <div className="list-comment-item-right">
        {
          edit ? <>
            <form onSubmit={handleUpdateComment}>
              <div>
                <div>
                  <input type="text" placeholder='Bình luận' value={text} onChange={e => setText(e.target.value)} />
                </div>
                <button type='submit' disabled={(text !== '') && (value > 0) ? false : true}>Gửi</button>
              </div>
              <div>
                <Rating
                  name="simple-controlled"
                  value={value}
                  emptyIcon={<Icon.StarIcon fontSize="small" />}
                  icon={<Icon.StarIcon fontSize="small" />}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <div className="cancel" role='button' onClick={() => setEdit(false)}>Hủy</div>
              </div>
            </form>
          </> : <>
            <div className="user-name">
              <span>{comment?.user.username}</span>
            </div>
            <Rating
              name="simple-controlled"
              value={comment?.rating}
              readOnly={true}
              emptyIcon={<Icon.StarIcon fontSize="small" />}
              icon={<Icon.StarIcon fontSize="small" />}
            />
            <div className="comment">
              <p>{comment?.comment}</p>
            </div>
            {
              comment?.user._id === auth?._id && <div className="edit-comment">
                <div onClick={() => setEdit(!edit)}>chỉnh sửa</div>
                <div onClick={() => handleDeleteComent(comment?._id)}>xóa</div>
              </div>
            }
          </>
        }
      </div>
    </div>
  )
}
const ProductDetail = () => {
  let { id } = useParams()
  const { dispatch, product, token, auth, error_server } = useStore()
  const [thumb, setThumb] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [value, setValue] = useState(0);
  const [text, setText] = useState('')


  const hanldeAddtoCart = (item) => {
    const payload = {
      product: item?._id,
      size,
      color,
      price: item?.discount > 0 ? item.price_after_discount : item.price,
      token,
    }
    dispatch(addToCart(payload))
  }

  const handleComment = (e) => {
    e.preventDefault()
    const payload = {
      product: id,
      comment: text,
      rating: value
    }
    dispatch(createComment(payload, token))
    setText('')
    setValue(0)
  }


  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [id, dispatch])

  if (error_server) {
    return <NotFoundpage />
  }
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
              {
                product?.ratings > 0 && <div className="rating">
                  <Stack spacing={1}>
                    <Rating name="half-rating-read"
                      value={product?.ratings}
                      precision={0.5}
                      emptyIcon={<Icon.StarIcon fontSize="medium" />}
                      icon={<Icon.StarIcon fontSize="medium" />}
                      readOnly
                    />
                  </Stack>
                </div>
              }
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
        <div className="comments">
          <div className="container">
            <h3>Đánh giá sản phẩm</h3>
            {
              product?.product_comments?.find(com => com?.user?._id === auth?._id) ? <></> : <div className="wrap">
                <form onSubmit={handleComment}>
                  <div>
                    <div>
                      <input type="text" placeholder='Bình luận....' value={text} onChange={e => setText(e.target.value)} />
                    </div>
                    <button disabled={(text !== '') && (value > 0) ? false : true}>Gửi</button>
                  </div>

                  <Rating
                    name="simple-controlled"
                    value={value}
                    emptyIcon={<Icon.StarIcon fontSize="medium" />}
                    icon={<Icon.StarIcon fontSize="medium" />}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </form>
              </div>
            }

            {
              product?.product_comments?.length > 0 ? <div className="list-comment">
                {
                  product?.product_comments?.map(comment => (
                    <Comment key={comment?._id} comment={comment} />
                  ))
                }
              </div> : <div className='empty-comment'>Sản phẩm chưa được đánh giá</div>
            }
          </div>
        </div>
      </Container>
    </DetailWrap>
  )
}

export default ProductDetail