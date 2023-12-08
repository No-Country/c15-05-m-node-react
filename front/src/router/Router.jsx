// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landing from "../components/pages/landing/Landing.jsx";
import Register from "../components/register/Register";
import CreateProducts from "../components/views/CreateProducts";
import EditProducts from "../components/views/EditProducts";
import Inventory from "../components/views/Inventory";
import LandingUA from "../components/views/LandingUA";
import Catalogo from "../components/views/Catalogo";
import Analitics from "../components/views/Analiticas";
import DetailsProduct from "../components/views/DetailsProduct"
import DashboardGlobal from "../components/dashboard/global/DashboardPage";
import Login from "../components/register/Login";
import RegisterUser from "../components/register/RegisterUser";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register-company" element={<Register />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ua/landing" element={<LandingUA />}/>{/*"/dashboard/ua/:id" */}
        <Route path="/ua/product/create" element={<CreateProducts />}/>
        <Route path="/ua/product/edit" element={<EditProducts />}/>
        <Route path="/ua/product/inventory" element={<Inventory />}/>
        <Route path="/ua/product/catalogo" element={<Catalogo />}/>
        <Route path='/ua/product/detail/:detailId' element={<DetailsProduct />}/>
        <Route path="/ua/product/analitics" element={<Analitics />}/>
        <Route path="/Dashboard" element={<DashboardGlobal/>}/>
    </Routes>
  </>
  
    
  );
};

export default router;
