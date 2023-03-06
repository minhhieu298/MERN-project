import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import { Div } from '../../index.style'
import * as Icon from '../../../../library/icons/index'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { getStateFromUrl, setStateToUrl } from '../url_handler'
import { colors, sizes } from '../SearchParams'

const Category = ({ categories }) => {
    let location = useLocation()
    let navigate = useNavigate()
    const params = getStateFromUrl(location)
    const [searchParam] = useSearchParams()
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

    const onSearchReset = () => {
        const search = setStateToUrl({ reset: '' });
        navigate({
            pathname: location.pathname,
            search: `?${createSearchParams(search)}`,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        let q = Object.fromEntries(new FormData(e.target))
        navigate(`${location.pathname}?q=${q.keyword}&page=${page}`);
    }

    return (
        <React.Fragment>
            <div className="search">
                <h4>Search</h4>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Search here...' name='keyword' />
                        <button><Icon.SearchOutlinedIcon /></button>
                    </form>
                </div>
            </div>
            <div className="categories">
                <div className={`box ${location.search ? 'active' : ''}`}>
                    <div className="filter">
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
                    <div className="color">
                        <h3>Color</h3>
                        <div>
                            {
                                colors.map(item => (
                                    <FormGroup key={item.type}>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value={item.type}
                                            label={<Div c={true} b={item.type} className={`${searchParam.get('color') === item.type ? 'active' : ''}`} />}
                                            onChange={(e) => onChange(e, 'color')}
                                            checked={searchParam.get('color') === item.type ? true : false}
                                        />
                                    </FormGroup>
                                ))
                            }
                        </div>
                    </div>
                    <div className="size">
                        <h3>size</h3>
                        <div>
                            {
                                sizes.filter(s => s.name.toLowerCase() === categories?.filter(e => e.slug === searchParam.get('cp'))[0]?.name.toLowerCase()).map((x => (
                                    <React.Fragment key={x.name}>
                                        {
                                            x.options.map(item => (
                                                <FormGroup key={item.type}>
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        value={item.type}
                                                        label={<Div s={true} className={`${searchParam.get('size') === item.type ? 'active' : ''}`}>{item.type}</Div>}
                                                        onChange={(e) => onChange(e, 'size')}
                                                        checked={searchParam.get('size') === item.type ? true : false}
                                                    />
                                                </FormGroup>
                                            ))
                                        }
                                    </React.Fragment>
                                )))
                                // sizes.map(item => (

                                // ))
                            }
                        </div>
                    </div>
                    <div className="clear-filter">
                        <button onClick={onSearchReset}>Clear Filter</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Category