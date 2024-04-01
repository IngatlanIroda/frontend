import React, { useState, useContext, Link } from "react";
import axios from "../api/axios";

import { useContextIngatlanAdmin } from "../contexts/AuthContextIngatlanAdmin";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const szerk = <i class="fa-solid fa-pencil"></i>;

const torol = <i class="fa-solid fa-trash"></i>;

export default function IngatlanTablaSor({ data }) {
  const {
    ing_id,
    ing_tipus,
    futes_tipus,
    nagysag,
    szobaszam,
     erkely,
     terasz,
     kert,
     telepules,
     cim,
     leiras,
     ugytipus,
     user,
     hird_feladas_datuma,
     hird_lejarata,
     utolso_modositas_datuma,
     ar
  } = data;
  /*  const {deleteData} = useContext(useContextIngatlanAdmin);  */
  console.log(data);

  const {deleteData} = useContextIngatlanAdmin();   
  const {ujIngatlan} = useContextIngatlanAdmin();   

  

  return (
    <tr>
      <td>{ing_id} </td>
      <td>{ing_tipus} </td>
      <td>{futes_tipus} </td>
      <td>{nagysag} </td>
      <td>{szobaszam} </td>
      <td>{erkely ? "Van" : "Nincs"}</td>
      <td>{terasz ? "Van" : "Nincs"}</td>
      <td>{kert ? "Van" : "Nincs"}</td>
      <td>{telepules}</td>
      <td>{cim}</td>
      <td>{leiras}</td>
      <td>{ugytipus}</td>
      <td>{user}</td>
      <td>{hird_feladas_datuma}</td>
      <td>{hird_lejarata}</td>
      <td>{utolso_modositas_datuma}</td>
      <td>{ar}</td>

      <td>
        <button variant="outline-info">
          <i className="fa-solid fa-pencil"></i>
        </button>
      </td>
      <td>
      <button variant="outline-info" onClick={() => deleteData(ing_id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </td>
    <td>
    <button variant="outline-info" onClick={() => ujIngatlan(ing_id)}>
    <i className="fa-solid fa-save"></i>
    </button>
  </td>
    </tr>
  );
}
