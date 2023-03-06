import React, { useEffect, useState } from 'react'
import { AgentAddressWrap } from './index.style'
import useStore from '../../../library/hooks/useStore'
import { deleteAdr, getAdr, setDefaultAdr } from '../../../redux/actions/address.action'
import useWindowSize from '../../../library/hooks/useWindowSize'
import CreateAddress from './Address/CreateAddress'
import UpdateAddress from './Address/UpdateAddress'
const AgentAddress = () => {
  const [open, setOpen] = useState(false)
  const [update, setUpdate] = useState(false)
  const [updateAd, setUpdateAdr] = useState({})
  const { dispatch, addresses, token } = useStore()
  const { width } = useWindowSize()
  
  const handleUpdate = (adr) => {
    setUpdate(true)
    setUpdateAdr(adr)
  }

  const handleSetDefaultAdr = (addressId) => {
    dispatch(setDefaultAdr(addressId, token))
  }

  const handleDeleteAdr = (addressId) => {
    dispatch(deleteAdr(addressId, token))
  }

  useEffect(() => {
    dispatch(getAdr(token))
  }, [dispatch])

  return (
    <React.Fragment>
      <AgentAddressWrap>
        <div className="title-address">
          <h4>Địa chỉ của tôi</h4>
          <div>
            <button type='button' onClick={() => setOpen(true)}><span>Thêm địa chỉ mới</span></button>
          </div>
        </div>
        {
          !addresses.length ? <div>no address</div> : <div className='content-address'>
            <h5>Địa chỉ</h5>
            <div className="list-address">
              {
                addresses?.map(adr => (
                  <div key={adr?._id} className="list-address-item">
                    <div className="heading">
                      <div className="title">
                        <div>{adr?.name}</div>
                        <div></div>
                        <div>{adr?.phone}</div>
                      </div>
                      <div className="btn">
                        <button onClick={() => handleUpdate(adr)}>Cập nhật</button>
                        {
                          addresses.length > 1 && !adr?.isSelected ? <button onClick={() => handleDeleteAdr(adr?._id)}>xóa</button> : ''
                        }
                        {
                          addresses.length === 1 ? <button onClick={() => handleDeleteAdr(adr?._id)}>xóa</button> : ''
                        }
                      </div>
                    </div>
                    <div className="heading">
                      <div className="title">
                        <div>{adr?.address}</div>
                        <div>{`${adr?.city},${adr?.district},${adr?.state}`}</div>
                      </div>
                      {
                        width > 576 && <div className="btn">
                          <button disabled={adr?.isSelected} onClick={() => handleSetDefaultAdr(adr?._id)}>Thiết lập mặc định</button>
                        </div>
                      }
                    </div>
                    {
                      adr?.isSelected && <div className='footer'>
                        <span>Mặc định</span>
                      </div>
                    }
                    {
                      width <= 576 && <div className="btn">
                        <button disabled={adr?.isSelected} onClick={() => handleSetDefaultAdr(adr?._id)}>Thiết lập mặc định</button>
                      </div>
                    }
                  </div>
                ))
              }
            </div>
          </div>
        }
      </AgentAddressWrap>
      {
        open && <CreateAddress open={open} setOpen={setOpen} />
      }
      {
        update && <UpdateAddress update={update} setUpdate={setUpdate} data={updateAd} />
      }
    </React.Fragment>
  )
}

export default AgentAddress