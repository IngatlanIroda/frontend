import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const ContextHirdetes = createContext();

export const ContextHirdetesProvider = ({ children }) => {
  const [ingatlan, setIngatlan] = useState([]);
  const [errors, setErrors] = useState({
    ing_id:"",
    ing_tipus: "",
    futes_tipus: "",
    nagysag: "",
    szobaszam: "",
    erkely: "",
    terasz: "",
    kert: "",
    telepules: "",
    cim: "",
    leiras: "",
    ugytipus: "",
    user_id: "",
    hird_feladas_datuma: "",
    hird_lejarata: "",
    utolso_modositas_datuma: "",
    ar: ""
  });
  
  let token = "";
  const csrf = () =>
    axios.get("api/token").then((response) => {
      console.log(response);
      token = response.data;
    });


      //adatok lekérése a szerverről
   useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("api/ingatlans").then((response) => {
          console.log(response.data);
          setIngatlan(response.data);
        });
      } catch (error) {
        console.error("Hiba történt az adatok lekérdezésekor:", error);
      }
    };
    fetchData();
  }, []);


  const ujHirdetes = async ({ ...adat }) => {
    await csrf();
    //console.log(token);
    adat._token = token;
    console.log(adat);
    try {
      await axios.post("api/ingatlans",  adat).then((response)=>{
      console.log(response.data);
      })
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };





  return (
    <ContextHirdetes.Provider
      value={{ ujHirdetes}}
    >
      {children}
    </ContextHirdetes.Provider>
  );
};

export const useContextHirdetes = () => {
  return useContext(ContextHirdetes);
};
