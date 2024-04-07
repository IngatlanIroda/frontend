import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import axios from 'axios';
import useAuthContext from "../contexts/AuthContext";

export default function RegisztracioModal(props) {
    const { user } = useAuthContext();
    const [email, setEmail] = useState("");
    const[telepules, setTelepules] = useState("");
    const[tipus, setTipus] = useState("");
    const[telepules_id, setTelepulesId] = useState(null);
    const[tipus_id, setTipusId] = useState(null);
    const[hirlevel, setHirlevel] = useState(true);
    

  const handleClose = () => props.setShow(false);

  const handleTelepulesChange = (e) => {
//TODO: itt le kell kérni a településhez tartozó telepules_id-t, utána beállítani a settert
    setTelepules(e.target.value);
  };
  const handleTipusChange = (e) => {
    //TODO: itt le kell kérni az ingatlan tipushoz tartozó ing_tipus_id-t,az AuthContextIngatlan használatával,  utána beállítani a settert
        setTipus(e.target.value);
      };
  const handleSubmit = () => {
   // console.log(user.user_id) //ez ok
    const preferenciaAdatok = {
        partner: user.user_id, // regisztrált felhasználó
        // TODO:További preferencia adatok
        telepules_id: telepules_id,
        tipus_id: tipus_id,
        hirlevel: hirlevel,
      };
      try {
         handleSubscription(preferenciaAdatok);
        handleClose();
    } catch (error) {
        console.error(error);
    }
  };
  const handleSubscription = async () => {
    try {
      const response = await axios.post('/api/preferencia', {
        partner: user.user_id,
        //TODO: bekérés után
        tipus_id: "",
        telepules_id: "",
        hirlevel: "",
      });
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hírlevél feliratkozás</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formBasicTelepules">
          <Form.Label>Település:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Budapest"
            value={telepules}
            onChange={handleTelepulesChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTipus">
          <Form.Label>A keresett ingatlan típusa:</Form.Label>
          <Form.Control
            type="text"
            placeholder="családi ház"
            value={tipus}
            onChange={handleTipusChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Mégse
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Feliratkozás
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
