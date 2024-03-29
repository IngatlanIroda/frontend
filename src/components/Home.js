import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import useAuthContext from "../contexts/AuthContext";
import {
  AuthProviderIngatlan,
  useAuthContextIngatlan,
} from "../contexts/AuthContextIngatlan";
import Row from "react-bootstrap/esm/Row";
import Navbars from "./Navbars";
import Kartya from "./Kartya";
import Searchbox from "./Searchbox";
export default function Home() {
  const { user } = useAuthContext();
  const { ingatlan } = useAuthContextIngatlan();
 
  return (
    <>
      <AuthProviderIngatlan>
        <Navbars />
        <Searchbox/>
        <Container id="card_container">
          <Row>
            {ingatlan.map((item, index) => {
             
             
             if (index >= 1 && index <= 6){
              return  <Kartya key={index} data={item}  />
             }
               return null
            }         
            )}
          </Row>
        </Container>
      </AuthProviderIngatlan>
    </>
  );
}
