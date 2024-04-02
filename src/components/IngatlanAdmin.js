import Navbars from "./Navbars";
import React, { useEffect, useState } from "react";
import {useContextIngatlanAdmin} from "../contexts/AuthContextIngatlanAdmin"
import {
  AuthProviderIngatlan,
  AuthContextIngatlan,
  useAuthContextIngatlan,
} from "../contexts/AuthContextIngatlan";
import {
  ContextIngatlanAdminProvider
} from "../contexts/AuthContextIngatlanAdmin";
import useAuthContext from "../contexts/AuthContext";
import Container from "react-bootstrap/esm/Container";
import IngatlanUrlap from "./IngatlanUrlap";
import IngatlanTabla from "./IngatlanTabla";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

export default function IngatlanAdmin() {
  const { user, getUser } = useAuthContext();
  const { ingatlan, setIngatlan, ujIngatlan, deleteData } = useContextIngatlanAdmin();
  const [editId, setEditId] = useState(null);

  


  
  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  });



  return (
    <>
      <AuthProviderIngatlan>
        <Navbars />

        <div>
          <p id="bejelentkezett">bejelentkezett: {user?.name}</p>
        </div>

        <Container className="" >
       
        
          <Container id="ingatlanUrlap_container" className="">
              <IngatlanUrlap  />
          </Container>
        
          
          <Container id="ingatlanTabla_container" className="">
                   
          <div>
          <h5>Ingatlanok karbantartása</h5>
        </div>
            <IngatlanTabla  ingatlan={ingatlan}/>
          </Container>
        
       
        </Container>

      </AuthProviderIngatlan>
    </>
  );
}
