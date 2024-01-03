import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Market from './components/Market'
import CoinList from './components/CoinList'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <Market />
      <CoinList />
    </div>
  )
}

export default Home