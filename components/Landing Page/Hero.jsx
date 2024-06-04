import React from 'react'
import Cloud from './../../assets/qt=q_95.webp'

const Hero = () => {
  return (
    <div className="relative bg-gray-900  px-4  h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://source.unsplash.com/random/1600x900/?cloud,technology"
          alt="Cloud Technology Background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <img src={Cloud} alt='Anthena' className='h-60 mx-auto sm:mx-0'></img>
        <div className="text-center">
          <h2 className="text-4xl tracking-tight font-extrabold  text-white sm:text-5xl md:text-6xl" >
          "Data is our asset"
          </h2>
          <p className="mt-3 max-w-5xl mx-auto text-gray-300 lg:text-3xl sm:text-xl  md:mt-5 md:max-w-full font-extralight">
          Our solutions revolutionize Cloud data management through the infusion of intelligent insights with advanced technologies
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero