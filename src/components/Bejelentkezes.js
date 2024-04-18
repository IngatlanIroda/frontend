import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../contexts/AuthContext";
import Navbars from "../components/Navbars";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./module_form.css";

//bejelentkezési űrlap
export default function Bejelentkezes() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginReg, errors } = useAuthContext();

  //az űrlapot kezelő függvény, összegyűjti az adatokat
  // meghívja a loginReg függvényt a authContext-ből
  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = {
      email: email,
      password: password,
    };

    loginReg(adat, "/login");
  };
  return (
    <>
      <Navbars />
      <div className="kDiv">
        <Container className="form_container">
          <Row md={{ span: 3, offset: 3 }}>
            <Form className=" text-center" id="login" onSubmit={handleSubmit}>
              <Form.Text id="formtext" className="text-center" display="block">
                Bejelentkezés
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="email cím"
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
                <Form.Text className="text-muted">
                  Nem fogjuk megosztani az email címét!
                </Form.Text>
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
              <Button id="formButton" variant="primary" type="submit">
                Login
              </Button>
              <p>
                Még nem regisztrált?
                <Link className="nav-link text-info" to="/regisztracio">
                  Regisztráció
                </Link>
              </p>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}
