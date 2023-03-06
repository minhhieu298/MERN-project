import React, { useEffect, useState } from 'react'
import AccessoriesWrap from './index.style'
import { Link } from 'react-router-dom'
import * as Icon from '../../../library/icons/index'
import { CREATE_ACCESSORIES_PAGE } from '../../../setting/constants'
import useStore from '../../../library/hooks/useStore'
import { createAccess, deleteAccess, updateAccess } from '../../../redux/actions/accessories'
import { getDataAdmin } from '../../../redux/actions/initData.action'

const SizeItem = ({ item }) => {
  const { dispatch } = useStore()
  const [open, setOpen] = useState(false)
  const handleUpdate = (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let payload = {
      sizeId: item?._id,
      size: data.size
    }
    dispatch(updateAccess(payload))
    setOpen(false)
  }
  return (
    <div>
      {
        open ? <div className='form'>
          <form onSubmit={handleUpdate}>
            <input type="text" name='size' placeholder='size' />
            <button>update</button>
          </form>
        </div> : <div>{item?.size}</div>
      }
      <div>
        <button onClick={() => setOpen(!open)}><Icon.AiOutlineEdit /></button>
        <button onClick={() => dispatch(deleteAccess({ sizeId: item?._id }))}><Icon.AiOutlineDelete /></button>
      </div>
    </div>
  )
}

const ColorItem = ({ item }) => {
  const { dispatch } = useStore()
  const [open, setOpen] = useState(false)
  const handleUpdate = (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let payload = {
      colorId: item?._id,
      color: data.color
    }
    dispatch(updateAccess(payload))
    setOpen(false)
  }
  return (
    <div>
      {
        open ? <div className='form'>
          <form onSubmit={handleUpdate}>
            <input type="text" name='color' placeholder='color' />
            <button>update</button>
          </form>
        </div> : <div>{item?.color}</div>
      }
      <div>
        <button onClick={() => setOpen(!open)}><Icon.AiOutlineEdit /></button>
        <button onClick={() => dispatch(deleteAccess({ colorId: item?._id }))}><Icon.AiOutlineDelete /></button>
      </div>
    </div>
  )
}
const Accessories = () => {
  const { dispatch, accessories } = useStore()
  const handleSize = e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    dispatch(createAccess(data))
  }

  const handleColor = e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    dispatch(createAccess(data))
  }

  useEffect(() => {
    dispatch(getDataAdmin())
  }, [dispatch])
  return (
    <AccessoriesWrap>
      <div>
        <div className="row">
          <div className="col-8">
            <h2>Sizes</h2>
            <div className="row">
              <div className="col-4">
                <h3>Size Clothings</h3>
                <div className='table'>
                  {
                    accessories?.clothings?.map(item => (
                      <SizeItem key={item?._id} item={item} />
                    ))
                  }
                </div>
              </div>
              <div className="col-4">
                <h3>Size Shoes</h3>
                <div className='table'>
                  {
                    accessories?.shoes?.map(item => (
                      <SizeItem key={item?._id} item={item} />
                    ))
                  }
                </div>
              </div>
              <div className="col-4">
                <h3>Color</h3>
                <div className='table'>
                  {
                    accessories?.colors?.map(item => (
                      <ColorItem key={item?._id} item={item} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h2>Create Accessories</h2>
            <div className='size'>
              <h3>Sizes</h3>
              <form onSubmit={handleSize}>
                <div className="form-group">
                  <input type="text" placeholder='size' name='size' required />
                </div>
                <div className="form-group">
                  <button type='submit'>Create</button>
                </div>
              </form>
            </div>
            <div className='color'>
              <h3>Colors</h3>
              <form onSubmit={handleColor}>
                <div className="form-group">
                  <input type="text" placeholder='color' name='color' required />
                </div>
                <div className="form-group">
                  <button>Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AccessoriesWrap>
  )
}

export default Accessories