import React, { useState } from "react";
import Navbars from "./Navbars";
import useAuthContext from "../contexts/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import './module_card.css'
const Regisztracio = () => {
  const [name, setName] = useState("");
  const [szulIdo, setSzulIdo] = useState("");
  const [aktiv, setAktiv] = useState("1");
  const [email, setEmail] = useState("");
  const [jogosultsag, setJogosultsag] = "2";
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
 
  const { register, errors } = useAuthContext();
 
  //regisztráció: az inputok kitöltését ellenőrzi
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !szulIdo || !email || !password || !password_confirmation) {
      alert("Kérem, töltse ki az összes mezőt!");
      return;
    }
    const adat = {
      name: name,
      szulIdo: szulIdo,
      jogosultsag,
      aktiv: aktiv,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    console.log(adat)
    register(adat, "/register");
  };

    
  
  return (
    <>
      <Navbars />
      <div className="kDiv">
      <Container className="form_container">
        <Row md={{ span: 3, offset: 3 }}>
          <Form className=" text-center" id="login" onSubmit={handleRegister}>
            <Form.Text id="formtext" className="text-center" display="block">
              Regisztráció
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="név"
                minLength="3"
                maxLength="100"
              value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <div>
                {errors.name && (
                  <span className="text-danger">{errors.name[0]}</span>
                )}
              </div>
            </Form.Group>
            <Form.Group classSzulIdo="mb-3" controlId="formBasicDate">
              <Form.Control
                type="date"
                placeholder="születési ideje"
                
                onChange={(e) => {
                  setSzulIdo(e.target.value);
                }}
              />
              <div>
                {errors.szulIdo && (
                  <span className="date">{errors.szulIdo[0]}</span>
                )}
              </div>
            </Form.Group>
            <input  type="hidden" value={aktiv}></input>

            <Form.Group id="regInput" className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div>
                {errors.email && (
                  <span className="text-danger">{errors.email[0]}</span>
                )}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="jelszó"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <div>
              {errors.password && (
                <span className="text-danger">{errors.password[0]}</span>
              )}
            </div>

            <Form.Group
              className="mb-3"
              controlId="formBasicPasswordConfirmation"
            >
              <Form.Control
                type="password"
                placeholder="jelszó megerősítés"
                value={password_confirmation}
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
              />
            </Form.Group>
            <div>
              {errors.password && (
                <span className="text-danger">
                  {errors.password_confirmation[0]}
                </span>
              )}
            </div>
            
            <Button id="formButton" variant="primary" type="submit">
              Regisztrálok
            </Button>
          </Form>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Regisztracio;
