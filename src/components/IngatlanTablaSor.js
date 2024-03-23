import React, { useState, useContext, Link } from "react"; 

import ReactDOM from 'react-dom' 

import Table from "react-bootstrap/Table"; 

 

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons' 

 

const szerk = <i class="fa-solid fa-pencil"></i> 

const torol = <i class="fa-solid fa-trash"></i> 

 

 

export default function IngatlanTablaSor({ data }) { 

  const { ing_id, ing_tipus, futes_tipus, nagysag, szobaszam, erkely, terasz, kert, telepules, cim, leiras} = data; 

  console.log(data); 

 

   

  return ( 

    <> 

      <td>{ing_tipus} </td> 

      <td>{futes_tipus} </td> 

      <td>{nagysag} </td> 

      <td>{szobaszam} </td> 

      <td>{erkely} </td> 

      <td>{terasz} </td> 

      <td>{kert} </td> 

      <td>{telepules} </td> 

      <td>{cim} </td> 

      <td>{leiras} </td> 

    </> 

  ); 

} 