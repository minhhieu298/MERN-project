import React, { useRef } from 'react'
import useOnClickOutside from '../../../library/hooks/useOnClickOutside'
import { FilterWrap } from './index.style'
import * as Icon from '../../../library/icons/index'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { getStateFromUrl, setStateToUrl } from './Seach/url_handler';
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { colors, getGender, sizes } from './Seach/SearchParams';

const FilterPage = ({ filter, setFilter, categories }) => {
    const ref = useRef(null)
    useOnClickOutside(ref, () => setFilter(false))
    let navigate = useNavigate()
    let location = useLocation()

    const [searchParam] = useSearchParams()
    const params = getStateFromUrl(location)
    const state = {
        cp: params.cp || '',
        cc: params.cc || '',
        sort: params.sort || '',
        size: params.size || '',
        color: params.color || '',
        gender: params.gender || '',
        q: params.q || '',
        page: 1
    }

    const onChange = (e, type) => {
        if (e.target.checked) {
            let query = {}
            if (type === 'cp') {
                query = {
                    ...state,
                    cp: e.target.value,
                    cc: '',
                    sort: '',
                    size: '',
                    color: '',
                    page: 1,
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
            if (type === 'cp') {
                query = {
                    ...state,
                    cp: '',
                    cc: '',
                }
            }
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
            if (type === 'gender') {
                query = {
                    ...state,
                    gender: ''
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

    return (
        <FilterWrap  className={`${filter ? 'active' : ''}`}>
            <div className="modal-filter" ref={ref}>
                <div>
                    <button onClick={() => setFilter(false)}><span><Icon.CloseOutlinedIcon /></span></button>
                </div>
                <div>
                    <div className="categories">
                        <h2>Categories</h2>
                        <FormGroup>
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
                    <div className="gender">
                        <h2>Gender</h2>
                        <FormGroup>
                            {
                                getGender.options.map(item => (
                                    <FormControlLabel
                                        key={item?.label} control={<Checkbox />}
                                        value={item?.label}
                                        label={item?.label}
                                        onChange={(e) => onChange(e, 'gender')}
                                        checked={searchParam.get('gender') === item?.label ? true : false}
                                    />
                                ))
                            }
                        </FormGroup>
                    </div>
                    <div className="color">
                        <h2>Color</h2>
                        <div>
                            {
                                colors.map(item => (
                                    <FormGroup key={item.type}>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            value={item.type}
                                            label={item.type}
                                            onChange={(e) => onChange(e, 'color')}
                                            checked={searchParam.get('color') === item.type ? true : false}
                                        />
                                    </FormGroup>
                                ))
                            }
                        </div>
                    </div>
                    {
                        searchParam.get('cp') && <div className="size">
                            <h2>size</h2>
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
                                                            label={item.type}
                                                            onChange={(e) => onChange(e, 'size')}
                                                            checked={searchParam.get('size') === item.type ? true : false}
                                                        />
                                                    </FormGroup>
                                                ))
                                            }
                                        </React.Fragment>
                                    )))
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className="btn">
                    <button onClick={onSearchReset}>Clear filter</button>
                    <button onClick={() => setFilter(false)}>Cancel</button>
                </div>
            </div>
        </FilterWrap>
    )
}

export default FilterPage