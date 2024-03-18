import React, { useEffect } from 'react'
import Navbars from "../components/Navbars";
import useAuthContext from '../contexts/AuthContext';


const Admin = () => {
  const { user, getUser } = useAuthContext();
  
  useEffect(() => {
      console.log(user)
      if (!user) {
          getUser();
      }
  });
  
  return (
    <>
    
    <Navbars/>
    <div>Adminisztráció</div>
    <p>Bejelentekezett: {user?.name}</p>
    </>
)}
export default Admin