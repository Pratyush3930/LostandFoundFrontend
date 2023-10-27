import React from 'react'
import { Navbar } from '../../components'
import './Register.css'
import lostandfound from '../../images/website_images/lostandfound.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {
const navigate = useNavigate();
  return (
    <div className='found__login'>
      <Navbar />
      <div className='found__login-box'>
        <div className='found__login-container'>
          <div className='found__login-container-image'>
            <img src={lostandfound} alt="LostAndFoundImg" />
          </div>
          <div className='found__login-container-info'>
            <h1>Register</h1>
            <form action="/submit" method="POST" onSubmit={(e) => props.handleSubmit(e , navigate)}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name='username' className='form-element form-margin' placeholder='Enter username' />
              <label htmlFor="email">Email</label>
              <input type="email" id='email' name="email" className='form-element form-margin' placeholder='Enter your email' />
              <label htmlFor="password">Password</label>
              <div className='confirm_password'>
                <div className='enter_pass'>
                  <input type="password" id="password" name='password' className={!props.passwordMatch ?'form-err' : 'form-element'} placeholder='Enter password' />
                </div>
                <div className='retype_pass'>
                  <input type="password" id="retype_password" name='retype_password' className={!props.passwordMatch ?'form-err' : 'form-element'} placeholder='Enter password' />
              </div>
                </div>
                {!(props.passwordMatch) && <p className='error'>The passwords do not match!</p>}
                {!(props.validPass) && <p className='error'>The passwords is too short!</p>}
                {(props.userExists) && <p className='error'>This user already exists.</p>}
                <button type='Submit' className='login_btn'>Register</button>
            </form>
            <p>Already have an account? <Link to="/login"><span>Login</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register