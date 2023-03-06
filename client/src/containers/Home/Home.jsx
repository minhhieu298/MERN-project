import React, { useEffect, useRef, useState } from 'react'
import HomeWrap from './style'
import { Link } from 'react-router-dom'
import useWindowSize from '../../library/hooks/useWindowSize'
import useStore from '../../library/hooks/useStore'
import { getData } from '../../redux/actions/initData.action'
import { numberWithCommas } from '../../library/helper/numberComas'
import shoes from '../../assets/shoes.jpg';
import short from '../../assets/short.webp'
import Slider from './Slider'

const Home = () => {
  const { width } = useWindowSize()
  const { dispatch, products } = useStore()

  useEffect(() => {
    // dispatch(getData())
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
          <div className="slide-item">
            <Link to='/'>
              <div className="image">
                <img src={shoes} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h4>dada</h4>
                </div>
                <p className="price">
                  <span>200000</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="slide-item">
            <Link to='/'>
              <div className="image">
                <img src={shoes} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h4>dada</h4>
                </div>
                <p className="price">
                  <span>200000</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="slide-item">
            <Link to='/'>
              <div className="image">
                <img src={shoes} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h4>dada</h4>
                </div>
                <p className="price">
                  <span>200000</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="slide-item">
            <Link to='/'>
              <div className="image">
                <img src={shoes} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h4>dada</h4>
                </div>
                <p className="price">
                  <span>200000</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="slide-item">
            <Link to='/'>
              <div className="image">
                <img src={shoes} alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <h4>dada</h4>
                </div>
                <p className="price">
                  <span>200000</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </HomeWrap>
  )
}

export default Home