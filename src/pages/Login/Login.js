import React from 'react'
import { Navbar } from '../../components'
import './Login.css'
import lostandfound from '../../images/website_images/lostandfound.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='found__login'>
      <Navbar />
      <div className='found__login-box'>
        <div className='found__login-container'>
          <div className='found__login-container-image'>
            <img src={lostandfound} alt="LostAndFoundImg" />
          </div>
          <div className='found__login-container-info'>
            <h1>Welcome Back!</h1>
            <form action="/">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name='username' className='form-element' placeholder='Enter username or email' />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name='password' className='form-element' placeholder='Enter password' />
              <Link to="/">
                <button type='Submit' className='login_btn'>Log in</button>
              </Link>
            </form>
            <p className='no-acc'>Don’t have an account yet? <Link to="/register"><span>Register here</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login