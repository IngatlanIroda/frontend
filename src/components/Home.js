import React, { useEffect } from "react";
import useAuthContext from "../contexts/AuthContext";
import Navbars from "./Navbars";

export default function Home() {
  const { user } = useAuthContext();
  

  return (
    <div>
      <Navbars />
      <h1>Kezdőlap</h1>
    </div>
  );
}
