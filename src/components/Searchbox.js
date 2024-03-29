import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function Searchbox() {
  return (
    <>
      <div className="keresDiv">
      <Container className="keresContainer">
      <Form.Label>Ingatlanok</Form.Label>
      <InputGroup.Text className="mb-3 sm">
        <Form.Control
        
          placeholder="Keresés..."
          aria-label="keres"
          aria-describedby="basic-addon2"
        />
        <Button>Keresés</Button>
      </InputGroup.Text>
      </Container>
      </div>
    </>
  );
}
