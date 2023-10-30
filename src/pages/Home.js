import React from 'react'
import { Footer, Body } from '../containers';
import { Navbar } from '../components';

const Home = ({ loggedIn , userData}) => {

  return (
    <div className='Home'>
      <Navbar 
      loggedIn = {loggedIn}
      userData = {userData}
      />
      <Body />
      <Footer />
    </div>
  )
}

export default Home;