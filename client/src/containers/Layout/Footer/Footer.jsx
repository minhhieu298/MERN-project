import React from 'react'
import Container from '../../../components/UI/container/Container'
import FooterWrap, { Box, Grid } from './index.style'
import * as Icon from '../../../library/icons/index'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer-top">
        <Container fluid={true}>
          <Box>
            <Grid top={true}>
              <div>
                <h2>Address</h2>
                <ul>
                  <li><Icon.LocationOnIcon /> <span>Helendo, Chicago, USA 2023</span></li>
                  <li><Icon.LocalPhoneIcon /> <span>+846677028028</span></li>
                </ul>
              </div>
            </Grid>
            <Grid top={true}>
              <div>
                <h2>Help & Information</h2>
                <ul>
                  <li>
                    <Link to='/'>Help & Contact Us</Link>
                  </li>
                  <li>
                    <Link to='/'>Returns & Refunds</Link>
                  </li>
                  <li>
                    <Link to='/'>Online Stores</Link>
                  </li>
                  <li>
                    <Link to='/'>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid top={true}>
              <div>
                <h2>About Us</h2>
                <ul>
                  <li>
                    <Link to='/'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/'>What We Do</Link>
                  </li>
                  <li>
                    <Link to='/'>FAQ Page</Link>
                  </li>
                  <li>
                    <Link to='/'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid top={true}>
              <div>
                <h2>Newsletter</h2>
                <form onSubmit={e => e.preventDefault()}>
                  <div>
                    <input type="email" placeholder='Your email address' />
                    <button><Icon.ArrowForwardOutlinedIcon /></button>
                  </div>
                </form>
                <ul>
                  <li>
                    <Link to='/'>Term & Condition</Link>
                  </li>
                  <li>
                    <Link to='/'>Policy</Link>
                  </li>
                  <li>
                    <Link to='/'>Map</Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </Box>
        </Container>
      </div>
    </FooterWrap>
  )
}

export default Footer