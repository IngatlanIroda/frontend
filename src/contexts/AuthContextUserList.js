import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const ContextUserList = createContext();
//A componens a userek adatainak az API végpontok felé való továbbíttását biztosítja
export const ContextUserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [registeredUser, setRegisteredUser] = useState([]);
  
  //Állapotok inicializálása
  const [errors, setErrors] = useState({
    user_id: "",
    name: "",
    szul_ido: "",
    jogosultsag: "",
    aktiv: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  let token = "";
   // CSRF token lekérdezése
  const csrf = () =>
    axios.get("api/token").then((response) => {
      //console.log(response);
      token = response.data;
    });
 
    // Felhasználók lekérdezése
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("api/userTablaLista").then((response) => {
          console.log(response.data);
          setRegisteredUser(response.data);
        });
      } catch (error) {
        console.error("Hiba történt az adatok lekérdezésekor:", error);
      }
    };

    fetchData();
  }, []);

    // Felhasználó törlése
  const felhasznaloTorles = async (user_id, vegpont) => {
    await csrf();
    //console.log(token);
//TODO:biztosan akarja-e törölni
    try {
      const response = await axios.delete(`api/users/${user_id}`, {
        headers: {
          "X-CSRF-TOKEN": token,
        },
      });
      // console.log("sikeres törlés", response);
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      // Ellenőrizzük, hogy a hibaüzenet objektum tartalmazza-e az 'error' kulcsot
      if (error.response && error.response.data && error.response.data.error) {
        // Kiíratjuk az 'error' kulcshoz tartozó üzenetet
        alert(error.response.data.error);
      } else {
        // Ha nincs 'error' kulcs az objektumban, akkor általános hibát jelzünk
        alert("Hiba történt a művelet során");
      }
    }
  };

  // Felhasználó módosítása
  const felhasznaloModositas = async (user_id, { ...adat }) => {
    await csrf();
    //console.log(token);

    try {
      const response = await axios.put(`api/users/${user_id}`, adat, {
        headers: {
          "X-CSRF-TOKEN": token,
        },
      });
      window.location.reload();
      //console.log(response.adat.message)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Hiba történt a művelet során");
      }
    }
    navigate("/useradmin");
  };

    // Új felhasználó hozzáadása
  const ujfelhasznalo = async ({ ...adat }, vegpont) => {
    await csrf();
    //console.log(token);
    adat._token = token;
    //console.log(adat);
    try {
      await axios.post("api/users", adat);
      //console.log("siker")
      // console.log(adat)
      // alert(response.message)
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Hiba történt a művelet során");
      }
    }
  };

  return (
    <ContextUserList.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        ujfelhasznalo,
        felhasznaloTorles,
        felhasznaloModositas,
        errors,
      }}
    >
      {children}
    </ContextUserList.Provider>
  );
};
// user context hook használata
export const useContextUserList = () => {
  return useContext(ContextUserList);
};
