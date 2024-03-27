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
    telepules_megnevezes,
    nagysag,
    tipus_megnevezes,
    szobaszam,
    leiras,
    cim,
    erkely,
    terasz,
    kert,
  } = data;
  /*  const {deleteData} = useContext(useContextIngatlanAdmin);  */
  console.log(data);

  const {deleteData} = useContextIngatlanAdmin();   

  

  return (
    <tr>
      <td>{ing_id} </td>
      <td>{telepules_megnevezes} </td>
      <td>{nagysag} </td>
      <td>{tipus_megnevezes} </td>
      <td>{szobaszam} </td>
      <td>{leiras} </td>
      <td>{cim} </td>
      <td>{erkely ? "Van" : "Nincs"} </td>
      <td>{terasz ? "Van" : "Nincs"}</td>
      <td>{kert ? "Van" : "Nincs"}</td>
      <td>
        <button variant="outline-info" onClick={() => deleteData(ing_id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
      <td>
        <button variant="outline-info">
          <i className="fa-solid fa-pencil"></i>
        </button>
      </td>
    </tr>
  );
}
