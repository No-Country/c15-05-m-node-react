// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landing from "../components/pages/landing/Landing.jsx";
import CreateProducts from "../components/pagesUA/CreateProducts.jsx";
import EditProducts from "../components/pagesUA/EditProducts.jsx";
import Inventory from "../components/pagesUA/Inventory";
import LandingUA from "../components/pagesUA/LandingUA";
import Catalogo from "../components/pagesUA/Catalogo";
import Analitics from "../components/pagesUA/Analiticas";
import DetailsProduct from "../components/pagesUA/DetailsProduct"
import DashboardGlobal from "../components/dashboard/global/DashboardPage";
import Login from "../components/register/Login";
import RegisterUser from "../components/register/RegisterUser";
import ProtectedRoute from "../components/Utils/ProtectedRoute.jsx";
import { useLocalStorage } from "react-use";
import RegisterCompany from "../components/register/RegisterCompany.jsx"

const router = () => {
  const [user] = useLocalStorage("user");
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route path="/ua/landing" element={<LandingUA />} />
          {/*"/dashboard/ua/:id" */}
        </Route>
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route path="/ua/product/create" element={<CreateProducts />} />
        </Route>
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route path="/ua/product/edit" element={<EditProducts />} />
        </Route>
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route path="/ua/product/inventory" element={<Inventory />} />
        </Route>
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route path="/ua/product/catalogo" element={<Catalogo />} />
        </Route>
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route
            path="/ua/product/detail/:detailId"
            element={<DetailsProduct />}
          />
        </Route>
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route path="/ua/product/analitics" element={<Analitics />} />
        </Route>
        <Route element={<ProtectedRoute canActivate={user} />}>
          <Route path="/Dashboard" element={<DashboardGlobal />} />
        </Route>
      </Routes>
    </>
  );
};

export default router;
