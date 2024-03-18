import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbars from "./components/Navbars";
import Home from "./components/Home";
import Ingatlan from "./components/Ingatlan";
import NotFound from "./components/NotFound";
import Hirdetes from "./components/Hirdetes";
import Bejelentkezes from "./components/Bejelentkezes";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./components/Admin";
import UserAdmin from "./components/UserAdmin";
import Kijelentkezes from "./components/Kijelentkezes";
import Regisztracio from "./components/Regisztracio";
import EgyIngatlan from "./components/EgyIngatlan";
import useAuthContext from "./contexts/AuthContext";
import AuthLayout from "./layouts/AuthLayout";
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
          <Route path="/kijelentkezes" element={<Kijelentkezes />} />
          <Route path="/regisztracio" element={<Regisztracio />} />
          <Route path="/egyingatlan" element={<EgyIngatlan />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/useradmin" element={<UserAdmin />} />
          <Route path="*" element={<NotFound />} />
       
        
      </Routes>
    </div>
  );
}

export default App;
