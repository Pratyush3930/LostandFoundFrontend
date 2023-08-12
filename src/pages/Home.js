import React from 'react'
import { Footer, Body } from '../containers';
import { Navbar } from '../components';

const Home = () => {

  return (
    <div className='Home'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default Home