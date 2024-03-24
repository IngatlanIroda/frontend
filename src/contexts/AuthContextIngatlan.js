import React,{ createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";

const AuthContextIngatlan = createContext();
export const AuthProviderIngatlan = ({ children }) => {
    const [ingatlan,  setIngatlan] = useState([]);
    const [errors, setErrors] = useState({
        ing_id:"",
        ing_tipus: "",
        tipus_megnevezes: "",
        kategoria: "",
        nagysag:"",
        szobaszam: "",
        telepules: "Nincs",
    });
    let adat = "";
   
       
    useEffect(() => {
       
        const fetchData = async () => {
          try {
            await axios.get("/ingatlanKartyaLista").then((response) => {
                console.log(response.data);
                setIngatlan(response.data);
                
            });
          } catch (error) {
            console.error('Hiba történt az adatok lekérdezésekor:', error);
          }
        };
    
        fetchData();
      }, []);
      return (
        <AuthContextIngatlan.Provider value={{ ingatlan, errors }}>
          {children}
        </AuthContextIngatlan.Provider>
      );
    };
    
    export const useAuthContextIngatlan = () => {
      return useContext(AuthContextIngatlan);
    };