import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Market from './components/Market'
import CoinList from './components/CoinList'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <Market />
      <FeaturesSection />
      <CoinList />
      <Footer />
    </div>
  )
}

export default Home