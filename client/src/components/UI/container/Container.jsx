import ContainerWrap from './style'
import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, fullWidth, fluid }) => {
    return (
        <ContainerWrap
            fullWidth={fullWidth}
            fluid={fluid}
        >
            {children}
        </ContainerWrap>
    )
}

Container.propTypes = {
    fullWidth: PropTypes.bool,
}

export default Container