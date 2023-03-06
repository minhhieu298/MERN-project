import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { getStateFromUrl, setStateToUrl } from '../url_handler'
import * as Icon from '../../../../library/icons/index'

const CategoryMobile = ({categories}) => {
    let location = useLocation()
    let navigate = useNavigate()
    const [filter, setFiter] = useState(false)
    const [searchParam] = useSearchParams()
    const params = getStateFromUrl(location)
    const state = {
        cp: params.cp || '',
        cc: params.cc || '',
        sort: params.sort || '',
        size: params.size || '',
        color: params.color || '',
        page: 1
    }

    const onChange = (e, type) => {
        if (e.target.checked) {
            let query = {}
            if (type === 'cp') {
                query = {
                    // ...state,
                    cp: e.target.value,
                    cc: '',
                    sort: '',
                    size: '',
                    color: '',
                    page: 1
                }
            } else {
                query = {
                    ...state,
                    [type]: e.target.value
                }
            }

            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });
        } else {
            let query = {}
            if (type === 'cc') {
                query = {
                    ...state,
                    cc: ''
                }
            }
            if (type === 'sort') {
                query = {
                    ...state,
                    sort: ''
                }
            }
            if (type === 'color') {
                query = {
                    ...state,
                    color: ''
                }
            }
            if (type === 'size') {
                query = {
                    ...state,
                    size: ''
                }
            }
            const search = setStateToUrl(query);
            navigate({
                pathname: location.pathname,
                search: `?${createSearchParams(search)}`,
            });

        }
    }
    return (
        <React.Fragment>
            <div className="mobile">
                <button onClick={() => setFiter(true)}>Filter</button>
                <div className={`content ${filter ? 'active' : ''}`}>
                    {
                        filter && <div className="content-filter">
                            <div className="title">
                                <h3>Filter</h3>
                                <button onClick={() => setFiter(false)}><span><Icon.CancelIcon /></span></button>
                            </div>
                            <div className="inner-content">
                                <div className="sort">
                                    <h3>Sort</h3>
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'asc'}
                                                label={'Price: Low to High'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'asc' ? true : false}
                                                onClick={() => setDrop(false)}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                value={'desc'}
                                                label={'Price: High to Low'}
                                                onChange={(e) => onChange(e, 'sort')}
                                                checked={searchParam.get('sort') === 'desc' ? true : false}
                                                onClick={() => setDrop(false)}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="filter">
                                    <h3>Categories</h3>
                                    <div>
                                        {
                                            !searchParam.get('cp') && <FormGroup>
                                                {
                                                    categories?.map(item => (
                                                        <FormControlLabel
                                                            key={item?._id} control={<Checkbox />}
                                                            value={item?.slug}
                                                            label={item?.name}
                                                            onChange={(e) => onChange(e, 'cp')}
                                                            checked={searchParam.get('cp') === item?.slug ? true : false}
                                                        />
                                                    ))
                                                }
                                            </FormGroup>
                                        }
                                        {
                                            categories?.filter(e => e?.slug === searchParam.get('cp')) &&
                                            <FormGroup>
                                                {
                                                    categories?.filter(e => e?.slug === searchParam.get('cp')).map(c => (
                                                        <React.Fragment key={c?._id}>
                                                            {
                                                                c?.children?.map(item => (
                                                                    <FormControlLabel
                                                                        key={item?._id} control={<Checkbox />}
                                                                        value={item?.slug}
                                                                        label={item?.name}
                                                                        onChange={(e) => onChange(e, 'cc')}
                                                                        checked={searchParam.get('cc') === item?.slug ? true : false}
                                                                    />
                                                                ))
                                                            }
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </FormGroup>
                                        }
                                    </div>
                                </div>
                                <div className="color">dsadas</div>
                                {
                                    location.search && <div className="clear">
                                        <button onClick={onSearchReset}>Clear</button>
                                        <button onClick={() => setFiter(false)}>Cancel</button>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default CategoryMobile