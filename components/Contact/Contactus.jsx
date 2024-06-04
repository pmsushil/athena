import React, { useState } from 'react';
import Footer from '../Landing Page/Footer';
import { SiGooglemaps } from "react-icons/si";


const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-600 text-center">
            We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.
          </p>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-slate-200 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-slate-200 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block bg-slate-200 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=' text-center '>
    
      <h3 className="text-2xl font-bold mb-2 mt-4">Office:</h3>
            <p>
              St George's House |6 St George's Way <br/> Leicester | LE1 1QZ <br/>+44 (0)
              800 060 8702
            </p>

      </div>
    
    </div>
    <Footer/>
    </>
  );
};

export default Contactus;
