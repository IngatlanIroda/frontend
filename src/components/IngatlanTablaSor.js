import React, { useState, useContext, Link } from "react"; 

import ReactDOM from 'react-dom' 

import Table from "react-bootstrap/Table"; 

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons' 


const szerk = <i class="fa-solid fa-pencil"></i> 

const torol = <i class="fa-solid fa-trash"></i> 


export default function IngatlanTablaSor({ data }) { 

  const { ing_id, telepules_megnevezes, nagysag, tipus_megnevezes, szobaszam, leiras, cim, erkely, terasz, kert} = data; 

  console.log(data); 

  return ( 
    <> 
      <td>{ing_id} </td> 
      <td>{telepules_megnevezes} </td> 
      <td>{nagysag} </td> 
      <td>{tipus_megnevezes} </td> 
      <td>{szobaszam} </td> 
      <td>{leiras} </td> 
      <td>{cim} </td> 
      <td>{data.erkely ? "Van" : "Nincs"} </td> 
      <td>{data.terasz ? "Van" : "Nincs"}</td> 
      <td>{data.kert ? "Van" : "Nincs"}</td> 
      <td><button variant="outline-info"><i className="fa-solid fa-trash"></i></button></td> 
      <td><button variant="outline-info"><i className="fa-solid fa-pencil"></i></button></td>  
    </> 

  ); 

} 