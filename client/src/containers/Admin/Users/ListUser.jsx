import React, { useEffect, useState } from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import UserWrap from './index.style'
import * as Icon from '../../../library/icons/index'
import useStore from '../../../library/hooks/useStore'
import { getListUser } from '../../../redux/actions/auth.action'
import { getStateFromUrl, setStateToUrl } from './url_handler'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { convertUTCDateToLocalDate } from '../../../library/helper/getTime'

const ListUser = () => {
    let navigate = useNavigate()
    let pageSize = 10;
    const { dispatch, token, users } = useStore()
    const [searchParam] = useSearchParams()
    let location = useLocation()
    const [page, setPage] = useState(1)
    console.log(users);

    const handleSearch = (e) => {
        e.preventDefault()
        let q = Object.fromEntries(new FormData(e.target))
        if (searchParam.get('cp')) {
            navigate(`${location.pathname}?cp=${searchParam.get('cp')}&q=${q.keyword}&page=1`);
        } else {
            navigate(`${location.pathname}?q=${q.keyword}&page=1`);
        }
    }

    const params = getStateFromUrl(location)
    const state = {
        sort: params.sort || '',
        q: params.q || '',
        page: 1
    }

    const onChange = (e, type) => {
        if (e.target.checked) {
            let query = {}
            if (type === 'sort') {
                query = {
                    ...state,
                    sort: e.target.value
                }
            }

            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });
        } else {
            let query = {}
            if (type === 'sort') {
                query = {
                    ...state,
                    sort: ''
                }
            }

            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });
        }
    }

    const onSearchReset = () => {
        const search = setStateToUrl({ reset: '' });
        navigate({
            pathname: location.pathname,
            search: `?${createSearchParams(search)}`,
        });
    };

    useEffect(() => {
        dispatch(getListUser({
            keyword: searchParam.get('q') || '',
            sort: searchParam.get('sort') || '',
            page: Number(searchParam.get('page')) || 1,
            pageSize
        }, token))
    }, [dispatch, token, searchParam])
    return (
        <UserWrap>
            <div className="container">
                <div className="container_head">
                    <h1>Danh sách người</h1>
                </div>
                <div className="container_tool">
                    <form onSubmit={handleSearch}>
                        <div>
                            <input type="text" placeholder='Tìm kiếm' name='keyword' />
                            <button><span><Icon.SearchOutlinedIcon /></span></button>
                        </div>
                    </form>
                </div>
                <div className="container_body">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'username'}
                                                label={'Tên người dùng'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'username' ? true : false}
                                            />
                                        </FormGroup>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'createdAt'}
                                                label={'Ngày tham gia'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'createdAt' ? true : false}
                                            />
                                        </FormGroup>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'email'}
                                                label={'Email'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'email' ? true : false}
                                            />
                                        </FormGroup>
                                    </div>
                                </th>
                                <th>Role</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => (
                                    <tr key={user?._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="user">
                                                <img src={user?.avatar} alt="" />
                                                <span>{user?.username}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{convertUTCDateToLocalDate(new Date(user?.createdAt))}</span>
                                        </td>
                                        <td>
                                            <span>{user?.email}</span>
                                        </td>
                                        <td>
                                            <span>{user?.role}</span>
                                        </td>
                                        <td>
                                            <div className='action'>
                                                <button><span><Icon.AiOutlineEye /></span></button>
                                                {/* <button><span><Icon.RiDeleteBinLine /></span></button> */}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </UserWrap>
    )
}

export default ListUser