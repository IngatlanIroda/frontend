import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Searchbox({ search }) {
  const [searchWord, setSearchWord] = useState("");
  const onChange = (e) => {
   setSearchWord(e.target.value);
  
  };
  const handleSearch = (e) => {
    e.preventDefault();
    search(searchWord);
  };

  return (
    <>
      <div className="kDiv">
        <Container className="keresContainer">
          <Form.Label>Keressen kínálatunkból...</Form.Label>
          <InputGroup.Text className="mb-3 sm">
            <Form.Control
              placeholder="Keresés..."
              aria-label="keres"
              aria-describedby="basic-addon2"
              onChange={onChange}
            />
            <Button id="keresBtn" onClick={handleSearch}>Keresés</Button>
          </InputGroup.Text>
        </Container>
      </div>
    </>
  );
}
