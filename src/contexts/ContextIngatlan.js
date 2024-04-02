import React,{ createContext,  useState, useContext, useEffect } from "react";

const ContextIngatlan = createContext();

export const ContextIngatlanProvider = ({ children}) => {
  const [selectedIngatlan, setSelectedIngatlan] = useState([]);
    
 
    const [errors, setErrors] = useState({
        ing_id:"",
        ing_tipus: "",
        tipus_megnevezes: "",
        kategoria: "",
        nagysag:"",
        szobaszam: "",
        telepules: "Nincs",
    },[]);
    
  
      return (
        <ContextIngatlan.Provider value={{ selectedIngatlan, setSelectedIngatlan }}>
          {children}
        </ContextIngatlan.Provider>
      );
      };
    export const useContextIngatlan = () => {
      return useContext(ContextIngatlan);
    };
  
    
  