import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const ContextIngatlanAdmin = createContext();


export const ContextIngatlanAdminProvider = ({ children }) => {

  const [ingatlan, setIngatlan] = useState([]);
  

  //adatok lekérése a szerverről 
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("/ingatlans").then((response) => {
          console.log(response.data);
          setIngatlan(response.data);
        });
      } catch (error) {
        console.error("Hiba történt az adatok lekérdezésekor:", error);
      }
    };
    fetchData();
    }, []);


   
 

  return (
    <ContextIngatlanAdmin.Provider value={{ ingatlan, setIngatlan }}>
      {children}
    </ContextIngatlanAdmin.Provider>
  );
};

export const useContextIngatlanAdmin = () => {
  return useContext(ContextIngatlanAdmin);
};

