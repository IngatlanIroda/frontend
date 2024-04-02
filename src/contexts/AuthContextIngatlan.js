import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";

const AuthContextIngatlan = createContext();
export const AuthProviderIngatlan = ({ children }) => {
  const [ingatlan, setIngatlan] = useState([]);
  const [ingatlanKartyaLista, setIngatlanKartyaLista] = useState([]);
  const [ingatlanFutesTipusokLista, setIngatlanFutesTipusokLista] = useState(
    []
  );
  const [osszefuzottIngatlan, setOsszefuzottIngatlan] = useState([]);
  const [errors, setErrors] = useState({
    ing_id: "",
    ing_tipus: "",
    tipus_megnevezes: "",
    kategoria: "",
    nagysag: "",
    szobaszam: "",
    telepules: "Nincs",
  });
  let vegpontok = [
    "/ingatlans",
    "/ingatlanKartyaLista",
    "/ingatlanFutesTipusokLista",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          vegpontok.map((vegpont) => axios.get(vegpont))
        );
        setIngatlanKartyaLista(responses[0].data);
        setIngatlan(responses[1].data);
        setIngatlanFutesTipusokLista(responses[2].data);
        // console.log(responses[0].data);
        // console.log(responses[1].data);
        // console.log(responses[2].data);
        const mergedData = {
          ingatlan: responses[1].data,
          ingatlanFutesTipusokLista: responses[2].data,
        };
        const mData = {};
        responses[1].data.forEach((item) => {
          mData[item.ing_id] = item;
        });
        responses[2].data.forEach((item) => {
          if (mData[item.ing_id]) {
            Object.assign(mData[item.ing_id], item);
          } else {
            mData[item.ing_id] = item;
          }
        });
        
       //console.log(ingatlan);
        //console.log(mData);
       //console.log(osszefuzottIngatlan);
      } catch (error) {
        console.error("Hiba történt az adatok lekérdezésekor:", error);

        setErrors((prevErrors) => ({
          ...prevErrors,
          fetchDataError: "Hiba történt az adatok lekérdezésekor",
        }));
      }
    };

    fetchData();
  }, []);

  return (
    <AuthContextIngatlan.Provider
      value={{
        ingatlan,
        ingatlanKartyaLista,
        ingatlanFutesTipusokLista,
        osszefuzottIngatlan,

        errors,
      }}
    >
      {children}
    </AuthContextIngatlan.Provider>
  );
};

export const useAuthContextIngatlan = () => {
  return useContext(AuthContextIngatlan);
};
