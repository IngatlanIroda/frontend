import React,{ createContext,  useState, useContext, useEffect } from "react";
import EgyIngatlan from "../components/EgyIngatlan";
import Kartya from "../components/Kartya"
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
    let adat = "";
   const handleSelectIngatlan = () => {
      setSelectedIngatlan(adat);
     };
   useEffect(()=>{
    function handleSelectedIngatlan(e){
      setSelectedIngatlan(e.target.value)    }
      handleSelectedIngatlan();
      console.log(selectedIngatlan)
   },[])
 
      return (
        <ContextIngatlan.Provider value={{ selectedIngatlan, setSelectedIngatlan, handleSelectIngatlan }}>
          {children}
        </ContextIngatlan.Provider>
      );
      };
    export const useContextIngatlan = () => {
      return useContext(ContextIngatlan);
    };
  
    
  