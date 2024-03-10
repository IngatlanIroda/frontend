import Navbars from "./Navbars";
import Kartya from "./Kartya";
import React from "react";
import {AuthProviderIngatlan, useAuthContextIngatlan} from "../contexts/AuthContextIngatlan";
import Container from "react-bootstrap/esm/Container";

export default function Ingatlan() {
  const {ingatlan} = useAuthContextIngatlan();
  
  return (
    <>
      <AuthProviderIngatlan>
        <Navbars />

        <Container>
          {ingatlan.map((item, index) => (
            <Kartya key={index} data={item} />
          ))}
        </Container>
      </AuthProviderIngatlan>
    </>
  );
}
