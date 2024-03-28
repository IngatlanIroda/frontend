import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const ContextIngatlanAdmin = createContext();

export const ContextIngatlanAdminProvider = ({ children }) => {
  const [ingatlan, setIngatlan] = useState([]);
  const [errors, setErrors] = useState({
    ing_id: "",
    nagysag: "",
    tipus_megnevezes: "",
    szobaszam: "",
    leiras: "",
    cim: "",
    erkely: "",
    terasz: "",
    kert: "",
  });

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

  const ujIngatlan = async ({ ...adat }) => {
    await csrf();
    console.log(token);
    adat._token = token;
    console.log(adat);
    try {
      await axios.post("/ingatlans",  adat);
      console.log("siker");
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const deleteData = async (id) => {
    await csrf();
    console.log(token);
    console.log(id);
    try {
      await axios
        .delete(`/ingatlans/${id}`, { headers: { "X-CSRF-TOKEN": token } })
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.error("Hiba történt az adatok törlésekor:", error);
    }
  };

  return (
    <ContextIngatlanAdmin.Provider
      value={{ ingatlan, setIngatlan, deleteData, ujIngatlan }}
    >
      {children}
    </ContextIngatlanAdmin.Provider>
  );
};

export const useContextIngatlanAdmin = () => {
  return useContext(ContextIngatlanAdmin);
};
