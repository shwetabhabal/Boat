import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
import './style.css';
import Nav from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Deal from './Deal';
import Gwb from './Gwb';
import Order from './Order';
import Cart from './Cart';
import Login from './Login';

export default function Cont() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/deal' element={<Deal/>}/>
      <Route path='/gwb' element={<Gwb/>}/>
      <Route path='/co' element={<Order/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
</>
  
     
    
  )
}
