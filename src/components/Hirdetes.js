import React, { useEffect, useState, useContext } from "react";
import Navbars from "./Navbars";
import Form from "react-bootstrap/Form";
import { useContextHirdetes, ContextHirdetesProvider } from "../contexts/AuthContextHirdetes";
import Container from "react-bootstrap/esm/Container";
import useAuthContext from "../contexts/AuthContext";
import {AuthContext} from "../contexts/AuthContext";
import "./module_hirdetes.css";


const Hirdetes = () => {

  const { user,  getUser } = useAuthContext();
  const { ingatlan, setIngatlan, ujHirdetes } = useContextHirdetes();

  const [ing_tipus, setTipus] = useState("");
  const [futes_tipus, setFutesTipus] = useState("");
  const [nagysag, setNagysag] = useState("");
  const [szobaszam, setSzobaszam] = useState("");
  const [erkely, setErkely] = useState("");
  const [terasz, setTerasz] = useState("");
  const [kert, setKert] = useState("");
  const [telepules, setTelepules] = useState("");
  const [cim, setCim] = useState("");
  const [leiras, setLeiras] = useState("");
  const [ugytipus, setUgyTipus] = useState("");
  const [hird_feladas_datuma, setHirdFeladasDatuma] = useState("");
  const [hird_lejarata, setHirdLejarata] = useState("");
  const [utolso_modositas_datuma, setUtolsoModositasDatuma] = useState("");
  const [ar, setAr] = useState("");


  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = {
      ing_tipus: ing_tipus,
      futes_tipus: futes_tipus,
      nagysag: nagysag,
      szobaszam: szobaszam,
      erkely: erkely,
      terasz: terasz,
      kert: kert,
      telepules: telepules,
      cim: cim,
      leiras: leiras,
      ugytipus: ugytipus,
      user: user,
      hird_feladas_datuma: hird_feladas_datuma,
      hird_lejarata: hird_lejarata,
      utolso_modositas_datuma: utolso_modositas_datuma,
      ar: ar,
    };
    ujHirdetes(adat);
  };

  return (
    <>
      <Navbars />
      
      <ContextHirdetesProvider>
      <Container>
      <div className="header">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house-add-fill" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0"/>
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
              <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
          </svg>
        <h5>Hirdetés feladása</h5>
        </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Ingatlan típusa</Form.Label>
              <Form.Control
                type="number"
                placeholder="1: családi ház, 2: téglalakás, 6: panel lakás"
                onChange={(e) => setTipus(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Fűtés típusa</Form.Label>
              <Form.Control
                type="number"
                placeholder="4: távfűtés, 5: gáz, 6: padlófűtés"
                onChange={(e) => setFutesTipus(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Nagyság</Form.Label>
              <Form.Control
                type="number"
                placeholder="60"
                onChange={(e) => setNagysag(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Szobák száma</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                onChange={(e) => setSzobaszam(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Erkély</Form.Label>
              <Form.Control
                type="text"
                placeholder="0: nincs, 1: van"
                onChange={(e) => setErkely(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Terasz</Form.Label>
              <Form.Control
                type="text"
                placeholder="0: nincs, 1: van"
                onChange={(e) => setTerasz(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Kert</Form.Label>
              <Form.Control
                type="text"
                placeholder="0: nincs, 1: van"
                onChange={(e) => setKert(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Település</Form.Label>
              <Form.Control
                type="number"
                placeholder="1: Komló, 2: Kaposvár ... stb."
                onChange={(e) => setTelepules(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Cím</Form.Label>
              <Form.Control
                type="text"
                placeholder="1117 Budapest, Irinyi József utca 4-20."
                onChange={(e) => setCim(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Leírás</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tágas, napfényes.."
                onChange={(e) => setLeiras(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Ügytípus</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                onChange={(e) => setUgyTipus(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">User</Form.Label>
              <Form.Control
                type="number"
                placeholder="1, 2... stb."
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Hirdetés feladása</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => setHirdFeladasDatuma(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Hirdetés lejárata</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => setHirdLejarata(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">
                Hirdetésmódosítás utolsó dátuma
              </Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => setUtolsoModositasDatuma(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="formLabel">Ár</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                onChange={(e) => setAr(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Képek feltöltése</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>

            <button as="input" type="submit" value="Submit" id="submitButton">
              Mentés
            </button>
          </Form>
       
          </Container >
      </ContextHirdetesProvider>
    </>
  );
};

export default Hirdetes;
