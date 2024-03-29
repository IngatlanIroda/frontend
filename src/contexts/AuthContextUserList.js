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
          console.log(response.data);
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

    try {
      const response = await axios.delete(`/user/${user_id}`, {
        headers: {
          "X-CSRF-TOKEN": token,
        },
      });
      console.log("sikeres törlés", response);
      alert(response.data.message)
      window.location.reload();
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
        console.log(errors)
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
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
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
      console.log("siker")
      console.log(adat)
    // alert(response.message)
      window.location.reload();
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.message);
        alert(error)
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
