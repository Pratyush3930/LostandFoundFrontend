import React from 'react'
import { Footer, Body } from '../containers';
import { Navbar } from '../components';

const Home = ({ loggedIn , data , }) => {

  return (
    <div className='Home'>
      <Navbar/>
      <Body
        data={data}
        loggedIn={loggedIn}
      />
      <Footer />
    </div>
  )
}

export default Home;