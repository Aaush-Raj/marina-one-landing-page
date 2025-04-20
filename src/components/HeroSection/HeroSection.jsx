import React from 'react'
import HeroCarousel from './HeroCarousel'
import LaunchCard from './LaunchCard'

const HeroSection = () => {
  return (
    <div id="home" className='relative'><HeroCarousel/>
    <LaunchCard/>
    </div>
  )
}

export default HeroSection