// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/register/Register";
//esto esta importado para poder trabajar, luego ira dentro de cada dashboard
import ViewCatalogo from "../components/Catalogo/viewCatalogo/ViewCatalogo";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/catalogo' element={<ViewCatalogo />}/>
      </Routes>
    </>
  );
};

export default router;
