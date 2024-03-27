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

  let token = "";
  const csrf = () =>
    axios.get("/token").then((response) => {
      console.log(response);
      token = response.data;
    });

  const deleteData = async (id) => {
    await csrf();
    console.log(token);
    console.log(id);
    try {
      await axios.delete(`/ingatlans/${id}`, { headers: { 'X-CSRF-TOKEN': token}}).then((response) => {
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
