import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';

export default function App() {
  return (
  


  <Router>

<Navbar/>

<Routes>
<Route path="/" element={<Home/>}/>
     
                
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
       
        </Routes>
        </Router>
  
  )
}
