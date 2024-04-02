import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    szulIdo: "",
    aktiv: "",
    jogosultsag: "",
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
    getUser();
  }, []);
  //bejelentkezett felhasználó adatainak lekérdezése
  const getUser = async () => {
    const { data } = await axios.get("/me");
    setUser(data);
    console.log(data);
  };
  const logout = async () => {
    await csrf();
    //console.log(token);
    axios.post("/logout", { _token: token }).then((resp) => {
      setUser(null);
      //console.log(resp);
      navigate("/");
    });
  };

  const loginReg = async ({ ...adat }, vegpont) => {
    await csrf();
    //console.log(token);
    adat._token = token;
    //console.log(adat);

    try {
      await axios.post(vegpont, adat);
      // console.log("siker");
      //sikeres bejelentkezés/regisztráció esetén
      //Lekérdezzük a usert
      await getUser();
      //elmegyünk  a kezdőlapra
      navigate("/Admin");
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const register = async ({ ...adat }, vegpont) => {
    await csrf();
    //console.log(token);
    adat._token = token;
    // console.log(adat);

    //bejelentkezés
    //Összegyűjtjük egyetlen objektumban az űrlap adatokat

    // Megrpóbáljuk elküldeni a /register végpontra az adatot
    // hiba esetén kiiratjuk a hibaüzenetet
    try {
      await axios.post("/register", adat);
      console.log("siker");
      //sikeres regisztráció esetén
      //Lekérdezzük a usert
      await getUser();
      //elmegyünk  a kezdőlapra
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        loginReg,
        register,

        errors,
        setErrors,
        getUser,
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}
