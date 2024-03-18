import React, { useState, useContext, Link } from "react";
import ReactDOM from 'react-dom'
import Table from "react-bootstrap/Table";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const szerk = <i class="fa-solid fa-pencil"></i>
const torol = <i class="fa-solid fa-trash"></i>


export default function UserTablaSor({ data }) {
  const { user_id, name, szul_ido, jogosultsag, aktiv, email, password } = data;
  console.log(data);
  
  return (
    <>
      <td>{name} </td>
      <td>{szul_ido} </td>
      <td>{jogosultsag} </td>
      <td>{aktiv} </td>
      <td>{email} </td>
      <td>{szerk}</td>
      <td>{torol}</td>
    </>
  );
}
