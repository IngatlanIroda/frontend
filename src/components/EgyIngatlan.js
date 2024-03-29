import React, { useContext, useState } from "react";
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
import { useContextIngatlan } from "../contexts/ContextIngatlan";
import { ContextIngatlanProvider } from "../contexts/ContextIngatlan";
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from "react-router-dom";
export default function EgyIngatlan() {
  const { selectedIngatlan } = useContextIngatlan();

  console.log(selectedIngatlan);

  const [showText, setShowText] = useState(selectedIngatlan.kategoria === "i");
  const [showErkely, setShowErkely] = useState(
    selectedIngatlan.erkely === true
  );
  const [showTerasz, setShowTerasz] = useState(
    selectedIngatlan.terasz === true
  );
  const [showKert, setShowKert] = useState(selectedIngatlan.kert === true);

  return (
    <>
      <Navbars />
      <ContextIngatlanProvider>
        <Container id="card_container">
          <Row>
            {selectedIngatlan ? (
              <Card style={{ width: "30rem", margin: "1rem" }}>
                <Card.Img variant="top" src={haz1} alt="property" />
                <Card.Body>
                  <Card.Title>
                    {selectedIngatlan.telepules_megnevezes}
                  </Card.Title>

                  {showText ? (
                    <>
                      <Card.Text>
                        {selectedIngatlan.tipus_megnevezes}{" "}
                      </Card.Text>
                    </>
                  ) : (
                    <>
                      <Card.Text> </Card.Text>
                    </>
                  )}
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    fűtés: {selectedIngatlan.futes_tipus_megnevezes}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    alapterület: {selectedIngatlan.nagysag} m2
                  </ListGroup.Item>
                  <ListGroup.Item>
                    szobák száma: {selectedIngatlan.szobaszam}
                  </ListGroup.Item>

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
                  <ListGroup.Item>{selectedIngatlan.leiras}</ListGroup.Item>
                </ListGroup>
                <Card.Body>cím: {selectedIngatlan.cim}</Card.Body>
              </Card>
            ) : (
              <p>Nincs ilyen ingatlan</p>
            )}
            <CloseButton disabled onClick={(e) =>(window.close)}/>
          </Row>
        </Container>
      </ContextIngatlanProvider>
    </>
  );
}
