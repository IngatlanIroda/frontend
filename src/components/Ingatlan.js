import Navbars from "./Navbars";
import Kartya from "./Kartya";
import React, { useState } from "react";
import {
  AuthProviderIngatlan,
  useAuthContextIngatlan,
} from "../contexts/AuthContextIngatlan";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ContextIngatlan, { useContextIngatlan } from "../contexts/ContextIngatlan";

//az ingatlanokat megjelenítő oldal, 
//a contextből megkapott ingatlan objektum adatait ciklussal nyerjük ki és a Kártya meghívásával mutatjuk meg
export default function Ingatlan() {
  const { ingatlan } = useAuthContextIngatlan();
   const {selectedIngatlan} =useAuthContextIngatlan();
 
  return (
    <>
      <AuthProviderIngatlan>
        <Navbars />
        <Container className="card_container">
          <Row>
            {ingatlan.map((item, index) => (
              <>
             
                <Kartya key={item.ing_id} data={item}  />
              
                </>
            ))}
          </Row>
        </Container>
      </AuthProviderIngatlan>
    </>
  );
}
