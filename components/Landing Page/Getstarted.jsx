import React from 'react'
import Img1 from '../../assets/aasl1.webp'

const Getstarted = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-full w-full" style={{zoom: "0.9"}}>
      <div className="h-full w-full">
        <img src={Img1} alt="img1" className="object-cover h-full w-full" />
      </div>
      <div className='bg-black text-white h-full w-full'>
        <h2 className="text-xl px-12 lg:pt-40 pt-20">Hello</h2>
        <h2 className="text-4xl font-bold ml-12 mt-4">Affordable IT Services</h2>
        <p className="text-gray-400 mt-4 text-2xl mx-12 py-4 text-left font-extralight">
          Welcome to Athena Advisory Solutions Limited, your one-stop-shop for affordable and reliable IT services. We specialize in Data migration, Cloud computing, Business Intelligence solutions and much more.
        </p>
        <div className='p-8 sm:text-center'>
          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default Getstarted