// import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Landing from "../components/pages/landing/Landing.jsx";
import RegisterCompany from "../components/register/RegisterCompany.jsx";

import CreateProducts from "../components/pagesUA/CreateProducts";
import EditProducts from "../components/pagesUA/EditProducts";
import Inventory from "../components/pagesUA/Inventory";
import LandingUA from "../components/pagesUA/LandingUA";
import Catalogo from "../components/pagesUA/Catalogo";
import Analitics from "../components/pagesUA/Analiticas";

import DetailsProduct from "../components/pagesUA/DetailsProduct"

import DashboardGlobal from "../components/dashboard/global/DashboardPage";
import Login from "../components/register/Login";
import RegisterUser from "../components/register/RegisterUser";

const router = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register-company" element={<RegisterCompany />} />
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
    </Router>
  </>
  
    
  );
};

export default router;
