// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/register/Register";

import CreateProducts from "../components/pagesUA/CreateProducts";
import EditProducts from "../components/pagesUA/EditProducts";
import Inventory from "../components/pagesUA/Inventory";
import LandingUA from "../components/pagesUA/LandingUA";
import Catalogo from "../components/pagesUA/Catalogo";
import Analitics from "../components/pagesUA/Analiticas";

import DashboardGlobal from "../components/dashboard/global/DashboardPage"
//esto esta importado para poder trabajar, luego ira dentro de cada dashboard
import ViewCatalogo from "../components/Catalogo/viewCatalogo/ViewCatalogo";




const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* esta ruta esta hecha solo para poder trabajar, su contenido luego ira dentro de cada dashboard */}
        <Route path='/catalogo' element={<ViewCatalogo />}/>

        <Route path="/ua/landing" element={<LandingUA />}/>{/*"/dashboard/ua/:id" */}
        <Route path="/ua/product/create" element={<CreateProducts />}/>
        <Route path="/ua/product/edit" element={<EditProducts />}/>
        <Route path="/ua/product/inventory" element={<Inventory />}/>
        <Route path="/ua/product/catalogo" element={<Catalogo />}/>
        <Route path="/ua/product/analitics" element={<Analitics />}/>

        <Route path="/Dashboard" element={<DashboardGlobal/>}/>

      </Routes>
    </>
  );
};

export default router;
