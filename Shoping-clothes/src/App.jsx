import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Landing from './Views/Landing/Landing';
import Registro from './Views/Registro';
import NavBar from './Components/NavBar';
import Carrito from './Views/Carrito';
import Home from './Views/Home';
import { useLocation } from 'react-router-dom';
// import Card from './Components/Card';
function App() {

  const location = useLocation();

  const shouldShowNavBar = location.pathname !== '/form';
  return (
    
    <div className='font-kanit'>
    {shouldShowNavBar && <NavBar />}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/form' element={<Registro />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Carrito' element={<Carrito />} />
      {/* <Route path='/3d' element={<Card/>}/> */}
    </Routes>
  </div>
    
  )
}

export default App;
