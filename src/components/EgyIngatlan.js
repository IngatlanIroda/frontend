import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./module_card.css";
import Kartya from "./Kartya";
import {
  AuthProviderIngatlan,
  useAuthContextIngatlan,
} from "../contexts/AuthContextIngatlan";
import Navbars from "./Navbars";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import haz1 from "../foto/haz1.jpg";
import Ingatlan from "./Ingatlan";
import { useParams } from "react-router-dom";
export default function EgyIngatlan({data}) {
  const { ingatlan } = useAuthContextIngatlan();
  const { ing_id } = useParams();
  //const  aktIngatlan = data;
 
  console.log(ing_id)
  /*  const {
    telepules_megnevezes,
    tipus_megnevezes,
    kategoria,
    nagysag,
    szobaszam,
    leiras,
    cim,
    erkely,
    terasz,
    kert,
  } = data; 
  console.log(data) */
  const [showText, setShowText] = useState(ingatlan.kategoria === "i");
  const [showErkely, setShowErkely] = useState(ingatlan.erkely === true);
  const [showTerasz, setShowTerasz] = useState(ingatlan.terasz === true);
  const [showKert, setShowKert] = useState(ingatlan.kert === true);
  
  return (
    <>
      <AuthProviderIngatlan>
        <Navbars />

        <Container id="card_container">
          <Row>
          {ingatlan? (
            <Card style={{ width: "30rem", margin: "1rem" }}>
              <Card.Img variant="top" src={haz1} alt="property" />
              <Card.Body>
                <Card.Title>{ingatlan.telepules_megnevezes}</Card.Title>

                {showText ? (
                  <>
                    <Card.Text>{ingatlan.tipus_megnevezes} </Card.Text>
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
                    <ListGroup.Item>fűtés: {ingatlan.tipus_megnevezes} </ListGroup.Item>
                  </>
                )}

                <ListGroup.Item>alapterület: {ingatlan.nagysag} m2</ListGroup.Item>
                <ListGroup.Item>szobák száma: {ingatlan.szobaszam}</ListGroup.Item>
                
                  {showErkely ? (
                    <>
                      <ListGroup.Item>erkély: van</ListGroup.Item>
                    </>
                  ) : (
                    <>
                      <ListGroup.Item>erkély: nincs </ListGroup.Item>
                    </>
                  )}
                
                 
                  {showTerasz ? (
                    <>
                      <ListGroup.Item>terasz: van</ListGroup.Item>
                    </>
                  ) : (
                    <>
                      <ListGroup.Item>terasz: nincs </ListGroup.Item>
                    </>
                  )}
                  {showKert ? (
                    <>
                      <ListGroup.Item>kert: van</ListGroup.Item>
                    </>
                  ) : (
                    <>
                      <ListGroup.Item>kert: nincs </ListGroup.Item>
                    </>
                  )}
                  <ListGroup.Item>{ingatlan.leiras}</ListGroup.Item>
               
              </ListGroup>
              <Card.Body>cím: {ingatlan.cim}</Card.Body>
            </Card>
            ):(
                <p>Nincs ilyen ingatlan</p>
            )}
          </Row>
        </Container>
      </AuthProviderIngatlan>
    </>
  );
}
