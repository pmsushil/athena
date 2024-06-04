import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing Page/Landing'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'


import Careers from './components/Careers/Careers'


const App = () => {
  return (
    <div className='bg-white text-black'>
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      <Route path='/careers' element={<Careers/>}/>

      </Routes>
      </Router>
      </div>
  )
}

export default App
