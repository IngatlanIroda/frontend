import Navbars from "./Navbars";
import React, { useEffect, useState } from "react";
import {
  AuthProviderIngatlan,
  AuthContextIngatlan,
  useAuthContextIngatlan,
} from "../contexts/AuthContextIngatlan";
import useAuthContext from "../contexts/AuthContext";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import IngatlanUrlap from "./IngatlanUrlap";
import IngatlanTabla from "./IngatlanTabla";

export default function IngatlanAdmin() {
  const { user, getUser } = useAuthContext();
  const { ingatlan, setIngatlan } = useAuthContextIngatlan();

  
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

        <Container className="">

          <Container id="ingatlanList_container">
            <div>
              <p>Ingatlanok karbantartása</p>
            </div>
            <IngatlanUrlap ingatlan={ingatlan} />
          </Container>

          <Container>
            <IngatlanTabla  ingatlan={ingatlan}/>
          </Container>

        </Container>

      </AuthProviderIngatlan>
    </>
  );
}
