import React, { useEffect, useState, useContext } from "react";
import Navbars from "./Navbars";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import {
  ContextHirdetes,
  useContextHirdetes,
  ContextHirdetesProvider,
} from "../contexts/AuthContextHirdetes";
import Container from "react-bootstrap/esm/Container";
import { useContextIngatlanAdmin } from "../contexts/AuthContextIngatlanAdmin";
import {
  AuthProviderIngatlan,
  AuthContextIngatlan,
  useAuthContextIngatlan,
} from "../contexts/AuthContextIngatlan";
import useAuthContext from "../contexts/AuthContext";
import { AuthContext } from "../contexts/AuthContext";
import "./module_hirdetes.css";
import FormSelect from "react-bootstrap/FormSelect";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import {
  ContextIngatlanProvider,
  useContextIngatlan,
} from "../contexts/ContextIngatlan";
import Elem from "./Elem";



const Hirdetes = () => {

  const [openElem, setOpenElem] = useState(false);
  const reload=()=>window.location.reload();
  

  const { user, getUser } = useAuthContext();
  const { ujHirdetes } = useContextHirdetes();
  const { setSelectedIngatlan } = useContextIngatlan();
  const navigate = useNavigate();
  const {
    ingatlan,
    ingatlanKartyaLista,
    ingatlanFutesTipusokLista,
    osszefuzottIngatlan,

    errors,
  } = useAuthContextIngatlan();



  const [validated, setValidated] = useState(false);
  const [ing_id, setIngid] = useState("");
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
  const [hird_feladas_datuma, setHirdFeladasDatuma] = useState(new Date());
  const [hird_lejarata, setHirdLejarata] = useState("");
  const [utolso_modositas_datuma, setUtolsoModositasDatuma] = useState("");
  const [ar, setAr] = useState("");
  const [adatok, setAdatok] = useState({});



  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const actual_date = `${year}-${month}-${date}`;
    return actual_date;
  }

  const originalDate = getDate();
  const dateObject = new Date(originalDate);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const month2 = String(dateObject.getMonth() + 6).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const formattedDate2 = `${year}-${month2}-${day}`;

  useEffect(() => {
    //console.log(user);
    if (!user) {
      getUser();
    }
  });



  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

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
      ugytipus: 1,
      user: user.user_id,
      hird_feladas_datuma: formattedDate,
      hird_lejarata: formattedDate2,
      utolso_modositas_datuma: formattedDate,
      ar: ar,
    };

    ujHirdetes(adat); //ab-ba
    setOpenElem(true)

    if (adat.telepules === "1") {
      adat.telepules = "Budapest";
    } else if (adat.telepules === "2") {
      adat.telepules = "Szentendre";
    } else if (adat.telepules === "3") {
      adat.telepules = "Miskolc";
    } else if (adat.telepules === "4") {
      adat.telepules = "Sopron";
    } else if (adat.telepules === "5") {
      adat.telepules = "Zalaegerszeg";
    } else {
      adat.telepules = "Szeged";
    }

    if (adat.ing_tipus === "1") {
      adat.ing_tipus = "családi ház";
    } else if (adat.ing_tipus === "2") {
      adat.ing_tipus = "téglalakás";
    } else {
      adat.ing_tipus = "panellakás";
    }

    if (adat.futes_tipus === "4") {
      adat.futes_tipus = "távfűtés";
    } else if (adat.futes_tipus === "5") {
      adat.futes_tipus = "gáz";
    } else {
      adat.futes_tipus = "padlófűtés";
    }

    if (adat.erkely === "0") {
      adat.erkely = "nincs";
    } else if (adat.erkely === "1") {
      adat.erkely = "van";
    }

    if (adat.terasz === "0") {
      adat.terasz = "nincs";
    } else if (adat.terasz === "1") {
      adat.terasz = "van";
    }

    if (adat.kert === "0") {
      adat.kert = "nincs";
    } else if (adat.kert === "1") {
      adat.kert = "van";
    }

    const adat2 = {
      telepules: adat.telepules,
      ing_tipus: adat.ing_tipus,
      futes_tipus: adat.futes_tipus,
      nagysag: adat.nagysag,
      szobaszam: adat.szobaszam,
      erkely: adat.erkely,
      terasz: adat.terasz,
      kert: adat.kert,
      leiras: adat.leiras,
      cim: cim,
    };

    setAdatok(adat2);
    

  
  };






  return (
    <>
      <Navbars />



      <ContextHirdetesProvider>


     
        <Container>
        
          <div className="header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-house-add-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0" />
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
            <h5>Hirdetés feladása</h5>
          </div>

          {openElem && <Elem  adatok ={adatok} closeElem={setOpenElem} onExiting={reload}  />}

        

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div style={{ margin: "10px" }}>
              <Form.Group>
                <Form.Label className="" style={{ color: "white" }}>
                  Ingatlan típusa
                </Form.Label>
                <Form.Control
                  required
                  as="select"
                  type="select"
                  name="erkely"
                  value={ing_tipus}
                  onChange={(e) => setTipus(e.target.value)}
                >
                  <option value="">Válassz!</option>
                  <option value="1">Családi ház</option>
                  <option value="2">Téglalakás</option>
                  <option value="3">Panel lakás</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg az ingatlan típusát!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group>
                <Form.Label className="" style={{ color: "white" }}>
                  Fűtés típusa
                </Form.Label>
                <Form.Control
                  required
                  as="select"
                  type="select"
                  name="erkely"
                  value={futes_tipus}
                  onChange={(e) => setFutesTipus(e.target.value)}
                >
                  <option value="">Válassz!</option>
                  <option value="4">Távfűtés</option>
                  <option value="5">Gáz</option>
                  <option value="6">Padlófűtés</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg a fűtés típusát!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group className="" controlId="">
                <Form.Label className="" style={{ color: "white" }}>
                  Nagyság
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="60"
                  onChange={(e) => setNagysag(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg az ingatlan nagyságát!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label
                  className=""
                  style={{ color: "white" }}
                  min="0"
                  max="30"
                >
                  Szobák száma
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="1"
                  onChange={(e) => setSzobaszam(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg a szobaszámot!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group>
                <Form.Label className="" style={{ color: "white" }}>
                  Erkély
                </Form.Label>
                <Form.Control
                  required
                  as="select"
                  type="select"
                  name="erkely"
                  value={erkely}
                  onChange={(e) => setErkely(e.target.value)}
                >
                  <option value="">Válassz!</option>
                  <option value="0">Nincs</option>
                  <option value="1">Van</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg, hogy van-e erkély!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group>
                <Form.Label className="" style={{ color: "white" }}>
                  Terasz
                </Form.Label>
                <Form.Control
                  required
                  as="select"
                  type="select"
                  name="terasz"
                  value={terasz}
                  onChange={(e) => setTerasz(e.target.value)}
                >
                  <option value="">Válassz!</option>
                  <option value="0">Nincs</option>
                  <option value="1">Van</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg, hogy van-e terasz!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group>
                <Form.Label className="" style={{ color: "white" }}>
                  Kert
                </Form.Label>
                <Form.Control
                  required
                  as="select"
                  type="select"
                  name="terasz"
                  value={kert}
                  onChange={(e) => setKert(e.target.value)}
                >
                  <option value="">Válassz!</option>
                  <option value="0">Nincs</option>
                  <option value="1">Van</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg, hogy van-e kert!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group className="" controlId="">
                <Form.Label className="" style={{ color: "white" }}>
                  Település
                </Form.Label>
                <Form.Control
                  required
                  as="select"
                  type="select"
                  name="terasz"
                  value={telepules}
                  onChange={(e) => setTelepules(e.target.value)}
                >
                  <option value="">Válassz!</option>
                  <option value="1">Budapest</option>
                  <option value="2">Szentendre</option>
                  <option value="3">Miskolc</option>
                  <option value="4">Sopron</option>
                  <option value="5">Zalaegerszeg</option>
                  <option value="6">Szeged</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg a települést!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group className="" controlId="">
                <Form.Label className="" style={{ color: "white" }}>
                  Teljes cím
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="1117 Budapest, Irinyi József utca 4-20."
                  onChange={(e) => setCim(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg a teljes címet!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group>
                <Form.Label className="" style={{ color: "white" }}>
                  Leírás
                </Form.Label>
                  <Form.Control
                    reqired
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Tágas, napfényes.."
                    onChange={(e) => setLeiras(e.target.value)}
                  />
              </Form.Group>
            </div>

            <div style={{ margin: "10px" }}>
              <Form.Group className="" controlId="">
                <Form.Label className="" style={{ color: "white" }}>
                  Ár
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder=""
                  onChange={(e) => setAr(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Kérem adja meg az árat!
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div style={{ margin: "10px", color: "white" }}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Képfeltöltés</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>

            <button
              as="input"
              type="submit"
              value="Submit"
              id="submitButton"
              style={{ margin: "10px" }}
            >
              Mentés
            </button>
          </Form>
        </Container>
      </ContextHirdetesProvider>
    </>
  );
};

export default Hirdetes;
