import React from 'react'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Error from './components/error'
import  ColorSchemesExample from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
function App() {
  return (
<div>
   
   <Router>
     <ColorSchemesExample/>
   
   



   <Routes>

    <Route path='/' element={<Home/>}/>
    
    <Route path='/about' element={<About/>}/>
  
   <Route path='/contact' element={<Contact/>}/>

   <Route path='*' element={<Error/>}/>

  </Routes>
  


  </Router>

  </div>
  
  )
}

export default App