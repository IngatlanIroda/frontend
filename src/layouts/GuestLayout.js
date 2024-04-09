import React from "react";
import { Outlet } from "react-router-dom";
import Navbars from "../components/Navbars";
import useAuthContext from "../contexts/AuthContext";

export default function GuestLayout() {
  const { user } = useAuthContext();

  return (
    <>
      <Navbars />
      {user && user.jogosultsag === "admin" ? (
        <Outlet />
      ) : (
        <p>Nincs jogosultsága az oldal megtekintéséhez.</p>
      )}
    </>
  );
}

