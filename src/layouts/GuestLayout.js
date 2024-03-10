import React from "react";
import {Navigate, Outlet } from "react-router-dom";
import Navbars from "../components/Navbars";
import useAuthContext from "../contexts/AuthContext";



export default function GuestLayout() {
  const {user }=useAuthContext();
  return (
   
    
   
    <>
    <Navbars />
    <Outlet />
    </>
  );
}
