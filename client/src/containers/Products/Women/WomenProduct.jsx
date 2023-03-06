import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import useStore from '../../../library/hooks/useStore';
import useWindowSize from '../../../library/hooks/useWindowSize';
import { getCates } from '../../../redux/actions/category.action';
import { getAllProducts } from '../../../redux/actions/product.action';
import WomenContainer from './index.style'
import banner_women from '../../../assets/banner_women.webp'
import women1 from '../../../assets/women1.webp'
import women2 from '../../../assets/women2.webp'
import women3 from '../../../assets/women3.webp'
import women4 from '../../../assets/women4.jpg'



const WomenProduct = () => {
  let location = useLocation();
  let pageSize = 2;
  const { width } = useWindowSize()
  const { dispatch, products, meta, categories } = useStore()
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllProducts({ page: page, pageSize: pageSize }))
  }, [dispatch, page])

  useEffect(() => {
    dispatch(getCates())
  }, [dispatch])

  return (
    <WomenContainer>
      <nav>
        <h1>Women</h1>
        <ul>
          {
            categories?.map(item => (
              <li key={item?._id}>
                <Link to={`/women/${item?.slug}`}>{item?.name}</Link>
              </li>
            ))
          }
        </ul>
        {width > 991 && <div></div>}
      </nav>
      <section>
        <div className="banner">
          <div className='banner-image'>
            <img src={banner_women} alt="" />
          </div>
          <div className="banner-title">
            <h3>Nike running</h3>
            <p>Styles that flex with you</p>
            <div>
              <Link to='/'>Find your shoe</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="image">
          <div>
            <img src={women1} alt="" />
            <div>
              <h3>Get more out of your run  </h3>
              <div>
                <Link to='/'>Start the playlist</Link>
              </div>
            </div>
          </div>
          <div>
            <img src={women2} alt="" />
            <div>
              <h3>Feel-good flow</h3>
              <div>
                <Link to='/'>Start workout</Link>
              </div>
            </div>
          </div>
          <div>
            <img src={women3} alt="" />
            <div>
              <h3>Run with out coaches</h3>
              <div>
                <Link to='/'>See guided runs</Link>
              </div>
            </div>
          </div>
          <div>
            <img src={women4} alt="" />
            <div>
              <h3>Qick core crush</h3>
              <div>
                <Link to='/'>Start workout</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WomenContainer>
  )
}

export default WomenProduct