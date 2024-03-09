import React, { useState } from "react";
import Navbars from "./Navbars";
import useAuthContext from "../contexts/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
const Regisztracio = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const { loginReg, errors } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    loginReg(adat, "/register");
  };
  return (
    <>
      <Navbars />
      <Container id="form_container">
        <Row md={{ span: 3, offset: 3 }}>
          <Form className=" text-center" id="login" onSubmit={handleSubmit}>
            <h1 className="text-center">Regisztráció</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Név:</Form.Label>
              <Form.Control
                type="text"
                placeholder="név"
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
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

            <Button variant="primary" type="submit">
              Regisztrálok
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Regisztracio;
