import React, { useEffect } from 'react'
import { Footer, Body } from '../containers';
import { Navbar } from '../components';
import { axiosPrivate } from '../utils/axios';

const Home = () => {

  const getData = async () => {
    const res = await axiosPrivate.get("/api/items")

    console.log(res.data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='Home'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default Home