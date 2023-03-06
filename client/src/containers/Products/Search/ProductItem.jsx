import React from 'react'
import { Link } from 'react-router-dom'
import { numberWithCommas } from '../../../library/helper/numberComas'
import { Item } from '../index.style'

const ProductItem = ({ products }) => {
    return (
        <div className='products'>
            {
                products?.map(product => (
                    <Item key={product?._id} className={`${sessionStorage.getItem('view') ? sessionStorage.getItem('view') : ''}`}>
                        <div className="product-img">
                            {
                                sessionStorage.getItem('view') === 'col-1' ? <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg" alt="" /> : <Link to={`/product/${product?._id}`}>
                                    <img src={product?.image} alt="" />
                                </Link>
                            }
                        </div>
                        <div className="product-content">
                            <h3>{product?.name}</h3>
                            <div className="price">
                                <span>{numberWithCommas(Number(product?.price))}</span>
                            </div>
                            <div className="rating"></div>
                            {
                                sessionStorage.getItem('view') === 'col-1' && <>

                                    <p>{product?.description}</p>
                                    <div className="btn-cart">
                                        <div>
                                            <Link to={`/product/${product?._id}`}>Select option</Link>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </Item>
                ))
            }
        </div>
    )
}

export default ProductItem