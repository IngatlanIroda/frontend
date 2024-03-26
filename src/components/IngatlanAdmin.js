import Navbars from "./Navbars"; 
import React, { useEffect, useState } from "react"; 
import { 
  AuthProviderIngatlan, 
  AuthContextIngatlan, 
  useAuthContextIngatlan, 
} from "../contexts/AuthContextIngatlan"; 
import useAuthContext from '../contexts/AuthContext'; 
import Container from "react-bootstrap/esm/Container"; 
import Table from "react-bootstrap/Table"; 
import IngatlanTablaSor from "./IngatlanTablaSor"; 
import IngatlanUrlap from "./IngatlanUrlap";




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
        <Container className="" > 
        <Container id="ingatlanList_container"> 

          <div> 
            <p>Ingatlanok karbantartása</p> 
          </div> 
          
          <IngatlanUrlap/>
          </Container > 
          <Container > 
          <Table responsive striped hover> 
            <thead> 
              <tr> 
                <th>ing_id</th> 
                <th>település</th> 
                <th>nagyság</th> 
                <th>ingatlan tipus</th> 
                <th>szobák száma</th> 
                <th>leírás</th> 
                <th>cím</th> 
                <th>erkély</th> 
                <th>terasz</th> 
                <th>kert</th> 
                <th>szerkesztés</th> 
                <th>töröl</th> 
              </tr>
            </thead> 
            <tbody> 
              {ingatlan.map((item, index) => ( 
                <> 
                  <tr> 
                    <IngatlanTablaSor key={index} data={item} /> 
                  </tr> 
                </> 
              ))} 
            </tbody> 
          </Table> 
        </Container> 
        </Container > 
      </AuthProviderIngatlan> 

    </> 

  ); 

} 