import React, { useState, useContext, Link } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import haz1 from "../foto/haz1.jpg";

import {
  ContextIngatlanProvider,
  useContextIngatlan,
} from "../contexts/ContextIngatlan";
import { useNavigate } from "react-router-dom";
import { useAuthContextIngatlan } from "../contexts/AuthContextIngatlan";

//egy kártya felülete
export default function Kartya({ data }) {
  const {
    ing_id,
    telepules_megnevezes,
    tipus_megnevezes,
    kategoria,
    nagysag,
    szobaszam,
    ing_tipus_megnevezes,
    futes_tipus_megnevezes,
  } = data;

  //console.log(data);
  const [showText, setShowText] = useState(kategoria === "i");

  const { setSelectedIngatlan } = useContextIngatlan();

  const navigate = useNavigate();
  //a részletek gombra kattintva az adott ingatlan adatait beállítjuk 
  function egyingatlan() {
    setSelectedIngatlan(data);
    navigate("/EgyIngatlan");
  }
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={haz1} alt="property" />

      <Card.Body>
        <Card.Title>{telepules_megnevezes}</Card.Title>
        <Card.Text>{ing_tipus_megnevezes} </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>fűtés: {futes_tipus_megnevezes}</ListGroup.Item>

        <ListGroup.Item>alapterület: {nagysag} m2</ListGroup.Item>
        <ListGroup.Item>szobák száma: {szobaszam}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button id="cardButton" onClick={egyingatlan}>
          Részletek
        </Button>
      </Card.Body>
    </Card>
  );
}
