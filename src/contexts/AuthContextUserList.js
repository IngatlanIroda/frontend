import React,{ createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";

const ContextUserList = createContext();

export const ContextUserProvider = ({ children }) => {
   
    const [registeredUser,  setRegisteredUser] = useState([]);
    const [errors, setErrors] = useState({
        user_id:"",
        name: "",
        szul_ido: "",
        jogosultsag: "",
        aktiv:"",
        email: "",
        password: "",
        password_confirmation: "",
    });
    let adat = "";
   
       
    useEffect(() => {
       
        const fetchData = async () => {
          try {
            await axios.get("/userTablaLista").then((response) => {
                console.log(response.data);
                setRegisteredUser(response.data);
                
            });
          } catch (error) {
            console.error('Hiba történt az adatok lekérdezésekor:', error);
          }
        };
    
        fetchData();
      }, []);
      return (
        <ContextUserList.Provider value={{ registeredUser, errors }}>
          {children}
        </ContextUserList.Provider>
      );
    };
    
    export const useContextUserList = () => {
      return useContext(ContextUserList);
    };