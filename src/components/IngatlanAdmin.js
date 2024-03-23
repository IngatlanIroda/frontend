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

import Ingatlan from "./Ingatlan"; 

import IngatlanTablaSor from "./IngatlanTablaSor"; 

 

 

 

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

        <Container id="ingatlanList_container"> 

          <div> 

            <p>Ingatlanok karbantartása</p> 

          </div> 

          <Table responsive striped hover> 

            <thead> 

              <tr> 

                <th>ingatlan típus</th> 

                <th>fűtés típus</th> 

                <th>nagyság</th> 

                <th>szobaszám</th> 

                <th>erkély</th> 

                <th>terasz</th> 

                <th>kert</th> 

                <th>település</th> 

                <th>cím</th> 

                <th>leírás</th> 

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

      </AuthProviderIngatlan> 

    </> 

  ); 

} 