import './Footer.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='found__footer'>
        <div className="found__footer-elements">
            <div className="found__footer-elements_about">
                <h3>About us</h3>
                <div></div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt impedit laudantium modi inventore ratione similique suscipit molestias ea velit eveniet quia dolorem asperiores, ex porro cum maxime, sunt a est?
                </p>
            </div>
            <div className="found__footer-elements_contact">
                <h3>Contact us</h3>
                <div></div>
                <p>Kalanki , Kathmandu</p>
                <p>9204034201</p>
                <p>knowmore@gmail.com</p>
            </div>
        </div>
        <div className='found__footer-copyright'>
            <p>&copy; All rights reserved</p>
        </div>
        
    </div>
  )
}

export default Footer