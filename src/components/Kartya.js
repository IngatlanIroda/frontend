import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./module_card.css";
import haz1 from "../foto/haz1.jpg";
import EgyIngatlan from "./EgyIngatlan";
export default function Kartya({ data }) {
  const {
    ing_id,
    telepules_megnevezes,
    tipus_megnevezes,
    kategoria,
    nagysag,
    szobaszam,
  } = data;
  console.log({ing_id})
  const [showText, setShowText] = useState(kategoria === "i");
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={haz1} alt="property"/>
      <Card.Body>
        <Card.Title>{telepules_megnevezes}</Card.Title>

        {showText ? (
          <>
            <Card.Text>{tipus_megnevezes} </Card.Text>
          </>
        ) : (
          <>
            <Card.Text> </Card.Text>
          </>
        )}
      </Card.Body>
      <ListGroup className="list-group-flush">
        {showText ? (
          <>
            <ListGroup.Item>fűtés:</ListGroup.Item>
          </>
        ) : (
          <>
            <ListGroup.Item>fűtés: {tipus_megnevezes} </ListGroup.Item>
          </>
        )}

        <ListGroup.Item>alapterület: {nagysag} m2</ListGroup.Item>
        <ListGroup.Item>szobák száma: {szobaszam}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="./EgyIngatlan/${data.ing_id}" >Részletek</Card.Link>
       
      </Card.Body>
    </Card>
  );
}
