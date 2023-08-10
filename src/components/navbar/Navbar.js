import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/website_images/findit.png';

const Navbar = () => {
  // const logo = 
  return (
    <div className='found__navbar'>
      <div className='found__navbar-links'>
        <div className='found__navbar-links_logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='found__navbar-links_container'>
          {/* <p><a href="">Home</a></p>
                <p><a href="">Lost Items</a></p>
                <p><a href="">Found Items</a></p> */}
          <div></div>
          <p>Home</p>
          <p>Lost Items</p>
          <p>Found Items</p>
        </div>
      </div>
      <div className='found__navbar-sign'>
        <Link to="/login">
          <p>Sign in</p>
        </Link>
        <Link to="/register">
          <button className='btn'>Sign up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar