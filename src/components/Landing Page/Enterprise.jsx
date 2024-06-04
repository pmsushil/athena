import React from 'react'

const services = [
  { title: 'Cloud Services', description: 'Our Cloud Services provide a reliable and scalable solution for your business needs. We offer cloud migration, secure data storage, and cloud-based software solutions to help your business operate more efficiently and effectively.' },
  { title: 'Data Backup and Recovery', description: 'Our Data Backup and Recovery services provide peace of mind knowing your business data is secure and recoverable. We will set up automatic backups, test recovery processes, and ensure your data is safe in the event of a disaster.' },
  { title: 'Network Design and Implementation', description: 'Our Network Design and Implementation services provide customized network solutions for your business. We will assess your needs, design a network architecture, and implement the solution to ensure your business runs smoothly.' },
  { title: 'Managed IT Services', description: 'Our Managed IT Services provide comprehensive IT support and management for your business. We will proactively monitor your network and systems, handle all updates and patches, and provide fast and reliable support when you need it.' },
  { title: 'IT Consulting Services', description: 'Our IT Consulting Services provide expert advice and guidance to help your business make informed decisions about technology. We will assess your current systems, identify areas for improvement, and provide recommendations to help your business grow.' },
  { title: 'Cybersecurity Services', description: 'Our Cybersecurity Services provide comprehensive protection for your business against cyber threats. We offer risk assessments, vulnerability testing, threat monitoring, and training to ensure your business is secure.' },
];

const Enterprise = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Professional IT Services for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-[#e0c9cd] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Enterprise
