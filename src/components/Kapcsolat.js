import React, { useEffect } from "react";
import Navbars from "../components/Navbars";
import useAuthContext from "../contexts/AuthContext";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./module_kapcsolat.css";

const Kapcsolat = () => {
  const { user, getUser } = useAuthContext();

  return (
    <>
      <Navbars />
      <Container>
        <h3 className="fontColor" >Lépjen velünk kapcsolatba</h3>
        <p className="fontColor">
          Hagyjon nekünk üzenetet és mielőbb felvesszük Önnel a kapcsolatot!
        </p>
        <p className="fontColor">hello.ingatlaniroda@gmail.com</p>

        <Form>
          <Form.Group>
            <span htmlFor="" className="fontColor">Kategória: </span>
            <Form.Select aria-label="Default select example" >
              <option >--Válasszon--</option>
              <option value="4">Ingatlan eladás</option>
              <option value="5">Ingatlan vétel</option>
              <option value="5">Kérdésem van</option>
              <option value="6">Véleménynyilvánítás</option>
              <option value="6">Egyéb</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Név: </Form.Label>
            <Form.Control type="password" placeholder="Keresztnév Vezetéknév" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email cím:</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="fontColor" >
              Nem fogjuk megosztani az email címét
            </Form.Text>
          </Form.Group>

          <InputGroup>
            <InputGroup.Text></InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="Írjon nekünk..."
            />
          </InputGroup>

          <Button variant="primary" type="submit">
            Küldés
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Kapcsolat;
