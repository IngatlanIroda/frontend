import React, { useContext, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./module_card.css"
//import "./module_form.css"
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
import { useContextIngatlan } from "../contexts/ContextIngatlan";
import { ContextIngatlanProvider } from "../contexts/ContextIngatlan";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";

//a kiválasztott ingatlan részleteit jelaníti meg az Egyingatlan
// a ContextIngatlan.Provider-ből megkapva a selectedIngatlan-ban levő adatokat használja
export default function EgyIngatlan() {
  const { selectedIngatlan } = useContextIngatlan();
  const navigate = useNavigate();
  //console.log(selectedIngatlan);

  const [showText, setShowText] = useState(selectedIngatlan.kategoria === "i");
  const [showErkely, setShowErkely] = useState(
    selectedIngatlan.erkely 
  );
  const [showTerasz, setShowTerasz] = useState(
    selectedIngatlan.terasz 
  );
  const [showKert, setShowKert] = useState(selectedIngatlan.kert);
  //visszanavigál az ingatlan oldalra, a closeBtn oldalt bezáró gomb eseményével
  const back = () => {
    navigate("/ingatlan");
  };
  return (
    <>
      <Navbars />
      <ContextIngatlanProvider>
      <div className="kDiv">
        <Container className="card_container">
          <Row id="card_row">
            <div id="card_div">
              <CloseButton
                className="closeBtn"
                onClick={(e) => back(e.target)}
              />
            </div>
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
          </Row>
        </Container>
        </div>
      </ContextIngatlanProvider>
    </>
  );
}
