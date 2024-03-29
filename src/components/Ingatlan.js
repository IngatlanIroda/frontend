import Navbars from "./Navbars";
import Kartya from "./Kartya";
import React, { useState } from "react";
import {
  AuthProviderIngatlan,
  useAuthContextIngatlan,
} from "../contexts/AuthContextIngatlan";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import EgyIngatlan from "./EgyIngatlan";
import ContextIngatlan, { useContextIngatlan } from "../contexts/ContextIngatlan";
export default function Ingatlan() {
  const { ingatlan } = useAuthContextIngatlan();
 
  const {selectedIngatlan} =useAuthContextIngatlan();
 //console.log(osszefuzottIngatlan)
 //console.log(ingatlan)
 
  return (
    <>
      <AuthProviderIngatlan>
        <Navbars />

        <Container id="card_container">
          <Row>
            {ingatlan.map((item, index) => (
              <>
             
                <Kartya key={index} data={item}  />
              
                </>
            ))}
          </Row>
        </Container>
      </AuthProviderIngatlan>
    </>
  );
}
