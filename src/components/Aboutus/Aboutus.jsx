import React from 'react';
import Footer from '../Landing Page/Footer';

const services = [
    {
      title: 'Our Vision',
      description: "Our vision at Athena Advisory Solutions Limited is to become the go-to IT services provider for small businesses. We aim to achieve this by providing exceptional services that help our clients achieve their business goals and stay ahead of the curve in the ever-evolving world of technology.",
      
    },
    {
      title: 'Our Values',
      description: "At Athena Advisory Solutions Limited, we believe in honesty, integrity, and accountability. We understand the importance of trust in business relationships and strive to build long-lasting partnerships with our clients. We also value innovation and continuous improvement, and are always looking for ways to improve our services and stay ahead of the competition.",
     
    },
  ]
  

const Aboutus = () => {
    return (
      <>
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Company Overview */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">About Athena Cloud Solutions</h1>
                    <p className="text-xl text-gray-700">Innovative cloud solutions tailored to propel your business forward.</p>
                </div>
                {/* Mission and Values */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      {services.map((service, index) => (
        <div key={index} className='flex flex-col gap-8 m-12'>
          <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
          <p className=' font-extralight text-xl'>{service.description}</p>
        </div>
      ))}
    </div>
                {/* Team Section */}
                {/* <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
                    <div className="flex flex-wrap justify-center items-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-gray-600 mb-4">{member.role}</p>
                                    <p className="text-gray-700">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8">Join Our Journey</h2>
                    <p className="text-lg text-gray-700 mb-8">Ready to transform your business with our cutting-edge cloud solutions? Get in touch with us today to learn more about how we can help you achieve your goals.</p>
                    <a href="/contact" className="bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        photo: 'https://via.placeholder.com/150',
        bio: 'John has over 20 years of experience in the tech industry and leads the company with a vision for innovation and excellence.'
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        photo: 'https://via.placeholder.com/150',
        bio: 'Jane is an expert in cloud technologies and is responsible for overseeing all technical aspects of the company.'
    },
    {
        name: 'Michael Johnson',
        role: 'COO',
        photo: 'https://via.placeholder.com/150',
        bio: 'Michael ensures our operations run smoothly and efficiently, supporting our mission to deliver top-notch services.'
    },
    {
        name: 'Emily Davis',
        role: 'CFO',
        photo: 'https://via.placeholder.com/150',
        bio: 'Emily manages the financial actions of the company, ensuring we are strategically aligned for growth and stability.'
    }
];

export default Aboutus;
