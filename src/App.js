import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//import Navbars from "./components/Navbars";
import Home from "./components/Home";
import Ingatlan from "./components/Ingatlan";
import NotFound from "./components/NotFound";
import Hirdetes from "./components/Hirdetes";
import Bejelentkezes from "./components/Bejelentkezes";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./components/Admin";
import UserAdmin from "./components/UserAdmin";
import IngatlanAdmin from "./components/IngatlanAdmin";
import Kapcsolat from "./components/Kapcsolat";

import Regisztracio from "./components/Regisztracio";
import EgyIngatlan from "./components/EgyIngatlan";
import useAuthContext from "./contexts/AuthContext";

import GuestLayout from "./layouts/GuestLayout";

function App() {
  const { user, logout } = useAuthContext();
  return (
    <div className="App">
    
      <Routes>
          <Route path="/" element={<GuestLayout />}/>
          <Route index element={<Home />} />
          <Route path="/ingatlan" element={<Ingatlan />} />
          <Route path="/hirdetes" element={<Hirdetes />} />
          <Route path="/bejelentkezes" element={<Bejelentkezes />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
        
          <Route path="/regisztracio" element={<Regisztracio />} />
          <Route path="/egyingatlan" element={<EgyIngatlan />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/useradmin" element={<UserAdmin />} />
          <Route path="/ingatlanadmin" element={<IngatlanAdmin />} />
          <Route path="*" element={<NotFound />} />
       
        
      </Routes>
    </div>
  );
}

export default App;
