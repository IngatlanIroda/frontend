import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import Navbars from "../components/Navbars";
import useAuthContext from "../contexts/AuthContext";

export default function AuthLayout() {
    const {user, logout }=useAuthContext();
  return (
    user?
    <>
      <Navbars />
      <Outlet />
    </>
    :
    <>
    <Navigate to= "/Home"/>
    </>
  );
  }