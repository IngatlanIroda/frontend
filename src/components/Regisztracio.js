import React, { useState } from "react";
import Navbars from "./Navbars";
import useAuthContext from "../contexts/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import RegisztracioModal from "./RegisztracioModal";
const Regisztracio = () => {
  const [name, setName] = useState("");
  const [szulIdo, setSzulIdo] = useState("");
  const [aktiv, setAktiv] = useState("1");
  const [email, setEmail] = useState("");
  const [jogosultsag, setJogosultsag] = "2";
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(null);
  const { register, errors } = useAuthContext();

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    if (isChecked) {
      setShow(true);
    } else {
      setShow(false);
    }
    
     console.log("Checkbox :", isChecked);
  };

  


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
   try{
    register(adat, "/register");
     //   setUserId(response.data.user_id);

    setShow(true);

   } catch(error){
    alert("Hiba történt a regisztráció során")
   }
  }
  return (
    <>
      <Navbars />
      <Container id="form_container">
        <Row md={{ span: 3, offset: 3 }}>
          <Form className=" text-center" id="login" onSubmit={handleRegister}>
            <Form.Text id="formtext" className="text-center" display="block">
              Regisztráció
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Név:</Form.Label>
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
              <Form.Label>Születési ideje:</Form.Label>
              <Form.Control
                type="date"
                placeholder="születési ideje"
                value={szulIdo}
                onChange={(e) => {
                  setSzulIdo(e.target.value);
                }}
              />
              <div>
                {errors.szulIdo && (
                  <span classSzulIdo="date">{errors.szulIdo[0]}</span>
                )}
              </div>
            </Form.Group>
            <input type="hidden" value={aktiv}></input>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email:</Form.Label>
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
              <Form.Label>Jelszó:</Form.Label>
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
              <Form.Label>Jelszó újra:</Form.Label>
              <Form.Control
                type="password"
                placeholder="jelszó"
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
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Szeretnék hírlevelet"
              checked={checked}
              onChange={handleCheckboxChange}
            />
          </Form.Group>
            <Button id="formButton" variant="primary" type="submit">
              Regisztrálok
            </Button>
          </Form>
          {show && <RegisztracioModal show={show} setShow={setShow} userId={userId}/>} 
        </Row>
      </Container>
    </>
  );
};

export default Regisztracio;
