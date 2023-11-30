// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Register from "../components/register/Register";
import CardsContainer from "../components/cardsContainer/CardsContainer";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<CardsContainer />}/>
      </Routes>
    </>
  );
};

export default router;
