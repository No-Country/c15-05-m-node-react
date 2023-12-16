import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
import { verifyTokenRequet } from "./verify";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  // CheckLogin
  async function checkLogin() {
    const cookies = Cookies.get();
    if (!cookies || !cookies.token) {
      navigate("/login");
      return false
    }

    try {
      const res = await verifyTokenRequet(cookies.token);

      if (!res.data) {
        navigate("/login")
        return false
      }

      return true
    } catch (error) {
      console.log(error)
      navigate("/login")
      return false
    }
  }

  useEffect(() => {
    checkLogin()
  },[navigate])

  return <Outlet />
};

export default ProtectedRoute
