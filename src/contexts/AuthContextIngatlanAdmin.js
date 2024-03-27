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

  const deleteData = async (id) => {
    console.log(id);
    try {
      await axios.delete("/ingatlans/{id}").then((response) => {
        console.log(response.data);
      });
    } catch (error) {
      console.error("Hiba történt az adatok törlésekor:", error);
    }
  };

  return (
    <ContextIngatlanAdmin.Provider
      value={{ ingatlan, setIngatlan, deleteData }}
    >
      {children}
    </ContextIngatlanAdmin.Provider>
  );
};

export const useContextIngatlanAdmin = () => {
  return useContext(ContextIngatlanAdmin);
};
