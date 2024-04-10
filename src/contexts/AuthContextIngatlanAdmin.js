import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const ContextIngatlanAdmin = createContext();

export const ContextIngatlanAdminProvider = ({ children }) => {
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
    user: "",
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
          //console.log(response.data);
          setIngatlan(response.data);
        });
      } catch (error) {
        console.error("Hiba történt az adatok lekérdezésekor:", error);
      }
    };
    fetchData();
  }, []);



  const ujIngatlan = async ({ ...adat }) => {
    await csrf();
    //console.log(token);
    adat._token = token;
    //console.log(adat);
    try {
      await axios.post("api/ingatlans",  adat);
      console.log("siker");
      window.location.reload();
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const deleteData = async (id) => {
    await csrf();
    //console.log(token);
    //console.log(id);
    try {
      await axios
        .delete(`api/ingatlans/${id}`, { headers: { "X-CSRF-TOKEN": token } })
        .then((response) => {
          //console.log(response.data);
          window.location.reload();
          
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
