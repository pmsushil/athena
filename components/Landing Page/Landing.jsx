import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Enterprise from './Enterprise'
import Footer from './Footer'
import NewSlide from './NewSlide'

import Ourapproach from './Ourapproach'
import Getstarted from './Getstarted'
import Solutions from './Solutions'

const Landing = () => {
  return (
    <div>
      <Navbar/>
     
     <Hero/>
     <Solutions/>
    <Enterprise/>
    <Ourapproach/>
     <Getstarted/>
     <NewSlide/>
     <Footer/>
    </div>
  )
}

export default Landing
