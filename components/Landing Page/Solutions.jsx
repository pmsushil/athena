import React from 'react'
import img1 from '../../assets/aasl2.webp'
import img2 from '../../assets/aasl3.webp'

const services = [
  {
    title: 'Our Vision',
    description: "Our vision at Athena Advisory Solutions Limited is to become the go-to IT services provider for small businesses. We aim to achieve this by providing exceptional services that help our clients achieve their business goals and stay ahead of the curve in the ever-evolving world of technology.",
    img: img1
  },
  {
    title: 'Our Values',
    description: "At Athena Advisory Solutions Limited, we believe in honesty, integrity, and accountability. We understand the importance of trust in business relationships and strive to build long-lasting partnerships with our clients. We also value innovation and continuous improvement, and are always looking for ways to improve our services and stay ahead of the competition.",
    img: img2
  },
]

const Solutions = () => {
  return (
    <>
    <h2 className=' text-center mt-20 lg:text-5xl text:3xl font-bold mb-8 text-[#37a9e6]'>
    About Athena Advisory Solutions Limited
    </h2>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      {services.map((service, index) => (
        <div key={index} className='flex flex-col gap-8 m-12'>
         <img src={service.img} alt={service.title} className="mt-4" />

          <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
          <p className=' font-extralight text-xl'>{service.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Solutions