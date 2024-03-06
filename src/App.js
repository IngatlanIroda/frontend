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
import VendegLayout from "./layouts/VendegLayout";
import Kijelentkezes from "./components/Kijelentkezes";
import Regisztracio from "./components/Regisztracio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VendegLayout />} />
        <Route index element={<Home/>}/>
        <Route path="/ingatlan" element={<Ingatlan />} />
        <Route path="/hirdetes" element={<Hirdetes />} />
        <Route path="/bejelentkezes" element={<Bejelentkezes />} />
        <Route path="/kijelentkezes" element={<Kijelentkezes />} />
        <Route path="/regisztracio" element={<Regisztracio />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
