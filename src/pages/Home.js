import React from 'react'
import { Footer, Body } from '../containers';
import { Navbar } from '../components';

const Home = ({ loggedIn}) => {

  return (
    <div className='Home'>
      <Navbar 
      loggedIn = {loggedIn}
      />
      <Body />
      <Footer />
    </div>
  )
}

export default Home;