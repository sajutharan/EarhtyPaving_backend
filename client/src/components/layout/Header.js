import React from 'react'
import logo from '../../images/page-1-removebg-preview.png';
import './Header.css';
import {NavLink,Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Tooltip } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header>
      <div className='site-header'>
        <div className='primary-menu'>
          <div className='mobile-menu'></div>
          <div className='logo-area'>
            < Tooltip titile = 'Home'>
              <Link to = '/'>
                <img src = {logo} alt = 'logo of Earthypaving  'style = {{width:'90px'}}/>
              </Link>
            </Tooltip>
          </div>
          <nav className='pages-area'>
            <NavLink to = '/' className={({isActive}) => isActive? 'active' : ''}>
              <HomeIcon/>Home
            </NavLink>
            <NavLink to = '/product' className={({isActive}) => isActive? 'active' : ''}>
              Product
            </NavLink>
            <NavLink to = '/about-us' className={({isActive}) => isActive? 'active' : ''}>
              About Us
            </NavLink>
            <NavLink to = '/contact-us' className={({isActive}) => isActive? 'active' : ''}>
              Contact Us
            </NavLink>
          </nav>
        </div>
        <div className='secondary-menu'>
          <Tooltip titile= 'Your cart'>
            <Link to = '/cart' style = {{padding : '8px 15px'}}>

            </Link>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}

export default Header

