import React, { useEffect, useState } from 'react'
import Container from '../../components/UI/container/Container'
import { numberWithCommas } from '../../library/helper/numberComas'
import useStore from '../../library/hooks/useStore'
import useWindowSize from '../../library/hooks/useWindowSize'
import { addToCart, deleteCart, getCartItems } from '../../redux/actions/cart.action'
import CartWrap, { MobileCart } from './index.style'
import * as Icon from '../../library/icons/index'
import { Link } from 'react-router-dom'
import { CHECKOUT_PAGE, HOME_PAGE } from '../../setting/constants'
import cartEmpty from '../../assets/empty_cart.png'

const Item = (props) => {
  const { product, price, color, size } = props.cart
  const [qty, setQty] = useState(props.cart.quantity)
  const { dispatch, token } = useStore()
  const { width } = useWindowSize()
  const increaseQty = () => {
    if (qty >= 5) {
      alert('Sản phẩm mua quá mức cho phép! Hãy liên hệ cửa hàng để mua với số lượng lớn')
      return
    }
    setQty(qty + 1)
    let payload = {
      product: product._id, price, color, size, _id: props.cart._id
    }
    props.increase(payload, qty + 1)
  }
  const decreaseQty = () => {
    if (qty <= 1) return
    let payload = {
      product: product._id, price, color, size, _id: props.cart._id
    }
    setQty(qty - 1)
    props.decrease(payload, qty - 1)
  }
  const deleteCarts = (id) => {
    dispatch(deleteCart(id, token))
  }
  return (
    <React.Fragment>
      {
        width > 768 ? (<div className="row">
          <div className="col-3">
            <div className="image">
              <img src={props.cart?.product.image} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="content">
              <div className="name">
                <h3>{props.cart?.product.name}</h3>
              </div>
              <div className="variants">
                <div className="color">
                  <span>Color:</span>
                  <span>{props.cart.color}</span>
                </div>
                <div className="size">
                  <span>Size:</span>
                  <span>{props.cart.size}</span>
                </div>
              </div>
              <div className="price">
                <span>Price:</span>
                <span>₫{numberWithCommas(props.cart?.price)}</span>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="price">
              <p>₫{numberWithCommas(Number(props.cart?.price * props.cart?.quantity))}</p>
            </div>
          </div>
          <div className="col-2">
            <div className="cart-btn">
              <button onClick={decreaseQty} disabled={qty === 1 ? true : false}>-</button>
              <input type="text" readOnly value={qty} />
              <button onClick={increaseQty}>+</button>
            </div>
          </div>
          <div className="col-1">
            <div className="delete-btn">
              <button onClick={() => deleteCarts(props.cart?._id)}><span><Icon.RiDeleteBinLine /></span></button>
            </div>
          </div>
        </div>) : (<div className="row">
          <div className="col-4">
            <div className="image">
              <img src={props.cart?.product.image} alt="" />
            </div>
          </div>
          <div className="col-8">
            <div className="content">
              <div className="name">
                <h3>{props.cart?.product.name}</h3>
              </div>
              <div className="variants">
                <div className="color">
                  <span>Color:</span>
                  <span>{props.cart?.color}</span>
                </div>
                <div className="size">
                  <span>Size:</span>
                  <span>{props.cart?.size}</span>
                </div>
              </div>
              <div className="cart-btn">
                <button onClick={decreaseQty}>-</button>
                <input type="text" readOnly value={qty} />
                <button onClick={increaseQty}>+</button>
              </div>
              <div className="price">
                <p>₫{numberWithCommas(Number(props.cart?.price * props.cart?.quantity))}</p>
              </div>
              <div className="delete-btn">
                <button><span><Icon.RiDeleteBinLine /></span></button>
              </div>
            </div>
          </div>
        </div>)
      }
    </React.Fragment>

  )
}
const Cart = () => {
  const { width } = useWindowSize()
  const { cartItems, token, dispatch } = useStore()
  const [cart, setCart] = useState(cartItems);

  const increaseCart = (payload, qty) => {
    let product = {
      ...payload, token
    }
    dispatch(addToCart(product, 1))
  }
  const decreaseCart = (payload, qty) => {
    let product = {
      ...payload, token
    }
    dispatch(addToCart(product, -1))
  }

  useEffect(() => { setCart(cartItems) }, [cartItems, cart])
  return (
    <CartWrap>
      <Container fluid={true}>
        {
          width > 768 ? <React.Fragment>
            {
              cartItems?.length > 0 ?
                <div className="box">
                  <div className="col-top">
                    {
                      cart?.map(item => (
                        <Item key={item?._id}
                          cart={item}
                          increase={increaseCart}
                          decrease={decreaseCart}
                        />
                      ))
                    }
                  </div>
                  <div className="col-bottom">
                    <div className="checkout">
                      <button>
                        <Link to={CHECKOUT_PAGE}>
                          <span>Checkout</span>
                          -
                          <span>₫{numberWithCommas(Number(cartItems?.reduce((a, b) => a + b.price * b.quantity, 0)))}</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div> : <div className="empty_cart">
                  <div className="bg" style={{ backgroundImage: `url(${cartEmpty})` }}></div>
                  <div className="text">Giỏ hàng của bạn còn trống</div>
                  <button>
                    <Link to={HOME_PAGE}>Mua ngay</Link>
                  </button>
                </div>
            }
          </React.Fragment> : <MobileCart>
            {
              cartItems?.length > 0 ? <>
                <div className="box">
                  {
                    cartItems?.map(item => (
                      <Item key={item?._id}
                        cart={item}
                        increase={increaseCart}
                        decrease={decreaseCart}
                      />
                    ))
                  }
                </div>
                <div className="box">
                  <div className="total">
                    <h3>Total</h3>
                    <div>₫{numberWithCommas(Number(cartItems?.reduce((a, b) => a + b.price * b.quantity, 0)))}</div>
                  </div>
                  <div className="checkout">
                    <button>
                      <Link to={CHECKOUT_PAGE}>Checkout</Link>
                    </button>
                  </div>
                </div>
              </> : <div className="empty_cart">
                <div className="bg" style={{ backgroundImage: `url(${cartEmpty})` }}></div>
                <div className="text">Giỏ hàng của bạn còn trống</div>
                <button>
                  <Link to={HOME_PAGE}>Mua ngay</Link>
                </button>
              </div>
            }
          </MobileCart>
        }
      </Container>

    </CartWrap >
  )
}

export default Cart