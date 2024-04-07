import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const ContextUserList = createContext();

export const ContextUserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [registeredUser, setRegisteredUser] = useState([]);
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
  const csrf = () =>
    axios.get("/token").then((response) => {
      //console.log(response);
      token = response.data;
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("/userTablaLista").then((response) => {
          //console.log(response.data);
          setRegisteredUser(response.data);
        });
      } catch (error) {
        console.error("Hiba történt az adatok lekérdezésekor:", error);
      }
    };

    fetchData();
  }, []);

  const felhasznaloTorles = async (user_id, vegpont) => {
    await csrf();
    //console.log(token);
//TODO:biztosan akarja-e törölni
    try {
      const response = await axios.delete(`/user/${user_id}`, {
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
  const felhasznaloModositas = async (user_id, { ...adat }) => {
    await csrf();
    //console.log(token);

    try {
      const response = await axios.put(`/user/${user_id}`, adat, {
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
  const ujfelhasznalo = async ({ ...adat }, vegpont) => {
    await csrf();
    //console.log(token);
    adat._token = token;
    //console.log(adat);
    try {
      await axios.post("/user", adat);
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

export const useContextUserList = () => {
  return useContext(ContextUserList);
};
