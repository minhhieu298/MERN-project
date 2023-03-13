import React, { useEffect, useRef, useState } from 'react'
import HomeWrap from './style'
import { Link } from 'react-router-dom'
import useWindowSize from '../../library/hooks/useWindowSize'
import useStore from '../../library/hooks/useStore'
import { numberWithCommas } from '../../library/helper/numberComas'
import shoes from '../../assets/shoes.jpg';
import short from '../../assets/short.webp'
import Slider from './Slider'
import { getAllProducts } from '../../redux/actions/product.action'

const Home = () => {
  const { width } = useWindowSize()
  const { dispatch, products } = useStore()

  useEffect(() => {
    dispatch(getAllProducts({
      pageSize: 7,
      page: 1,
    }))
  }, [])
  return (
    <HomeWrap>
      <Slider />
      <section className="trending">
        <h1>Trending</h1>
        <div className="banner">
          <div className="row">
            <div className="col-6">
              <img src={short} alt="" />
              <div>
                <h3>Get the Latest Look for Your Next Run </h3>
                <Link to='/'>Shop</Link>
              </div>
            </div>
            <div className="col-6">
              <img src={shoes} alt="" />
              <div>
                <h3>Responsive Racer. <br />Nike Zoom Fly 5 </h3>
                <Link to='/'>Shop</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <h1>This Week's Picks</h1>
        <div className='slider'>
          {
            products?.map(product => (
              <div key={product?._id} className="slide-item">
                <Link to={`/product/${product?._id}`}>
                  <div className="image">
                    <img src={product?.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h4>{product?.name}</h4>
                    </div>
                    <p className="price">
                      {
                        product?.discount > 0 && <span className="discount"><span>{product?.discount}%</span></span>

                      }
                      <span>₫{numberWithCommas(Number(product?.price))}</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </section>
    </HomeWrap>
  )
}

export default Home