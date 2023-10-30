import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/website_images/findit.png';

const Navbar = ({ loggedIn , userData }) => {
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
      {!loggedIn &&
        (<div className='found__navbar-sign'>
          <Link to="/login">
            <p>Sign in</p>
          </Link>
          <Link to="/register">
            <button className='btn'>Sign up</button>
          </Link>
        </div>)
      } 
    
    {loggedIn &&  (
    <div className='dropdown'>
    
      <p className='found__navbar-userInfo'>{(userData.name).toUpperCase()}</p>
      <div className='dropdown-content'>
        <a href="/">LogOut</a>
      
    </div>
    </div>
    )}
   </div>
  )
}

export default Navbar