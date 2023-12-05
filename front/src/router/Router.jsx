import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../components/home/Home';
import Register from '../components/register/Register';
import RegisterUser from '../components/register/RegisterUser';
import Login from '../components/register/Login';


const router = () => {
  return (
  <Router>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/logUser' element={<RegisterUser/>}/>
<Route path='/login' element ={<Login/>}/>


 </Routes>
  </Router>
  )
}

export default router